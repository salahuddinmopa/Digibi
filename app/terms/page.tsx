import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Digibly Group Terms of Service. Governing law: Australian Capital Territory, Australia.",
};

const sections = [
  {
    title: "1. Services",
    content: `Digibly Group ("we", "us", "our") provides digital agency and governance advisory services including but not limited to web design, digital marketing, brand identity, social media management, e-commerce development, analytics, and cybersecurity governance advisory. These Terms of Service govern all engagements between Digibly Group and the client ("you", "your") unless a separate written agreement is executed.`,
  },
  {
    title: "2. Payment Terms",
    content: `A deposit of 50% of the total project fee is required before any work commences. The remaining 50% is due upon final delivery and client sign-off. For monthly retainer services, invoices are issued at the start of each billing period and are due within 14 days. Overdue invoices may attract a late payment fee of 1.5% per month. Digibly Group reserves the right to suspend work on any project with outstanding invoices.`,
  },
  {
    title: "3. Revision Policy",
    content: `Our standard packages include a specified number of revision rounds as outlined in your project agreement. The Launch package includes 1 round of revisions; the Studio package includes 2 rounds. Additional revision rounds beyond what is included are billed at $120 per hour (excluding GST). Revisions do not include scope changes. Requests that constitute new scope will be separately quoted.`,
  },
  {
    title: "4. Intellectual Property",
    content: `All intellectual property rights in deliverables created by Digibly Group transfer to the client upon receipt of final payment in full. Until final payment is received, all deliverables remain the intellectual property of Digibly Group. Digibly Group retains the right to display completed work in its portfolio and marketing materials unless otherwise agreed in writing.`,
  },
  {
    title: "5. Client Responsibilities",
    content: `The client is responsible for providing all required content, assets, approvals, and feedback in a timely manner. Delays caused by the client's failure to provide required materials or approvals may result in revised timelines and/or additional fees. The client warrants that any materials provided to Digibly Group do not infringe any third-party intellectual property rights.`,
  },
  {
    title: "6. Confidentiality",
    content: `Both parties agree to maintain the confidentiality of information designated as confidential, and not to disclose such information to third parties without prior written consent, except as required by law. This obligation survives the termination of the engagement.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the maximum extent permitted by law, Digibly Group's total liability for any claim arising out of or relating to our services is limited to the total fees paid by the client for the specific service giving rise to the claim in the preceding three months. Digibly Group is not liable for indirect, incidental, special, or consequential damages, including loss of profits, loss of revenue, or loss of data.`,
  },
  {
    title: "8. Termination",
    content: `Either party may terminate an engagement by providing 30 days' written notice. Upon termination, the client is responsible for payment of all work completed to the date of termination. Any deposit paid is non-refundable. Digibly Group reserves the right to terminate immediately in the event of material breach by the client or non-payment.`,
  },
  {
    title: "9. Governing Law",
    content: `These Terms of Service are governed by the laws of the Australian Capital Territory, Australia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of the Australian Capital Territory.`,
  },
  {
    title: "10. Changes to These Terms",
    content: `Digibly Group reserves the right to update these Terms of Service at any time. Continued engagement with Digibly Group following notification of changes constitutes acceptance of the updated terms.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Please read these terms carefully. By engaging Digibly Group, you agree to be bound by these terms."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide max-w-3xl">
          <ScrollReveal direction="none">
            <p className="text-xs mb-8" style={{ color: "var(--muted)" }}>
              Last updated: May 2026 · Digibly Group, Canberra ACT, Australia
            </p>
          </ScrollReveal>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.04}>
                <div>
                  <h2
                    className="font-display text-xl mb-4"
                    style={{ color: "var(--gold-light)", fontWeight: 400 }}
                  >
                    {section.title}
                  </h2>
                  <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.8 }}>
                    {section.content}
                  </p>
                </div>
                {i < sections.length - 1 && (
                  <div className="mt-10 h-px" style={{ background: "var(--border-subtle)" }} />
                )}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div
              className="mt-12 p-6"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              <p className="text-sm mb-2" style={{ color: "var(--warm)" }}>
                <strong style={{ color: "var(--cream)" }}>Questions about these terms?</strong>
              </p>
              <p className="text-sm" style={{ color: "var(--warm)" }}>
                Contact us at{" "}
                <a href="mailto:hello@digiblygroup.com.au" style={{ color: "var(--gold)" }}>
                  hello@digiblygroup.com.au
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
