"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Quote, Heart, Share2 } from "lucide-react";
import Image from "next/image";
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

            {/* Quote pullout */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative pl-6 border-l-2 border-teal/30 bg-white rounded-2xl p-6 shadow-soft"
            >
              <Quote className="absolute -left-3.5 -top-1.5 w-5 h-5 text-teal bg-white" />
              <p className="font-display text-xl text-navy leading-[1.35] italic">
                &ldquo;I saw her post and thought, &apos;That&apos;s exactly what I&apos;ve been
                feeling.&apos; It was the first time someone made me feel like I
                wasn&apos;t crazy.&rdquo;
              </p>
              <p className="mt-3 text-sm text-ink-mute font-medium">
                — Reader, via HopeCare Global
              </p>
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
              <p className="text-2xl font-display text-navy leading-[1.35] font-medium">
                It started with a simple post — a few paragraphs about ovarian
                cancer symptoms that too often get dismissed. The kind of post
                you hope someone sees, but never quite expect will change a life.
              </p>

              <p>
                A woman scrolling through her feed late one night came across it.
                She had been to three different doctors over the past six months,
                each time describing the same constellation of symptoms: bloating
                that wouldn&apos;t go away, pelvic pressure that made it hard to
                sleep, and a nagging feeling that something was wrong. Each time,
                she was told it was nothing — stress, digestion, &ldquo;just getting
                older.&rdquo;
              </p>

              <p>
                But reading that post, something clicked. The symptoms listed
                were her symptoms. The language mirrored the things she had been
                trying to articulate in exam rooms, only to be met with shrugs.
                For the first time, she felt seen — not by a doctor, but by a
                piece of content that named her experience.
              </p>

              <p>
                She commented on the post, tentatively at first: &ldquo;This sounds
                exactly like what I&apos;m going through.&rdquo; Within hours, someone
                from the HopeCare community replied with encouragement and a
                direct message offering to connect her with a provider who
                specialized in gynecologic symptoms.
              </p>

              <p>
                That connection changed everything. She made an appointment. She
                pushed for an ultrasound. She was referred to a specialist, and
                the diagnostic process began.
              </p>

              <h3 className="font-display text-2xl font-bold text-navy mt-10 mb-4 leading-[1.2]">
                Why this story matters
              </h3>

              <p>
                Ovarian cancer is called &ldquo;the silent killer&rdquo; not because it
                has no symptoms — it does — but because those symptoms are too
                often dismissed, misattributed, or simply unheard. For women in
                underserved communities, that silence can stretch for months or
                years. By the time a diagnosis comes, the cancer has often
                advanced to a stage where treatment options are limited.
              </p>

              <p>
                A single post on social media cannot replace a clinical exam. But
                it can do something equally vital: it can give a woman the
                language and the confidence to advocate for herself. When
                awareness meets access, the gap between symptom and diagnosis
                begins to close.
              </p>

              {/* Mid-article quote */}
              <div className="relative my-12 pl-8 border-l-2 border-teal/40 bg-mist rounded-2xl p-8">
                <Quote className="absolute -left-4 -top-2 w-6 h-6 text-teal bg-mist" />
                <p className="font-display text-2xl text-navy leading-[1.35] italic">
                  &ldquo;I went from feeling crazy to having a plan. One post, one
                  person who listened — that&apos;s all it took to start.&rdquo;
                </p>
              </div>

              <p>
                This is what we mean when we talk about impact at HopeCare
                Global. It isn&apos;t always a headline or a grant announcement.
                Sometimes it&apos;s a woman, alone at night, scrolling on her phone,
                who finds the one piece of information that makes her pick it up
                and call a clinic the next morning.
              </p>

              <p>
                That woman is out there right now. And the post she needs might
                not exist yet. That&apos;s why we keep writing, keep sharing, keep
                showing up — one post, one story, one life at a time.
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