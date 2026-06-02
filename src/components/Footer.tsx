"use client";

import { Phone, Mail, Globe, Heart } from "lucide-react";
import { Logo } from "./Logo";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navGroups = [
  {
    title: "Explore",
    links: [
      { href: "#mission", label: "Mission" },
      { href: "#programs", label: "Programs" },
      { href: "#impact", label: "Impact" },
      { href: "#founder", label: "Founder" },
    ],
  },
  {
    title: "Take Action",
    links: [
      { href: "/donate", label: "Donate" },
      { href: "/contact?topic=Volunteer", label: "Volunteer" },
      { href: "/contact?topic=Partnership", label: "Partner With Us" },
      { href: "#newsletter", label: "Newsletter" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-deep text-cream pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-[0.05] pointer-events-none" aria-hidden />
      {/* Top accent ribbon */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal via-teal-bright to-green" aria-hidden />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12">
          {/* Brand */}
          <div>
            <Logo size={96} />
            <p className="mt-6 text-cream/70 leading-relaxed max-w-sm">
              Advancing early detection, education, and access to care through
              ovarian cancer awareness and global outreach.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/15 border border-teal/30">
              <span className="w-2 h-2 rounded-full bg-green-bright animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-teal-soft">
                Non-Profit · 501(c)(3) Organization
              </span>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((g) => (
            <div key={g.title}>
              <div className="kicker text-teal-soft">{g.title}</div>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-cream/80 hover:text-teal-soft transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="kicker text-teal-soft">Contact</div>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="tel:+13478686842" className="group flex items-center gap-3 text-cream/85 hover:text-teal-soft">
                  <span className="w-9 h-9 rounded-full bg-white/8 grid place-items-center group-hover:bg-teal/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  (347) 868-6842
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@hopecareglobal.org"
                  className="group flex items-center gap-3 text-cream/85 hover:text-teal-soft break-all"
                >
                  <span className="w-9 h-9 rounded-full bg-white/8 grid place-items-center group-hover:bg-teal/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  support@hopecareglobal.org
                </a>
              </li>
              <li>
                <a
                  href="https://www.hopecareglobal.org"
                  className="group flex items-center gap-3 text-cream/85 hover:text-teal-soft"
                >
                  <span className="w-9 h-9 rounded-full bg-white/8 grid place-items-center group-hover:bg-teal/20 transition-colors">
                    <Globe className="w-4 h-4" />
                  </span>
                  www.hopecareglobal.org
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: InstagramIcon, href: "#", label: "Instagram" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/hopecare-global-inc", label: "LinkedIn" },
                { Icon: FacebookIcon, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/8 grid place-items-center text-cream/80 hover:bg-teal hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-cream/55">
            © {new Date().getFullYear()} HopeCare Global Inc. All rights reserved.
          </p>
          <p className="text-sm text-cream/55 flex items-center gap-2">
            Made with <Heart className="w-3.5 h-3.5 text-teal-bright fill-teal-bright" /> for women everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
