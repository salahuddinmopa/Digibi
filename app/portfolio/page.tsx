"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PortfolioCard from "@/components/ui/PortfolioCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { blurData } from "@/lib/animations";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter(
          (p) =>
            p.category === activeCategory ||
            p.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
        );

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Projects We're"
        titleItalic="Proud to Share."
        subtitle="A selection of client engagements across web design, digital marketing, branding, e-commerce, and governance advisory."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          {/* Filter bar */}
          <ScrollReveal direction="none" className="mb-12">
            <div className="flex flex-wrap gap-3">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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

          {/* Featured card — first item gets full-width treatment */}
          {filtered.length > 0 && activeCategory === "All" && (
            <ScrollReveal className="mb-6">
              <div
                className="relative overflow-hidden group cursor-pointer"
                style={{ aspectRatio: "21/9", border: "1px solid var(--border)" }}
              >
                <Image
                  src="/images/web-design.png"
                  alt="Digibly Group portfolio — luxury web design case study showing dark premium aesthetic"
                  fill
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurData.webDesign}
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="100vw"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(14,13,11,0.9) 0%, rgba(14,13,11,0.4) 45%, transparent 100%)",
                  }}
                />
                {/* Featured badge */}
                <div
                  className="absolute top-5 right-5 text-xs uppercase tracking-label px-3 py-1.5"
                  style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                >
                  Featured Work
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                      Premium Retail Client
                    </p>
                    <h2
                      className="font-display text-2xl mb-2"
                      style={{ color: "var(--cream)", fontWeight: 300 }}
                    >
                      Luxury E-Commerce Platform Redesign
                    </h2>
                    <p className="text-sm" style={{ color: "var(--warm)" }}>
                      ↑ 340% conversion rate increase
                    </p>
                  </div>
                  <div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs uppercase tracking-label"
                    style={{ color: "var(--gold)" }}
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Grid — remaining items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <PortfolioCard
                  title={item.title}
                  client={item.client}
                  tags={item.tags}
                  outcome={item.outcome}
                  image={item.image}
                  description={item.description}
                />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
