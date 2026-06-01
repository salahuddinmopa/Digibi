import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Leaf } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "About Digibly Group",
  description:
    "Discover the story behind Digibly Group — a Canberra-based digital agency and governance consultancy built on craft, expertise, and a genuine commitment to client outcomes.",
};

const arms = [
  {
    name: "Digibly Studio",
    tagline: "Digital Agency",
    description:
      "Our creative and technical engine. Web design, digital marketing, brand identity, social media, e-commerce, and analytics for businesses of all sizes — delivered with the precision and care of a boutique studio.",
    services: ["Web Design & Development", "Digital Marketing", "Brand Identity", "Social Media", "E-Commerce", "Analytics"],
  },
  {
    name: "Digibly Govern",
    tagline: "Cybersecurity Governance Advisory",
    description:
      "Expert governance advisory grounded in leading international frameworks. We help government agencies, regulated industries, and public sector organisations mature their cybersecurity posture with confidence.",
    services: ["Governance Maturity Assessment", "NIST CSF 2.0 Alignment", "Risk Gap Analysis", "AI Governance (NIST AI RMF)", "Executive Reporting"],
  },
  {
    name: "Digibly Intelligence",
    tagline: "Research Products & SaaS",
    description:
      "Research-backed digital products, SaaS tools, and training programmes born from academic rigour and industry application. We turn governance research into accessible, practical tools.",
    services: ["Governance Research", "SaaS Tools", "Training Programmes", "Digital Products", "Academic Publishing"],
  },
];

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "40+", label: "Industries Served" },
  { value: "6", label: "Years Operating" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const credentials = [
  "UNSW Canberra — PhD Candidate, Cybersecurity Governance",
  "Australian Cyber Security Strategy 2023–2030 Alignment",
  "NIST CSF 2.0 Implementation Experience",
  "Federal Government Sector Experience",
  "COBIT 2019 & CMMI Certified Practitioners",
  "Australian Privacy Act 1988 Compliance",
];

export default function AboutPage() {
  return (
    <>
      {/* Full-image hero */}
      <section className="relative overflow-hidden" style={{ height: "70vh", minHeight: 480 }}>
        <Image
          src="/images/hero-office.png"
          alt="Inside Digibly Group — our Canberra studio where strategy meets craft"
          fill
          priority
          quality={95}
          placeholder="blur"
          blurDataURL={blurData.heroOffice}
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,13,11,1) 0%, rgba(14,13,11,0.85) 25%, rgba(14,13,11,0.4) 55%, rgba(14,13,11,0.1) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 container-wide pb-14">
          <ScrollReveal direction="none" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
                Est. 2019 · Canberra, Australia
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h1
              className="font-display"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.05 }}
            >
              We Are
              <em className="block" style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                Digibly Group
              </em>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section — LIGHT */}
      <section className="section-padding section-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>Our Story</p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Built in Canberra.
                <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>Built to Last.</em>
              </h2>
              <div className="space-y-4 text-sm" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                <p>
                  Digibly Group was founded in 2019 with a simple conviction: that small and mid-sized Australian businesses deserve the same quality of digital strategy and execution as the largest organisations — without the agency overhead, the account manager runaround, or the mystery pricing.
                </p>
                <p>
                  Based in Canberra, we sit at an unusual intersection. We work daily with SMEs, startups, and growing businesses that need beautiful, effective digital presence. And through Digibly Govern, we serve government agencies and regulated industries that require the rigour of internationally recognised governance frameworks.
                </p>
                <p>
                  That dual perspective — creative craft and governance precision — is our defining advantage. It means we never build a website without thinking about security. We never design a brand without thinking about strategy. And we never take a brief without thinking about long-term outcomes.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div
                className="relative aspect-square"
                style={{ maxWidth: 460, margin: "0 auto" }}
              >
                <Image
                  src="https://placehold.co/920x920/1c1a17/c9a84c?text=Digibly+Group"
                  alt="Digibly Group studio"
                  fill
                  className="object-cover"
                  sizes="460px"
                />
                <div
                  className="absolute -bottom-4 -right-4 w-32 h-32 flex items-center justify-center text-center"
                  style={{ background: "var(--gold)", color: "var(--bg-primary)" }}
                >
                  <div>
                    <p className="font-display text-2xl font-light">2019</p>
                    <p className="text-xs uppercase tracking-label mt-1">Founded</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Arms */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
        aria-labelledby="arms-heading"
      >
        <div className="container-wide">
          <div className="text-center mb-16">
            <ScrollReveal direction="none">
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Three Disciplines
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2
                id="arms-heading"
                className="font-display"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                One Group,
                <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>Three Capabilities.</em>
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {arms.map((arm, i) => {
              const isStudio = arm.name === "Digibly Studio";
              const isGovern = arm.name === "Digibly Govern";
              return (
                <ScrollReveal key={arm.name} delay={i * 0.15}>
                  <div
                    className="h-full flex flex-col overflow-hidden group transition-all duration-300"
                    style={{ border: "1px solid var(--border)", background: "var(--bg-surface)" }}
                  >
                    {/* Studio arm gets brand-identity image */}
                    {isStudio && (
                      <div className="relative overflow-hidden" style={{ height: 180 }}>
                        <Image
                          src="/images/brand-identity.png"
                          alt="Digibly Studio — brand identity and design services for businesses at every scale"
                          fill
                          quality={85}
                          placeholder="blur"
                          blurDataURL={blurData.brandIdentity}
                          className="object-cover transition-all duration-500 group-hover:brightness-110"
                          style={{ objectPosition: "center 35%" }}
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 transition-opacity duration-300"
                          style={{ background: "rgba(14,13,11,0.35)" }}
                        />
                        <div
                          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20"
                          style={{ background: "rgba(14,13,11,0.15)" }}
                        />
                      </div>
                    )}
                    {/* Govern arm gets cybersecurity image */}
                    {isGovern && (
                      <div className="relative overflow-hidden" style={{ height: 180 }}>
                        <Image
                          src="/images/cybersecurity.png"
                          alt="Digibly Govern — enterprise cybersecurity governance advisory for public sector and regulated organisations"
                          fill
                          quality={85}
                          placeholder="blur"
                          blurDataURL={blurData.cybersecurity}
                          className="object-cover object-center transition-all duration-500 group-hover:brightness-110"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 transition-opacity duration-300"
                          style={{ background: "rgba(14,13,11,0.35)" }}
                        />
                        <div
                          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-20"
                          style={{ background: "rgba(14,13,11,0.15)" }}
                        />
                      </div>
                    )}
                    <div className="p-8 flex-1 flex flex-col">
                      <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                        {arm.tagline}
                      </p>
                      <h3
                        className="font-display text-2xl mb-4"
                        style={{ color: "var(--cream)", fontWeight: 400 }}
                      >
                        {arm.name}
                      </h3>
                      <p className="text-sm mb-6 flex-1" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                        {arm.description}
                      </p>
                      <div className="gold-divider" />
                      <ul className="space-y-2 mt-4">
                        {arm.services.map((s) => (
                          <li key={s} className="text-xs flex items-center gap-2" style={{ color: "var(--muted)" }}>
                            <span style={{ color: "var(--gold)", fontSize: "0.4rem" }}>◆</span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative" style={{ maxWidth: 400 }}>
                <Image
                  src="https://placehold.co/800x1000/1c1a17/c9a84c?text=Founder"
                  alt="Digibly Group Founder"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-6"
                  style={{ background: "linear-gradient(to top, rgba(14,13,11,0.95) 0%, transparent 100%)" }}
                >
                  <p className="font-display text-xl" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                    Founder, Digibly Group
                  </p>
                  <p className="text-xs uppercase tracking-label mt-1" style={{ color: "var(--gold)" }}>
                    PhD Candidate · UNSW Canberra
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>Leadership</p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Built by Someone
                <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                  Who Operates in Both Worlds.
                </em>
              </h2>
              <div className="space-y-4 text-sm mb-8" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                <p>
                  Our founder brings a rare combination of government experience, academic research in cybersecurity governance at UNSW Canberra, and hands-on digital agency expertise. This unique background means Digibly Group understands both the technical precision required for complex governance engagements and the creative craft needed to build compelling digital brands.
                </p>
                <p>
                  The result is an agency that doesn&apos;t just execute tasks — it thinks strategically, communicates clearly, and holds itself to the same standards of rigour and accountability it recommends to clients.
                </p>
                <p>
                  This commitment to governance and accountability extends to our environmental responsibilities — Digibly Group pledges 5% of net revenue annually to climate action, reflecting a belief that sustainable business and sustainable technology are inseparable.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((c) => (
                  <div key={c} className="flex items-start gap-2 text-xs" style={{ color: "var(--warm)" }}>
                    <span style={{ color: "var(--gold)", fontSize: "0.4rem", marginTop: "0.35rem", flexShrink: 0 }}>◆</span>
                    {c}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats — LIGHT */}
      <section className="py-20 section-light">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p
                    className="font-display mb-2"
                    style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 300, color: "var(--gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Values Card */}
      <section className="py-16" style={{ background: "var(--bg-primary)", borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="container-wide">
          <ScrollReveal>
            <div
              className="p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{ background: "var(--bg-surface)", border: "1px solid rgba(201,168,76,0.25)" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                style={{ border: "1px solid var(--border)", color: "var(--gold)" }}
              >
                <Leaf size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl mb-2" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                  Climate Commitment
                </h3>
                <p className="text-sm mb-3" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                  5% of our net revenue is pledged annually to climate change mitigation. We are members of 1% for the Planet — and proud to exceed their standard with our 5% commitment.
                </p>
                <Link
                  href="/climate-pledge"
                  className="text-xs uppercase tracking-label transition-colors hover:text-gold"
                  style={{ color: "var(--gold)" }}
                >
                  Read our Climate Pledge →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — LIGHT */}
      <section className="py-24 text-center section-light">
        <div className="container-wide">
          <ScrollReveal>
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--text-on-light)", lineHeight: 1.1 }}
            >
              Ready to Work
              <em className="block" style={{ fontStyle: "italic", color: "var(--gold-dim)" }}>With Us?</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm mb-8 mx-auto" style={{ color: "var(--text-on-light-body)", maxWidth: "480px", lineHeight: 1.7 }}>
              Whether you&apos;re a small business looking to grow or a government agency navigating complex governance requirements, we&apos;d love to talk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-dark-gold">Begin a Project</Link>
              <Link href="/contact" className="btn-ghost-light">Get in Touch</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
