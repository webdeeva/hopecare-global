import type { Metadata } from "next";
import Link from "next/link";
import s from "./press.module.css";
import { serif, sans } from "./fonts";

export const metadata: Metadata = {
  title: "News & Press | HopeCare Global Inc",
  description: "Press releases and media resources from HopeCare Global Inc.",
  alternates: { canonical: "https://hopecareglobal.org/press" },
};

// Newest first. Add future releases to the top of this list.
const releases = [
  {
    href: "/press/ovatrack-launch",
    date: "2026-10-06",
    label: "October 6, 2026",
    title: "Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms",
    summary: "A free mobile app to help women recognize, record, and communicate possible ovarian cancer symptoms, supported by HopeCare Global Inc.",
  },
];

export default function PressPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <div className={s.article}>
        <h1 className={s.title}>News &amp; Press</h1>
        <p>
          Press releases and media resources from HopeCare Global Inc. For media inquiries, call{" "}
          <a href="tel:+18668848838">(866) 884-8838</a> or email{" "}
          <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a>.
        </p>
        <p>
          <a href="/press/Petrina_Harrison_EPK.pdf" target="_blank" rel="noopener">
            Download Dr. Harrison&rsquo;s Electronic Press Kit (PDF)
          </a>
        </p>
        {releases.map((r) => (
          <article key={r.href} className={s.item}>
            <time dateTime={r.date}>{r.label}</time>
            <h2 className={s.itemTitle}><Link href={r.href}>{r.title}</Link></h2>
            <p>{r.summary}</p>
          </article>
        ))}
      </div>
    </main>
  );
}