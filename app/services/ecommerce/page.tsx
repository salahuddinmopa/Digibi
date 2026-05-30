import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "E-Commerce Solutions",
  description:
    "Online stores engineered to convert. Shopify, WooCommerce, and custom e-commerce builds for Australian businesses.",
};

export default function EcommercePage() {
  return (
    <>
      <ServiceImageHero
        image="/images/ecommerce.png"
        blurDataURL={blurData.ecommerce}
        imageAlt="E-commerce solution — MacBook displaying a premium dark luxury online store alongside elegantly packaged products, built by Digibly Group"
        eyebrow="Digibly Studio · E-Commerce Solutions"
        heading="Stores Built to Sell Beautifully."
        body="From product page to checkout confirmation — every step of your customer's journey is crafted to convert browsers into loyal buyers."
        ctaLabel="Build Your Store"
        ctaHref="/get-a-quote?service=ecommerce"
        objectPosition="55% center"
        breadcrumb="E-Commerce Solutions"
        frameworkBadges={[
          { label: "Shopify" },
          { label: "WooCommerce" },
          { label: "Custom Build" },
        ]}
        metricCards={[
          { value: "↑ 340%", label: "Conversion Rate", badge: "Client Outcome" },
          { value: "↑ 28%", label: "Average Order Value", badge: "Client Outcome" },
          { value: "↓ 41%", label: "Cart Abandonment", badge: "Client Outcome" },
        ]}
      />
      <ServicePageContent serviceId="ecommerce" skipHero />
    </>
  );
}
