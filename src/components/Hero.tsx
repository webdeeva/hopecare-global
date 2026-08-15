"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   HopeCare Global — Refactored hero.
   Single sans-serif (Inter), gradient highlights on key words,
   photo full-bleed on right, text on left in editorial flow.
   ─────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-cream pt-20 md:pt-24"
    >
      {/* Soft ambient bloom (low-key, just adds depth) */}
      <div
        className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b5cc, transparent 60%)" }}
        aria-hidden
      />

      {/* Top masthead rail */}
      <div className="container-wide">
        <TopRail />
      </div>

      {/* MAIN HERO GRID — text left, full-bleed photo right */}
      <div className="mt-10 md:mt-14 grid lg:grid-cols-[1fr_1.05fr] items-stretch">
        {/* ─── Left: copy column ─────────────────────────── */}
        <div
          className="
            relative z-10
            px-6 md:px-10
            lg:pl-[max(2.5rem,calc((100vw-var(--container-max))/2+2.5rem))]
            lg:pr-14
            py-12 lg:py-20
            flex flex-col justify-center
            max-w-[720px]
          "
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Ovarian Cancer Awareness · Est. 2026
            </span>
          </motion.div>

          {/* Headline — single font, weight + gradient for hierarchy */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 font-bold text-navy"
            style={{
              fontSize: "clamp(2.6rem, 5.4vw, 5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
            }}
          >
            Standing with{" "}
            <span className="text-gradient-brand">women</span>,
            <br />
            everywhere{" "}
            <span className="text-gradient-brand">hope</span>{" "}
            is needed.
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 text-lg md:text-xl text-ink-soft leading-[1.55] max-w-[34rem]"
          >
            HopeCare Global advances{" "}
            <strong className="text-navy font-semibold">early detection</strong>,{" "}
            <strong className="text-navy font-semibold">education</strong>, and equitable{" "}
            <strong className="text-navy font-semibold">access to care</strong> — confronting
            ovarian cancer in communities the world has overlooked.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#involved"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-deep via-teal to-green text-white px-7 py-4 rounded-full font-semibold btn-lift shadow-[0_18px_50px_-15px_rgba(15,139,158,0.55)]"
            >
              Join the Movement
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#mission"
              className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-4 rounded-full font-semibold border border-navy/10 hover:border-teal/40 transition-colors btn-lift"
            >
              Our Mission
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5 text-teal-deep" />
            </a>
          </motion.div>

          {/* Meta footer line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-14 pt-6 border-t border-navy/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-ink-mute font-medium"
          >
            <span className="inline-flex items-center gap-2">
              <span className="relative flex shrink-0">
                <span className="absolute inset-0 rounded-full bg-green-bright animate-slow-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-green-bright" />
              </span>
              Founded by Dr. Petrina Harrison, DNP
            </span>
            <span className="opacity-30">/</span>
            <span>New York · Worldwide</span>
          </motion.div>
        </div>

        {/* ─── Right: full-bleed photo column ─────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[660px]"
        >
          <Image
            src="/hero-women.png"
            alt="Multicultural women working to advance ovarian cancer awareness and equitable access to care"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center"
          />
          {/* Left-edge gradient so the photo blends with the cream column */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,250,247,0.85) 0%, rgba(250,250,247,0.25) 12%, transparent 30%)",
            }}
            aria-hidden
          />
          {/* Soft bottom warm grade for legibility of overlaid mark */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, rgba(10,37,64,0.18) 100%)",
            }}
            aria-hidden
          />

          {/* Floating stat — clean sans, photo's anchor element */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 max-w-[15rem]"
          >
            <div className="bg-white/85 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.25)]">
              <div className="flex items-baseline gap-2.5">
                <span className="text-4xl font-bold text-navy leading-none tracking-tight">1</span>
                <span className="text-xl text-teal-deep font-light leading-none -mb-0.5">/</span>
                <span className="text-4xl font-bold text-teal-deep leading-none tracking-tight">78</span>
              </div>
              <div className="mt-1.5 text-[0.6rem] tracking-[0.22em] uppercase text-ink-mute font-bold">
                Lifetime risk · women
              </div>
              <p className="mt-2 text-[0.72rem] text-ink-soft leading-snug">
                Roughly 1 in 91 women will be diagnosed. We refuse to let her face those odds alone.
              </p>
            </div>
          </motion.div>

          {/* Bottom-left photo caption (no logo or script font) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white max-w-sm"
          >
            <div className="text-[0.6rem] tracking-[0.32em] uppercase font-bold opacity-85">
              Women refuse to let ovarian cancer be silent.
            </div>
            <div className="mt-1 text-[0.78rem] opacity-65 font-medium">
              HopeCare Global · 2026
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Top rail ───────── */

function TopRail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-between gap-6 text-[0.66rem] tracking-[0.28em] uppercase font-bold text-navy/55"
    >
      <span>HopeCare Global Inc</span>
      <div className="flex-1 h-px bg-navy/12" />
      <span className="hidden sm:inline">A 501(c)(3) Nonprofit Organization</span>
      <div className="hidden md:block flex-1 h-px bg-navy/12" />
      <span className="hidden md:inline">New York · Worldwide</span>
    </motion.div>
  );
}
