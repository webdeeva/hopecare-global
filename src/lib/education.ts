import articlesData from "../../data/education/articles.json";
// ─────────────────────────────────────────────────────────────
// HopeCare Global, Education content registry
// Source of truth for the /education hub and article pages.
// Article bodies are added here AFTER clinician review (status: "published").
// Until then they render as "in review" so the routes work without
// publishing unreviewed medical (YMYL) content.
// ─────────────────────────────────────────────────────────────

export type ArticleStatus = "draft" | "published";

export type ClusterId =
  | "symptoms"
  | "risk"
  | "diagnosis"
  | "equity"
  | "living";

export interface Cluster {
  id: ClusterId;
  label: string;
  kicker: string;
  blurb: string;
  /** Tailwind gradient stops, e.g. "from-teal-deep to-teal" */
  accent: string;
}

export interface Source {
  claim: string;
  organization: string;
  url: string;
}

export interface Article {
  /** Stable order number, matches the 25-article production run */
  n: number;
  slug: string;
  title: string;
  cluster: ClusterId;
  role: "pillar" | "supporting";
  /** Short, non-clinical teaser shown on cards (safe to display pre-review) */
  excerpt: string;
  targetKeyword: string;
  /** Approx words; drives reading-time estimate */
  words: number;
  /** Hero illustration path under /public (optional until generated) */
  heroImage?: string;
  status: ArticleStatus;
  /** Published markdown body, populated after clinician sign-off */
  body?: string;
  /** ISO date string once published */
  publishedAt?: string;
  /** Name + credential of the clinician who reviewed it */
  medicallyReviewedBy?: string;
  sources?: Source[];
}

export const CLUSTERS: Cluster[] = [
  {
    id: "symptoms",
    label: "Symptoms & Early Detection",
    kicker: "Know the signs",
    blurb:
      "The vague, easy-to-dismiss signals, and the screening realities every woman deserves to understand.",
    accent: "from-teal-deep to-teal",
  },
  {
    id: "risk",
    label: "Risk, Genetics & Prevention",
    kicker: "Understand your risk",
    blurb:
      "Family history, BRCA, and what the research really says about lowering your risk.",
    accent: "from-teal to-teal-bright",
  },
  {
    id: "diagnosis",
    label: "Diagnosis & Treatment",
    kicker: "A roadmap",
    blurb:
      "Plain-language guidance for the days after a diagnosis, stages, types, treatments, and the right questions to ask.",
    accent: "from-teal-bright to-teal-deep",
  },
  {
    id: "equity",
    label: "Health Equity & Global",
    kicker: "Closing the gap",
    blurb:
      "Why outcomes differ by race and geography, and what equitable care looks like.",
    accent: "from-green to-green-bright",
  },
  {
    id: "living",
    label: "Living With & Support",
    kicker: "You're not alone",
    blurb:
      "Survivorship, caregiving, cost navigation, and breaking the silence in our families and faith communities.",
    accent: "from-green-bright to-green",
  },
];

// Article metadata is sourced from data/education/articles.json so it can be
// managed as data (e.g. by the site MCP) without editing this module.
export const ARTICLES: Article[] = articlesData as unknown as Article[];

// ── Helpers ──────────────────────────────────────────────────

export function readingTimeMinutes(words: number): number {
  return Math.max(1, Math.round(words / 200));
}

export function getCluster(id: ClusterId): Cluster {
  const c = CLUSTERS.find((c) => c.id === id);
  if (!c) throw new Error(`Unknown cluster: ${id}`);
  return c;
}

export function articlesByCluster(id: ClusterId): Article[] {
  return ARTICLES.filter((a) => a.cluster === id).sort((a, b) => {
    // Pillar first, then by order number
    if (a.role !== b.role) return a.role === "pillar" ? -1 : 1;
    return a.n - b.n;
  });
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function publishedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "published");
}

/** Other articles in the same cluster, for "Related reading". */
export function relatedArticles(article: Article, limit = 3): Article[] {
  return ARTICLES.filter(
    (a) => a.cluster === article.cluster && a.slug !== article.slug
  ).slice(0, limit);
}
