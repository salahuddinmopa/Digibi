import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Brand Identity & Design",
  description:
    "Identities that are immediately recognisable and built to endure. Logo design, brand systems, and guidelines for Australian businesses.",
};

export default function BrandIdentityPage() {
  return (
    <>
      <ServiceImageHero
        image="/images/brand-identity.png"
        blurDataURL={blurData.brandIdentity}
        imageAlt="Premium brand identity design materials — brand guidelines book, Pantone swatches, and logo cards crafted by Digibly Group"
        eyebrow="Digibly Studio · Brand Identity & Design"
        heading="Identities That Command Recognition."
        body="Your brand is the first conversation you have with every client. We make it unforgettable — from the first letterform to the final brand guideline page."
        ctaLabel="Start Your Brand Project"
        ctaHref="/get-a-quote?service=brand-identity"
        objectPosition="center 40%"
        breadcrumb="Brand Identity & Design"
        listCard={{
          title: "WHAT'S INCLUDED",
          items: [
            "Logo suite (primary, secondary, icon)",
            "Full colour palette system",
            "Typography hierarchy",
            "Brand guidelines PDF",
            "Business card & letterhead",
            "Social media kit",
          ],
        }}
      />
      <ServicePageContent serviceId="brand-identity" skipHero />
    </>
  );
}
