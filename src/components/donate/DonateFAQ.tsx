"use client";

import { motion } from "motion/react";

const faqs = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. HopeCare Global Inc is a registered 501(c)(3) nonprofit organization. Your gift is tax-deductible to the full extent of the law. You will receive an acknowledgement receipt by email after your gift.",
  },
  {
    q: "Is the PayPal donation page secure?",
    a: "Yes. All donations are processed through PayPal's secure payment system. HopeCare Global does not see or store your card or bank information.",
  },
  {
    q: "Can I give in honor or memory of someone?",
    a: "Absolutely. Email us at support@hopecareglobal.org with the name of the person you'd like to honor or remember, and we'll acknowledge them in our annual report and (with your permission) notify their family.",
  },
  {
    q: "How much of my donation goes to the mission?",
    a: "We are committed to directing the maximum possible share of every gift toward early detection, education, and access to care. Overhead is kept lean. Our annual impact report details exactly how funds are deployed.",
  },
  {
    q: "Can my employer match my gift?",
    a: "Many employers do match charitable donations. Reach out to your HR or community impact team to ask, and we'll be glad to provide any documentation they need.",
  },
  {
    q: "Can I donate by mail or wire?",
    a: "Yes. Email support@hopecareglobal.org for our mailing address, ACH/wire instructions, or to arrange a planned gift.",
  },
];

export function DonateFAQ() {
  return (
    <section className="relative py-24 md:py-32 bg-cream">
      <div className="container-wide grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
            <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
              Questions
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
            Frequently{" "}
            <span className="text-gradient-brand">asked</span>.
          </h2>
          <p className="mt-5 text-base text-ink-soft leading-relaxed max-w-md">
            Couldn&apos;t find what you&apos;re looking for?{" "}
            <a
              href="/contact"
              className="text-teal-deep font-semibold underline-offset-4 hover:underline"
            >
              Reach out
            </a>{" "}
            — we respond within two business days.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl bg-white border border-navy/8 px-6 py-5 open:shadow-[0_10px_30px_-15px_rgba(10,37,64,0.18)] open:border-teal/30 transition-all"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <span className="text-[1.02rem] font-semibold text-navy leading-snug">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="shrink-0 w-7 h-7 rounded-full bg-teal/10 text-teal-deep grid place-items-center text-lg leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[0.95rem] text-ink-soft leading-relaxed">
                {f.a}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
