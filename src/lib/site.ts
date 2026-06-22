// ─────────────────────────────────────────────────────────────
// Site-wide constants + the canonical Organization/WebSite entity
// graph used for JSON-LD. The canonical host is the NON-www domain
// (www 301-redirects to it), so every URL here is non-www.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = "https://hopecareglobal.org";
export const SITE_NAME = "HopeCare Global Inc";
export const SITE_TAGLINE =
  "Ovarian cancer awareness, early detection, education, and equitable access to care.";

/** PayPal hosted donation button (used by the donate CTAs). */
export const PAYPAL_URL = "https://www.paypal.com/ncp/payment/88ZQAFSLWAJJY";

export const SUPPORT_EMAIL = "support@hopecareglobal.org";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Absolute url helper for a site-relative path. */
export function abs(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Organization (NGO) + WebSite entity graph. Rendered site-wide in the
 * root layout so AI engines and crawlers have a stable entity to anchor
 * to, cross-linked by @id.
 */
export function orgWebsiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["NGO", "Organization"],
        "@id": ORG_ID,
        name: SITE_NAME,
        alternateName: "HopeCare Global",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: abs("/logo-clean.png"),
        },
        image: abs("/logo-clean.png"),
        description:
          "HopeCare Global Inc is a 501(c)(3) nonprofit advancing ovarian cancer awareness, early detection, education, and equitable access to care for women worldwide.",
        email: SUPPORT_EMAIL,
        nonprofitStatus: "Nonprofit501c3",
        founder: { "@type": "Person", name: "Dr. Petrina Harrison" },
        sameAs: ["https://www.linkedin.com/company/hopecare-global-inc"],
        knowsAbout: [
          "Ovarian cancer",
          "Ovarian cancer symptoms",
          "Early detection",
          "Women's health",
          "Health equity",
          "Cancer survivorship",
        ],
        areaServed: "Worldwide",
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
        inLanguage: "en-US",
      },
    ],
  };
}
