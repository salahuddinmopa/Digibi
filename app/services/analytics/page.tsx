import type { Metadata } from "next";
import Image from "next/image";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Analytics & Reporting",
  description:
    "GA4 setup, custom dashboards, and monthly reporting. Turn your data into decisions that drive growth.",
};

export default function AnalyticsPage() {
  return (
    <>
      <ServiceImageHero
        image="/images/analytics-reporting.png"
        blurDataURL={blurData.analyticsReporting}
        imageAlt="Analytics and reporting workspace — MacBook displaying a gold-accented business dashboard alongside an open performance report, by Digibly Group"
        eyebrow="Digibly Studio · Analytics & Reporting"
        heading="Intelligence That Guides Decisions."
        body="We transform raw data into clear, actionable insight. Custom dashboards, monthly reports, and strategic recommendations — all in one place."
        ctaLabel="Get Your Analytics Setup"
        ctaHref="/get-a-quote?service=analytics"
        objectPosition="45% center"
        breadcrumb="Analytics & Reporting"
        listCard={{
          title: "MONTHLY REPORT INCLUDES",
          items: [
            "Traffic & acquisition summary",
            "Conversion funnel analysis",
            "Campaign ROI breakdown",
            "Heatmap behaviour insights",
            "Next month recommendations",
          ],
        }}
      />
      <ServicePageContent serviceId="analytics" skipHero />

      {/* Secondary image — live dashboard environment */}
      <section style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
        <div className="relative overflow-hidden" style={{ height: "45vh", minHeight: 320 }}>
          <Image
            src="/images/analytics-dashboard.png"
            alt="Digibly Group analytics specialist reviewing live campaign data and business intelligence dashboards across multiple screens"
            fill
            quality={85}
            placeholder="blur"
            blurDataURL={blurData.analytics}
            className="object-cover"
            style={{ objectPosition: "right center" }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(14,13,11,0.85) 0%, rgba(14,13,11,0.3) 50%, transparent 100%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 container-wide pb-10">
            <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--gold)" }}>
              What Your Dashboard Looks Like
            </p>
            <p className="text-sm" style={{ color: "var(--warm)" }}>
              Real-time data across all your digital channels — in one place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
