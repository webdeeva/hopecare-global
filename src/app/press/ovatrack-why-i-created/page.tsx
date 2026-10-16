import type { Metadata } from "next";
import Link from "next/link";
import s from "../press.module.css";
import { serif, sans } from "../fonts";

export const metadata: Metadata = {
  title: "Why I Created OvaTrack: Turning Ovarian Cancer Awareness Into Action | HopeCare Global Inc",
  description:
    "Dr. Petrina Harrison shares the purpose behind OvaTrack and how symptom tracking can help women prepare for informed healthcare conversations.",
  alternates: { canonical: "https://hopecareglobal.org/press/ovatrack-why-i-created" },
};

export default function WhyICreatedOvaTrackPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <div className={s.article}>

        <p className={s.crumb}>
          <Link href="/press">News &amp; Press Releases</Link> &rsaquo; Why I Created OvaTrack
        </p>

        <p className={s.release}>NEWS &amp; INSIGHT</p>

        <h1 className={s.title}>
          Why I Created OvaTrack: Turning Ovarian Cancer Awareness Into Action
        </h1>

        <p className={s.dateline}><strong>October 16, 2026</strong></p>

        <div className={s.figure}>
          <img
            src="/press/ovatrack-why-i-created/dr-petrina-harrison.jpg"
            alt="Dr. Petrina N. Harrison, Founder and Executive Director of HopeCare Global Inc."
          />
          <p className={s.caption}>
            Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC &mdash; Founder and Executive Director,
            HopeCare Global Inc.
          </p>
        </div>

        <p>
          Dr. Petrina Harrison shares the purpose behind OvaTrack and how symptom tracking can help
          women prepare for informed healthcare conversations.
        </p>

        <div className={s.kit}>
          <h2 className={s.h2}>Read the Article</h2>
          <p>
            <a
              className={s.btn}
              href="https://petrinaharrison80.medium.com/why-i-created-ovatrack-turning-ovarian-cancer-awareness-into-action-b29ef29b27cd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Medium
            </a>
          </p>
          <p>
            <a
              className={s.btn}
              href="https://substack.com/@petrinaharrison/note/p-220650858?r=8uet8u&utm_medium=ios&utm_source=notes-share-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Substack
            </a>
          </p>
        </div>

        <div className={s.disclaimer}>
          HopeCare Global Inc is a 501(c)(3) non-profit organization. OvaTrack is intended for
          education and personal symptom tracking. It does not screen for, diagnose, treat, prevent,
          or rule out ovarian cancer or any other condition.
        </div>

      </div>
    </main>
  );
}
