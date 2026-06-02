"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Clock } from "lucide-react";

const ROWS = [
  {
    icon: Mail,
    label: "Email",
    primary: "support@hopecareglobal.org",
    href: "mailto:support@hopecareglobal.org",
  },
  {
    icon: MapPin,
    label: "Where we are",
    primary: "New York · United States",
    secondary: "Programs supported worldwide",
  },
  {
    icon: Clock,
    label: "Response time",
    primary: "Within two business days",
    secondary: "Mon–Fri, 9am–6pm ET",
  },
];

export function ContactDirect() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="lg:pt-4"
    >
      <div className="kicker text-teal-deep">Or reach us directly</div>
      <div className="mt-3 h-px w-16 bg-gradient-to-r from-teal to-green" />

      <ul className="mt-8 space-y-5">
        {ROWS.map((r) => (
          <li key={r.label} className="flex items-start gap-4">
            <span className="shrink-0 w-11 h-11 rounded-xl bg-teal/10 grid place-items-center text-teal-deep">
              <r.icon className="w-4 h-4" strokeWidth={2.4} />
            </span>
            <div className="min-w-0 pt-0.5">
              <div className="text-[0.66rem] tracking-[0.22em] uppercase text-ink-mute font-bold">
                {r.label}
              </div>
              {r.href ? (
                <a
                  href={r.href}
                  className="block mt-1 text-base text-navy font-semibold hover:text-teal-deep transition-colors break-all"
                >
                  {r.primary}
                </a>
              ) : (
                <div className="mt-1 text-base text-navy font-semibold">{r.primary}</div>
              )}
              {r.secondary && (
                <div className="text-[0.82rem] text-ink-mute mt-0.5">
                  {r.secondary}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Soft note */}
      <div className="mt-10 rounded-2xl bg-mist border border-navy/8 p-5">
        <div className="text-[0.66rem] tracking-[0.22em] uppercase text-teal-deep font-bold">
          A note from the team
        </div>
        <p className="mt-3 text-[0.92rem] text-ink-soft leading-relaxed">
          We&apos;re a lean, mission-driven nonprofit — every message is read
          by a real person. If you&apos;re going through a diagnosis and need
          immediate support, please reach out to your care team or call us
          directly. We&apos;ll always make space.
        </p>
      </div>
    </motion.aside>
  );
}
