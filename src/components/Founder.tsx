"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, Mail, Quote, BadgeCheck, Stethoscope, GraduationCap } from "lucide-react";

const credentials = [
  { label: "DNP", desc: "Doctor of Nursing Practice" },
  { label: "APRN", desc: "Advanced Practice Registered Nurse" },
  { label: "AGCNS-BC", desc: "Adult-Gerontology CNS, Board-Certified" },
  { label: "CIC", desc: "Certified in Infection Control" },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-36 bg-cream overflow-hidden">
      {/* Soft accent */}
      <div
        className="absolute top-1/3 -left-40 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle, #d4ecf0, transparent 65%)" }}
        aria-hidden
      />

      <div className="container-wide relative grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(10,37,64,0.45)] ring-1 ring-navy/10">
            {/* Real portrait */}
            <Image
              src="/founder.png"
              alt="Dr. Petrina Harrison — Founder & Executive Director, HopeCare Global Inc"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-top"
              priority={false}
            />

            {/* Soft top sheen for caption legibility on hover */}
            <div
              className="absolute inset-x-0 top-0 h-32 pointer-events-none"
              style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18), transparent)" }}
              aria-hidden
            />
            {/* Bottom gradient for name plate */}
            <div
              className="absolute inset-x-0 bottom-0 h-44 pointer-events-none"
              style={{ background: "linear-gradient(180deg, transparent, rgba(10,37,64,0.55) 70%, rgba(10,37,64,0.78))" }}
              aria-hidden
            />

            {/* Ribbon corner badge */}
            <div className="absolute top-5 right-5 w-14 h-14 rounded-full bg-white/95 backdrop-blur grid place-items-center shadow-lg">
              <RibbonIcon />
            </div>

            {/* Name plate */}
            <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
              <div className="rounded-2xl bg-white/14 backdrop-blur-md border border-white/25 px-5 py-3.5">
                <div className="text-white/75 text-[0.62rem] tracking-[0.22em] uppercase font-semibold">
                  Founder &amp; Executive Director
                </div>
                <div className="mt-1 font-display text-white text-xl font-bold leading-tight">
                  Dr. Petrina Harrison
                </div>
              </div>
            </div>
          </div>

          {/* Credential ribbon strip below card */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {credentials.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className="rounded-xl bg-white border border-navy/5 px-4 py-3 flex items-center gap-2.5"
              >
                <BadgeCheck className="w-4 h-4 text-teal shrink-0" strokeWidth={2.5} />
                <div className="min-w-0">
                  <div className="font-semibold text-navy text-sm">{c.label}</div>
                  <div className="text-[0.7rem] text-ink-mute leading-tight truncate">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="kicker text-teal-deep">Founder &amp; Executive Director</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]">
            Dr. Petrina <span className="font-script text-gradient-brand">Harrison</span>
          </h2>
          <p className="mt-3 text-lg text-ink-mute font-medium">
            DNP, APRN, AGCNS-BC, CIC
          </p>

          <div className="mt-8 relative pl-6 border-l-2 border-teal/40">
            <Quote className="absolute -left-4 -top-2 w-7 h-7 text-teal bg-cream" />
            <p className="font-display text-2xl text-navy leading-[1.4] italic">
              &ldquo;Every woman deserves to be seen, screened, and supported —
              regardless of zip code, color, or country.&rdquo;
            </p>
          </div>

          <div className="mt-8 space-y-4 text-ink-soft leading-relaxed text-lg">
            <p>
              Dr. Harrison is a board-certified Adult-Gerontology Clinical Nurse
              Specialist whose career has been spent at the intersection of
              acute clinical care, infection prevention, and community advocacy.
            </p>
            <p>
              She founded HopeCare Global Inc to channel decades of bedside
              experience into the fight against a disease that has hidden in
              plain sight — particularly in Black, immigrant, and underserved
              communities.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="tel:+13478686842"
              className="group inline-flex items-center gap-3 btn-lift bg-white text-navy px-5 py-3 rounded-full border border-navy/10 font-medium"
            >
              <span className="w-9 h-9 rounded-full bg-teal/10 grid place-items-center text-teal-deep">
                <Phone className="w-4 h-4" strokeWidth={2.5} />
              </span>
              (347) 868-6842
            </a>
            <a
              href="mailto:support@hopecareglobal.org"
              className="group inline-flex items-center gap-3 btn-lift bg-white text-navy px-5 py-3 rounded-full border border-navy/10 font-medium"
            >
              <span className="w-9 h-9 rounded-full bg-teal/10 grid place-items-center text-teal-deep">
                <Mail className="w-4 h-4" strokeWidth={2.5} />
              </span>
              support@hopecareglobal.org
            </a>
          </div>

          {/* Expertise tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { Icon: Stethoscope, label: "Clinical Practice" },
              { Icon: GraduationCap, label: "Nursing Education" },
              { Icon: BadgeCheck, label: "Infection Control" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/8 text-teal-deep text-sm font-medium border border-teal/15"
                style={{ backgroundColor: "rgba(15,139,158,0.08)" }}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RibbonIcon() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
      <defs>
        <linearGradient id="ribCorner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14b5cc" />
          <stop offset="100%" stopColor="#086b7d" />
        </linearGradient>
      </defs>
      <path d="M 6 2 L 14 14 L 22 2 L 16 34 L 12 34 Z" fill="url(#ribCorner)" />
      <path d="M 9 5 L 13 13 L 12 34" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" fill="none" />
    </svg>
  );
}

