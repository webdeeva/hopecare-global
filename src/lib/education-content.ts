// ─────────────────────────────────────────────────────────────
// Article body content, kept separate from the metadata registry
// (src/lib/education.ts) so the long markdown bodies are bundled
// only where they're rendered (the server-side article page) and
// never shipped to the client with the card/nav metadata.
//
// Generated from data/education/content.json (built from the
// fact-checked production drafts, joined by targetKeyword).
// ─────────────────────────────────────────────────────────────

import contentData from "../../data/education/content.json";

export interface ArticleContent {
  metaDescription: string;
  body: string;
  sources: { claim: string; organization: string; url: string }[];
}

const CONTENT = contentData as Record<string, ArticleContent>;

export function getArticleContent(slug: string): ArticleContent | undefined {
  return CONTENT[slug];
}
