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
        <h1>Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms</h1>
        <p className={s.sum}>
          Dr. Petrina N. Harrison, nurse scientist, inventor, and founder of HopeCare Global Inc., launches OvaTrack, 
          a free mobile app inspired by her ovarian cancer research. OvaTrack helps women recognize, track, 
          and communicate possible ovarian cancer symptoms, transforming Dr. Harrison’s research and advocacy 
          into an accessible tool designed to support earlier recognition and more informed healthcare conversations.
        </p>

        {/* Hero Image - placeholder for now */}
        <figure style={{ marginBottom: '2rem' }}>
          <img src="/images/ovatrack-hero.jpg" alt="Dr. Petrina N. Harrison" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <figcaption className={s.caption}>
            Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, creator of OvaTrack and Founder and Executive Director of HopeCare Global Inc.
          </figcaption>
        </figure>

        <p>
          <span className={s.dateline}>New York, NY — October 6, 2026 —</span> Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, a board-certified clinical nurse specialist and ovarian cancer researcher, has officially launched OvaTrack, a free mobile app designed to help women recognize, record, and communicate possible ovarian cancer symptoms.
        </p>
        <p>
          Supported by HopeCare Global Inc., the 501(c)(3) nonprofit founded by Dr. Harrison, OvaTrack aims to bridge the gap in diagnostic delays by fostering data-informed conversations between women and their healthcare providers.
        </p>

        <h2>Empowering women through health literacy</h2>
        <blockquote className={s.quote}>
          &ldquo;Women know when something in their bodies has changed, but too often their concerns are minimized or explained away,&rdquo; says Dr. Harrison. &ldquo;OvaTrack gives women a simple way to document what they are experiencing and speak with greater clarity. It does not diagnose ovarian cancer or replace medical care; it helps women recognize that every symptom is worth hearing.&rdquo;
        </blockquote>

        <h2>Bridging research and advocacy</h2>
        <p>
          Developed from Dr. Harrison&rsquo;s 2025 doctoral research at the University at Buffalo, OvaTrack focuses on the critical intersection of patient advocacy and clinical communication. The app provides:
        </p>
        <ul>
          <li><strong>Consistent symptom documentation:</strong> Track changes over time to provide a clear record for healthcare providers.</li>
          <li><strong>Educational resources:</strong> Information on symptoms, risk factors, and the importance of early evaluation.</li>
          <li><strong>Equitable access:</strong> A free tool designed for all women, with a commitment to serving Black, immigrant, rural, and underserved populations.</li>
        </ul>

        <h2>About Dr. Petrina N. Harrison</h2>
        <p>
          Dr. Petrina N. Harrison is a board-certified Adult-Gerontology Clinical Nurse Specialist and Founder/Executive Director of HopeCare Global Inc. Her career is dedicated to ovarian cancer research, patient advocacy, and the development of clinical decision support systems.
        </p>

        <section className={s.kit}>
          <h2>Media kit</h2>
          <p>View Dr. Harrison&rsquo;s Electronic Press Kit, including her biography, credentials, research, and speaking topics.</p>
          <Link href="/downloads/Petrina_Harrison_EPK.txt" className={s.btn}>Open the EPK (coming soon)</Link>
        </section>

        <h2>Get involved</h2>
        <p>
          Learn more about the initiative and download the app at <Link href="/ovatrack">hopecareglobal.org/ovatrack</Link>.
        </p>

        <address className={s.contact}>
          <h2>Media contact</h2>
          HopeCare Global, Inc.<br />
          Media &amp; Partnership Inquiries<br />
          Phone: <a href="tel:+18668848838">(866) 884-8838</a><br />
          Email: <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a><br />
          Website: <a href="https://hopecareglobal.org">https://hopecareglobal.org</a>
        </address>

        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '2rem' }}>
          OvaTrack is an educational and symptom-tracking tool. It does not screen for, diagnose, treat, prevent, or rule out ovarian cancer or any other condition.
        </p>
        <p>###</p>
      </article>
    </main>
  );
}