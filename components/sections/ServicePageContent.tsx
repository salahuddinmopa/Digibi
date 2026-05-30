import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import { services } from "@/data/services";

interface ServicePageContentProps {
  serviceId: string;
  skipHero?: boolean;
}

export default function ServicePageContent({ serviceId, skipHero = false }: ServicePageContentProps) {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return null;

  const relatedServices = services.filter((s) => service.relatedServices.includes(s.id));

  return (
    <>
      {!skipHero && (
        <PageHero
          eyebrow="Services"
          title={service.title}
          subtitle={service.description}
          cta={{ label: "Get a Quote for This Service", href: `/get-a-quote?service=${service.id}` }}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />
      )}

      {/* Deliverables + Target Clients */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Deliverables */}
            <ScrollReveal direction="left">
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                What&apos;s Included
              </p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Everything you get
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                    <span className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.6 }}>{d}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Who it's for */}
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Who It&apos;s For
              </p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Built for your context
              </h2>
              <div className="space-y-6">
                <div className="p-5" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                    Small & Medium Business
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {service.targetClients.sme}
                  </p>
                </div>
                <div className="p-5" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                  <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                    Corporate & Enterprise
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {service.targetClients.corporate}
                  </p>
                </div>
                {service.targetClients.government && (
                  <div className="p-5" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
                    <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                      Government & Public Sector
                    </p>
                    <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                      {service.targetClients.government}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Our Process
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-12"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              How we deliver it
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.1}>
                <div
                  className="p-6 h-full"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <span
                    className="font-display text-3xl font-light block mb-4"
                    style={{ color: "rgba(201,168,76,0.3)" }}
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display text-lg mb-3"
                    style={{ color: "var(--cream)", fontWeight: 400 }}
                  >
                    {step.step}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Tools & Technologies
              </p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                The tools we use
              </h2>
              <p className="text-sm mb-8" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                We work with industry-standard tools and platforms — chosen for performance, reliability, and the best outcomes for your specific project.
              </p>
              <div className="flex flex-wrap gap-3">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-4 py-2"
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      color: "var(--warm)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Pricing preview */}
            <ScrollReveal delay={0.15}>
              <div
                className="p-8"
                style={{ background: "var(--bg-surface)", border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--gold)" }}>
                  Investment
                </p>
                <p
                  className="font-display text-4xl mb-4"
                  style={{ fontWeight: 300, color: "var(--gold-light)" }}
                >
                  {service.startingPrice}
                </p>
                <p className="text-sm mb-6" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                  Every project is scoped individually. The quote we provide will reflect your specific requirements, timeline, and goals.
                </p>
                <div className="space-y-3">
                  <Link href="/get-a-quote" className="btn-gold w-full justify-center text-center">
                    Get a Quote
                  </Link>
                  <Link href="/pricing" className="btn-ghost w-full justify-center text-center">
                    View Full Pricing
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section
          className="section-padding"
          style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
        >
          <div className="container-wide">
            <ScrollReveal direction="none">
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Related Services
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2
                className="font-display mb-10"
                style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Complement this service
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s, i) => (
                <ScrollReveal key={s.id} delay={i * 0.1}>
                  <Link
                    href={s.href}
                    className="group gold-card p-6 block"
                  >
                    <span
                      className="font-display text-2xl font-light block mb-3"
                      style={{ color: "rgba(201,168,76,0.3)" }}
                    >
                      {s.number}
                    </span>
                    <h3
                      className="font-display text-lg mb-3 group-hover:text-gold-light transition-colors"
                      style={{ color: "var(--cream)", fontWeight: 400 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                      {s.shortDescription}
                    </p>
                    <div
                      className="flex items-center gap-2 text-xs uppercase tracking-label transition-all duration-300 group-hover:gap-3"
                      style={{ color: "var(--gold)" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <ScrollReveal>
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Ready to get started with
              <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                {service.title}?
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm mb-8 mx-auto" style={{ color: "var(--warm)", maxWidth: "440px", lineHeight: 1.7 }}>
              Submit your brief and we&apos;ll come back with a detailed, no-obligation quote within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link href={`/get-a-quote?service=${service.id}`} className="btn-gold">
              Get a Quote for This Service
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
