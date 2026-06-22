// Donation FAQ content. Kept in a plain (non-client) module so it can be
// imported by both the client component (DonateFAQ) and the server page
// (for FAQPage JSON-LD). Schema must match the visible Q&A exactly.

export interface DonateFaq {
  q: string;
  a: string;
}

export const faqs: DonateFaq[] = [
  {
    q: "Is my donation tax-deductible?",
    a: "Yes. HopeCare Global Inc is a registered 501(c)(3) nonprofit organization. Your gift is tax-deductible to the full extent of the law. You will receive an acknowledgement receipt by email after your gift.",
  },
  {
    q: "Is the PayPal donation page secure?",
    a: "Yes. All donations are processed through PayPal's secure payment system. HopeCare Global does not see or store your card or bank information.",
  },
  {
    q: "Can I give in honor or memory of someone?",
    a: "Absolutely. Email us at support@hopecareglobal.org with the name of the person you'd like to honor or remember, and we'll acknowledge them in our annual report and (with your permission) notify their family.",
  },
  {
    q: "How much of my donation goes to the mission?",
    a: "We are committed to directing the maximum possible share of every gift toward early detection, education, and access to care. Overhead is kept lean. Our annual impact report details exactly how funds are deployed.",
  },
  {
    q: "Can my employer match my gift?",
    a: "Many employers do match charitable donations. Reach out to your HR or community impact team to ask, and we'll be glad to provide any documentation they need.",
  },
  {
    q: "Can I donate by mail or wire?",
    a: "Yes. Email support@hopecareglobal.org for our mailing address, ACH/wire instructions, or to arrange a planned gift.",
  },
];
