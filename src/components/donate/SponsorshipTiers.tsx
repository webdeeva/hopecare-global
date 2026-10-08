"use client";

import { motion } from "motion/react";

const tiers = [
  {
    tag: "Bronze",
    title: "Community Advocate",
    amount: "$2,500",
    impact: "Funds one full community-led education workshop for 50+ women.",
  },
  {
    tag: "Silver",
    title: "Equity Champion",
    amount: "$5,000",
    impact: "Supports tailored screening materials for 500 women.",
  },
  {
    tag: "Gold",
    title: "Mission Partner",
    amount: "$10,000",
    impact: "Funds a pilot project helping 10 women navigate to specialist screening.",
  },
  {
    tag: "Platinum",
    title: "Visionary Donor",
    amount: "$25,000+",
    impact: "Funds a regional Ovarian Cancer Awareness Month campaign.",
  },
];

export function SponsorshipTiers() {
  return (
    <section className="py-24 bg-white">
      <div className="container-wide">
        <h2 className="text-4xl font-bold text-navy mb-12">Sponsorship Tiers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div key={tier.tag} className="p-6 border border-navy/10 rounded-2xl bg-mist/50">
              <span className="text-teal-deep font-bold text-sm uppercase">{tier.tag}</span>
              <h3 className="text-xl font-bold text-navy mt-2">{tier.title}</h3>
              <p className="text-3xl font-extrabold text-teal mt-2">{tier.amount}</p>
              <p className="mt-4 text-ink-soft text-sm">{tier.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
