"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Heart, Activity, ChevronDown, Globe, Search } from "lucide-react";
import { Logo } from "./Logo";

const MotionLink = motion(Link);

const links = [
  {
    label: "Education",
    submenu: [
      { href: "/education/ovarian-cancer-symptoms-early-detection-guide", label: "What is Ovarian Cancer?" },
      { href: "/education/ovarian-cancer-symptoms-risks-quick-reference", label: "Symptoms & Risks" },
      { href: "/education/ovarian-cancer-screening-explained", label: "Detection & Testing" },
      { href: "/#research", label: "Clinical Research" },
      { href: "/#statistics", label: "Data Resources" },
    ],
  },
  {
    label: "Our Work",
    submenu: [
      { href: "/#mission", label: "Mission" },
      { href: "/#programs", label: "Programs" },
      { href: "/#stories", label: "Stories of Hope & Impact" },
      { href: "/#founder", label: "Meet the Founder" },
      { href: "/#involved", label: "Join the Movement" },
    ],
  },
  {
    label: "Podcast",
    submenu: [
      { href: "/#podcast", label: "All Episodes" },
      { href: "/podcast/latest", label: "Latest Release" },
    ],
  },
  { href: "/press-releases", label: "News & Press", route: true },
  {
    label: "Contact",
    submenu: [
      { href: "/contact?topic=General%20inquiry", label: "General Inquiries" },
      { href: "/contact?topic=Press%20/%20media", label: "Media & Press" },
      { href: "/contact?topic=Partnership", label: "Partnerships & Sponsorships" },
      { href: "/donate", label: "Donations" },
      { href: "/contact?topic=Volunteer", label: "Volunteer Opportunities" },
      { href: "/contact?topic=OvaTrack%20Support", label: "OvaTrack App Support" },
    ],
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

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
          ? "bg-teal-soft/85 backdrop-blur-xl border-b border-navy/5 shadow-[0_4px_30px_-12px_rgba(10,37,64,0.12)]"
          : "bg-teal-soft"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-28">
        <a href="/" aria-label="HopeCare Global Inc — home" className="block shrink-0">
          <Logo size={108} priority />
        </a>

        <nav className="hidden xl:flex items-center gap-1">
          {links.map((l) => {
            if (l.submenu) {
              return (
                <div key={l.label} className="relative group">
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium whitespace-nowrap text-ink-soft hover:text-teal-deep transition-colors">
                    {l.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 w-56 bg-cream border border-navy/5 shadow-xl rounded-lg py-2 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto">
                    {l.submenu.map((sub) => (
                      <Link key={sub.href} href={sub.href} className="block px-4 py-2 text-sm text-ink hover:text-teal-deep hover:bg-cream-deep/50">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            const className =
              "px-3 py-2 text-sm font-medium whitespace-nowrap text-ink-soft hover:text-teal-deep transition-colors relative group";
            return (
              <a key={l.href} href={l.href} className={className}>
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden sm:flex items-center gap-1">
            <Globe className="w-4 h-4 text-navy" />
            <select aria-label="Language" className="bg-transparent text-sm font-medium text-navy cursor-pointer">
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
            </select>
          </div>
          <div className="relative hidden sm:block">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              className="flex items-center gap-2 px-3 py-2 text-navy transition-colors"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              <Search className="w-5 h-5" strokeWidth={2.5} />
            </button>
            {searchOpen && (
              <div className="absolute top-full right-0 mt-1 w-72">
                <form action="/search" method="GET" className="flex items-center bg-cream border border-navy/10 shadow-xl rounded-lg overflow-hidden">
                  <input
                    type="text"
                    name="q"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2.5 text-sm text-ink bg-transparent outline-none"
                    autoFocus
                  />
                  <button type="submit" className="px-3 py-2.5 text-navy">
                    <Search className="w-4 h-4" strokeWidth={2.5} />
                  </button>
                </form>
              </div>
            )}
          </div>
          <a
            href="/ovatrack"
            className="hidden md:inline-flex items-center gap-2 btn-lift bg-teal-soft text-navy px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap border border-teal/20"
          >
            <Activity className="w-4 h-4" strokeWidth={2.5} />
            Get OvaTrack
          </a>
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center gap-2 btn-lift bg-navy text-cream px-4 py-2.5 whitespace-nowrap rounded-full text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(10,37,64,0.4)] hover:bg-navy-deep"
          >
            <Heart className="w-4 h-4" strokeWidth={2.5} />
            Donate
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden p-2 -mr-2 text-navy"
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
            className="xl:hidden overflow-hidden bg-cream/95 backdrop-blur-xl border-t border-navy/5"
          >
            <nav className="container-wide flex flex-col py-6 gap-1">
              {links.map((l) => {
                if (l.submenu) {
                    const isOpen = openSubmenu === l.label;
                    return (
                        <div key={l.label}>
                            <button onClick={() => setOpenSubmenu(isOpen ? null : l.label)} className="w-full text-left py-3 px-2 text-lg font-medium text-ink hover:text-teal-deep flex justify-between items-center">
                                {l.label}
                                <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isOpen && (
                                <div className="pl-4 pb-2">
                                    {l.submenu.map(sub => (
                                        <Link key={sub.href} href={sub.href} onClick={() => { setOpen(false); setOpenSubmenu(null); }} className="block py-2 text-ink-soft">
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                }
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="py-3 px-2 text-lg font-medium text-ink hover:text-teal-deep border-b border-navy/5"
                  >
                    {l.label}
                  </a>
                );
              })}
              <div className="flex flex-col sm:flex-row gap-3 pt-5">
                <a href="/ovatrack" onClick={() => setOpen(false)} className="inline-flex justify-center items-center gap-2 bg-teal-soft text-navy px-5 py-3 rounded-full font-semibold border border-teal/20">
                  <Activity className="w-4 h-4" strokeWidth={2.5} />
                  Get OvaTrack
                </a>
                <Link href="/donate" onClick={() => setOpen(false)} className="inline-flex justify-center items-center gap-2 bg-navy text-cream px-5 py-3 rounded-full font-semibold">
                  <Heart className="w-4 h-4" strokeWidth={2.5} />
                  Donate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
