"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import {
  CLUSTERS,
  articlesByCluster,
  readingTimeMinutes,
  type Article,
} from "@/lib/education";

export function EducationClusters() {
  return (
    <div className="space-y-24 md:space-y-32">
      {CLUSTERS.map((cluster) => {
        const articles = articlesByCluster(cluster.id);
        return (
          <section key={cluster.id} id={cluster.id} className="scroll-mt-28">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-10 h-px bg-gradient-to-r ${cluster.accent}`}
                  />
                  <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
                    {cluster.kicker}
                  </span>
                </div>
                <h2 className="font-display mt-5 text-3xl md:text-4xl font-bold text-navy leading-[1.08]">
                  {cluster.label}
                </h2>
                <p className="mt-4 text-lg text-ink-soft leading-relaxed">
                  {cluster.blurb}
                </p>
              </div>
              <span className="text-sm font-semibold text-ink-mute">
                {articles.length} articles
              </span>
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, i) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  accent={cluster.accent}
                  index={i}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function ArticleCard({
  article,
  accent,
  index,
}: {
  article: Article;
  accent: string;
  index: number;
}) {
  const isPillar = article.role === "pillar";
  const minutes = readingTimeMinutes(article.words);
  const isLive = article.status === "published";

  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
      className={`group relative h-full rounded-3xl bg-white border border-navy/5 p-7 md:p-8 overflow-hidden ${
        isLive ? "card-lift cursor-pointer" : ""
      } ${isPillar ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      {/* accent wash */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
        aria-hidden
      />

      <div className="flex items-center gap-2 flex-wrap">
        {isPillar && (
          <span
            className={`inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.16em] uppercase font-bold text-white px-2.5 py-1 rounded-full bg-gradient-to-r ${accent}`}
          >
            <BookOpen className="w-3 h-3" strokeWidth={2.5} />
            Complete Guide
          </span>
        )}
        {!isLive && (
          <span className="inline-flex items-center gap-1.5 text-[0.62rem] tracking-[0.16em] uppercase font-bold text-ink-mute px-2.5 py-1 rounded-full bg-mist border border-navy/5">
            In Review
          </span>
        )}
      </div>

      <h3
        className={`relative mt-5 font-display font-bold text-navy leading-[1.18] ${
          isPillar ? "text-2xl md:text-[1.7rem]" : "text-xl"
        }`}
      >
        {article.title}
      </h3>

      <p className="relative mt-3 text-ink-soft leading-relaxed text-[0.95rem]">
        {article.excerpt}
      </p>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-ink-mute">
          <Clock className="w-3.5 h-3.5" />
          {minutes} min read
        </span>
        <span
          className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors ${
            isLive
              ? "text-teal-deep group-hover:text-teal-bright"
              : "text-ink-mute/60"
          }`}
        >
          {isLive ? "Read" : "Coming soon"}
          {isLive && (
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </span>
      </div>
    </motion.article>
  );

  if (!isLive) {
    return <div className={isPillar ? "md:col-span-2 lg:col-span-2" : ""}>{inner}</div>;
  }

  return (
    <Link
      href={`/education/${article.slug}`}
      className={isPillar ? "md:col-span-2 lg:col-span-2" : ""}
    >
      {inner}
    </Link>
  );
}
