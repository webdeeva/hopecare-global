// Thin GitHub REST client. All content changes go through the Git Data API so
// multiple files land in ONE atomic commit (one Netlify deploy per change).

import { cfg } from "./config";

const API = "https://api.github.com";

function headers() {
  return {
    Authorization: `Bearer ${cfg.github.token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "hopecare-site-mcp",
    "Content-Type": "application/json",
  };
}

function repoBase() {
  return `${API}/repos/${cfg.github.repo}`;
}

async function gh(path: string, init?: RequestInit) {
  const res = await fetch(path.startsWith("http") ? path : `${repoBase()}${path}`, {
    ...init,
    headers: { ...headers(), ...(init?.headers || {}) },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub ${res.status} ${res.statusText}: ${body.slice(0, 300)}`);
  }
  return res;
}

/** Read a file's UTF-8 text + blob sha. Returns null if the file is missing. */
export async function getFile(
  path: string
): Promise<{ text: string; sha: string } | null> {
  const url = `${repoBase()}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}?ref=${cfg.github.branch}`;
  const res = await fetch(url, { headers: headers() });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub getFile ${res.status}: ${(await res.text()).slice(0, 200)}`);
  const j = await res.json();
  const text = Buffer.from(j.content, "base64").toString("utf-8");
  return { text, sha: j.sha };
}

export async function getJson<T = unknown>(path: string): Promise<T | null> {
  const f = await getFile(path);
  return f ? (JSON.parse(f.text) as T) : null;
}

/** List a directory's entries (name, path, type). */
export async function listDir(path: string) {
  const url = `${repoBase()}/contents/${path}?ref=${cfg.github.branch}`;
  const res = await fetch(url, { headers: headers() });
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub listDir ${res.status}`);
  const j = await res.json();
  return (Array.isArray(j) ? j : []).map((e: { name: string; path: string; type: string }) => ({
    name: e.name,
    path: e.path,
    type: e.type,
  }));
}

export interface FileChange {
  path: string;
  content?: string;
  encoding?: "utf-8" | "base64";
  delete?: boolean;
}

/**
 * Commit one or more file changes atomically to the branch. Returns the new
 * commit sha + url. Pushing to the branch triggers a Netlify deploy.
 */
export async function commitFiles(
  changes: FileChange[],
  message: string
): Promise<{ sha: string; url: string }> {
  // 1. current ref -> latest commit sha
  const refRes = await gh(`/git/ref/heads/${cfg.github.branch}`);
  const ref = await refRes.json();
  const latestSha: string = ref.object.sha;

  // 2. base tree
  const commitRes = await gh(`/git/commits/${latestSha}`);
  const baseCommit = await commitRes.json();
  const baseTree: string = baseCommit.tree.sha;

  // 3. build tree entries (create blobs for content, null sha to delete)
  const tree: Array<Record<string, unknown>> = [];
  for (const c of changes) {
    if (c.delete) {
      tree.push({ path: c.path, mode: "100644", type: "blob", sha: null });
      continue;
    }
    const encoding = c.encoding || "utf-8";
    const blobRes = await gh(`/git/blobs`, {
      method: "POST",
      body: JSON.stringify({ content: c.content ?? "", encoding }),
    });
    const blob = await blobRes.json();
    tree.push({ path: c.path, mode: "100644", type: "blob", sha: blob.sha });
  }

  // 4. new tree
  const treeRes = await gh(`/git/trees`, {
    method: "POST",
    body: JSON.stringify({ base_tree: baseTree, tree }),
  });
  const newTree = await treeRes.json();

  // 5. new commit
  const newCommitRes = await gh(`/git/commits`, {
    method: "POST",
    body: JSON.stringify({ message, tree: newTree.sha, parents: [latestSha] }),
  });
  const newCommit = await newCommitRes.json();

  // 6. move the branch ref
  await gh(`/git/refs/heads/${cfg.github.branch}`, {
    method: "PATCH",
    body: JSON.stringify({ sha: newCommit.sha, force: false }),
  });

  return { sha: newCommit.sha, url: newCommit.html_url };
}
