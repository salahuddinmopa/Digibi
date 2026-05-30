import type { Metadata } from "next";
import ServiceImageHero from "@/components/sections/ServiceImageHero";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { blurData } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Social Media Management",
  description:
    "Consistent, compelling social presence that builds your community. Content calendars, community management, and monthly analytics.",
};

export default function SocialMediaPage() {
  return (
    <>
      <ServiceImageHero
        image="/images/social-media.png"
        blurDataURL={blurData.socialMedia}
        imageAlt="Social media management workspace — iPhone showing luxury Instagram grid alongside analytics dashboard, managed by Digibly Group"
        eyebrow="Digibly Studio · Social Media Management"
        heading="Presence That Builds Loyalty."
        body="Consistent, considered, and conversion-focused. We manage your social channels end-to-end — so your brand shows up with the same quality every single day."
        ctaLabel="View Social Packages"
        ctaHref="/get-a-quote?service=social-media"
        objectPosition="center 30%"
        breadcrumb="Social Media Management"
        frameworkBadges={[
          { label: "Instagram" },
          { label: "Facebook" },
          { label: "LinkedIn" },
          { label: "TikTok" },
          { label: "X" },
        ]}
        metricCards={[
          { value: "↑ 284%", label: "Follower Growth", badge: "Avg. Client Result" },
          { value: "↑ 61%", label: "Engagement Rate", badge: "Avg. Client Result" },
          { value: "↑ 3.2×", label: "Reach Increase", badge: "Avg. Client Result" },
        ]}
      />
      <ServicePageContent serviceId="social-media" skipHero />
    </>
  );
}
