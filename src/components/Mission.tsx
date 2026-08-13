"use client";

import { motion } from "motion/react";

export function Mission() {
  return (
    <section id="mission" className="relative py-28 md:py-36 bg-cream">
      <div className="container-wide grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="kicker text-teal-deep">Our Mission</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]">
            A global stand against a{" "}
            <span className="text-gradient-brand">silent disease</span>.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="space-y-7"
        >
          <p className="text-2xl md:text-[1.7rem] leading-[1.45] text-navy font-display font-medium">
            HopeCare Global Inc was created to advance{" "}
            <span className="text-teal-deep">early detection, education,</span>{" "}
            and{" "}
            <span className="text-teal-deep">access to care</span>{" "}
            for underserved communities — with a focus on ovarian cancer awareness.
          </p>
          <p className="text-lg leading-relaxed text-ink-soft">
            Our work is grounded in clinical expertise, advocacy, and a deep
            commitment to reducing disparities in diagnosis and treatment.
            We&apos;re actively building partnerships and initiatives to drive
            meaningful impact — across borders, across communities, across
            generations.
          </p>

          <div className="pt-2 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Early Detection", body: "Reaching women before stage IV." },
              { label: "Education", body: "Symptoms, risk, real talk." },
              { label: "Access", body: "Care where there was none." },
            ].map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="rounded-2xl bg-white border border-navy/5 p-5 card-lift"
              >
                <div className="font-display text-lg font-semibold text-navy">{p.label}</div>
                <div className="mt-1 text-sm text-ink-mute leading-relaxed">{p.body}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
