"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   OvaTrack Promotional Banner — full-width teal strip
   sits directly below the Navbar on the homepage.
   Stationary — no pop-up, always visible.
   ─────────────────────────────────────────────────────────── */

export function OvaTrackBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-soft pt-20 md:pt-24 pb-3 md:pb-4">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] bg-dots"
        aria-hidden
      />

      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-center"
        >
          {/* message row */}
          <div className="flex items-center">
            <p className="text-navy text-base md:text-lg lg:text-xl font-semibold leading-snug">
              Meet OvaTrack &mdash; Know the Signs. Track the Symptoms. Act Early.
            </p>
          </div>
          <Link
            href="/ovatrack"
            className="group shrink-0 inline-flex items-center gap-2 bg-navy text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:bg-navy-deep hover:shadow-lg hover:-translate-y-0.5"
          >
            Download OvaTrack
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}