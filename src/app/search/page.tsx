"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Search, ArrowUpRight, Clock, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ARTICLES, CLUSTERS, readingTimeMinutes, getCluster } from "@/lib/education";
import type { Article } from "@/lib/education";

// ── Static site pages to include in search ──────────────
const SITE_PAGES = [
  { title: "Home", excerpt: "HopeCare Global — Ovarian cancer awareness, early detection, and equitable access to care.", url: "/", keywords: "home hopecare global ovarian cancer awareness" },
  { title: "OvaTrack App", excerpt: "Track possible ovarian cancer symptoms with OvaTrack, a free mobile health app.", url: "/ovatrack", keywords: "ovatrack app symptom tracking mobile" },
  { title: "News & Press Releases", excerpt: "Press releases and media resources from HopeCare Global Inc.", url: "/press", keywords: "press release news media" },
  { title: "Donate", excerpt: "Support HopeCare Global's mission of ovarian cancer awareness and early detection.", url: "/donate", keywords: "donate support give contribution" },
  { title: "Contact Us", excerpt: "Get in touch with HopeCare Global for general inquiries, media, partnerships, or volunteer opportunities.", url: "/contact", keywords: "contact email phone reach out" },
  { title: "Podcast", excerpt: "Listen to the HopeCare Global podcast — all episodes and latest releases.", url: "/#podcast", keywords: "podcast episodes listen" },
  { title: "Privacy Policy", excerpt: "HopeCare Global's privacy policy and data handling practices.", url: "/privacy", keywords: "privacy policy data" },
  { title: "Terms of Service", excerpt: "Terms and conditions for using the HopeCare Global website.", url: "/terms", keywords: "terms conditions service" },
  { title: "Medical Disclaimer", excerpt: "Medical disclaimer for educational content on HopeCare Global.", url: "/medical-disclaimer", keywords: "disclaimer medical legal" },
];

interface SearchResult {
  type: "article" | "page";
  title: string;
  excerpt: string;
  url: string;
  cluster?: string;
  words?: number;
  score: number;
}

function searchAll(q: string): SearchResult[] {
  const query = q.toLowerCase().trim();
  if (!query) return [];

  const results: SearchResult[] = [];

  // Search articles
  ARTICLES.filter((a) => a.status === "published").forEach((article) => {
    let score = 0;
    const titleLower = article.title.toLowerCase();
    const excerptLower = article.excerpt.toLowerCase();
    const keywordLower = article.targetKeyword?.toLowerCase() || "";
    const clusterLabel = getCluster(article.cluster).label.toLowerCase();

    // Title exact match (highest)
    if (titleLower.includes(query)) score += 10;
    // Title word start match
    if (query.split(" ").some((w) => titleLower.includes(w))) score += 5;
    // Excerpt
    if (excerptLower.includes(query)) score += 4;
    // Keyword
    if (keywordLower.includes(query)) score += 6;
    // Cluster label
    if (clusterLabel.includes(query)) score += 3;
    // Slug
    if (article.slug.includes(query)) score += 3;

    if (score > 0) {
      results.push({
        type: "article",
        title: article.title,
        excerpt: article.excerpt,
        url: `/education/${article.slug}`,
        cluster: article.cluster,
        words: article.words,
        score,
      });
    }
  });

  // Search site pages
  SITE_PAGES.forEach((page) => {
    let score = 0;
    const titleLower = page.title.toLowerCase();
    const excerptLower = page.excerpt.toLowerCase();
    const keywordLower = page.keywords?.toLowerCase() || "";

    if (titleLower.includes(query)) score += 8;
    if (query.split(" ").some((w) => titleLower.includes(w))) score += 4;
    if (excerptLower.includes(query)) score += 4;
    if (keywordLower.includes(query)) score += 3;

    if (score > 0) {
      results.push({
        type: "page",
        title: page.title,
        excerpt: page.excerpt,
        url: page.url,
        score,
      });
    }
  });

  // Sort by score descending
  results.sort((a, b) => b.score - a.score);
  return results;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") || "";
    setQuery(q);
    if (q) {
      setResults(searchAll(q));
      setSearched(true);
    }
  }, []);

  function handleSearch(e: FormDataEvent) {
    e.preventDefault();
    const q = query.trim();
    const params = new URLSearchParams(window.location.search);
    if (q) {
      params.set("q", q);
      window.history.replaceState({}, "", `?${params.toString()}`);
      setResults(searchAll(q));
      setSearched(true);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto py-16 md:py-24"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy leading-[1.08]">
              Search
            </h1>
            <p className="mt-3 text-lg text-ink-soft">
              Find articles, guides, and resources across hopecareglobal.org.
            </p>

            <form onSubmit={handleSearch} className="mt-8">
              <div className="flex items-center bg-white border border-navy/10 shadow-sm rounded-xl overflow-hidden">
                <Search className="ml-4 w-5 h-5 text-teal" strokeWidth={2.5} />
                <input
                  type="text"
                  name="q"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ovarian cancer symptoms, OvaTrack, founder, press releases..."
                  className="flex-1 px-4 py-3.5 text-base text-ink bg-transparent outline-none"
                  autoFocus
                  aria-label="Search query"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => { setQuery(""); setResults([]); setSearched(false); }}
                    className="p-2.5 text-ink-mute hover:text-navy transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                )}
                <button
                  type="submit"
                  className="px-5 py-3.5 bg-gradient-to-r from-teal-deep to-teal text-white font-semibold text-sm rounded-r-xl hover:brightness-110 transition-all"
                >
                  Search
                </button>
              </div>
            </form>

            {searched && query && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-16 py-12 text-center"
              >
                <Search className="mx-auto w-10 h-10 text-ink-mute/50" strokeWidth={2} />
                <h2 className="mt-4 text-xl font-semibold text-ink">No results found</h2>
                <p className="mt-2 text-ink-soft">
                  We couldn't find anything matching "{query}". Try a different word or phrase — for example, <em>symptoms, BRCA, OvaTrack, treatment, disparities, clinical trials</em>, or <em>founder</em>.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["symptoms", "BRCA", "OvaTrack", "treatment", "disparities", "clinical trials", "founder", "donate"].map((suggestion) => (
                    <a
                      key={suggestion}
                      href={`/search?q=${encodeURIComponent(suggestion)}`}
                      className="px-3.5 py-1.5 bg-mist border border-navy/5 rounded-full text-sm text-ink-soft hover:text-teal-deep hover:bg-teal-soft/30 transition-colors"
                    >
                      {suggestion}
                    </a>
                  ))}
                </div>
                <p className="mt-8 text-sm text-ink-mute">
                  Or browse our{" "}
                  <a href="/#education" className="text-teal-deep underline">education library</a>
                  {" "}for all articles by topic.
                </p>
              </motion.div>
            )}

            {searched && results.length > 0 && (
              <>
                <p className="mt-6 text-sm text-ink-mute">
                  {results.length} {results.length === 1 ? "result" : "results"} for "{query}"
                </p>

                <div className="mt-8 space-y-6">
                  {results.map((result, i) => (
                    <motion.a
                      key={`${result.type}-${result.url}`}
                      href={result.url}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.25) }}
                      className="block group rounded-2xl bg-white border border-navy/5 p-6 md:p-7 card-lift"
                    >
                      <div className="flex items-start gap-3 flex-wrap">
                        {result.cluster && (
                          <span className="inline-flex text-[0.64rem] tracking-[0.16em] uppercase font-semibold text-teal-deep px-2.5 py-1 rounded-full bg-teal-soft/40">
                            {getCluster(result.cluster).label}
                          </span>
                        )}
                        {result.type === "page" && (
                          <span className="inline-flex text-[0.64rem] tracking-[0.16em] uppercase font-semibold text-navy px-2.5 py-1 rounded-full bg-mist">
                            Page
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 font-display text-xl font-bold text-navy leading-[1.18] group-hover:text-teal-deep transition-colors">
                        {result.title}
                      </h3>

                      <p className="mt-2 text-ink-soft leading-relaxed">
                        {result.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-ink-mute">
                          {result.words && (
                            <span className="inline-flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {readingTimeMinutes(result.words)} min read
                            </span>
                          )}
                          <span className="font-mono text-[0.72rem] text-ink-mute/60">{result.url}</span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-teal-deep transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </>
            )}

            {!searched && (
              <div className="mt-16 text-center text-ink-mute">
                <Search className="mx-auto w-8 h-8 text-teal-soft" strokeWidth={2} />
                <p className="mt-3">Type a keyword above to search all articles and pages.</p>
                <p className="mt-2 text-sm">Try: symptoms, BRCA, OvaTrack, treatment, disparities, founder, clinical trials</p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}