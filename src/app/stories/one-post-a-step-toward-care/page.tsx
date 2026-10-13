"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export default function OnePostStepTowardCare() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Nav spacer */}
      <div className="h-24" />

      {/* Back link */}
      <div className="container-wide">
        <Link
          href="/#stories"
          className="group inline-flex items-center gap-2 mt-6 text-sm font-medium text-ink-mute hover:text-teal-deep transition-colors"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Stories of Hope
        </Link>
      </div>

      <article className="container-wide mt-10 mb-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="kicker text-teal-deep/70 text-[0.65rem]">
              Community Impact
            </div>
            <h1 className="font-display mt-4 text-3xl md:text-4xl font-bold text-navy leading-[1.1]">
              One Post, a Step Toward Care
            </h1>
            <div className="mt-6 h-px w-12 bg-gradient-to-r from-teal to-green" />

            <div className="mt-6 space-y-3 text-sm text-ink-mute">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-teal" />
                <span>Impact: Awareness to action</span>
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative mt-10 w-full aspect-[2/1] sm:aspect-[3/1] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-soft to-mist"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-teal-deep to-teal grid place-items-center shadow-[0_15px_40px_-10px_rgba(15,139,158,0.4)]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M6 20C6 14 12 8 16 4C20 8 26 14 26 20C26 24 22 28 16 28C10 28 6 24 6 20Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="rgba(255,255,255,0.15)"
                    />
                    <path
                      d="M12 18C12 15 14 12 16 10C18 12 20 15 20 18C20 20 18 22 16 22C14 22 12 20 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.25)"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-2xl md:text-3xl font-bold text-teal-deep/50">
                  One Post, a Step Toward Care
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story body */}
          <div className="mt-12 space-y-6 text-lg text-ink-soft leading-[1.7] max-w-[42rem]">
            <p className="text-2xl font-display text-navy leading-[1.35] font-medium">
              This story is being prepared for publication.
            </p>

            <p>
              We believe in sharing stories carefully, with respect for the
              women at the heart of them. This first story will be published
              here soon — we can&apos;t wait to share it with you.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-10 border-t border-navy/10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-ink-mute font-medium">
                  Have a story to share?
                </p>
              </div>
              <Link
                href="/contact?topic=Story"
                className="group inline-flex items-center gap-2 text-teal-deep font-semibold text-sm"
              >
                Share your own story
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}