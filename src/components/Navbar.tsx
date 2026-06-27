"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart, Activity } from "lucide-react";
import { Logo } from "./Logo";

const MotionLink = motion(Link);

const links = [
  { href: "/#mission", label: "Mission" },
  { href: "/#programs", label: "Programs" },
  { href: "/#impact", label: "Impact" },
  { href: "/education", label: "Education", route: true },
  { href: "/#founder", label: "Founder" },
  { href: "/#involved", label: "Get Involved" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-navy/5 shadow-[0_4px_30px_-12px_rgba(10,37,64,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <a href="#top" aria-label="HopeCare Global Inc — home" className="block">
          <Logo size={64} priority />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const className =
              "px-4 py-2 text-sm font-medium text-ink-soft hover:text-teal-deep transition-colors relative group";
            const underline = (
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-teal to-green scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            );
            return l.route ? (
              <Link key={l.href} href={l.href} className={className}>
                {l.label}
                {underline}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className={className}>
                {l.label}
                {underline}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#symptoms"
            className="hidden sm:inline-flex items-center gap-2 btn-lift bg-gradient-to-r from-teal-deep via-teal to-green text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(15,139,158,0.5)]"
          >
            <Activity className="w-4 h-4" strokeWidth={2.5} />
            Know the Signs
          </a>
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-2 btn-lift bg-navy text-cream px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(10,37,64,0.4)] hover:bg-navy-deep"
          >
            <Heart className="w-4 h-4" strokeWidth={2.5} />
            Donate
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2 text-navy"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-navy/5"
          >
            <nav className="container-wide flex flex-col py-6 gap-1">
              {links.map((l, i) => {
                const Tag = l.route ? MotionLink : motion.a;
                return (
                  <Tag
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.06 * i, duration: 0.4 }}
                    className="py-3 px-2 text-lg font-medium text-ink hover:text-teal-deep border-b border-navy/5"
                  >
                    {l.label}
                  </Tag>
                );
              })}
              <a
                href="/#symptoms"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-deep via-teal to-green text-white px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Activity className="w-4 h-4" strokeWidth={2.5} />
                Know the Signs
              </a>
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-navy text-cream px-5 py-3 rounded-full text-sm font-semibold"
              >
                <Heart className="w-4 h-4" strokeWidth={2.5} />
                Donate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
