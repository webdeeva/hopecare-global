"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Dna,
  Users,
  Stethoscope,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const focus = [
  {
    icon: Dna,
    name: "Hereditary Risks",
    detail: "Understanding the role of BRCA1/2, Lynch syndrome, and genetic mutations.",
  },
  {
    icon: Users,
    name: "Family History",
    detail: "Mapping your lineage to identify patterns and potential familial risks.",
  },
  {
    icon: Stethoscope,
    name: "Genetic Counseling",
    detail: "Clinical pathways for genetic testing and professional risk assessment.",
  },
  {
    icon: ShieldCheck,
    name: "Proactive Management",
    detail: "Evidence-based strategies: enhanced screening and preventative care.",
  },
];

export function HereditaryFocusCTA() {
  return (
    <section
      id="hereditary-focus"
      className="relative scroll-mt-24 py-24 md:py-32 bg-navy text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.2] pointer-events-none" aria-hidden />
      
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="text-teal-soft uppercase tracking-[0.2em] text-xs font-bold">Clinical Focus</div>
          <h2 className="font-bold mt-6 text-4xl md:text-5xl leading-tight">
            Hereditary Cancer Awareness:{" "}
            <span className="text-teal-bright">A Clinician’s Guide.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl">
            Knowledge of hereditary risks is fundamental to early detection. 
            Empower your practice with actionable guidance on genetic markers, family lineage mapping, and clinical prevention strategies.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {focus.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-teal/30 transition-all"
            >
              <f.icon className="w-8 h-8 text-teal-bright mb-4" />
              <h3 className="font-semibold text-white/95">{f.name}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Link
            href="/education/hereditary-ovarian-cancer-risk"
            className="inline-flex items-center gap-2 bg-teal text-navy px-8 py-4 rounded-full font-bold hover:bg-teal-bright transition-all"
          >
            Access Clinical Resources
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
