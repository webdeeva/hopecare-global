import type { Metadata } from "next";
import Link from "next/link";
import s from "../press.module.css";
import { serif, sans } from "../fonts";

export const metadata: Metadata = {
  title: "Ovarian Cancer IMPACT Act: Advancing Awareness, Access, and Health Equity | HopeCare Global Inc",
  description: "A bipartisan, bicameral bill to expand insurance coverage for genetic testing, improve access to gynecologic oncology care, and reauthorize Johanna\u2019s Law for gynecologic cancer education.",
  alternates: { canonical: "https://hopecareglobal.org/press/impact-act" },
};

export default function ImpactActPage() {
  return (
    <main className={`${s.page} ${serif.variable} ${sans.variable}`}>
      <div className={s.article}>

        <p className={s.crumb}>
          <Link href="/press">News &amp; Press Releases</Link> &rsaquo; Ovarian Cancer IMPACT Act
        </p>

        <p className={s.release}>PRESS RELEASE</p>

        <h1 className={s.title}>
          Ovarian Cancer IMPACT Act: Advancing Awareness, Access, and Health Equity
        </h1>

        <p className={s.dateline}><strong>October 1, 2026</strong></p>

        <p>
          <strong>Washington, D.C.</strong> &mdash; A bipartisan, bicameral bill has been introduced in
          the United States Congress to expand insurance coverage for genetic testing, improve access to
          gynecologic oncology care in underserved communities, and reauthorize <strong>Johanna&rsquo;s Law</strong>,
          the federal law that funds gynecologic cancer education and awareness.
        </p>

        <h2 className={s.h2}>The Ovarian Cancer IMPACT Act</h2>

        <p>
          The Ovarian Cancer <strong>IM</strong>proving <strong>P</strong>revention, <strong>A</strong>wareness,
          <strong>C</strong>are, and <strong>T</strong>reatment (IMPACT) Act represents a critical step forward
          in the fight against ovarian cancer. The legislation addresses three key priorities:
        </p>

        <ul className={s.list}>
          <li>
            <strong>Expand insurance coverage for genetic testing</strong> &mdash; Removing financial barriers
            so more women can access BRCA and other hereditary cancer screening, particularly in communities
            that have been historically underserved.
          </li>
          <li>
            <strong>Improve access to gynecologic oncology care</strong> &mdash; Investing in infrastructure,
            telehealth, and provider education to ensure women in rural and low-resource areas can receive
            timely, expert care.
          </li>
          <li>
            <strong>Reauthorize Johanna&rsquo;s Law</strong> &mdash; Renewing federal funding for gynecologic
            cancer education, early detection awareness, and public health campaigns that save lives through
            knowledge.
          </li>
        </ul>

        <h2 className={s.h2}>Congressional Leadership</h2>

        <p>
          The bill is led in the Senate by <strong>Senator Elissa Slotkin</strong> (D-MI) and
          <strong>Senator Katie Britt</strong> (R-AL), and in the House by <strong>Representative Rosa DeLauro</strong>
          (D-CT) and <strong>Representative Don Bacon</strong> (R-NE). This bipartisan, bicameral sponsorship
          reflects the shared commitment across party lines to addressing the devastating impact of ovarian
          cancer on American families.
        </p>

        <h2 className={s.h2}>HopeCare Global&rsquo;s Response</h2>

        <div className={s.quote}>
          &ldquo;This legislation directly advances every pillar of our mission &mdash; early detection,
          education, and equitable access to care regardless of zip code or color. Every woman deserves
          to be seen, screened, and supported. HopeCare is engaged and advocating for this critical
          legislation.&rdquo;
        </div>

        <p>
          &mdash; <strong>Dr. Petrina Harrison</strong>, DNP, APRN, AGCNS-BC, CIC<br />
          Founder, HopeCare Global Inc
        </p>

        <p>
          HopeCare Global Inc is actively monitoring the progress of the IMPACT Act and will continue
          to advocate for policies that advance early detection, education, and health equity for women
          everywhere. We encourage our community to learn more about the bill and join us in supporting
          this essential legislation.
        </p>

        <h2 className={s.h2}>Get Involved</h2>

        <p>
          To stay informed about the IMPACT Act and HopeCare Global&rsquo;s advocacy efforts, explore
          our comprehensive breakdown:
        </p>

        <div className={s.kit}>
          <h3 className={s.h2}>Learn More</h3>
          <p>
            <Link href="/education/ovarian-cancer-impact-act-explained" className={s.btn}>
              Read the Full Breakdown
            </Link>
          </p>
          <p>
            For media inquiries, call <a href="tel:+18668848838">(866) 884-8838</a> or email
            <a href="mailto:support@hopecareglobal.org">support@hopecareglobal.org</a>.
          </p>
        </div>

        <div className={s.disclaimer}>
          HopeCare Global Inc is a 501(c)(3) non-profit organization. This article is provided for
          educational and advocacy purposes only. HopeCare Global does not provide legal or medical advice.
        </div>

      </div>
    </main>
  );
}