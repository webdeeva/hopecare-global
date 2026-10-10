import type { Metadata } from "next";
import Link from "next/link";
import s from "../press/press.module.css";
import { serif, sans } from "../press/fonts";

export const metadata: Metadata = {
  title: "Dr. Petrina N. Harrison Launches OvaTrack | HopeCare Global Inc",
  description: "Dr. Petrina N. Harrison, nurse scientist, inventor, and founder of HopeCare Global Inc., launches OvaTrack, a free mobile app inspired by her ovarian cancer research.",
};

export default function OvaTrackLaunchPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <article className={s.article}>
        <h1 style={{ color: 'var(--accent)', fontSize: '1.7rem', lineHeight: '1.25', margin: '0 0 .8rem' }}>Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms</h1>
        <p style={{ fontStyle: 'italic', color: 'var(--muted)', borderBottom: '2px solid var(--accent)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
          Dr. Petrina N. Harrison, nurse scientist, inventor, and founder of HopeCare Global Inc., launches OvaTrack, 
          a free mobile app inspired by her ovarian cancer research. OvaTrack helps women recognize, track, 
          and communicate possible ovarian cancer symptoms, transforming Dr. Harrison’s research and advocacy 
          into an accessible tool designed to support earlier recognition and more informed healthcare conversations.
        </p>

        <p>
          <span style={{ color: 'var(--muted)', fontWeight: 'bold' }}>New York, NY — October 6, 2026 —</span> Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, a board-certified clinical nurse specialist and ovarian cancer researcher, has officially launched OvaTrack, a free mobile app designed to help women recognize, record, and communicate possible ovarian cancer symptoms.
        </p>
        <p>
          Supported by HopeCare Global Inc., the 501(c)(3) nonprofit founded by Dr. Harrison, OvaTrack aims to bridge the gap in diagnostic delays by fostering data-informed conversations between women and their healthcare providers.
        </p>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>Empowering women through health literacy</h2>
        <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', color: 'var(--muted)', fontStyle: 'italic' }}>
          &ldquo;Women know when something in their bodies has changed, but too often their concerns are minimized or explained away,&rdquo; says Dr. Harrison. &ldquo;OvaTrack gives women a simple way to document what they are experiencing and speak with greater clarity. It does not diagnose ovarian cancer or replace medical care; it helps women recognize that every symptom is worth hearing.&rdquo;
        </blockquote>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>Bridging research and advocacy</h2>
        <p>
          Developed from Dr. Harrison&rsquo;s 2025 doctoral research at the University at Buffalo, OvaTrack focuses on the critical intersection of patient advocacy and clinical communication. The app provides:
        </p>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li><strong>Consistent symptom documentation:</strong> Track changes over time to provide a clear record for healthcare providers.</li>
          <li><strong>Educational resources:</strong> Information on symptoms, risk factors, and the importance of early evaluation.</li>
          <li><strong>Equitable access:</strong> A free tool designed for all women, with a commitment to serving Black, immigrant, rural, and underserved populations.</li>
        </ul>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>About Dr. Petrina N. Harrison</h2>
        <p>
          Dr. Petrina N. Harrison is a board-certified Adult-Gerontology Clinical Nurse Specialist and Founder/Executive Director of HopeCare Global Inc. Her career is dedicated to ovarian cancer research, patient advocacy, and the development of clinical decision support systems.
        </p>

        <section style={{ marginTop: '2rem', borderTop: '1px solid var(--rule)', paddingTop: '1rem' }}>
          <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>Media contact</h2>
          <address style={{ fontStyle: 'normal' }}>
            HopeCare Global, Inc.<br />
            Media &amp; Partnership Inquiries<br />
            Phone: <a href="tel:+18668848838">(866) 884-8838</a><br />
            Email: <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a><br />
            Website: <a href="https://hopecareglobal.org">https://hopecareglobal.org</a>
          </address>
        </section>

        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '2rem' }}>
          OvaTrack is an educational and symptom-tracking tool. It does not screen for, diagnose, treat, prevent, or rule out ovarian cancer or any other condition.
        </p>
        <p>###</p>
      </article>
    </main>
  );
}