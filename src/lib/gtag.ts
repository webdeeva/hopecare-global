// Lightweight GA4 helpers. Analytics is a no-op until NEXT_PUBLIC_GA_ID
// is set (e.g. in Netlify env vars), so nothing breaks without it.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a GA4 page_view (used on client-side route changes). */
export function pageview(url: string) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Fire an arbitrary GA4 event. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

/** Donation intent: user clicked a PayPal donate CTA. */
export function trackDonateClick(location: string) {
  trackEvent("donate_click", { location, transport_type: "beacon" });
}
