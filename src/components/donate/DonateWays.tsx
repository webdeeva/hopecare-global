"use client";

import { motion } from "motion/react";
import {
  CreditCard,
  Mail,
  Building2,
  Users,
  Calendar,
  Award,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { PAYPAL_URL } from "@/lib/site";
import { trackDonateClick } from "@/lib/gtag";

const CONTACT = (topic: string) => `/contact?topic=${encodeURIComponent(topic)}`;

type Way = {
  icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

const ways: Way[] = [
  {
    icon: CreditCard,
    tag: "Most Popular",
    title: "One-Time Gift",
    body: "Make a single, secure gift through PayPal. Use a debit card, credit card, or your PayPal balance.",
    cta: "Give via PayPal",
    href: PAYPAL_URL,
    external: true,
  },
  {
    icon: Calendar,
    tag: "Sustaining",
    title: "Monthly Giving",
    body: "Become a recurring partner. Steady monthly support is what keeps long-arc community programs running.",
    cta: "Set up a recurring gift",
    href: PAYPAL_URL,
    external: true,
  },
  {
    icon: Award,
    tag: "Tribute",
    title: "In Honor / In Memory",
    body: "Give in honor of a survivor or in memory of someone you've lost. We will acknowledge them in our annual report.",
    cta: "Make a tribute gift",
    href: CONTACT("Tribute gift (in honor / in memory)"),
  },
  {
    icon: Building2,
    tag: "Corporate",
    title: "Corporate Partnership",
    body: "Align your brand with women's health equity. Sponsorship, employee matching, and cause-marketing options available.",
    cta: "Start a conversation",
    href: CONTACT("Corporate sponsorship"),
  },
  {
    icon: Users,
    tag: "Sustained",
    title: "Planned Giving",
    body: "Include HopeCare Global in your will, trust, or beneficiary designations and help fund the long fight.",
    cta: "Learn about legacy giving",
    href: CONTACT("Planned giving"),
  },
  {
    icon: Mail,
    tag: "Mail",
    title: "Mail a Check",
    body: "Prefer to send a check? Reach out and we'll share our mailing address and acknowledgement details.",
    cta: "Get our mailing address",
    href: CONTACT("Mail-in donation address"),
  },
];

export function DonateWays() {
  return (
    <section id="ways" className="relative py-24 md:py-32 bg-mist">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Ways To Give
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
            Six doors into the{" "}
            <span className="text-gradient-brand">work</span>.
          </h2>
          <p className="mt-5 text-lg text-ink-soft leading-relaxed">
            Pick the path that fits you — or open a few. The fight against ovarian cancer doesn&apos;t happen on one channel.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ways.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative rounded-3xl bg-white border border-navy/8 p-7 md:p-8 card-lift overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br from-teal to-green" aria-hidden />

              <div className="relative flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-deep via-teal to-green grid place-items-center text-white shadow-[0_8px_24px_-8px_rgba(15,139,158,0.5)]">
                  <w.icon className="w-5 h-5" strokeWidth={2.2} />
                </div>
                <span className="text-[0.62rem] tracking-[0.22em] uppercase text-teal-deep/80 font-bold">
                  {w.tag}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-navy tracking-tight">
                {w.title}
              </h3>
              <p className="relative mt-2 text-[0.93rem] text-ink-soft leading-relaxed">
                {w.body}
              </p>

              <a
                href={w.href}
                {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(w.href === PAYPAL_URL
                  ? { onClick: () => trackDonateClick("donate_ways") }
                  : {})}
                className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-deep group/link"
              >
                {w.cta}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
