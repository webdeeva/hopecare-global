"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Compact OvaTrack Banner — pale teal background, navy text
   Used within the Hero section / below logo.
   ─────────────────────────────────────────────────────────── */

export function CompactOvaTrackBanner() {
  return (
    <section className="bg-teal-soft py-3 px-4 rounded-xl">
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
      >
        <p className="text-navy text-sm md:text-base font-semibold">
          Meet OvaTrack &mdash; Know the Signs. Track the Symptoms. Act Early.
        </p>
        <Link
          href="/ovatrack"
          className="shrink-0 inline-flex items-center gap-1.5 bg-navy text-white px-5 py-2 rounded-full font-semibold text-sm transition-all hover:bg-navy-deep"
        >
          Download OvaTrack
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </motion.div>
    </section>
  );
}