"use client";

import { motion } from "motion/react";
import { ARTICLES, CLUSTERS } from "@/lib/education";

export function EducationHero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream pt-20 md:pt-24 pb-16 md:pb-20">
      <div
        className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b5cc, transparent 60%)" }}
        aria-hidden
      />

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-between gap-6 text-[0.66rem] tracking-[0.28em] uppercase font-bold text-navy/55"
        >
          <span>Learn · Share · Save Lives</span>
          <div className="flex-1 h-px bg-navy/12" />
          <span className="hidden sm:inline">{ARTICLES.length} Articles</span>
          <div className="hidden md:block flex-1 h-px bg-navy/12" />
          <span className="hidden md:inline">{CLUSTERS.length} Topics</span>
        </motion.div>

        <div className="mt-10 md:mt-14 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Education
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-7 font-bold text-navy"
            style={{
              fontSize: "clamp(2.6rem, 5.4vw, 5rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
            }}
          >
            Know the signs.{" "}
            <span className="text-gradient-brand">Share the knowledge.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-ink-soft leading-[1.55] max-w-2xl"
          >
            Clear, dignified, plain-language guides on ovarian cancer, from the
            first quiet symptoms to life after treatment. Every article is{" "}
            <strong className="text-navy font-semibold">
              reviewed by a medical professional
            </strong>{" "}
            and grounded in trusted sources.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
