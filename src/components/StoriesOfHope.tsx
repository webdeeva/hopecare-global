"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Story = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  accent: string;
};

const stories: Story[] = [
  {
    slug: "one-post-a-step-toward-care",
    tag: "Community Impact",
    title: "One Post, a Step Toward Care",
    excerpt:
      "A woman in Europe saw our ovarian cancer awareness posts, sought medical attention and testing, and is now receiving treatment. Awareness encouraged action — and action connected her with care.",
    accent: "from-teal-deep to-teal",
  },
];

export function StoriesOfHope() {
  const featured = stories[0];

  return (
    <section
      id="stories"
      className="relative py-28 md:py-36 bg-cream overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/2 -right-40 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(15,139,158,0.25), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="kicker text-teal-deep">Stories of Hope &amp; Impact</div>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-teal to-green" />
          <h2 className="font-display mt-6 text-4xl md:text-5xl font-bold text-navy leading-[1.05]">
            Real lives. Real{" "}
            <span className="text-gradient-brand">change</span>.
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed">
            Personal stories that show how awareness can encourage action and
            connect people with care.
          </p>
        </motion.div>

        {/* Featured story card */}
        <motion.article
          key={featured.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mt-16 rounded-3xl bg-white border border-navy/5 overflow-hidden card-lift"
        >
          {/* Accent gradient bar across top */}
          <div
            className={`h-1.5 w-full bg-gradient-to-r ${featured.accent}`}
          />

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-0">
            {/* Left: narrative summary */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
              <span className="kicker text-teal-deep/70 text-[0.65rem]">
                {featured.tag}
              </span>

              <h3 className="font-display mt-4 text-3xl md:text-4xl font-bold text-navy leading-[1.1]">
                {featured.title}
              </h3>

              <p className="mt-5 text-lg text-ink-soft leading-relaxed">
                {featured.excerpt}
              </p>

              {/* CTA */}
              <a
                href={`/stories/${featured.slug}`}
                className="group relative mt-10 inline-flex items-center gap-2 bg-navy text-cream px-7 py-4 rounded-full font-semibold btn-lift self-start"
              >
                Read More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Right: decorative visual panel */}
            <div
              className="relative min-h-[300px] lg:min-h-full bg-mist flex items-center justify-center overflow-hidden"
            >
              {/* Brand pattern */}
              <div className="absolute inset-0 bg-dots opacity-[0.07]" aria-hidden />

              {/* Central visual */}
              <div className="relative z-10 p-8 md:p-12 text-center">
                <div
                  className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-br ${featured.accent} grid place-items-center shadow-[0_15px_40px_-10px_rgba(15,139,158,0.4)]`}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M6 20C6 14 12 8 16 4C20 8 26 14 26 20C26 24 22 28 16 28C10 28 6 24 6 20Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="rgba(255,255,255,0.15)"
                    />
                    <path
                      d="M12 18C12 15 14 12 16 10C18 12 20 15 20 18C20 20 18 22 16 22C14 22 12 20 12 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.25)"
                    />
                    <path
                      d="M16 8V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16 28V24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 16H4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M28 16H24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="relative mt-6 font-display text-3xl md:text-4xl font-bold text-teal-deep/40">
                  &ldquo;
                </p>
                <p className="relative mt-2 text-sm text-ink-mute leading-relaxed max-w-[16rem] mx-auto">
                  One post, one share, one moment of recognition — that&apos;s where
                  change begins.
                </p>

                {/* Decorative rings */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-teal/8 pointer-events-none"
                  aria-hidden
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-teal/6 pointer-events-none"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </motion.article>

        {/* More stories coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-ink-mute font-medium">
            More stories coming soon.{" "}
            <a
              href="/contact"
              className="text-teal-deep underline-offset-2 underline hover:text-teal-bright transition-colors"
            >
              Share your story
            </a>
          </p>
        </motion.div>
      </div>
    </section>

    <section id="founder-title" className="bg-cream pt-12 text-center">
      <h2 className="text-4xl font-bold text-navy">Founder</h2>
    </section>
  );
}