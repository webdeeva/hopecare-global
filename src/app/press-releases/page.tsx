import type { Metadata } from "next";
import Link from "next/link";
import s from "../press/press.module.css";
import { serif, sans } from "../press/fonts";

export const metadata: Metadata = {
  title: "Press Releases & Media | HopeCare Global Inc",
  description: "Press releases, media coverage, and announcements from HopeCare Global Inc.",
  alternates: { canonical: "https://hopecareglobal.org/press-releases" },
};

// Newest first. Add future releases to the top of this list.
const releases = [
  {
    href: "/press/ovatrack-launch",
    date: "2026-10-06",
    label: "October 6, 2026",
    title: "Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms",
    summary: "Dr. Petrina N. Harrison launches OvaTrack, a free mobile app supported by HopeCare Global Inc. that helps women recognize, record, and communicate possible ovarian cancer symptoms.",
  },
];

export default function PressReleasesPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <div className={s.article}>
        <h1 className={s.title}>Press Releases &amp; Media</h1>
        <p>
          Welcome to the HopeCare Global Press &amp; Media center. Here you will find official press releases, 
          media coverage, interviews, and organizational announcements.
        </p>
        <p>
          For media and partnership inquiries, please contact:
        </p>
        <address className={s.contact} style={{ fontStyle: 'normal', border: 'none' }}>
          <strong>HopeCare Global Inc.</strong><br />
          Media &amp; Partnership Inquiries<br />
          Phone: <a href="tel:+18668848838">(866) 884-8838</a><br />
          Email: <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a><br />
          Website: <a href="https://hopecareglobal.org">https://hopecareglobal.org</a>
        </address>

        <h2 className={s.itemTitle} style={{ marginTop: '2rem' }}>Featured Press Releases</h2>
        {releases.map((r) => (
          <article key={r.href} className={s.item} style={{ marginTop: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--rule)' }}>
            <time dateTime={r.date} style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{r.label}</time>
            <h3 className={s.itemTitle} style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}><Link href={r.href}>{r.title}</Link></h3>
            <p>{r.summary}</p>
            <Link href={r.href} style={{ fontWeight: 600, color: 'var(--accent)' }}>Read Full Press Release &rarr;</Link>
          </article>
        ))}
        
        <h2 className={s.itemTitle} style={{ marginTop: '2rem' }}>Media Coverage &amp; Interviews</h2>
        <p style={{ color: 'var(--muted)' }}><em>Future media coverage, interviews, and announcements will be posted here.</em></p>
      </div>
    </main>
  );
}