import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Cybersecurity Governance Advisory",
  description:
    "Strategic governance frameworks for government and regulated organisations. NIST CSF 2.0, COBIT 2019, and AI governance advisory in Canberra.",
};

export default function CybersecurityGovernancePage() {
  return (
    <>
      <ServiceImageHero
        image="/images/cybersecurity.png"
        blurDataURL={blurData.cybersecurity}
        imageAlt="Digibly Govern cybersecurity governance consultant reviewing security infrastructure in a professional data centre environment"
        eyebrow="Digibly Govern · Cybersecurity Advisory"
        heading="Governance That Protects What Matters."
        body="We assess, advise, and strengthen cybersecurity governance for public sector organisations and regulated industries — using research-backed frameworks including SIGMA, NIST CSF 2.0, and COBIT 2019."
        ctaLabel="Request an Assessment"
        ctaHref="/get-a-quote?service=cybersecurity-governance"
        height="80vh"
        breadcrumb="Cybersecurity Governance"
        scanLine
        frameworkBadges={[
          { label: "SIGMA" },
          { label: "NIST CSF 2.0" },
          { label: "COBIT 2019" },
          { label: "NIST AI RMF 1.0" },
        ]}
      />
      <ServicePageContent serviceId="cybersecurity-governance" skipHero />
    </>
  );
}
