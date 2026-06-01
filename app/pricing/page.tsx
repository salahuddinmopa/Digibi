"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Leaf } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PricingCard from "@/components/ui/PricingCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { pricingTiers, addOns, pricingFAQs } from "@/data/pricing";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Investment"
        title="Transparent Pricing."
        titleItalic="Remarkable Value."
        subtitle="No surprise invoices, no vague quotes. Clear pricing that reflects the quality and care we put into every engagement."
        breadcrumbs={[{ label: "Pricing" }]}
        centered
      />

      {/* Pricing Tiers */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.id} delay={i * 0.12} className="h-full">
                <PricingCard
                  name={tier.name}
                  price={tier.price}
                  period={tier.period}
                  description={tier.description}
                  features={tier.features}
                  cta={tier.cta}
                  ctaHref={tier.ctaHref}
                  featured={tier.featured}
                  badge={tier.badge}
                  bgImage={tier.id === "bespoke" ? "/images/ecommerce.png" : undefined}
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p
              className="text-center text-xs mt-8"
              style={{ color: "var(--muted)" }}
            >
              All prices in AUD. GST will be added to applicable invoices. Custom quotes available for all services.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-6 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--warm)" }}>
                <Leaf size={14} style={{ color: "var(--gold)" }} />
                <span>
                  Every Digibly Group engagement — from a $499 website to a $50,000 enterprise contract — contributes 5% of net revenue to our Climate Pledge. Good work, doing good.
                </span>
              </div>
              <Link
                href="/climate-pledge"
                className="text-xs uppercase tracking-label transition-colors hover:text-gold"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Learn more →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Add-ons table */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              À La Carte
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Individual Services
            </h2>
          </ScrollReveal>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="text-left py-4 text-xs uppercase tracking-label"
                    style={{ color: "var(--gold)" }}
                  >
                    Service
                  </th>
                  <th
                    className="text-right py-4 text-xs uppercase tracking-label"
                    style={{ color: "var(--gold)" }}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {addOns.map((addon, i) => (
                  <tr
                    key={i}
                    style={{ borderBottom: "1px solid var(--border-subtle)" }}
                  >
                    <td className="py-4 text-sm" style={{ color: "var(--warm)" }}>
                      {addon.service}
                    </td>
                    <td className="py-4 text-sm text-right" style={{ color: "var(--cream)" }}>
                      {addon.price}
                      {addon.period && (
                        <span style={{ color: "var(--muted)" }}>{addon.period}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ — LIGHT */}
      <section className="section-padding section-light">
        <div className="container-wide max-w-3xl">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Common Questions
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Pricing FAQs
            </h2>
          </ScrollReveal>

          <div className="space-y-2">
            {pricingFAQs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{ border: "1px solid var(--border)" }}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-sm font-medium pr-4" style={{ color: "var(--cream)" }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{
                        color: "var(--gold)",
                        transform: openFaq === i ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-6 text-sm"
                      style={{ color: "var(--warm)", lineHeight: 1.7 }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — LIGHT */}
      <section className="py-24 text-center section-light">
        <div className="container-wide">
          <ScrollReveal>
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 300, color: "var(--text-on-light)", lineHeight: 1.1 }}
            >
              Not sure which plan?
              <em className="block" style={{ fontStyle: "italic", color: "var(--gold-dim)" }}>
                Let&apos;s figure it out together.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm mb-8 mx-auto" style={{ color: "var(--text-on-light-body)", maxWidth: "440px", lineHeight: 1.7 }}>
              Submit your brief and we&apos;ll recommend the right package for your specific goals and budget.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/get-a-quote" className="btn-dark-gold">
              Get a Custom Quote
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
