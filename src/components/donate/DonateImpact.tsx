"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Stethoscope, GraduationCap, HandHeart } from "lucide-react";

const tiers = [
  {
    icon: GraduationCap,
    amount: "$25",
    title: "Educates",
    body: "Provides symptom-recognition resources to a community of 50+ women, in plain language they can carry home.",
  },
  {
    icon: HandHeart,
    amount: "$100",
    title: "Supports",
    body: "Connects a newly-diagnosed woman with patient navigation — guidance, second opinions, financial-aid options.",
  },
  {
    icon: Stethoscope,
    amount: "$500",
    title: "Evaluations",
    body: "Underwrites a community clinic day so women without insurance still get seen, evaluated, and referred.",
  },
];

export function DonateImpact() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-navy/10 shadow-[0_40px_80px_-30px_rgba(10,37,64,0.35)]"
          >
            <Image
              src="/donate-impact.png"
              alt="A clinical educator speaking with multicultural women in a community clinic setting"
              fill
              sizes="(min-width: 1024px) 45vw, 95vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,139,158,0) 60%, rgba(10,37,64,0.2) 100%)",
              }}
              aria-hidden
            />
          </motion.div>

          {/* Right: copy + tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
              <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
                Your Impact
              </span>
            </div>

            <h2
              className="font-bold text-navy"
              style={{
                fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
              }}
            >
              What your gift{" "}
              <span className="text-gradient-brand">unlocks</span>.
            </h2>

            <p className="mt-5 text-lg text-ink-soft leading-relaxed max-w-xl">
              We work in the rooms where women have been most overlooked.
              Below is what your generosity makes possible — line by line.
            </p>

            <div className="mt-10 space-y-4">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.amount}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                  className="group relative rounded-2xl bg-white border border-navy/8 p-6 card-lift"
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-deep via-teal to-green grid place-items-center text-white shadow-[0_8px_24px_-8px_rgba(15,139,158,0.5)]">
                      <t.icon className="w-5 h-5" strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-3xl font-bold text-navy tracking-tight tabular-nums">
                          {t.amount}
                        </span>
                        <span className="text-[0.7rem] tracking-[0.22em] uppercase text-teal-deep font-bold">
                          {t.title}
                        </span>
                      </div>
                      <p className="mt-2 text-[0.95rem] text-ink-soft leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
