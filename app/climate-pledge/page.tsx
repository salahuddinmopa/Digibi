import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, BarChart2, Building2, FileText, ExternalLink } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { climatePledge } from "@/data/climate";

export const metadata: Metadata = {
  title: "Climate Pledge",
  description:
    "Digibly Group commits 5% of net revenue annually to climate change mitigation. We donate to the Climate Council of Australia, Australian Conservation Foundation, and Reef Life Foundation.",
  openGraph: {
    title: "Digibly Group Climate Pledge — 5% to the Planet",
    description:
      "Every project with Digibly Group contributes to Australian climate action. 5% of net revenue donated annually.",
    url: "https://digiblygroup.com.au/climate-pledge",
  },
};

const commitmentCards = [
  {
    Icon: BarChart2,
    title: "5% Net Revenue",
    body: "Every year, without exception, 5% of our net revenue goes directly to climate organisations.",
  },
  {
    Icon: Building2,
    title: "Named Recipients",
    body: "We name exactly where the money goes. No vague 'climate fund' — real organisations, real receipts.",
  },
  {
    Icon: FileText,
    title: "Annual Report",
    body: "We publish a transparent Climate Report every July showing revenue, donation amount, and recipient acknowledgments.",
  },
];

const reasonParagraphs = [
  "Australia is on the front line of climate change. As a Canberra-based business working with government and corporate clients, we see the policy implications every day. Our commitment is practical, not performative.",
  "We are proud members of the 1% for the Planet movement — though our 5% pledge exceeds their standard. Third-party membership means our commitment is independently verifiable, not self-declared.",
  "Our founder's background in governance research means we understand accountability. The same rigour we apply to cybersecurity maturity assessments, we apply to our own environmental reporting.",
  "We invite our clients to join us. Ask us about co-branded climate commitments for your own organisation.",
];

const pledgeTerms = [
  "Net revenue is defined as total revenue minus direct project costs and contractor fees, before tax.",
  "Donations are made annually at the end of each Australian financial year (30 June).",
  "All recipient organisations are Australian Deductible Gift Recipients (DGR) where possible.",
  "Digibly Group reserves the right to adjust recipient organisations annually, with changes published in the Climate Report.",
  "This pledge applies to Digibly Group Pty Ltd operations from financial year 2025–26 onward.",
];

export default function ClimatePledgePage() {
  return (
    <>
      <PageHero
        eyebrow="Digibly Climate Pledge · Est. 2025"
        title="Our Climate Pledge"
        subtitle="Because a better digital future means nothing without a liveable planet."
        breadcrumbs={[{ label: "Climate Pledge" }]}
      />

      {/* Section 1 — The Commitment */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="max-w-3xl mb-14">
            <ScrollReveal direction="none">
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                What We Pledge
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                A founding principle,
                <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                  not a footnote.
                </em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-base" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                Digibly Group commits 5% of net revenue every financial year to climate change mitigation and environmental awareness. This is not a rounding error — it is a founding principle. Every website we build, every campaign we run, every governance assessment we deliver contributes to this fund automatically. No opt-in required. No fine print.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitmentCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.12}>
                <div className="gold-card p-8 h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center mb-5"
                    style={{ border: "1px solid var(--border)", color: "var(--gold)" }}
                  >
                    <card.Icon size={18} />
                  </div>
                  <h3
                    className="font-display text-xl mb-3"
                    style={{ color: "var(--gold-light)", fontWeight: 400 }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {card.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Where the Money Goes */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Our Climate Partners
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-12"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Where the money goes
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {climatePledge.recipients.map((org, i) => (
              <ScrollReveal key={org.name} delay={i * 0.1}>
                <div
                  className="p-8"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3
                        className="font-display text-xl"
                        style={{ color: "var(--cream)", fontWeight: 400 }}
                      >
                        {org.name}
                      </h3>
                    </div>
                    <span
                      className="font-display text-3xl font-light flex-shrink-0 ml-4"
                      style={{ color: "var(--gold)", lineHeight: 1 }}
                    >
                      {org.allocation}%
                    </span>
                  </div>
                  <p className="text-sm mb-5" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                    {org.description}
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    {org.url !== "#" && (
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs uppercase tracking-label transition-colors hover:text-gold"
                        style={{ color: "var(--muted)" }}
                      >
                        Visit Website
                        <ExternalLink size={10} />
                      </a>
                    )}
                    {org.dgr && (
                      <span
                        className="text-xs px-2 py-0.5"
                        style={{
                          background: "rgba(201,168,76,0.1)",
                          border: "1px solid rgba(201,168,76,0.25)",
                          color: "var(--gold)",
                        }}
                      >
                        DGR Registered
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Why We Do This */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Our Reasoning
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Pull quote */}
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
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
                    fontWeight: 300,
                    color: "var(--cream)",
                    lineHeight: 1.4,
                  }}
                >
                  The digital industry consumes more energy than the aviation sector. Every server, every campaign, every line of code has a carbon cost. We believe digital agencies have a responsibility to offset that cost — and to go further.
                </blockquote>
                <div className="gold-divider mt-8" />
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  — Digibly Group
                </p>
              </div>
            </ScrollReveal>

            {/* Paragraphs */}
            <div className="space-y-6">
              {reasonParagraphs.map((para, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Annual Report */}
      <section
        className="section-padding"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
              Transparency Report
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-10"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Annual Climate Report
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto mb-6">
              <table className="w-full" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["Financial Year", "Net Revenue", "5% Donated", "Recipients", "Report"].map((h) => (
                      <th
                        key={h}
                        className="text-left py-3 pr-6 text-xs uppercase tracking-label"
                        style={{ color: "var(--gold)" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {climatePledge.annualReports.map((report) => (
                    <tr key={report.year} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                      <td className="py-4 pr-6 text-sm" style={{ color: "var(--cream)" }}>
                        FY {report.year}
                      </td>
                      <td className="py-4 pr-6 text-sm" style={{ color: "var(--warm)" }}>
                        First year — report due {report.publishDate}
                      </td>
                      <td className="py-4 pr-6 text-sm" style={{ color: "var(--muted)" }}>
                        —
                      </td>
                      <td className="py-4 pr-6 text-sm" style={{ color: "var(--warm)" }}>
                        Climate Council, ACF, Reef Life, ACT Initiative
                      </td>
                      <td className="py-4 pr-6">
                        <span
                          className="text-xs px-2 py-1"
                          style={{
                            background: "rgba(201,168,76,0.08)",
                            border: "1px solid var(--border)",
                            color: "var(--muted)",
                          }}
                        >
                          Pending
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mb-6" style={{ color: "var(--muted)" }}>
              Reports will be published every July. First report: July 2026.
            </p>

            {/* Disabled download button */}
            <div className="relative inline-block group">
              <button
                disabled
                className="btn-ghost text-xs py-2.5 px-5"
                style={{ opacity: 0.45, cursor: "not-allowed" }}
                aria-label="Download report — coming July 2026"
              >
                Download Report
              </button>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-xs px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  color: "var(--warm)",
                }}
              >
                Coming July 2026
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5 — 1% for the Planet */}
      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              {/* Placeholder badge */}
              <div
                className="flex items-center justify-center"
                style={{
                  height: 200,
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="text-center">
                  <Leaf size={40} className="mx-auto mb-3" style={{ color: "var(--gold)" }} />
                  <p className="font-display text-lg" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
                    1% for the Planet
                  </p>
                  <p className="text-xs uppercase tracking-label mt-1" style={{ color: "var(--muted)" }}>
                    Member Organisation
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Membership
              </p>
              <h2
                className="font-display mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 3rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
              >
                Verified by
                <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                  a third party.
                </em>
              </h2>
              <p className="text-sm mb-6" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                Digibly Group is a proud member of 1% for the Planet — and proud to exceed their standard with our 5% commitment. Third-party membership means our commitment is independently verifiable, not self-declared.
              </p>
              <a
                href={climatePledge.membershipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs inline-flex items-center gap-2"
              >
                Visit 1% for the Planet
                <ExternalLink size={12} />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section
        className="py-24 text-center"
        style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-wide">
          <ScrollReveal direction="none">
            <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
              <span className="w-16 h-px" style={{ background: "linear-gradient(90deg, transparent, var(--gold))" }} />
              <Leaf size={14} style={{ color: "var(--gold)" }} />
              <span className="w-16 h-px" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className="font-display mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1.1 }}
            >
              Work With a Business
              <em className="block" style={{ fontStyle: "italic", color: "var(--cream)" }}>
                That Cares.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm mb-10 mx-auto" style={{ color: "var(--warm)", maxWidth: "480px", lineHeight: 1.7 }}>
              Every project you bring to Digibly Group contributes to our Climate Pledge. Choose a partner whose values align with yours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/get-a-quote" className="btn-gold">
                Begin a Project
              </Link>
              <a
                href="#pledge-terms"
                className="btn-ghost"
              >
                Read Pledge Terms
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pledge Terms */}
      <section
        id="pledge-terms"
        className="py-16"
        style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="container-wide max-w-2xl">
          <ScrollReveal direction="none">
            <h3
              className="font-display text-lg mb-6"
              style={{ color: "var(--warm)", fontWeight: 400 }}
            >
              Pledge Terms
            </h3>
          </ScrollReveal>
          <ul className="space-y-3">
            {pledgeTerms.map((term, i) => (
              <li key={i} className="flex items-start gap-3 text-xs" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                <span style={{ color: "var(--gold)", fontSize: "0.4rem", marginTop: "0.45rem", flexShrink: 0 }}>◆</span>
                {term}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
