import type { Metadata } from "next";
import Link from "next/link";
import s from "../press.module.css";
import { serif, sans } from "../fonts";

export const metadata: Metadata = {
  title: "Dr. Petrina N. Harrison Launches OvaTrack | HopeCare Global Inc",
  description: "Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, a board-certified clinical nurse specialist and ovarian cancer researcher, has launched OvaTrack, a free mobile app she created to help women recognize, record, and communicate possible ovarian cancer symptoms.",
};

export default function OvaTrackLaunchPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <article className={s.article}>
        <h1 style={{ color: 'var(--accent)', fontSize: '1.7rem', lineHeight: '1.25', margin: '0 0 .8rem' }}>Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms</h1>
        <p style={{ fontStyle: 'italic', color: 'var(--muted)', borderBottom: '2px solid var(--accent)', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
          New evidence-based tool empowers women to document symptoms, recognize risks, and communicate with healthcare professionals with greater clarity.
        </p>

        <p>
          <span style={{ color: 'var(--muted)', fontWeight: 'bold' }}>New York, NY, October 06, 2026 —</span> Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, a board-certified clinical nurse specialist and ovarian cancer researcher, has launched <strong>OvaTrack</strong>, a free mobile app she created to help women recognize, record, and communicate possible ovarian cancer symptoms. HopeCare Global Inc., the 501(c)(3) nonprofit she founded and leads, is launching and supporting the app. OvaTrack is available now on the Apple App Store and Google Play.
        </p>
        <p>
          Harrison brings more than two decades of nursing experience to a challenge that shaped her doctoral work: helping women and healthcare professionals recognize symptoms that may otherwise be overlooked. OvaTrack gives users a way to document changes over time and bring a clear record to a licensed healthcare professional.
        </p>

        <blockquote style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem', color: 'var(--muted)', fontStyle: 'italic', margin: '1.5rem 0' }}>
          &ldquo;Women know when something in their bodies has changed, but too often their concerns are minimized or explained away,&rdquo; said Dr. Harrison, creator of OvaTrack and Founder and Executive Director of HopeCare Global Inc. &ldquo;OvaTrack gives women a simple way to document what they are experiencing and speak with greater clarity. It does not diagnose ovarian cancer or replace medical care; it helps women recognize that every symptom is worth hearing.&rdquo;
        </blockquote>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>From Doctoral Research to OvaTrack</h2>
        <p>
          As principal investigator and lead researcher for her 2025 Doctor of Nursing Practice scholarly project at the University at Buffalo, Harrison examined diagnostic delays in rural ovarian cancer care through a retrospective chart review and clinical decision support model development. That work informed OvaTrack and her focus on helping women communicate symptoms more clearly.
        </p>
        <p>
          Harrison is also the sole inventor of a separate, patent-pending Clinical Decision Support System for earlier ovarian cancer recognition and risk stratification (U.S. Patent Application No. 19/574,302), derived from her doctoral research. OvaTrack is an education and symptom-tracking app; it is distinct from that clinical decision support system.
        </p>
        <p>
          Her ovarian cancer research has appeared in the Journal of the National Comprehensive Cancer Network, and her manuscript on a clinical decision support model for early ovarian cancer detection has been accepted by the Journal of Doctoral Nursing Practice. She received the 2025 First Place Research Award at the University at Buffalo School of Nursing Research Day and has presented her work at national and international forums.
        </p>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>What OvaTrack Offers</h2>
        <ul style={{ paddingLeft: '1.2rem' }}>
          <li>Simple ovarian cancer symptom tracking over time</li>
          <li>Educational information about symptoms and risk factors</li>
          <li>A record users can share with a primary care provider or other licensed healthcare professional</li>
          <li>Free access, supported by HopeCare Global Inc.</li>
        </ul>
        <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
          OvaTrack is intended for education and personal symptom tracking. It does not screen for, diagnose, treat, prevent, or rule out ovarian cancer or any other condition. Users with concerning, severe, new, frequent, or persistent symptoms should seek advice from a qualified healthcare professional.
        </p>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>About Dr. Petrina N. Harrison</h2>
        <p>
          Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC, is the founder and creator of OvaTrack and Founder and Executive Director of HopeCare Global Inc. A board-certified Adult-Gerontology Clinical Nurse Specialist with certification in infection control, she earned her DNP at the University at Buffalo in 2025 and serves as a Clinical Nurse Specialist at VA Palo Alto Health Care System. Her work spans clinical practice, ovarian cancer research, invention, education, and advocacy. She is a Sigma Global Advocacy Academy Scholar and a Lead Advocate with the Ovarian Cancer Research Alliance.
        </p>

        <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>About HopeCare Global Inc.</h2>
        <p>
          HopeCare Global Inc. is a 501(c)(3) public charity founded by Dr. Petrina N. Harrison in 2026. The nonprofit launches and supports OvaTrack as part of its work in ovarian cancer awareness, symptom education, earlier recognition, patient advocacy, and equitable access to care. Its community education, digital tools, and partnerships center Black, immigrant, rural, and underserved women in the United States and globally.
        </p>

        <section style={{ marginTop: '2rem', borderTop: '1px solid var(--rule)', paddingTop: '1rem' }}>
          <h2 style={{ color: 'var(--accent)', fontSize: '1.05rem', margin: '1.6rem 0 .3rem' }}>Media Contact</h2>
          <address style={{ fontStyle: 'normal' }}>
            HopeCare Global Media Relations<br />
            Nicole Henry<br />
            Phone: <a href="tel:+18668848838">(866) 884-8838</a><br />
            Website: <a href="https://www.hopecareglobal.org">https://www.hopecareglobal.org</a>
          </address>
        </section>

        <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: '2rem' }}>###</p>
      </article>
    </main>
  );
}