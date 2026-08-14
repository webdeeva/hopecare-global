"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  CircleDot,
  Activity,
  Utensils,
  Droplets,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const symptoms = [
  {
    icon: CircleDot,
    name: "Bloating",
    detail: "Persistent bloating or a swollen belly that does not settle.",
  },
  {
    icon: Activity,
    name: "Pelvic or abdominal pain",
    detail: "Aching or pressure low in the belly or pelvis.",
  },
  {
    icon: Utensils,
    name: "Feeling full quickly",
    detail: "Trouble eating or feeling full soon after starting a meal.",
  },
  {
    icon: Droplets,
    name: "Urinary urgency",
    detail: "Needing to go more often or more suddenly than usual.",
  },
];

const ARTICLE = "/education/ovarian-cancer-symptoms-early-detection-guide";

export function SymptomsCTA() {
  return (
    <section
      id="symptoms"
      className="relative scroll-mt-24 py-28 md:py-36 bg-deep-ocean text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.35] pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 right-1/4 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #14b5cc, transparent 60%)" }}
        aria-hidden
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="kicker text-teal-soft">Know the Signs</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal-soft to-green-bright" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold leading-[1.05]">
            The signs are quiet.{" "}
            <span className="text-gradient-light">Knowing them is power.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            There is no routine test for everyone, so regular, tailored risk assessment and symptom monitoring are critical. What matters most is when symptoms are{" "}
            <strong className="text-white font-semibold">
              new, persistent, and last more than a couple of weeks
            </strong>
            .
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {symptoms.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-7 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-teal/15 text-teal-soft">
                <s.icon className="w-6 h-6" strokeWidth={2} />
              </span>
              <div className="mt-5 font-display text-lg text-white/95 leading-snug">
                {s.name}
              </div>
              <div className="mt-3 text-sm text-white/55 leading-relaxed">
                {s.detail}
              </div>
              <div className="mt-5 h-px bg-gradient-to-r from-teal-bright/60 via-green-bright/60 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <Link
            href={ARTICLE}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-deep via-teal to-green text-white px-7 py-4 rounded-full font-semibold btn-lift shadow-[0_18px_50px_-15px_rgba(15,139,158,0.55)]"
          >
            Read the symptom guide
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/education"
            className="group inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors"
          >
            Explore all guides
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-xs text-white/40 max-w-2xl"
        >
          For education only, and not a substitute for professional medical
          advice. If something feels off and stays off, talk with your doctor.
        </motion.p>
      </div>
    </section>
  );
}
