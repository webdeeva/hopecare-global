"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Apple, ArrowUpRight, Stethoscope } from "lucide-react";

/* ───────────────────────────────────────────────────────────
   OvaTrack Dedicated Section — appears on the homepage
   immediately below the Hero component.
   Includes app branding, phone screenshot, description,
   and App Store + Google Play download buttons.
   ─────────────────────────────────────────────────────────── */

function PlayGlyph() {
  return (
    <svg viewBox="0 0 512 512" className="w-6 h-6" aria-hidden>
      <path fill="#00D2FF" d="M47 24C41 28 38 35 38 45v422c0 10 3 17 9 21l246-232L47 24z" />
      <path fill="#00E676" d="M47 24l246 232 66-62L74 12c-11-6-21-6-27 0z" />
      <path fill="#FFCE00" d="M451 233l-92-53-72 68 72 68 92-53c17-10 17-20 0-30z" />
      <path fill="#FF3D00" d="M47 488l246-232 66 62-285 176c-11 6-21 6-27-6z" />
    </svg>
  );
}

function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-7">
      <a
        href="https://apps.apple.com/us/app/ovatrack/id6800895813"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:opacity-90"
        aria-label="Download OvaTrack on the App Store"
      >
        <img src="https://hopecareglobal.org/assets/app-store-badge.svg" alt="Download on the App Store" className="h-14 w-[160px] object-contain" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=org.hopecareglobal.ovatrack&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:opacity-90"
        aria-label="Download OvaTrack on Google Play"
      >
        <img src="https://hopecareglobal.org/assets/google-play-badge.svg" alt="Get it on Google Play" className="h-14 w-[160px] object-contain" />
      </a>
    </div>
  );
}

export function OvaTrackSection() {
  return (
    <section
      id="ovatrack"
      className="relative isolate py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f0f7f9 0%, #fafaf7 60%)",
      }}
    >
      {/* Subtle bg grid */}
      <div className="absolute inset-0 pointer-events-none bg-grid" aria-hidden />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ── Left: App icon + copy ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center">
              <span
                className="text-[0.68rem] tracking-[0.34em] uppercase font-bold"
                style={{ color: "#086b7d" }}
              >
                HopeCare Global
              </span>
            </div>

            <h2
              className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]"
            >
              <span className="text-navy">Ova</span>
              <span className="text-teal-deep">Track</span>
            </h2>

            <p className="mt-5 text-xl md:text-2xl text-ink-soft leading-relaxed max-w-[32rem]">
              OvaTrack is HopeCare Global&rsquo;s ovarian cancer awareness and
              symptom-tracking app. Learn the signs, track symptoms, and
              prepare for conversations with your healthcare provider.
            </p>

            {/* Health note */}
            <div
              className="mt-6 inline-flex items-center gap-3 rounded-2xl px-5 py-3"
              style={{ background: "rgba(124,179,66,0.12)" }}
            >
              <Stethoscope className="w-5 h-5 text-green" strokeWidth={1.8} />
              <span className="text-sm text-ink-soft">
                <strong className="text-navy">Education, not diagnosis.</strong> Your data stays private, on your device.
              </span>
            </div>

            {/* Store badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StoreBadges />
            </motion.div>

            {/* Inline link to full OvaTrack page */}
            <Link
              href="/ovatrack"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-teal transition-colors"
            >
              Explore all OvaTrack features
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* ─── Right: Phone screenshot ────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-[280px] sm:max-w-[320px]"
              style={{ aspectRatio: "1080 / 2316" }}
            >
              {/* Phone frame */}
              <div
                className="absolute inset-0 rounded-[2.1rem] p-[3.2%]"
                style={{
                  background: "#0c1a2b",
                  boxShadow:
                    "0 46px 90px -34px rgba(10,37,64,0.55), 0 8px 24px -12px rgba(10,37,64,0.35)",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[1.55rem] bg-white">
                  <Image
                    src="/ovatrack/screen-welcome.png"
                    alt="OvaTrack app welcome screen showing the daily symptom tracker"
                    fill
                    sizes="(min-width: 768px) 320px, 60vw"
                    className="object-cover object-top"
                  />
                </div>
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[3.2%] w-[26%] h-[1.4%] rounded-full"
                  style={{ background: "#0c1a2b" }}
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}