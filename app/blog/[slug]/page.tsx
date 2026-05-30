import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BlogCard from "@/components/ui/BlogCard";
import ShareButton from "@/components/ui/ShareButton";
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

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || Math.random() > 0.3)
  ).slice(0, 3);

  const contentLines = post.content.split("\n");

  return (
    <>
      {/* Hero */}
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

      {/* Featured image — if available */}
      {post.image && (
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

              {/* Rendered content */}
              <div className="prose-digibly">
                {contentLines.map((line, i) => {
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
                  image={p.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
