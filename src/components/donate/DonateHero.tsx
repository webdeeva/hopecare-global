"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Heart, ArrowUpRight, Shield } from "lucide-react";
import { PAYPAL_URL } from "@/lib/site";
import { trackDonateClick } from "@/lib/gtag";

export function DonateHero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-cream pt-20 md:pt-24"
    >
      <div
        className="absolute -top-40 left-1/3 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b5cc, transparent 60%)" }}
        aria-hidden
      />

      {/* Masthead rail */}
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-between gap-6 text-[0.66rem] tracking-[0.28em] uppercase font-bold text-navy/55"
        >
          <span>Give · Stand With Women</span>
          <div className="flex-1 h-px bg-navy/12" />
          <span className="hidden sm:inline">A 501(c)(3) Nonprofit Organization</span>
          <div className="hidden md:block flex-1 h-px bg-navy/12" />
          <span className="hidden md:inline">Tax-Deductible Gift</span>
        </motion.div>
      </div>

      {/* MAIN HERO GRID */}
      <div className="mt-10 md:mt-14 grid lg:grid-cols-[1fr_1.05fr] items-stretch">
        {/* Left: copy column */}
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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Support the Mission
            </span>
          </motion.div>

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
            Your gift{" "}
            <span className="text-gradient-brand">funds</span>
            <br />
            the{" "}
            <span className="text-gradient-brand">fight</span>{" "}
            for{" "}
            <br className="hidden md:block" />
            her life.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 text-lg md:text-xl text-ink-soft leading-[1.55] max-w-[34rem]"
          >
            Every dollar widens our reach: into the clinics that{" "}
            <strong className="text-navy font-semibold">catch it earlier</strong>, the rooms where we{" "}
            <strong className="text-navy font-semibold">teach the symptoms</strong>, and the lives of
            women who deserve to be{" "}
            <strong className="text-navy font-semibold">seen, supported, and heard</strong>.
          </motion.p>

          {/* CTA — PayPal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackDonateClick("donate_hero")}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-deep via-teal to-green text-white px-7 py-4 rounded-full font-semibold btn-lift shadow-[0_18px_50px_-15px_rgba(15,139,158,0.55)]"
            >
              <Heart className="w-4 h-4" strokeWidth={2.5} />
              Donate Now
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#ways"
              className="group inline-flex items-center gap-2 bg-white text-navy px-7 py-4 rounded-full font-semibold border border-navy/10 hover:border-teal/40 transition-colors btn-lift"
            >
              Other Ways to Give
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-14 pt-6 border-t border-navy/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] text-ink-mute font-medium"
          >
            <span className="inline-flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-teal" />
              Secure payment via PayPal
            </span>
            <span className="opacity-30">/</span>
            <span>Tax-deductible to the full extent of the law</span>
          </motion.div>
        </div>

        {/* Right: image column — full bleed */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[660px]"
        >
          <Image
            src="/donate-hero.png"
            alt="Multicultural hands joined together holding a teal ovarian cancer awareness ribbon"
            fill
            priority
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,250,247,0.85) 0%, rgba(250,250,247,0.25) 12%, transparent 30%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 60%, rgba(10,37,64,0.18) 100%)",
            }}
            aria-hidden
          />

          {/* Floating impact card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="absolute top-6 right-6 md:top-8 md:right-8 max-w-[16rem]"
          >
            <div className="bg-white/90 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,37,64,0.25)]">
              <div className="text-[0.6rem] tracking-[0.22em] uppercase text-teal-deep font-bold">
                100% mission
              </div>
              <div className="mt-2 text-2xl font-bold text-navy leading-tight tracking-tight">
                Every dollar to early detection &amp; access.
              </div>
              <p className="mt-2 text-[0.74rem] text-ink-soft leading-snug">
                Your gift directly funds education programs, patient navigation, and community outreach.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
