"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Lock,
  Heart,
  FileText,
  Bell,
  Sparkles,
  Check,
  ArrowUpRight,
  Smartphone,
  LineChart,
  CalendarCheck,
  EyeOff,
  Stethoscope,
  Apple,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────
   OvaTrack — app landing page.
   Palette mirrors the iOS/Android app branding exactly.
   ─────────────────────────────────────────────────────────── */

const C = {
  navy: "#17365C",
  teal: "#17879C",
  tealDeep: "#0D6B80",
  aqua: "#D9F0F2",
  mist: "#F2F7FA",
  sage: "#739E4F",
  sageSoft: "#E6F0D9",
  cream: "#FAF9F4",
  ink: "#405466",
};

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

/* ───────── Phone mockup ───────── */

function PhoneFrame({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ aspectRatio: "1080 / 2316" }}
    >
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
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 300px, 60vw"
            className="object-cover object-top"
          />
        </div>
        {/* subtle top notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[3.2%] w-[26%] h-[1.4%] rounded-full"
          style={{ background: "#0c1a2b" }}
          aria-hidden
        />
      </div>
    </div>
  );
}

/* ───────── Store badges ───────── */

function StoreBadges() {
  const badge =
    "group inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-white transition-transform duration-300 hover:-translate-y-0.5";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        className={badge}
        style={{ background: C.navy, cursor: "default" }}
        aria-label="Coming soon to the Apple App Store"
      >
        <Apple className="w-7 h-7" strokeWidth={1.6} />
        <span className="text-left leading-tight">
          <span className="block text-[0.62rem] uppercase tracking-wider opacity-70">
            Coming soon
          </span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </span>
      <span
        className={badge}
        style={{ background: C.navy, cursor: "default" }}
        aria-label="Coming soon to Google Play"
      >
        <PlayGlyph />
        <span className="text-left leading-tight">
          <span className="block text-[0.62rem] uppercase tracking-wider opacity-70">
            Coming soon
          </span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </span>
    </div>
  );
}

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

/* ───────── Hero ───────── */

function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24"
      style={{
        background: `linear-gradient(160deg, ${C.aqua} 0%, ${C.mist} 46%, ${C.cream} 100%)`,
      }}
    >
      {/* Faded women-of-all-cultures backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          maskImage:
            "radial-gradient(120% 90% at 78% 30%, black 0%, transparent 68%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 78% 30%, black 0%, transparent 68%)",
        }}
      >
        <Image
          src="/hero-women.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-[0.16] mix-blend-multiply"
        />
      </div>
      {/* soft teal bloom */}
      <div
        className="absolute -top-32 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle, ${C.aqua}, transparent 62%)` }}
        aria-hidden
      />

      <div className="container-wide relative grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 lg:gap-6">
        {/* Copy */}
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span
              className="w-9 h-px"
              style={{ background: `linear-gradient(90deg, ${C.teal}, transparent)` }}
            />
            <span
              className="text-[0.68rem] tracking-[0.34em] uppercase font-bold"
              style={{ color: C.tealDeep }}
            >
              HopeCare Global
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display mt-6 leading-[0.98]"
            style={{ fontSize: "clamp(3rem, 6.4vw, 5.4rem)", letterSpacing: "-0.03em" }}
          >
            <span style={{ color: C.navy }}>Ova</span>
            <span style={{ color: C.teal }}>Track</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl font-medium"
            style={{ color: C.ink }}
          >
            Know the signs. Track the symptoms. Act early.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="font-script mt-3 text-3xl md:text-4xl"
            style={{ color: C.teal }}
          >
            You know your body best.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-7 text-lg leading-[1.6] max-w-[32rem]"
            style={{ color: C.ink }}
          >
            A gentle daily check-in that helps you notice the subtle, persistent
            symptoms of ovarian cancer, and bring a clear record to your
            healthcare provider. Free, private, and built for every woman.
          </motion.p>

          <motion.div {...rise(0.5)} className="mt-9">
            <StoreBadges />
          </motion.div>

          <motion.div
            {...rise(0.6)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: C.tealDeep }}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>
              <strong style={{ color: C.tealDeep }}>Private by design.</strong>{" "}
              <span style={{ color: C.ink }}>Your data stays on your device.</span>
            </span>
          </motion.div>
        </div>

        {/* Phones */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto w-full max-w-[440px] h-[500px] sm:h-[560px] lg:h-[620px]"
        >
          {/* back phone */}
          <div className="absolute right-0 top-8 w-[52%] rotate-[7deg] animate-float">
            <PhoneFrame src="/ovatrack/screen-trends.png" alt="OvaTrack trends screen showing symptom patterns" />
          </div>
          {/* front phone */}
          <div className="absolute left-0 top-0 w-[58%] -rotate-[4deg]">
            <PhoneFrame
              src="/ovatrack/screen-welcome.png"
              alt="OvaTrack welcome screen"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Track with ease",
    body: "A daily check-in takes under 15 seconds. Log how you feel and move on with your day.",
    tint: C.teal,
  },
  {
    icon: LineChart,
    title: "See the pattern",
    body: "OvaTrack surfaces symptoms that are new, frequent, and persistent, the pattern that matters.",
    tint: "#4D80D9",
  },
  {
    icon: FileText,
    title: "Bring it to your provider",
    body: "Export a clean summary of your history to share at your next appointment.",
    tint: C.sage,
  },
  {
    icon: Sparkles,
    title: "Learn as you go",
    body: "Short, clinician-reviewed lessons on the signs, risks, and why early awareness matters.",
    tint: C.tealDeep,
  },
];

function Features() {
  return (
    <section className="py-20 md:py-28" style={{ background: C.cream }}>
      <div className="container-wide">
        <motion.div {...rise()} className="max-w-2xl">
          <span className="kicker" style={{ color: C.tealDeep }}>
            What it does
          </span>
          <h2
            className="font-display mt-3 text-4xl md:text-5xl font-bold"
            style={{ color: C.navy }}
          >
            A quiet companion for staying aware.
          </h2>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...rise(0.06 * i)}
              className="rounded-3xl bg-white p-7 card-lift border"
              style={{ borderColor: "rgba(23,54,92,0.06)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${f.tint}1f` }}
              >
                <f.icon className="w-7 h-7" style={{ color: f.tint }} strokeWidth={1.9} />
              </div>
              <h3 className="mt-5 text-lg font-bold" style={{ color: C.navy }}>
                {f.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: C.ink }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Screens gallery ───────── */

const SCREENS = [
  { src: "/ovatrack/screen-today.png", label: "Daily check-in" },
  { src: "/ovatrack/screen-trends.png", label: "Trends & patterns" },
  { src: "/ovatrack/screen-learn.png", label: "Learn" },
];

function Screens() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: `linear-gradient(180deg, ${C.mist} 0%, ${C.cream} 100%)` }}
    >
      <div className="container-wide">
        <motion.div {...rise()} className="max-w-2xl">
          <span className="kicker" style={{ color: C.tealDeep }}>
            A look inside
          </span>
          <h2
            className="font-display mt-3 text-4xl md:text-5xl font-bold"
            style={{ color: C.navy }}
          >
            Calm, clear, and yours.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 max-w-4xl mx-auto">
          {SCREENS.map((s, i) => (
            <motion.div key={s.src} {...rise(0.08 * i)} className="flex flex-col items-center">
              <PhoneFrame src={s.src} alt={`OvaTrack ${s.label} screen`} className="w-full max-w-[220px]" />
              <span
                className="mt-5 text-sm font-semibold tracking-wide"
                style={{ color: C.tealDeep }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Data safety / privacy ───────── */

const PRIVACY_POINTS = [
  {
    icon: Smartphone,
    title: "Your data stays with you",
    body: "Check-ins and symptom history are stored only on your device. Nothing is uploaded to a server.",
  },
  {
    icon: Lock,
    title: "No account, no sign-up",
    body: "OvaTrack works with no login and no personal details. There is nothing to hack or leak.",
  },
  {
    icon: EyeOff,
    title: "Never sold or shared",
    body: "We do not sell your data, share it with third parties, or use advertising trackers.",
  },
  {
    icon: FileText,
    title: "You're in control",
    body: "Export a summary to share with your provider, or delete all of your data at any time.",
  },
];

function DataSafety() {
  return (
    <section className="py-20 md:py-28" style={{ background: C.cream }}>
      <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
        <motion.div {...rise()}>
          <span className="kicker" style={{ color: C.sage }}>
            Data safety
          </span>
          <h2
            className="font-display mt-3 text-4xl md:text-5xl font-bold"
            style={{ color: C.navy }}
          >
            Private by design.
          </h2>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: C.ink }}>
            Your health is personal. OvaTrack is built so your information never
            has to leave your phone. This is the same data practice we declare in
            the app stores, in plain language.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-white font-semibold btn-lift"
              style={{ background: `linear-gradient(90deg, ${C.tealDeep}, ${C.teal})` }}
            >
              Read the privacy policy
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/terms"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold border"
              style={{ color: C.tealDeep, borderColor: `${C.teal}66` }}
            >
              Terms of use
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PRIVACY_POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              {...rise(0.06 * i)}
              className="rounded-2xl bg-white p-6 border flex flex-col gap-3"
              style={{ borderColor: "rgba(23,54,92,0.06)" }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: C.aqua }}
                >
                  <p.icon className="w-6 h-6" style={{ color: C.teal }} strokeWidth={1.9} />
                </div>
                <Check className="w-5 h-5" style={{ color: C.sage }} strokeWidth={3} />
              </div>
              <h3 className="text-base font-bold" style={{ color: C.navy }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: C.ink }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Health / medical disclaimer ───────── */

function Disclaimer() {
  return (
    <section className="py-20 md:py-24" style={{ background: C.mist }}>
      <div className="container-wide max-w-4xl">
        <motion.div
          {...rise()}
          className="rounded-3xl p-8 md:p-12 border"
          style={{ background: C.sageSoft, borderColor: "rgba(115,158,79,0.25)" }}
        >
          <div className="flex items-start gap-5">
            <div
              className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/70"
            >
              <Stethoscope className="w-7 h-7" style={{ color: C.sage }} strokeWidth={1.8} />
            </div>
            <div>
              <span className="kicker" style={{ color: C.sage }}>
                Health-app declaration
              </span>
              <h2
                className="font-display mt-2 text-3xl md:text-4xl font-bold"
                style={{ color: C.navy }}
              >
                Education, not diagnosis.
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: C.ink }}>
                OvaTrack is an education and self-tracking tool. It does not
                diagnose, treat, or rule out ovarian cancer or any other
                condition, and it is not a substitute for professional medical
                advice. The patterns it shows are informational and meant to help
                you start a conversation with your healthcare provider. If a
                symptom concerns you, please speak with a clinician.
              </p>
              <Link
                href="/medical-disclaimer"
                className="mt-6 inline-flex items-center gap-2 font-semibold"
                style={{ color: C.tealDeep }}
              >
                Read the full medical disclaimer
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Download CTA ───────── */

function DownloadCTA() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.tealDeep} 60%, ${C.teal} 100%)`,
      }}
    >
      <div className="container-wide max-w-3xl text-center">
        <motion.div {...rise()}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-white/90 text-xs font-bold tracking-widest uppercase bg-white/10 border border-white/15">
            <Bell className="w-3.5 h-3.5" />
            Launching soon
          </div>
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-white">
            Take the first step toward peace of mind.
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            OvaTrack is coming to iPhone and Android. Free to download, private by
            design, and built with care by HopeCare Global.
          </p>
          <div className="mt-9 flex justify-center">
            <StoreBadges />
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-white/70 text-sm">
            <Heart className="w-4 h-4" />A project of HopeCare Global Inc, a 501(c)(3)
            nonprofit.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Page assembly ───────── */

export function OvaTrackLanding() {
  return (
    <>
      <Hero />
      <Features />
      <Screens />
      <DataSafety />
      <Disclaimer />
      <DownloadCTA />
    </>
  );
}
