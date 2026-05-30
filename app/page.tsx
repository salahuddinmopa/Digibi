import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import MarqueeTicker from "@/components/ui/MarqueeTicker";
import TestimonialCard from "@/components/ui/TestimonialCard";
import HeroSection from "@/components/sections/HeroSection";
import ServicesListWithPreview from "@/components/sections/ServicesListWithPreview";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { climatePledge } from "@/data/climate";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Digibly Group — Craft that Elevates Every Brand",
  description:
    "A full-service digital agency and governance consultancy for businesses that believe the details matter. Based in Canberra, Australia.",
};

const marqueeItems = [
  "Web Design & Development",
  "Digital Marketing",
  "Brand Identity",
  "Social Media Management",
  "E-Commerce Solutions",
  "Analytics & Reporting",
  "Cybersecurity Governance",
  "Digibly Group",
  "Est. 2019",
];

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Industries Served" },
  { value: "6", label: "Years in Business" },
];

const values = [
  { numeral: "I", title: "Craft Over Commodity", body: "We believe the details matter. Every pixel, every word, every interaction is deliberate." },
  { numeral: "II", title: "Strategy Before Aesthetics", body: "Beauty without purpose is decoration. We design for outcomes, not just appearances." },
  { numeral: "III", title: "Radical Transparency", body: "No hidden fees, no vague reports, no mystery. You always know exactly where your project stands." },
  { numeral: "IV", title: "Long-Term Partnership", body: "We measure our success by the growth of our clients — not by the size of our portfolio." },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    description: "We start by understanding your business, your audience, your competitors, and your goals. This phase produces the strategic foundation everything else is built on.",
  },
  {
    num: "02",
    title: "Strategy",
    description: "A clear, documented plan — whether that's a digital marketing strategy, a design brief, or a governance framework. You see exactly what we'll do and why.",
  },
  {
    num: "03",
    title: "Creation",
    description: "Our team executes with precision. Designs are presented for your review before development begins. Nothing moves forward without your sign-off.",
  },
  {
    num: "04",
    title: "Launch & Care",
    description: "We don't just deliver and disappear. Launch is the beginning — we monitor, optimise, and support you as your business grows.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection stats={stats} />

      {/* Marquee ticker */}
      <div
        className="py-5 overflow-hidden"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <MarqueeTicker items={marqueeItems} />
      </div>

      {/* Services Section */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-primary)" }}
        aria-labelledby="services-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal direction="none">
                  <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                    What We Do
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <h2
                    id="services-heading"
                    className="font-display mb-6"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
                  >
                    Seven disciplines.
                    <em style={{ fontStyle: "italic", display: "block", color: "var(--cream)" }}>
                      One studio.
                    </em>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-sm mb-8" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    From brand identity to cybersecurity governance, Digibly Group brings together the expertise your business needs — under one roof, aligned to one vision.
                  </p>
                  <Link href="/services" className="btn-ghost text-xs inline-flex items-center gap-2">
                    All Services <ArrowRight size={12} />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServicesListWithPreview services={services} />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
        aria-labelledby="values-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                <span
                  className="absolute -top-8 -left-4 font-display opacity-10 select-none"
                  style={{ fontSize: "8rem", color: "var(--gold)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote
                  className="font-display italic relative"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.35 }}
                >
                  The businesses that last are the ones who understand that how you present yourself is inseparable from what you deliver.
                </blockquote>
                <div className="gold-divider mt-8" />
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  — Digibly Group Philosophy
                </p>
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal direction="none" delay={0.1}>
                <p className="text-xs uppercase tracking-label mb-8" style={{ color: "var(--gold)" }} id="values-heading">
                  Our Core Values
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {values.map((v, i) => (
                  <ScrollReveal key={v.numeral} delay={i * 0.1}>
                    <div className="p-6" style={{ border: "1px solid var(--border)", background: "rgba(28,26,23,0.5)" }}>
                      <span
                        className="font-display text-3xl font-light block mb-3"
                        style={{ color: "rgba(201,168,76,0.3)" }}
                      >
                        {v.numeral}
                      </span>
                      <h3 className="font-display text-base mb-2" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                        {v.title}
                      </h3>
                      <p className="text-xs" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                        {v.body}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Office image — framed card */}
              <ScrollReveal direction="right" delay={0.4}>
                <div
                  className="relative img-bracket-frame overflow-hidden"
                  style={{ maxWidth: 420, aspectRatio: "16/9" }}
                >
                  <Image
                    src="/images/hero-office.png"
                    alt="Digibly Group's studio space — where digital excellence is crafted daily"
                    fill
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurData.heroOffice}
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "rgba(14,13,11,0.15)" }}
                  />
                  {/* Double border treatment */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      outline: "1px solid rgba(201,168,76,0.08)",
                      outlineOffset: "6px",
                      boxShadow: "inset 0 0 0 1px rgba(201,168,76,0.15)",
                    }}
                  />
                </div>
                <p
                  className="text-xs uppercase mt-3"
                  style={{ color: "var(--muted)", letterSpacing: "0.2em", maxWidth: 420 }}
                >
                  Digibly Group Studio · Canberra, Australia
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
        aria-labelledby="process-heading"
      >
        {/* Cybersecurity subtle bg texture */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/cybersecurity.png"
            alt=""
            fill
            quality={40}
            className="object-cover object-right"
            style={{ filter: "blur(60px)", opacity: 0.04 }}
            sizes="100vw"
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <ScrollReveal>
              <h2
                id="process-heading"
                className="font-display"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                How We Work
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-sm lg:mt-3" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                Every engagement follows the same four-stage process — regardless of the service. Clarity, alignment, and accountability at every step.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div
                  className="group p-8 relative overflow-hidden transition-all duration-300"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <span
                    className="absolute -bottom-4 -right-4 font-display font-light select-none"
                    style={{ fontSize: "6rem", color: "rgba(201,168,76,0.05)", lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <span
                    className="font-display text-lg font-light block mb-4 transition-colors duration-300 group-hover:text-gold"
                    style={{ color: "rgba(201,168,76,0.4)" }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="font-display text-xl mb-4 transition-colors duration-300 group-hover:text-gold-light"
                    style={{ color: "var(--cream)", fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm relative z-10" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
        aria-labelledby="testimonials-heading"
      >
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal direction="none">
                  <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                    Client Words
                  </p>
                </ScrollReveal>
                <ScrollReveal>
                  <h2
                    id="testimonials-heading"
                    className="font-display mb-6"
                    style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
                  >
                    What our<em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>clients say.</em>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    We measure our success by the outcomes our clients achieve.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <div className="lg:col-span-8">
              <StaggerContainer staggerDelay={0.12}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.slice(0, 4).map((t) => (
                    <StaggerItem key={t.id}>
                      <TestimonialCard
                        quote={t.quote}
                        name={t.name}
                        role={t.role}
                        company={t.company}
                        initials={t.initials}
                      />
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Pledge Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid rgba(201,168,76,0.2)",
          borderBottom: "1px solid rgba(201,168,76,0.2)",
        }}
        aria-labelledby="climate-heading"
      >
        {/* Reef image — desaturated bg */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/climate-reef.png"
            alt=""
            fill
            quality={40}
            placeholder="blur"
            blurDataURL={blurData.climateReef}
            className="object-cover object-center"
            style={{ filter: "saturate(0.7) brightness(0.35)", opacity: 0.5 }}
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.6)" }} />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center">
            {/* Left — 60% */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="none">
                <div className="flex items-center gap-2 mb-4">
                  <Leaf size={14} style={{ color: "var(--gold)" }} />
                  <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
                    Digibly Climate Pledge
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal>
                <h2
                  id="climate-heading"
                  className="font-display mb-6"
                  style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
                >
                  5% of Every Project
                  <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                    Goes to the Planet.
                  </em>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-sm mb-8" style={{ color: "var(--warm)", lineHeight: 1.8, maxWidth: "520px" }}>
                  We are committed to donating 5% of our net revenue annually to climate change mitigation and environmental awareness. Because the businesses we help build should exist on a planet worth living on.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/climate-pledge"
                    className="flex items-center gap-2 text-xs uppercase tracking-label transition-colors hover:text-gold"
                    style={{ color: "var(--gold)" }}
                  >
                    Learn About Our Pledge <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/climate-pledge#partners"
                    className="flex items-center gap-2 text-xs uppercase tracking-label transition-colors hover:text-gold"
                    style={{ color: "var(--muted)" }}
                  >
                    Our Climate Partners <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — 40% */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.15}>
                <div
                  className="p-8"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-end gap-2 mb-1">
                    <span
                      className="font-display"
                      style={{ fontSize: "6rem", fontWeight: 300, color: "var(--gold)", lineHeight: 1 }}
                    >
                      5%
                    </span>
                  </div>
                  <p
                    className="text-xs uppercase tracking-label mb-6"
                    style={{ color: "var(--muted)" }}
                  >
                    of net revenue
                  </p>
                  <ul className="space-y-2 mb-6">
                    {climatePledge.recipients.slice(0, 3).map((r) => (
                      <li key={r.name} className="flex items-center gap-2 text-xs" style={{ color: "var(--warm)" }}>
                        <Leaf size={10} style={{ color: "var(--gold)", flexShrink: 0 }} />
                        {r.name}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="flex items-center gap-2 text-xs pt-4"
                    style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--muted)" }}
                  >
                    <Leaf size={10} style={{ color: "var(--gold)" }} />
                    <span>Member · 1% for the Planet</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: "var(--bg-primary)" }}
        aria-labelledby="cta-heading"
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-display font-light whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 12vw, 14rem)", color: "rgba(201,168,76,0.03)", letterSpacing: "-0.02em" }}
          >
            Digibly Group
          </span>
        </div>

        <div className="container-wide relative z-10 text-center">
          <ScrollReveal direction="none">
            <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
              <span className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
              <span style={{ color: "var(--gold)", fontSize: "0.5rem", transform: "rotate(45deg)", display: "inline-block" }}>◆</span>
              <span className="w-16 h-px" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2
              id="cta-heading"
              className="font-display mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.05 }}
            >
              Ready to Build
              <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                Something Lasting?
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg mb-10 mx-auto" style={{ color: "var(--warm)", maxWidth: "520px", lineHeight: 1.7 }}>
              Let&apos;s talk about what you&apos;re building and how Digibly Group can help you build it right.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-gold">
                Begin a Project
              </Link>
              <Link href="/contact" className="btn-ghost">
                Schedule a Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
