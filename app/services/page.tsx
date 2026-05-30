import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";
import {
  Globe,
  TrendingUp,
  Palette,
  Share2,
  ShoppingBag,
  BarChart2,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "From web design and digital marketing to cybersecurity governance — Digibly Group offers seven expert disciplines under one roof.",
};

const icons = [
  <Globe size={20} key="globe" />,
  <TrendingUp size={20} key="trend" />,
  <Palette size={20} key="palette" />,
  <Share2 size={20} key="share" />,
  <ShoppingBag size={20} key="shop" />,
  <BarChart2 size={20} key="chart" />,
  <Shield size={20} key="shield" />,
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Everything You Need"
        titleItalic="to Grow Online."
        subtitle="Seven expert disciplines under one roof. Whether you need a single service or a complete digital presence, Digibly Group has you covered."
        cta={{ label: "Get a Custom Quote", href: "/get-a-quote" }}
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* Services Grid */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <StaggerItem key={svc.id}>
                  <ServiceCard
                    number={svc.number}
                    title={svc.title}
                    description={svc.shortDescription}
                    href={svc.href}
                    icon={icons[i]}
                    image={svc.previewImage}
                    imageBlur={svc.previewBlur}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Not sure CTA */}
      <section
        className="py-24"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide text-center">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Not Sure Where to Start?
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Tell us about your business
              <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                and we&apos;ll recommend the right approach.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-sm mb-8 mx-auto" style={{ color: "var(--warm)", maxWidth: "480px", lineHeight: 1.7 }}>
              Our multi-step quote form is designed to help you articulate what you need — even if you&apos;re not sure yet. We&apos;ll review your brief and come back with a clear recommendation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href="/get-a-quote" className="btn-gold">
              Start Your Brief
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
