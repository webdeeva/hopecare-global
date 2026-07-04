import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, ArrowLeft, Clock, Calendar, Info } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MarkdownArticle } from "@/components/education/MarkdownArticle";
import {
  ARTICLES,
  getArticle,
  getCluster,
  relatedArticles,
  readingTimeMinutes,
} from "@/lib/education";
import { getArticleContent } from "@/lib/education-content";
import { SITE_URL as SITE } from "@/lib/site";

const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found, HopeCare Global Inc" };

  const content = getArticleContent(slug);
  const description = content?.metaDescription || article.excerpt;
  const url = `${SITE}/education/${article.slug}`;
  return {
    title: `${article.title} | HopeCare Global Inc`,
    description,
    keywords: [article.targetKeyword],
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description,
      url,
      siteName: "HopeCare Global Inc",
      locale: "en_US",
      type: "article",
      ...(article.heroImage ? { images: [{ url: `${SITE}${article.heroImage}` }] } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const content = getArticleContent(slug);
  const cluster = getCluster(article.cluster);
  const minutes = readingTimeMinutes(article.words);
  const related = relatedArticles(article);
  const sources = content?.sources ?? [];
  const isLive = article.status === "published" && !!content?.body;

  const jsonLd =
    isLive && article.publishedAt
      ? {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
          ...(article.heroImage ? { image: `${SITE}${article.heroImage}` } : {}),
          url: `${SITE}/education/${article.slug}`,
          author: { "@type": "Organization", name: "HopeCare Global Inc" },
          publisher: {
            "@type": "Organization",
            name: "HopeCare Global Inc",
            url: SITE,
          },
          ...(article.medicallyReviewedBy
            ? {
                reviewedBy: {
                  "@type": "Person",
                  name: article.medicallyReviewedBy,
                },
              }
            : {}),
          about: { "@type": "MedicalCondition", name: "Ovarian cancer" },
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Education", item: `${SITE}/education` },
      {
        "@type": "ListItem",
        position: 2,
        name: cluster.label,
        item: `${SITE}/education#${cluster.id}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE}/education/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="relative bg-cream pt-24 md:pt-28 pb-20">
          <div className="container-wide max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-sm text-ink-mute"
            >
              <Link href="/education" className="hover:text-teal-deep transition-colors">
                Education
              </Link>
              <span aria-hidden>/</span>
              <Link
                href={`/education#${cluster.id}`}
                className="hover:text-teal-deep transition-colors"
              >
                {cluster.label}
              </Link>
            </nav>

            {/* Header */}
            <header className="mt-8">
              <div className="flex items-center gap-3">
                <span className={`w-10 h-px bg-gradient-to-r ${cluster.accent}`} />
                <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
                  {article.role === "pillar" ? "Complete Guide" : cluster.kicker}
                </span>
              </div>
              <h1
                className="mt-6 font-bold text-navy"
                style={{
                  fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                }}
              >
                {article.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-mute">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {minutes} min read
                </span>
                {article.publishedAt && (
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-teal" />
                    {DATE_FMT.format(new Date(article.publishedAt))}
                  </span>
                )}
              </div>
            </header>

            {/* Hero image */}
            {article.heroImage && (
              <div className="mt-8 relative aspect-[16/9] rounded-3xl overflow-hidden bg-mist border border-navy/5">
                <Image
                  src={article.heroImage}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 768px) 48rem, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            {/* Body */}
            <div className="mt-10">
              {isLive ? (
                <>
                  <MarkdownArticle body={content!.body} />

                  {/* Sources */}
                  {sources.length > 0 && (
                    <section className="mt-14 pt-8 border-t border-navy/10">
                      <h2 className="font-display text-xl font-bold text-navy">
                        Sources
                      </h2>
                      <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                        {sources.map((s, i) => (
                          <li key={i}>
                            <a
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-deep hover:text-teal-bright underline underline-offset-2"
                            >
                              {s.organization}
                            </a>
                            {s.claim ? `, ${s.claim}` : ""}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {/* Medical disclaimer */}
                  <aside className="mt-12 flex gap-3 rounded-2xl bg-mist border border-navy/5 p-5 text-sm text-ink-soft leading-relaxed">
                    <Info className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <p>
                      This article is for education only and is not a substitute
                      for professional medical advice, diagnosis, or treatment.
                      Always talk with a qualified healthcare provider about your
                      individual situation.
                    </p>
                  </aside>
                </>
              ) : (
                <DraftState excerpt={article.excerpt} />
              )}
            </div>
          </div>
        </article>

        {/* Related reading */}
        {related.length > 0 && (
          <section className="bg-mist py-20">
            <div className="container-wide max-w-3xl">
              <h2 className="font-display text-2xl font-bold text-navy">
                Related reading
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {related.map((r) => {
                  const live = r.status === "published";
                  const card = (
                    <div
                      className={`h-full rounded-2xl bg-white border border-navy/5 p-6 ${
                        live ? "card-lift" : ""
                      }`}
                    >
                      <h3 className="font-display text-lg font-bold text-navy leading-snug">
                        {r.title}
                      </h3>
                      <span
                        className={`mt-4 inline-flex items-center gap-1 text-sm font-semibold ${
                          live ? "text-teal-deep" : "text-ink-mute/60"
                        }`}
                      >
                        {live ? "Read" : "Coming soon"}
                        {live && <ArrowUpRight className="w-4 h-4" />}
                      </span>
                    </div>
                  );
                  return live ? (
                    <Link key={r.slug} href={`/education/${r.slug}`}>
                      {card}
                    </Link>
                  ) : (
                    <div key={r.slug}>{card}</div>
                  );
                })}
              </div>

              <Link
                href="/education"
                className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-teal-bright transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                All education articles
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

function DraftState({ excerpt }: { excerpt: string }) {
  return (
    <div className="rounded-3xl bg-white border border-navy/8 p-8 md:p-10 shadow-[0_20px_50px_-25px_rgba(10,37,64,0.18)]">
      <span className="inline-flex items-center gap-2 text-[0.66rem] tracking-[0.2em] uppercase font-bold text-teal-deep bg-teal-soft/50 px-3 py-1.5 rounded-full">
        <Info className="w-3.5 h-3.5" />
        Coming soon
      </span>
      <p className="mt-6 text-lg text-ink-soft leading-relaxed">{excerpt}</p>
      <p className="mt-4 text-ink-mute leading-relaxed">
        This guide is being prepared and will be published here shortly.
      </p>
      <Link
        href="/education"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-teal-bright transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all articles
      </Link>
    </div>
  );
}
