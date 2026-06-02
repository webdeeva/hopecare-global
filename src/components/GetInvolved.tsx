"use client";

import { motion } from "motion/react";
import { Heart, Megaphone, Users, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Action = {
  icon: LucideIcon;
  title: string;
  body: string;
  cta: string;
  href: string;
  tone: "primary" | "accent" | "secondary";
};

const actions: Action[] = [
  {
    icon: Heart,
    title: "Donate",
    body: "Fuel screening events, education programs, and patient navigation. Every dollar widens our reach.",
    cta: "Make a Gift",
    href: "/donate",
    tone: "primary",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Lend your clinical expertise, communications skills, or community connections to the movement.",
    cta: "Join the Team",
    href: "/contact?topic=Volunteer",
    tone: "accent",
  },
  {
    icon: Megaphone,
    title: "Spread Awareness",
    body: "Share resources, host a conversation, or wear teal in September — small actions, big ripples.",
    cta: "Share Our Mission",
    href: "#newsletter",
    tone: "secondary",
  },
];

const tones = {
  primary: {
    bg: "bg-navy text-cream",
    glow: "from-teal-bright to-green",
    button: "bg-cream text-navy hover:bg-white",
  },
  accent: {
    bg: "bg-gradient-to-br from-teal-deep via-teal to-green text-white",
    glow: "from-white to-green-bright",
    button: "bg-white/15 backdrop-blur text-white border border-white/30 hover:bg-white/25",
  },
  secondary: {
    bg: "bg-white text-navy border border-navy/8",
    glow: "from-teal to-green",
    button: "bg-navy text-cream hover:bg-navy-deep",
  },
} as const;

export function GetInvolved() {
  return (
    <section id="involved" className="relative py-28 md:py-36 bg-cream overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="kicker text-teal-deep">Get Involved</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]">
            Hope only travels{" "}
            <span className="text-gradient-brand">if we carry it</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Three doors into the work. Walk through whichever one fits — or open
            all three. The fight against ovarian cancer needs every hand we&apos;ve got.
          </p>
        </motion.div>

        <div id="donate" className="mt-16 grid md:grid-cols-3 gap-6">
          {actions.map((a, i) => {
            const tone = tones[a.tone];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 md:p-10 card-lift overflow-hidden ${tone.bg}`}
              >
                <div
                  className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-25 bg-gradient-to-br ${tone.glow} pointer-events-none`}
                  aria-hidden
                />

                <div className="relative w-14 h-14 rounded-2xl bg-white/15 backdrop-blur grid place-items-center">
                  <a.icon className="w-6 h-6" strokeWidth={2} />
                </div>

                <h3 className="relative mt-7 font-display text-3xl font-bold">{a.title}</h3>
                <p className={`relative mt-3 leading-relaxed ${a.tone === "secondary" ? "text-ink-soft" : "text-white/80"}`}>
                  {a.body}
                </p>

                <a
                  href={a.href}
                  className={`relative mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${tone.button}`}
                >
                  {a.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Big invitation strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 relative rounded-3xl bg-deep-ocean text-white p-10 md:p-14 overflow-hidden"
        >
          <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" aria-hidden />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="kicker text-teal-soft">Partnership</div>
              <h3 className="font-display mt-4 text-3xl md:text-4xl font-bold leading-[1.1]">
                Bring HopeCare Global to{" "}
                <span className="text-gradient-light font-script">your community</span>.
              </h3>
              <p className="mt-4 text-white/70 leading-relaxed text-lg max-w-xl">
                Hospitals, faith communities, schools, sororities, corporate
                wellness — if you have a room of women, we have a program.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="/contact?topic=Partnership"
                className="inline-flex items-center justify-between gap-2 bg-cream text-navy px-6 py-4 rounded-full font-semibold btn-lift"
              >
                Start a Partnership
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-between gap-2 border border-white/25 text-white px-6 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Send us a note
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
