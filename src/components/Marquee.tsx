"use client";

const phrases = [
  "Early Detection Saves Lives",
  "Know the Symptoms",
  "Bloating",
  "Pelvic Pain",
  "Feeling Full Quickly",
  "Frequent Urination",
  "Listen to Your Body",
  "Talk to Your Doctor",
  "You Deserve to Be Heard",
];

export function Marquee() {
  const loop = [...phrases, ...phrases];
  return (
    <div className="relative py-10 bg-gradient-to-r from-navy via-teal-deep to-navy text-cream overflow-hidden border-y border-white/10">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((p, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 font-display text-2xl md:text-3xl">
            <RibbonSm />
            <span className="text-cream/95">{p}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function RibbonSm() {
  return (
    <svg width="22" height="28" viewBox="0 0 22 28" fill="none" className="shrink-0">
      <defs>
        <linearGradient id="rmg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a4d65e" />
          <stop offset="100%" stopColor="#14b5cc" />
        </linearGradient>
      </defs>
      <path d="M 4 2 L 11 11 L 18 2 L 13 26 L 9 26 Z" fill="url(#rmg)" />
    </svg>
  );
}
