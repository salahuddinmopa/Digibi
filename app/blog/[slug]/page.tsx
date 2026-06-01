import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlogCard from "@/components/ui/BlogCard";
import ShareButton from "@/components/ui/ShareButton";
import { ArticleImage } from "@/components/ui/ArticleImage";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

type ContentItem =
  | { kind: 'line'; value: string }
  | { kind: 'image'; src: string; alt: string; caption: string };

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || Math.random() > 0.3)
  ).slice(0, 3);

  const afterIntroImg = post.inArticleImages?.find((img) => img.position === 'after-intro');
  const afterSection2Img = post.inArticleImages?.find((img) => img.position === 'after-section-2');

  // Pre-process content lines to inject image sentinels before 2nd and 3rd ## headings
  const rawLines = post.content.split("\n");
  let h2Count = 0;
  const contentItems: ContentItem[] = [];
  for (const line of rawLines) {
    if (line.startsWith('## ')) {
      h2Count++;
      if (h2Count === 2 && afterIntroImg) {
        contentItems.push({ kind: 'image', src: afterIntroImg.src, alt: afterIntroImg.alt, caption: afterIntroImg.caption });
      }
      if (h2Count === 3 && afterSection2Img) {
        contentItems.push({ kind: 'image', src: afterSection2Img.src, alt: afterSection2Img.alt, caption: afterSection2Img.caption });
      }
    }
    contentItems.push({ kind: 'line', value: line });
  }

  return (
    <>
      {/* Hero */}
      {post.heroImage ? (
        <section className="relative overflow-hidden blog-hero-section" style={{ background: 'var(--bg-secondary)' }}>
          {/* Breadcrumb nav — overlaid on hero */}
          <div className="absolute top-0 left-0 right-0 z-10 pt-32 pb-4 px-16">
            <nav className="flex items-center gap-3 container-wide" aria-label="Breadcrumb">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-xs uppercase tracking-label transition-colors"
                style={{ color: 'rgba(255,255,255,0.7)' }}
              >
                <ArrowLeft size={12} />
                All Articles
              </Link>
              <span style={{ color: 'var(--gold)', fontSize: '0.4rem' }}>◆</span>
              <span className="text-xs uppercase tracking-label" style={{ color: 'var(--gold)' }}>
                {post.category}
              </span>
            </nav>
          </div>

          {/* Full-bleed hero image */}
          <div
            className="relative w-full blog-hero-image"
            style={{ height: '55vh', minHeight: 320, overflow: 'hidden' }}
          >
            <Image
              src={post.heroImage}
              alt={post.heroAlt || post.title}
              fill
              priority
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="100vw"
            />
            {/* Bottom gradient — content emerges from below */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '200px',
              background: 'linear-gradient(to top, var(--bg-secondary) 0%, transparent 100%)',
            }} />

            {/* Post meta overlaid at bottom of hero */}
            <div className="blog-hero-overlay" style={{ position: 'absolute', bottom: '32px', left: '64px', zIndex: 2 }}>
              <span style={{
                background: 'var(--gold-primary)',
                color: 'var(--bg-primary)',
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '5px 14px',
                borderRadius: '2px',
                marginBottom: '14px',
                display: 'inline-block',
              }}>
                {post.category}
              </span>
              <h1 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 300,
                color: 'var(--text-primary, #f0e8d8)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                maxWidth: '720px',
                marginTop: '12px',
              }}>
                {post.title}
              </h1>
            </div>
          </div>

          {/* Date / author meta strip */}
          <div className="container-wide py-6">
            <div className="flex flex-wrap items-center gap-6 text-xs max-w-4xl" style={{ color: 'var(--muted)' }}>
              <span className="flex items-center gap-2">
                <Calendar size={12} />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={12} />
                {post.readTime}
              </span>
              <span style={{ color: 'var(--warm)' }}>{post.author}</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'var(--border)' }} />
        </section>
      ) : (
        /* Fallback — plain text hero for posts without heroImage */
        <section
          className="relative pt-40 pb-16 overflow-hidden"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div className="container-wide relative z-10 max-w-4xl">
            <ScrollReveal direction="none">
              <nav className="flex items-center gap-3 mb-8" aria-label="Breadcrumb">
                <Link
                  href="/blog"
                  className="flex items-center gap-2 text-xs uppercase tracking-label transition-colors"
                  style={{ color: "var(--muted)" }}
                >
                  <ArrowLeft size={12} />
                  All Articles
                </Link>
                <span style={{ color: "var(--gold)", fontSize: "0.4rem" }}>◆</span>
                <span className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
                  {post.category}
                </span>
              </nav>
            </ScrollReveal>

            <ScrollReveal>
              <h1
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 4rem)",
                  fontWeight: 300,
                  color: "var(--gold-light)",
                  lineHeight: 1.1,
                }}
              >
                {post.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-6 text-xs" style={{ color: "var(--muted)" }}>
                <span className="flex items-center gap-2">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={12} />
                  {post.readTime}
                </span>
                <span style={{ color: "var(--warm)" }}>{post.author}</span>
              </div>
            </ScrollReveal>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--border)" }} />
        </section>
      )}

      {/* Legacy featured image for posts using old `image` field (no heroImage) */}
      {!post.heroImage && post.image && (
        <div className="relative overflow-hidden" style={{ height: "50vh", minHeight: 280 }}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(14,13,11,0.15) 0%, rgba(14,13,11,0.6) 100%)" }}
          />
        </div>
      )}

      {/* Article body */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Content */}
            <article
              className="lg:col-span-8"
              style={{ maxWidth: "none" }}
            >
              {/* Excerpt lead */}
              <p
                className="text-lg mb-8 pb-8"
                style={{
                  color: "var(--warm)",
                  lineHeight: 1.7,
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                }}
              >
                {post.excerpt}
              </p>

              {/* Rendered content with injected images */}
              <div className="prose-digibly">
                {contentItems.map((item, i) => {
                  if (item.kind === 'image') {
                    return (
                      <ArticleImage
                        key={`img-${i}`}
                        src={item.src}
                        alt={item.alt}
                        caption={item.caption}
                      />
                    );
                  }

                  const line = item.value;

                  if (line.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-display mt-12 mb-4"
                        style={{ fontSize: "1.8rem", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.2 }}
                      >
                        {line.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (line.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="font-display mt-8 mb-3"
                        style={{ fontSize: "1.3rem", fontWeight: 400, color: "var(--cream)" }}
                      >
                        {line.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (line.startsWith("- ")) {
                    return (
                      <li key={i} className="flex items-start gap-3 mb-2 text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                        <span style={{ color: "var(--gold)", fontSize: "0.4rem", marginTop: "0.5rem" }}>◆</span>
                        {line.replace("- ", "")}
                      </li>
                    );
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return (
                      <p key={i} className="font-medium mb-3 text-sm" style={{ color: "var(--cream)" }}>
                        {line.replace(/\*\*/g, "")}
                      </p>
                    );
                  }
                  if (line.trim() === "") return <div key={i} className="mb-4" />;
                  return (
                    <p key={i} className="text-sm mb-4" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                      {line}
                    </p>
                  );
                })}
              </div>

              {/* Author card */}
              <div
                className="mt-16 p-6 flex items-start gap-4"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    color: "var(--gold)",
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 600,
                    fontSize: "1.1rem",
                  }}
                >
                  DG
                </div>
                <div>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--cream)" }}>
                    Digibly Group
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                    A full-service digital agency and governance consultancy based in Canberra, Australia. Est. 2019.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Share */}
                <div
                  className="p-6"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                    Share This Article
                  </p>
                  <div className="flex gap-3">
                    <ShareButton />
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="p-6"
                  style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <p className="text-xs uppercase tracking-label mb-3" style={{ color: "var(--gold)" }}>
                    Work With Us
                  </p>
                  <p className="text-sm mb-4" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                    Ready to put these ideas into practice for your business?
                  </p>
                  <Link href="/get-a-quote" className="btn-gold text-xs w-full justify-center">
                    Begin a Project
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Keep Reading
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Related Articles
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <BlogCard
                  slug={p.slug}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={p.category}
                  date={p.date}
                  readTime={p.readTime}
                  image={p.heroImage || p.image}
                  imageAlt={p.heroAlt}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
