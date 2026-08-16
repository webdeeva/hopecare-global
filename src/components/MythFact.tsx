"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { X, Check, ArrowUpRight } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Myth vs. Fact — a prominent myth-busting callout that follows
   the "Know the Signs" section. Reinforces that there is no
   routine ovarian cancer screening test, so symptom awareness
   matters. On-brand palette (teal/green for fact, berry for myth).
   ─────────────────────────────────────────────────────────── */

const BERRY = "#b0475f";

export function MythFact() {
  return (
    <section
      id="myth-fact"
      className="relative scroll-mt-24 py-24 md:py-28 bg-cream overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.5] pointer-events-none" aria-hidden />
      <div
        className="absolute -bottom-32 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b5cc, transparent 62%)" }}
        aria-hidden
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="kicker text-teal-deep">Clarifying Common Misconceptions</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold leading-[1.05] text-navy">
            Let&apos;s clarify a common misconception.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 grid md:grid-cols-[0.85fr_1.15fr] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(10,37,64,0.28)] border border-navy/5 bg-white"
        >
          {/* MYTH */}
          <div className="relative p-8 md:p-10 bg-[#fbf6f7]">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ color: BERRY, background: `${BERRY}14` }}
            >
              <span
                className="inline-grid place-items-center w-5 h-5 rounded-full text-white"
                style={{ background: BERRY }}
              >
                <X className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              Myth
            </span>
            <p
              className="mt-6 font-display text-2xl md:text-[1.75rem] leading-snug text-ink-soft"
              style={{ textDecorationColor: `${BERRY}66` }}
            >
              A Pap smear detects{" "}
              <span className="line-through decoration-2" style={{ textDecorationColor: BERRY }}>
                ovarian cancer
              </span>
              .
            </p>
          </div>

          {/* FACT */}
          <div className="relative p-8 md:p-10 bg-gradient-to-br from-teal-soft/60 via-white to-green-soft/50 border-t md:border-t-0 md:border-l border-navy/5">
            <span
              className="absolute left-0 top-0 h-full w-1.5 hidden md:block bg-gradient-to-b from-teal to-green"
              aria-hidden
            />
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-deep bg-teal/10">
              <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-gradient-to-br from-teal to-green text-white">
                <Check className="w-3.5 h-3.5" strokeWidth={3} />
              </span>
              Fact
            </span>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-ink-soft">
              A Pap smear is designed to screen for{" "}
              <strong className="text-navy font-semibold">cervical cancer, not ovarian cancer</strong>.
              Currently, there is{" "}
              <strong className="text-navy font-semibold">
                no routine screening test for ovarian cancer
              </strong>{" "}
              in people at average risk; therefore, early detection relies entirely on symptom awareness. 
              Seeking prompt clinical evaluation when symptoms become{" "}
              <strong className="text-navy font-semibold">new, frequent, and persistent</strong>{" "}
              is the most effective tool we have for early intervention.
            </p>

            <Link
              href="/#symptoms"
              className="group mt-7 inline-flex items-center gap-2 text-teal-deep font-semibold hover:text-teal transition-colors"
            >
              Know the signs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
