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
    href: "https://www.nccn.org/patients/guidelines/content/PDF/ovarian-patient.pdf",
    date: "2026-10-29",
    label: "October 29, 2026",
    title: "New Resource: NCCN Ovarian Cancer Patient Guidelines",
    summary:
      "Essential information for patients and families on understanding ovarian cancer diagnosis, treatment options, and care, now available via the National Comprehensive Cancer Network.",
  },
  {
    href: "/press/ovatrack-why-i-created",
    date: "2026-10-16",
    label: "October 16, 2026",
    title: "Why I Created OvaTrack: Turning Ovarian Cancer Awareness Into Action",
    summary:
      "Dr. Petrina Harrison shares the purpose behind OvaTrack and how symptom tracking can help women prepare for informed healthcare conversations. Read on Medium or Substack.",
  },
  {
    href: "/press/impact-act",
    date: "2026-10-01",
    label: "October 1, 2026",
    title: "Ovarian Cancer IMPACT Act: Advancing Awareness, Access, and Health Equity",
    summary:
      "A bipartisan, bicameral bill introduced in Congress to expand insurance coverage for genetic testing, improve access to gynecologic oncology care in underserved communities, and reauthorize Johanna\u2019s Law. HopeCare Global responds with full support.",
  },
  {
    href: "https://www.pr.com/press-release/980397",
    date: "2026-10-06",
    label: "October 6, 2026",
    title: "Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms",
    summary:
      "A free mobile app to help women recognize, record, and communicate possible ovarian cancer symptoms, supported by HopeCare Global Inc.",
  },
];

export default function PressPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <div className={s.article}>
        <h1 className={s.title}>News and Press Releases</h1>
        <p>
          Press releases and media resources from HopeCare Global Inc. For media inquiries, call{" "}
          <a href="tel:+18668848838">(866) 884-8838</a> or email{" "}
          <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a>.
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