import type { MetadataRoute } from "next";
import { SITE_URL, abs } from "@/lib/site";
import { publishedArticles } from "@/lib/education";

// A static lastModified for the marketing pages. Bump when the page
// content changes meaningfully. Article entries use their own
// publishedAt so each guide carries an accurate lastmod.
const SITE_UPDATED = "2026-06-22";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: abs("/education"), lastModified: SITE_UPDATED, changeFrequency: "weekly", priority: 0.9 },
    { url: abs("/donate"), lastModified: SITE_UPDATED, changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/contact"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.5 },
    { url: abs("/privacy"), lastModified: SITE_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const articles: MetadataRoute.Sitemap = publishedArticles().map((a) => ({
    url: abs(`/education/${a.slug}`),
    lastModified: a.publishedAt ?? SITE_UPDATED,
    changeFrequency: "monthly",
    priority: a.role === "pillar" ? 0.8 : 0.7,
    ...(a.heroImage ? { images: [abs(a.heroImage)] } : {}),
  }));

  return [...staticRoutes, ...articles];
}
