"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, Check } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Wire to your provider (Mailchimp, ConvertKit, or a Composio + Gmail flow) here.
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4500);
  }

  return (
    <section id="newsletter" className="relative py-24 md:py-28 bg-mist">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-green grid place-items-center text-white shadow-[0_12px_30px_-8px_rgba(15,139,158,0.5)]">
            <Mail className="w-6 h-6" strokeWidth={2} />
          </div>
          <h2 className="font-display mt-7 text-3xl md:text-5xl font-bold text-navy leading-[1.08]">
            Stay close to the{" "}
            <span className="font-script text-gradient-brand">movement</span>.
          </h2>
          <p className="mt-5 text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Quarterly updates on awareness events, partnership announcements,
            and stories from the women we&apos;re standing with. No spam, ever.
          </p>

          <form onSubmit={onSubmit} className="mt-10 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-full bg-white border border-navy/8 shadow-[0_10px_30px_-12px_rgba(10,37,64,0.15)] focus-within:border-teal/40 transition-colors">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1 px-5 py-3 bg-transparent outline-none text-navy placeholder:text-ink-mute/70"
              />
              <button
                type="submit"
                disabled={sent}
                className="inline-flex items-center justify-center gap-2 bg-navy text-cream px-6 py-3 rounded-full font-semibold btn-lift disabled:opacity-80"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            <p className="mt-3 text-xs text-ink-mute">
              We respect your inbox. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
