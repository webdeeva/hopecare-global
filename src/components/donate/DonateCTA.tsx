"use client";

import { motion } from "motion/react";
import { Heart, ArrowUpRight } from "lucide-react";

const PAYPAL_URL = "https://www.paypal.com/ncp/payment/88ZQAFSLWAJJY";

export function DonateCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-deep-ocean text-white overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.06] pointer-events-none" aria-hidden />
      <svg
        viewBox="0 0 1440 80"
        className="absolute top-0 left-0 right-0 w-full text-cream"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C320,80 640,0 960,40 C1200,80 1320,20 1440,40 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gradient-to-r from-teal-bright to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-soft">
              Stand With Her
            </span>
          </div>
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Hope isn&apos;t passive.{" "}
            <span className="text-gradient-light font-bold">Give.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            Every gift — at every size — pushes the work further into the
            communities that have waited longest for it. Thank you for standing with us.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={PAYPAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-cream text-navy px-7 py-4 rounded-full font-semibold btn-lift shadow-[0_18px_50px_-15px_rgba(0,0,0,0.4)]"
            >
              <Heart className="w-4 h-4" strokeWidth={2.5} />
              Donate via PayPal
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/25 text-white px-7 py-4 rounded-full font-semibold hover:bg-white/15 transition-colors"
            >
              Talk to our team
            </a>
          </div>

          <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] text-white/55">
            <span>HopeCare Global Inc · A 501(c)(3) Nonprofit Organization</span>
            <span className="opacity-30">/</span>
            <a
              href="mailto:support@hopecareglobal.org"
              className="hover:text-teal-soft transition-colors"
            >
              support@hopecareglobal.org
            </a>
            <span className="opacity-30">/</span>
            <a href="/contact" className="hover:text-teal-soft transition-colors">
              Send a message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
