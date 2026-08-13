"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";

const stats = [
  {
    value: 1,
    suffix: " in 78",
    label: "lifetime risk of ovarian cancer for women",
    detail: "Roughly 1 in 78 women will be diagnosed in their lifetime.",
  },
  {
    value: 80,
    suffix: "%",
    label: "diagnosed at late stage",
    detail: "Because early symptoms are vague, and there is no screening test.",
  },
  {
    value: 2.3,
    suffix: "×",
    decimals: 1,
    label: "higher mortality for Black women",
    detail: "Disparities in diagnosis and access compound outcomes.",
  },
  {
    value: 314,
    suffix: "K",
    label: "new cases every year, globally",
    detail: "A worldwide health priority — not just a Western concern.",
  },
];

function Counter({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate(v) {
        setValue(v);
      },
    });
    return () => controls.stop();
  }, [inView, to]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="impact" className="relative py-28 md:py-36 bg-deep-ocean text-white overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.07] pointer-events-none" aria-hidden />

      {/* Decorative wave */}
      <svg
        viewBox="0 0 1440 80"
        className="absolute top-0 left-0 right-0 w-full text-cream"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,40 C320,80 640,0 960,40 C1200,80 1320,20 1440,40 L1440,0 L0,0 Z" fill="currentColor" />
      </svg>

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="kicker text-teal-soft">The Scale of It</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal-soft to-green-bright" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold leading-[1.05]">
            Numbers that demand{" "}
            <span className="text-gradient-light">attention</span>.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Ovarian cancer is called &ldquo;the silent killer&rdquo; for a reason — and the
            silence has been loudest in the communities that have always been hardest to reach.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-7 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] transition-colors"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-gradient-light leading-none">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <div className="mt-4 font-display text-lg text-white/95 leading-snug">
                {s.label}
              </div>
              <div className="mt-3 text-sm text-white/55 leading-relaxed">{s.detail}</div>
              <div className="mt-5 h-px bg-gradient-to-r from-teal-bright/60 via-green-bright/60 to-transparent" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 text-xs text-white/40"
        >
          Sources: American Cancer Society · NIH · WHO IARC GLOBOCAN.
        </motion.p>
      </div>
    </section>
  );
}
