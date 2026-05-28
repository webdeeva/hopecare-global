"use client";

import { motion } from "motion/react";
import {
  Stethoscope,
  GraduationCap,
  HandHeart,
  Globe2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Program = {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  accent: string;
};

const programs: Program[] = [
  {
    icon: Stethoscope,
    tag: "Clinical",
    title: "Early Detection",
    body: "Symptom literacy, screening pathways, and partnerships with clinics that meet women where they are.",
    bullets: [
      "Symptom-recognition workshops",
      "Provider referral network",
      "Community screening events",
    ],
    accent: "from-teal-deep to-teal",
  },
  {
    icon: GraduationCap,
    tag: "Education",
    title: "Awareness & Advocacy",
    body: "Clear, dignified, culturally-grounded education that breaks the stigma and starts the conversation.",
    bullets: [
      "Plain-language resources",
      "Pulpit & community partnerships",
      "Survivor & ally storytelling",
    ],
    accent: "from-teal to-green",
  },
  {
    icon: HandHeart,
    tag: "Care",
    title: "Access to Care",
    body: "Navigation, support, and resource connection for women facing diagnosis without a roadmap.",
    bullets: [
      "Patient navigation",
      "Financial-aid navigation",
      "Family & caregiver support",
    ],
    accent: "from-green to-green-bright",
  },
  {
    icon: Globe2,
    tag: "Global",
    title: "Global Outreach",
    body: "Cross-border initiatives that bring detection and care to communities historically left out of the conversation.",
    bullets: [
      "Diaspora-led programming",
      "Clinical training exchanges",
      "Telehealth bridges",
    ],
    accent: "from-teal-bright to-teal-deep",
  },
];

export function Programs() {
  return (
    <section id="programs" className="relative py-28 md:py-36 bg-mist">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="kicker text-teal-deep">What We Do</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]">
            Four pillars,{" "}
            <span className="text-gradient-brand">one mission</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Every program is built on clinical expertise and listening — designed
            to move the needle on outcomes for women too often missed by the system.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl bg-white p-8 md:p-10 border border-navy/5 card-lift overflow-hidden"
            >
              {/* Accent glow */}
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-15 bg-gradient-to-br ${p.accent} pointer-events-none transition-opacity duration-500 group-hover:opacity-25`}
                aria-hidden
              />

              <div className="relative flex items-start justify-between gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} grid place-items-center text-white shadow-[0_12px_30px_-8px_rgba(15,139,158,0.5)]`}
                >
                  <p.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="kicker text-teal-deep/70">{p.tag}</span>
              </div>

              <h3 className="relative mt-7 font-display text-2xl md:text-3xl font-bold text-navy">
                {p.title}
              </h3>
              <p className="relative mt-3 text-ink-soft leading-relaxed">{p.body}</p>

              <ul className="relative mt-6 space-y-2.5">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${p.accent} shrink-0`} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#involved"
                className="relative mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep group/link"
              >
                Get involved with this work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
