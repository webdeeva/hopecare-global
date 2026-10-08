import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import s from "../press.module.css";
import { serif, sans } from "../fonts";

const TITLE = "Dr. Petrina N. Harrison Launches OvaTrack to Help Women Track Possible Ovarian Cancer Symptoms";
const DESC = "Dr. Petrina N. Harrison launches OvaTrack, a free mobile app supported by HopeCare Global Inc. that helps women recognize, record, and communicate possible ovarian cancer symptoms.";
const PHOTO = "/press/ovatrack-launch/dr-petrina-harrison.jpg";

export const metadata: Metadata = {
  title: `${TITLE} | HopeCare Global Inc`,
  description: DESC,
  alternates: { canonical: "https://hopecareglobal.org/press/ovatrack-launch" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article", title: TITLE, description: DESC,
    url: "https://hopecareglobal.org/press/ovatrack-launch",
    siteName: "HopeCare Global Inc", publishedTime: "2026-10-06",
    images: [{ url: `https://hopecareglobal.org${PHOTO}`, width: 1200, height: 1750, alt: "Dr. Petrina N. Harrison" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: [`https://hopecareglobal.org${PHOTO}`] },
};

export default function OvaTrackLaunch() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <article className={s.article}>
        <p className={s.crumb}><Link href="/press">News &amp; Press</Link></p>
        <p className={s.release}>For immediate release</p>
        <h1 className={s.title}>{TITLE}</h1>

        <figure className={s.figure}>
          <Image src={PHOTO} alt="Dr. Petrina N. Harrison, DNP, APRN, AGCNS-BC, CIC" width={1200} height={1750} priority sizes="(max-width: 560px) 320px, 280px" />
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

        <h2 className={s.h2}>Empowering women through health literacy</h2>
        <blockquote className={s.quote}>
          &ldquo;Women know when something in their bodies has changed, but too often their concerns are minimized or explained away,&rdquo; says Dr. Harrison. &ldquo;OvaTrack gives women a simple way to document what they are experiencing and speak with greater clarity. It does not diagnose ovarian cancer or replace medical care; it helps women recognize that every symptom is worth hearing.&rdquo;
        </blockquote>

        <h2 className={s.h2}>Bridging research and advocacy</h2>
        <p>
          Developed from Dr. Harrison&rsquo;s 2025 doctoral research at the University at Buffalo, OvaTrack focuses on the critical intersection of patient advocacy and clinical communication. The app provides:
        </p>
        <ul className={s.list}>
          <li><strong>Consistent symptom documentation:</strong> Track changes over time to provide a clear record for healthcare providers.</li>
          <li><strong>Educational resources:</strong> Information on symptoms, risk factors, and the importance of early evaluation.</li>
          <li><strong>Equitable access:</strong> A free tool designed for all women, with a commitment to serving Black, immigrant, rural, and underserved populations.</li>
        </ul>

        <h2 className={s.h2}>About Dr. Petrina N. Harrison</h2>
        <p>
          Dr. Petrina N. Harrison is a board-certified Adult-Gerontology Clinical Nurse Specialist and Founder/Executive Director of HopeCare Global Inc. Her career is dedicated to ovarian cancer research, patient advocacy, and the development of clinical decision support systems.
        </p>

        <section className={s.kit}>
          <h2 className={s.h2}>Media kit</h2>
          <p>View Dr. Harrison&rsquo;s Electronic Press Kit, including her biography, credentials, research, and speaking topics.</p>
          <a className={s.btn} href="/press/Petrina_Harrison_EPK.pdf" target="_blank" rel="noopener">Open the EPK (PDF)</a>
        </section>

        <h2 className={s.h2}>Get involved</h2>
        <p>
          Learn more about the initiative and download the app at <Link href="/ovatrack">hopecareglobal.org/ovatrack</Link>.
        </p>

        <address className={s.contact}>
          <h2 className={s.h2} style={{ marginTop: 0 }}>Media contact</h2>
          HopeCare Global, Inc.<br />
          Media &amp; Partnership Inquiries<br />
          <a href="tel:+18668848838">(866) 884-8838</a><br />
          <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a><br />
          <a href="https://hopecareglobal.org">hopecareglobal.org</a>
        </address>

        <p className={s.disclaimer}>
          OvaTrack is an educational and symptom-tracking tool. It does not screen for, diagnose, treat, prevent, or rule out ovarian cancer or any other condition.
        </p>
        <p className={s.end}>###</p>
      </article>
    </main>
  );
}