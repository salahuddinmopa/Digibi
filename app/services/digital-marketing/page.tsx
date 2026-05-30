import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Digital Marketing",
  description:
    "Data-driven SEO, Google Ads, and Meta campaigns for Australian businesses. Fill your pipeline and grow your brand.",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceImageHero
        image="/images/analytics-dashboard.png"
        blurDataURL={blurData.analytics}
        imageAlt="Digibly Group digital marketing expert monitoring Google Analytics campaign performance across multiple screens"
        eyebrow="Digibly Studio · Digital Marketing"
        heading="Data-Driven Marketing. Measurable Results."
        body="From SEO to paid search and email, we build and manage marketing systems that generate qualified leads and measurable ROI for your business."
        ctaLabel="Get a Quote for This Service"
        ctaHref="/get-a-quote?service=digital-marketing"
        breadcrumb="Digital Marketing"
        metricCards={[
          { value: "3.8%", label: "Click-Through Rate", badge: "Above Average" },
          { value: "$2.50", label: "Cost Per Click", badge: "Optimised" },
          { value: "211K", label: "Monthly Impressions", badge: "Active Campaign" },
        ]}
      />
      <ServicePageContent serviceId="digital-marketing" skipHero />
    </>
  );
}
