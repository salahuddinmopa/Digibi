import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Digibly Group Privacy Policy. Compliant with the Australian Privacy Act 1988.",
};

const sections = [
  {
    title: "1. Our Commitment to Privacy",
    content: `Digibly Group is committed to protecting your personal information and complying with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and protect your personal information.`,
  },
  {
    title: "2. What Information We Collect",
    content: `We collect personal information that you provide directly, including your name, email address, phone number, company name, and project details when you contact us or submit a quote request. We also collect information automatically through our website, including your IP address, browser type, pages visited, and time spent on our site via Google Analytics and similar tools.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use your personal information to: respond to your enquiries and provide our services; communicate with you about your project; send service updates and invoices; improve our website and services; comply with legal obligations; and, with your consent, send marketing communications. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: "4. Third-Party Services",
    content: `We use the following third-party services that may collect and process your information: Google Analytics (website analytics and usage data); Resend (email delivery for enquiry and transactional emails); NextAuth (secure authentication for the client portal). Each of these providers maintains their own privacy policies. We take reasonable steps to ensure these providers comply with applicable privacy laws.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies to improve your browsing experience, analyse website traffic, and remember your preferences. You may disable cookies in your browser settings; however, some features of our website may not function properly without them. We ask for your consent to non-essential cookies via our cookie banner.`,
  },
  {
    title: "6. Data Security",
    content: `We take reasonable steps to protect your personal information from unauthorised access, disclosure, alteration, or destruction. This includes secure hosting, encryption of data in transit (HTTPS), and access controls. However, no internet transmission is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Project records are typically retained for 7 years in accordance with Australian business record-keeping requirements. You may request deletion of your personal information at any time, subject to legal retention requirements.`,
  },
  {
    title: "8. Your Rights",
    content: `Under the Australian Privacy Act 1988, you have the right to: access the personal information we hold about you; request correction of inaccurate or incomplete information; make a complaint about our handling of your information; and request deletion of your information (subject to legal obligations). To exercise these rights, contact us at hello@digiblygroup.com.au.`,
  },
  {
    title: "9. Notifiable Data Breaches",
    content: `In the event of a data breach that is likely to result in serious harm, we will notify the Office of the Australian Information Commissioner (OAIC) and affected individuals in accordance with the Notifiable Data Breaches scheme under Part IIIC of the Privacy Act 1988.`,
  },
  {
    title: "10. Contact for Privacy Enquiries",
    content: `For any privacy-related enquiries, to access or correct your information, or to make a complaint, please contact us at hello@digiblygroup.com.au or in writing to Digibly Group, Canberra ACT, Australia. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="We take your privacy seriously. This policy explains how we handle your personal information in compliance with the Australian Privacy Act 1988."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide max-w-3xl">
          <ScrollReveal direction="none">
            <p className="text-xs mb-8" style={{ color: "var(--muted)" }}>
              Last updated: May 2026 · Compliant with the Australian Privacy Act 1988 (Cth)
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
            <div className="mt-12 p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <p className="text-sm" style={{ color: "var(--warm)" }}>
                <strong style={{ color: "var(--cream)" }}>Privacy Enquiries:</strong>{" "}
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
