// MCP tool definitions + handlers for managing the HopeCare Global site.
// Content mutations go through the GitHub Git Data API (atomic commits), which
// triggers a Netlify deploy. Read-only ops hit GitHub/Netlify directly.

import { cfg, ARTICLES_PATH, CONTENT_PATH, pathAllowed } from "./config";
import { getFile, getJson, listDir, commitFiles, type FileChange } from "./github";
import { latestDeploy, triggerRebuild, formSubmissions } from "./netlify";
import { generateImageBase64 } from "./images";

interface Source {
  claim: string;
  organization: string;
  url: string;
}
interface Article {
  n: number;
  slug: string;
  title: string;
  cluster: string;
  role: "pillar" | "supporting";
  excerpt: string;
  targetKeyword: string;
  words: number;
  status: "draft" | "published";
  publishedAt?: string;
  heroImage?: string;
}
interface ContentEntry {
  metaDescription: string;
  body: string;
  sources: Source[];
}
type ContentMap = Record<string, ContentEntry>;

const CLUSTERS = ["symptoms", "risk", "diagnosis", "equity", "living"];

function today() {
  return new Date().toISOString().slice(0, 10);
}
function countWords(s: string) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}
async function loadArticles(): Promise<Article[]> {
  return (await getJson<Article[]>(ARTICLES_PATH)) || [];
}
async function loadContent(): Promise<ContentMap> {
  return (await getJson<ContentMap>(CONTENT_PATH)) || {};
}
function jsonFile(path: string, value: unknown): FileChange {
  return { path, content: JSON.stringify(value, null, 2) + "\n" };
}

// ── Tool schema definitions (advertised via tools/list) ──────────

export const TOOLS = [
  {
    name: "list_articles",
    description:
      "List education articles (ovarian cancer guides). Optionally filter by status or cluster.",
    inputSchema: {
      type: "object",
      properties: {
        status: { type: "string", enum: ["draft", "published"] },
        cluster: { type: "string", enum: CLUSTERS },
      },
    },
  },
  {
    name: "get_article",
    description: "Get one article's full metadata plus its body, meta description, and sources.",
    inputSchema: {
      type: "object",
      properties: { slug: { type: "string" } },
      required: ["slug"],
    },
  },
  {
    name: "create_article",
    description:
      "Create a new education article (a new /education/<slug> page). Created as a draft by default. Generate a hero image with generate_hero_image, then publish with set_article_status.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "URL slug, kebab-case, unique" },
        title: { type: "string" },
        cluster: { type: "string", enum: CLUSTERS },
        role: { type: "string", enum: ["pillar", "supporting"] },
        excerpt: { type: "string", description: "Short teaser for cards" },
        targetKeyword: { type: "string" },
        body: { type: "string", description: "Article body in markdown (##/### headings, lists, **bold**, [links](url))" },
        metaDescription: { type: "string" },
        sources: {
          type: "array",
          items: {
            type: "object",
            properties: {
              claim: { type: "string" },
              organization: { type: "string" },
              url: { type: "string" },
            },
          },
        },
        status: { type: "string", enum: ["draft", "published"], description: "Default draft" },
      },
      required: ["slug", "title", "cluster", "role", "excerpt", "body"],
    },
  },
  {
    name: "update_article",
    description:
      "Update fields of an existing article. Any provided field is changed; omitted fields are untouched. Body/metaDescription/sources update the content, the rest update metadata.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string" },
        title: { type: "string" },
        excerpt: { type: "string" },
        targetKeyword: { type: "string" },
        cluster: { type: "string", enum: CLUSTERS },
        role: { type: "string", enum: ["pillar", "supporting"] },
        body: { type: "string" },
        metaDescription: { type: "string" },
        sources: { type: "array", items: { type: "object" } },
      },
      required: ["slug"],
    },
  },
  {
    name: "set_article_status",
    description: "Publish or unpublish an article (status: published | draft).",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string" },
        status: { type: "string", enum: ["draft", "published"] },
      },
      required: ["slug", "status"],
    },
  },
  {
    name: "delete_article",
    description: "Delete an article (removes its metadata + content, and optionally its hero image).",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string" },
        deleteImage: { type: "boolean", description: "Also delete public/education/<slug>.png" },
      },
      required: ["slug"],
    },
  },
  {
    name: "generate_hero_image",
    description:
      "Generate an on-brand hero image (AI) and commit it to public/education/<slug>.png. By default sets it as the article's heroImage.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string" },
        prompt: { type: "string", description: "Subject/scene to illustrate (brand style is added automatically)" },
        setAsHero: { type: "boolean", description: "Set as the article hero image (default true)" },
      },
      required: ["slug", "prompt"],
    },
  },
  {
    name: "read_file",
    description: "Read any file in the repo (returns UTF-8 text).",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string" } },
      required: ["path"],
    },
  },
  {
    name: "list_files",
    description: "List entries in a repo directory.",
    inputSchema: {
      type: "object",
      properties: { path: { type: "string" } },
      required: ["path"],
    },
  },
  {
    name: "write_file",
    description:
      "Create or edit a file (commits + deploys). Scoped to data/, public/, src/. Use for page content/components. A broken build fails safely (Netlify keeps the last good deploy).",
    inputSchema: {
      type: "object",
      properties: {
        path: { type: "string" },
        content: { type: "string" },
        message: { type: "string", description: "Commit message" },
      },
      required: ["path", "content", "message"],
    },
  },
  {
    name: "get_deploy_status",
    description: "Get the status of the latest Netlify deploys (state, commit, errors).",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "trigger_rebuild",
    description: "Trigger a fresh Netlify production build/deploy.",
    inputSchema: {
      type: "object",
      properties: { clearCache: { type: "boolean" } },
    },
  },
  {
    name: "list_form_submissions",
    description: "List contact/newsletter form submissions captured by Netlify Forms.",
    inputSchema: {
      type: "object",
      properties: {
        form: { type: "string", description: "Filter by form name" },
        limit: { type: "number", description: "Max results (default 20)" },
      },
    },
  },
] as const;

// ── Handlers ─────────────────────────────────────────────────────

type Args = Record<string, unknown>;

export async function callTool(name: string, args: Args): Promise<unknown> {
  switch (name) {
    case "list_articles": {
      const arts = await loadArticles();
      let out = arts;
      if (args.status) out = out.filter((a) => a.status === args.status);
      if (args.cluster) out = out.filter((a) => a.cluster === args.cluster);
      return out
        .sort((a, b) => a.n - b.n)
        .map((a) => ({ n: a.n, slug: a.slug, title: a.title, cluster: a.cluster, role: a.role, status: a.status, words: a.words }));
    }

    case "get_article": {
      const slug = String(args.slug);
      const arts = await loadArticles();
      const meta = arts.find((a) => a.slug === slug);
      if (!meta) throw new Error(`No article with slug "${slug}"`);
      const content = (await loadContent())[slug];
      return { ...meta, url: `${cfg.siteUrl}/education/${slug}`, ...(content || {}) };
    }

    case "create_article": {
      const slug = String(args.slug);
      const arts = await loadArticles();
      if (arts.some((a) => a.slug === slug)) throw new Error(`Article "${slug}" already exists`);
      const body = String(args.body);
      const status = (args.status === "published" ? "published" : "draft") as "draft" | "published";
      const nextN = arts.reduce((m, a) => Math.max(m, a.n), 0) + 1;
      const article: Article = {
        n: nextN,
        slug,
        title: String(args.title),
        cluster: String(args.cluster),
        role: (args.role as "pillar" | "supporting") || "supporting",
        excerpt: String(args.excerpt),
        targetKeyword: String(args.targetKeyword || args.title),
        words: countWords(body),
        status,
        ...(status === "published" ? { publishedAt: today() } : {}),
      };
      const content = await loadContent();
      content[slug] = {
        metaDescription: String(args.metaDescription || args.excerpt || ""),
        body,
        sources: (args.sources as Source[]) || [],
      };
      const nextArts = [...arts, article];
      const commit = await commitFiles(
        [jsonFile(ARTICLES_PATH, nextArts), jsonFile(CONTENT_PATH, content)],
        `Add article: ${article.title}`
      );
      return {
        created: slug,
        status,
        url: `${cfg.siteUrl}/education/${slug}`,
        commit: commit.url,
        note: "Draft has no hero image yet. Call generate_hero_image, then set_article_status to publish.",
      };
    }

    case "update_article": {
      const slug = String(args.slug);
      const arts = await loadArticles();
      const idx = arts.findIndex((a) => a.slug === slug);
      if (idx < 0) throw new Error(`No article with slug "${slug}"`);
      const changes: FileChange[] = [];
      const metaKeys = ["title", "excerpt", "targetKeyword", "cluster", "role"] as const;
      let metaChanged = false;
      for (const k of metaKeys) {
        if (args[k] !== undefined) { (arts[idx] as unknown as Record<string, unknown>)[k] = args[k]; metaChanged = true; }
      }
      const content = await loadContent();
      const entry = content[slug] || { metaDescription: "", body: "", sources: [] };
      let contentChanged = false;
      if (args.body !== undefined) { entry.body = String(args.body); arts[idx].words = countWords(entry.body); metaChanged = true; contentChanged = true; }
      if (args.metaDescription !== undefined) { entry.metaDescription = String(args.metaDescription); contentChanged = true; }
      if (args.sources !== undefined) { entry.sources = args.sources as Source[]; contentChanged = true; }
      if (contentChanged) content[slug] = entry;
      if (metaChanged) changes.push(jsonFile(ARTICLES_PATH, arts));
      if (contentChanged) changes.push(jsonFile(CONTENT_PATH, content));
      if (!changes.length) return { slug, changed: false, note: "No recognized fields to update" };
      const commit = await commitFiles(changes, `Update article: ${slug}`);
      return { updated: slug, commit: commit.url };
    }

    case "set_article_status": {
      const slug = String(args.slug);
      const status = args.status === "published" ? "published" : "draft";
      const arts = await loadArticles();
      const a = arts.find((x) => x.slug === slug);
      if (!a) throw new Error(`No article with slug "${slug}"`);
      a.status = status;
      if (status === "published" && !a.publishedAt) a.publishedAt = today();
      const commit = await commitFiles([jsonFile(ARTICLES_PATH, arts)], `${status === "published" ? "Publish" : "Unpublish"} article: ${slug}`);
      return { slug, status, url: `${cfg.siteUrl}/education/${slug}`, commit: commit.url };
    }

    case "delete_article": {
      const slug = String(args.slug);
      const arts = await loadArticles();
      if (!arts.some((a) => a.slug === slug)) throw new Error(`No article with slug "${slug}"`);
      const nextArts = arts.filter((a) => a.slug !== slug);
      const content = await loadContent();
      delete content[slug];
      const changes: FileChange[] = [jsonFile(ARTICLES_PATH, nextArts), jsonFile(CONTENT_PATH, content)];
      if (args.deleteImage) changes.push({ path: `public/education/${slug}.png`, delete: true });
      const commit = await commitFiles(changes, `Delete article: ${slug}`);
      return { deleted: slug, commit: commit.url };
    }

    case "generate_hero_image": {
      const slug = String(args.slug);
      const prompt = String(args.prompt);
      const b64 = await generateImageBase64(prompt);
      const imgPath = `public/education/${slug}.png`;
      const changes: FileChange[] = [{ path: imgPath, content: b64, encoding: "base64" }];
      const setAsHero = args.setAsHero !== false;
      if (setAsHero) {
        const arts = await loadArticles();
        const a = arts.find((x) => x.slug === slug);
        if (a) { a.heroImage = `/education/${slug}.png`; changes.push(jsonFile(ARTICLES_PATH, arts)); }
      }
      const commit = await commitFiles(changes, `Add hero image for ${slug}`);
      return { slug, image: `/education/${slug}.png`, setAsHero, commit: commit.url };
    }

    case "read_file": {
      const path = String(args.path);
      const f = await getFile(path);
      if (!f) throw new Error(`File not found: ${path}`);
      return { path, content: f.text };
    }

    case "list_files": {
      return { path: String(args.path), entries: await listDir(String(args.path)) };
    }

    case "write_file": {
      const path = String(args.path).replace(/^\/+/, "");
      if (!pathAllowed(path)) throw new Error(`Path not allowed: ${path} (must be under data/, public/, or src/)`);
      const commit = await commitFiles([{ path, content: String(args.content) }], String(args.message || `Update ${path}`));
      return { path, commit: commit.url };
    }

    case "get_deploy_status":
      return { deploys: await latestDeploy() };

    case "trigger_rebuild":
      return await triggerRebuild(args.clearCache === true);

    case "list_form_submissions":
      return {
        submissions: await formSubmissions(
          args.form ? String(args.form) : undefined,
          typeof args.limit === "number" ? args.limit : 20
        ),
      };

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
