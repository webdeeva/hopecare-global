"use client";

import { Apple, Mail, Globe, Heart } from "lucide-react";
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
function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a2 2 0 0 0-2 2" />
      <path d="M15 8c-2 0-3 1-3 3" />
    </svg>
  );
}
function MediumIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M8 10a2 2 0 1 0 0 4h.01" />
      <path d="M12 10a2 2 0 1 0 0 4" />
      <path d="M16 10a2 2 0 1 0 0 4" />
    </svg>
  );
}
function SubstackIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3h18v2.5H3z" />
      <path d="M3 7.5h18v2.5H3z" />
      <path d="M3 12h18l-9 8z" />
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
      { href: "/press", label: "News and Press Releases" },
      { href: "/ovatrack", label: "Download OvaTrack" },
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

function PlayGlyph() {
  return (
    <svg viewBox="0 0 512 512" className="w-6 h-6" aria-hidden>
      <path fill="#00D2FF" d="M47 24C41 28 38 35 38 45v422c0 10 3 17 9 21l246-232L47 24z" />
      <path fill="#00E676" d="M47 24l246 232 66-62L74 12c-11-6-21-6-27 0z" />
      <path fill="#FFCE00" d="M451 233l-92-53-72 68 72 68 92-53c17-10 17-20 0-30z" />
      <path fill="#FF3D00" d="M47 488l246-232 66 62-285 176c-11 6-21 6-27-6z" />
    </svg>
  );
}

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
            <div className="mt-4 text-cream/70 text-sm leading-relaxed">
              <strong className="text-cream">HopeCare Global Inc.</strong><br />
              Mailing Address<br />
              276 5th Avenue<br />
              Suite 704 - 3055<br />
              New York, NY 10001<br />
              United States
            </div>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+18668848838"
                  className="group flex items-center gap-3 text-cream/85 hover:text-teal-soft"
                >
                  <span className="w-9 h-9 rounded-full bg-white/8 grid place-items-center group-hover:bg-teal/20 transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M22 4a4 4 0 0 0-4-4h-4l4-4a4 4 0 0 0-4-4h-4l4 4z" />
                      <rect x="8" y="9" width="7" height="12" rx="2" />
                    </svg>
                  </span>
                  (866) 884-8838
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
                  href="https://hopecareglobal.org"
                  className="group flex items-center gap-3 text-cream/85 hover:text-teal-soft"
                >
                  <span className="w-9 h-9 rounded-full bg-white/8 grid place-items-center group-hover:bg-teal/20 transition-colors">
                    <Globe className="w-4 h-4" />
                  </span>
                  hopecareglobal.org
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 flex-wrap">
              {[
                { Icon: InstagramIcon, href: "https://www.instagram.com/hopecareglobal/", label: "Instagram", color: "text-[#E1306C]" },
                { Icon: FacebookIcon, href: "https://www.facebook.com/HopeCareGlobal", label: "Facebook", color: "text-[#4267B2]" },
                { Icon: LinkedinIcon, href: "https://www.linkedin.com/company/hopecare-global-inc", label: "LinkedIn", color: "text-[#0077b5]" },
                { Icon: YouTubeIcon, href: "https://youtube.com/@hopecareglobalinc", label: "YouTube", color: "text-[#FF0000]" },
                { Icon: TikTokIcon, href: "https://tiktok.com/@hopecareglobal", label: "TikTok", color: "text-[#000000]" },
                { Icon: MediumIcon, href: "https://medium.com/@petrinaharrison80", label: "Medium", color: "text-[#000000]" },
                { Icon: SubstackIcon, href: "https://substack.com/@petrinaharrison", label: "Substack", color: "text-[#FF6719]" },
              ].map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white grid place-items-center transition-all ${color} hover:opacity-80`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Download OvaTrack badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="kicker text-teal-soft text-center">Download OvaTrack</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/ovatrack/id6800895813"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:opacity-90"
              aria-label="Download OvaTrack on the App Store"
            >
              <img src="https://hopecareglobal.org/assets/app-store-badge.svg" alt="Download on the App Store" className="h-14 w-auto" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.hopecareglobal.ovatrack&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:opacity-90"
              aria-label="Download OvaTrack on Google Play"
            >
              <img src="https://hopecareglobal.org/assets/google-play-badge.svg" alt="Get it on Google Play" className="h-14 w-auto" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-cream/55">
            &copy; {new Date().getFullYear()} HopeCare Global, Inc. All rights reserved.
          </p>
          <p className="text-sm text-cream/55 flex items-center gap-2">
            Made with <Heart className="w-3.5 h-3.5 text-teal-bright fill-teal-bright" /> for women everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}