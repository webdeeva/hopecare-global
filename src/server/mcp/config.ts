// Central config for the site-management MCP server. All secrets come from
// environment variables (set in Netlify). Nothing here is bundled to the client.

export const cfg = {
  authToken: process.env.MCP_AUTH_TOKEN || "",

  github: {
    token: process.env.GITHUB_TOKEN || "",
    repo: process.env.GITHUB_REPO || "webdeeva/hopecare-global",
    branch: process.env.GITHUB_BRANCH || "main",
  },

  netlify: {
    token: process.env.NETLIFY_AUTH_TOKEN || "",
    siteId: process.env.NETLIFY_SITE_ID || "bc91a949-c83f-4dba-a981-d0e5ade2d8d9",
    buildHook: process.env.NETLIFY_BUILD_HOOK || "",
  },

  openrouter: {
    key: process.env.OPENROUTER_API_KEY || "",
    imageModel: process.env.OPENROUTER_IMAGE_MODEL || "google/gemini-2.5-flash-image",
  },

  siteUrl: "https://hopecareglobal.org",
};

export const SERVER_INFO = { name: "hopecare-site", version: "1.0.0" };

// Paths the write_file / file tools are allowed to touch. Keeps the agent out
// of secrets, CI, and dependencies. Content and site code only.
export const WRITE_ROOTS = ["data/", "public/", "src/"];

export const ARTICLES_PATH = "data/education/articles.json";
export const CONTENT_PATH = "data/education/content.json";

export function pathAllowed(p: string): boolean {
  const clean = p.replace(/^\/+/, "");
  if (clean.includes("..")) return false;
  return WRITE_ROOTS.some((r) => clean.startsWith(r));
}
