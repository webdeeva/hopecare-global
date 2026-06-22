import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Allow everything for everyone, including the AI-search crawlers
// (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.). They
// inherit the "*" allow rule, but listing them explicitly documents
// intent and guards against any future blanket disallow. The hidden
// Netlify form-detection file is kept out of the index.
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "cohere-ai",
    "Bytespider",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/__forms.html" },
      { userAgent: aiBots, allow: "/", disallow: "/__forms.html" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
