"use client";

import { useState } from "react";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ARTICLES, readingTimeMinutes, getCluster } from "@/lib/education";

const SITE_PAGES = [
  { title: "Home", excerpt: "HopeCare Global \u2014 Ovarian cancer awareness, early detection, and equitable access to care.", url: "/" },
  { title: "OvaTrack App", excerpt: "Track possible ovarian cancer symptoms with OvaTrack, a free mobile health app.", url: "/ovatrack" },
  { title: "News & Press Releases", excerpt: "Press releases and media resources from HopeCare Global Inc.", url: "/press" },
  { title: "Donate", excerpt: "Support HopeCare Global\u2019s mission of ovarian cancer awareness and early detection.", url: "/donate" },
  { title: "Contact Us", excerpt: "Get in touch with HopeCare Global for inquiries, media, partnerships, or volunteer opportunities.", url: "/contact" },
  { title: "Podcast", excerpt: "Listen to the HopeCare Global podcast \u2014 all episodes and latest releases.", url: "/#podcast" },
  { title: "Privacy Policy", excerpt: "HopeCare Global\u2019s privacy policy and data handling practices.", url: "/privacy" },
  { title: "Terms of Service", excerpt: "Terms and conditions for using the HopeCare Global website.", url: "/terms" },
  { title: "Medical Disclaimer", excerpt: "Medical disclaimer for educational content.", url: "/medical-disclaimer" },
];

function runSearch(query: string) {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const results: any[] = [];

  ARTICLES.filter((a) => a.status === "published").forEach((article) => {
    let score = 0;
    const t = article.title.toLowerCase();
    const e = article.excerpt.toLowerCase();
    const kw = (article.targetKeyword || "").toLowerCase();
    const cl = getCluster(article.cluster).label.toLowerCase();

    if (t.includes(q)) score += 10;
    if (e.includes(q)) score += 4;
    if (kw.includes(q)) score += 6;
    if (cl.includes(q)) score += 3;
    if (article.slug.includes(q)) score += 3;

    if (score > 0) {
      results.push({ type: "article", title: article.title, excerpt: article.excerpt, url: "/education/" + article.slug, cluster: article.cluster, words: article.words, score });
    }
  });

  SITE_PAGES.forEach((page) => {
    let score = 0;
    if (page.title.toLowerCase().includes(q)) score += 8;
    if (page.excerpt.toLowerCase().includes(q)) score += 4;
    if (score > 0) results.push({ type: "page", title: page.title, excerpt: page.excerpt, url: page.url, score });
  });

  results.sort((a, b) => b.score - a.score);
  return results;
}

export default function SearchPage() {
  const urlQ = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("q") || "" : "";
  const initialResults = urlQ ? runSearch(urlQ) : [];
  const initialCount = initialResults.length;

  const [query, setQuery] = useState(urlQ);
  const [results, setResults] = useState(initialResults);
  const [count, setCount] = useState(initialCount);
  const [searched, setSearched] = useState(!!urlQ);

  function doSearch() {
    const q = query.trim();
    if (q) {
      window.history.replaceState({}, "", "/search?q=" + encodeURIComponent(q));
      const r = runSearch(q);
      setResults(r);
      setCount(r.length);
      setSearched(true);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto py-16 md:py-24">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-navy leading-[1.08]">Search</h1>
            <p className="mt-3 text-lg text-ink-soft">Find articles, guides, and resources across hopecareglobal.org.</p>

            <form className="mt-8" action="/search" method="GET" onSubmit={(e) => { e.preventDefault(); doSearch(); }}>
              <div className="flex items-center bg-white border border-navy/10 shadow-sm rounded-xl overflow-hidden">
                <Search className="ml-4 w-5 h-5 text-teal" strokeWidth={2.5} />
                <input type="text" name="q" value={query} onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search ovarian cancer symptoms, OvaTrack, founder, press releases..."
                  className="flex-1 px-4 py-3.5 text-base text-ink bg-transparent outline-none"
                  aria-label="Search query"
                />
                <button type="submit" className="px-5 py-3.5 bg-gradient-to-r from-teal-deep to-teal text-white font-semibold text-sm rounded-r-xl">Search</button>
              </div>
            </form>

            {searched && count === 0 && (
              <div className="mt-16 py-12 text-center">
                <Search className="mx-auto w-10 h-10 text-ink-mute/50" strokeWidth={2} />
                <h2 className="mt-4 text-xl font-semibold text-ink">No results found</h2>
                <p className="mt-2 text-ink-soft">We couldn\u2019t find anything matching &ldquo;{query}&rdquo;. Try a different word or phrase.</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {["symptoms", "BRCA", "OvaTrack", "treatment", "disparities", "founder", "donate"].map((s) => (
                    <a key={s} href={"/search?q=" + encodeURIComponent(s)}
                      className="px-3.5 py-1.5 bg-mist border border-navy/5 rounded-full text-sm text-ink-soft hover:text-teal-deep">{s}</a>
                  ))}
                </div>
                <p className="mt-8 text-sm text-ink-mute">Or browse our <a href="/#education" className="text-teal-deep underline">education library</a>.</p>
              </div>
            )}

            {searched && count > 0 && (
              <>
                <p className="mt-6 text-sm text-ink-mute">{count} {count === 1 ? "result" : "results"}</p>
                <div className="mt-8 space-y-6">
                  {results.map((result, i) => (
                    <a key={result.type + "-" + result.url} href={result.url}
                      className="block group rounded-2xl bg-white border border-navy/5 p-6 md:p-7 card-lift">
                      <div className="flex items-start gap-3 flex-wrap">
                        {result.cluster && (
                          <span className="inline-flex text-[0.64rem] tracking-[0.16em] uppercase font-semibold text-teal-deep px-2.5 py-1 rounded-full bg-teal-soft/40">
                            {getCluster(result.cluster).label}
                          </span>
                        )}
                        {result.type === "page" && (
                          <span className="inline-flex text-[0.64rem] tracking-[0.16em] uppercase font-semibold text-navy px-2.5 py-1 rounded-full bg-mist">Page</span>
                        )}
                      </div>
                      <h3 className="mt-4 font-display text-xl font-bold text-navy leading-[1.18] group-hover:text-teal-deep">{result.title}</h3>
                      <p className="mt-2 text-ink-soft leading-relaxed">{result.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 text-ink-mute">
                          {result.words && <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{readingTimeMinutes(result.words)} min read</span>}
                          <span className="font-mono text-[0.72rem] text-ink-mute/60">{result.url}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-teal-deep" />
                      </div>
                    </a>
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}