import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Web Design & Development",
  description:
    "Custom, conversion-optimised websites built in Canberra, Australia. Mobile responsive, SEO-ready, and crafted to perform.",
};

export default function WebDesignPage() {
  return (
    <>
      <ServiceImageHero
        image="/images/web-design.png"
        blurDataURL={blurData.webDesign}
        imageAlt="A Digibly Group web designer crafting a dark luxury website for a premium client"
        eyebrow="Digibly Studio · Web Design & Development"
        heading="Websites That Command Attention"
        body="We craft bespoke websites that are as beautiful as they are functional — built to perform on every device and engineered for search visibility from the ground up."
        ctaLabel="Get a Quote for This Service"
        ctaHref="/get-a-quote?service=web-design"
        objectPosition="center left"
        breadcrumb="Web Design & Development"
      />
      <ServicePageContent serviceId="web-design" skipHero />
    </>
  );
}
