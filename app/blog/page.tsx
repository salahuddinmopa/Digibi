"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts, blogCategories } from "@/data/blog-posts";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const perPage = 6;
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice(0, page * perPage);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas from"
        titleItalic="Digibly Group."
        subtitle="Perspectives on digital strategy, brand building, cybersecurity governance, and what it takes to build a lasting business."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          {/* Category filter */}
          <ScrollReveal direction="none" className="mb-12">
            <div className="flex flex-wrap gap-3">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setPage(1); }}
                  className="text-xs uppercase tracking-label px-4 py-2 transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? "var(--gold)" : "transparent",
                    border: `1px solid ${activeCategory === cat ? "var(--gold)" : "var(--border)"}`,
                    color: activeCategory === cat ? "var(--bg-primary)" : "var(--warm)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginated.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.07}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  image={post.heroImage || post.image}
                  imageAlt={post.heroAlt}
                  featured={i === 0}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Pagination */}
          {page < totalPages && (
            <ScrollReveal direction="none">
              <div className="text-center">
                <button
                  onClick={() => setPage(page + 1)}
                  className="btn-ghost"
                >
                  Load More Articles
                </button>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </>
  );
}
