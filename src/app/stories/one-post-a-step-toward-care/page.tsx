"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Heart, Share2 } from "lucide-react";
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
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-20">
          {/* ─── Left sidebar ─────────────────────────────── */}
          <aside className="space-y-8">
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

              {/* Story meta */}
              <div className="mt-6 space-y-3 text-sm text-ink-mute">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-teal" />
                  <span>Impact: Awareness to action</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-teal" />
                  <span>Format: Community story</span>
                </div>
              </div>
            </motion.div>

            {/* Share CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <a
                href="/contact?topic=Story"
                className="group inline-flex items-center gap-2 bg-navy text-cream px-5 py-3 rounded-full font-semibold text-sm btn-lift"
              >
                Share your story
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </aside>

          {/* ─── Main content ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            {/* Hero image */}
            <div className="relative w-full aspect-[2/1] sm:aspect-[3/1] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-soft to-mist">
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
            </div>

            {/* Story body */}
            <div className="mt-12 space-y-6 text-lg text-ink-soft leading-[1.7] max-w-[42rem]">
              <p>
                Somewhere in Europe, a woman came across our ovarian cancer awareness posts. She stopped to read, and the information she found gave her the language and the encouragement she needed to act.
              </p>

              <p>
                She sought medical attention and testing. Today, she is receiving treatment — and she is not facing it alone. Her story is a reminder of what awareness can do: help a woman move from wondering to acting, from silence to care.
              </p>

              <p>
                We share her story with her blessing, and for her privacy, we keep her identity anonymous. What matters is what her journey proves: when awareness reaches a woman who needs it, it can turn concern into care.
              </p>
              
              <p>
                Thank you for being part of HopeCare Global, where stories like hers become possible — one post, one share, one life at a time.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-10 border-t border-navy/10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-ink-mute font-medium">Share this story</p>
                  <div className="mt-2 flex gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-teal/8 text-teal-deep text-sm font-medium border border-teal/15 cursor-pointer hover:bg-teal/15 transition-colors">
                      Copy Link
                    </span>
                  </div>
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
          </motion.div>
        </div>
      </article>
    </main>
  );
}