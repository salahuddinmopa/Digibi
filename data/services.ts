import { blurData } from "@/lib/animations";

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  href: string;
  previewImage: string;
  previewBlur: string;
  deliverables: string[];
  tools: string[];
  startingPrice: string;
  targetClients: {
    sme: string;
    corporate: string;
    government?: string;
  };
  process: { step: string; description: string }[];
  relatedServices: string[];
}

export const services: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design & Development",
    shortDescription: "Custom, conversion-optimised websites that command attention.",
    description:
      "We craft bespoke websites that are as beautiful as they are functional — built to perform on every device and engineered for search visibility from the ground up.",
    href: "/services/web-design",
    previewImage: "/images/web-design.png",
    previewBlur: blurData.webDesign,
    deliverables: [
      "Custom UI/UX design tailored to your brand",
      "Fully responsive, mobile-first development",
      "CMS integration (WordPress, Webflow, Sanity)",
      "Core Web Vitals & performance optimisation",
      "On-page SEO foundation (meta, schema, sitemaps)",
      "2 rounds of design revisions",
      "30-day post-launch support",
    ],
    tools: ["Figma", "Next.js", "WordPress", "Webflow", "Shopify", "Tailwind CSS"],
    startingPrice: "From $1,299",
    targetClients: {
      sme: "Small businesses needing a professional online presence to win more clients.",
      corporate: "Enterprise organisations requiring scalable platforms with CMS workflows.",
      government: "Government agencies needing accessible, compliant digital services.",
    },
    process: [
      { step: "Discovery & Strategy", description: "We audit your existing presence, research competitors, and define goals." },
      { step: "Design & Prototype", description: "High-fidelity Figma designs, reviewed with your team before a single line of code is written." },
      { step: "Development", description: "Clean, performant code built on industry-standard frameworks." },
      { step: "Launch & Care", description: "Thorough QA, deployment, and ongoing support to keep your site performing." },
    ],
    relatedServices: ["digital-marketing", "brand-identity", "ecommerce"],
  },
  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    shortDescription: "Data-driven campaigns that fill your pipeline and grow your brand.",
    description:
      "From SEO to paid search and email, we build and manage marketing systems that generate qualified leads and measurable ROI for your business.",
    href: "/services/digital-marketing",
    previewImage: "/images/analytics-dashboard.png",
    previewBlur: blurData.analytics,
    deliverables: [
      "Comprehensive SEO audit and strategy",
      "Google Ads campaign setup and management",
      "Meta Ads (Facebook & Instagram) campaigns",
      "Email marketing sequences and automations",
      "Monthly performance reporting with insights",
      "Keyword research and content strategy",
    ],
    tools: ["Google Ads", "Meta Business Suite", "Mailchimp", "SEMrush", "GA4", "Google Search Console"],
    startingPrice: "From $699/mo",
    targetClients: {
      sme: "Growing businesses that need more leads without wasting ad spend.",
      corporate: "Multi-location brands needing coordinated national campaigns.",
    },
    process: [
      { step: "Audit & Research", description: "Deep-dive into your current visibility, competitors, and audience data." },
      { step: "Strategy", description: "A custom channel plan prioritising the highest-ROI opportunities." },
      { step: "Launch & Optimise", description: "Campaigns go live with continuous A/B testing and bid optimisation." },
      { step: "Report & Refine", description: "Monthly reports with clear metrics and strategic recommendations." },
    ],
    relatedServices: ["web-design", "analytics", "social-media"],
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity & Design",
    shortDescription: "Identities that are immediately recognisable and built to endure.",
    description:
      "A brand is more than a logo. We create comprehensive identity systems — visual languages that communicate your values instantly and consistently across every touchpoint.",
    href: "/services/brand-identity",
    previewImage: "/images/brand-identity.png",
    previewBlur: blurData.brandIdentity,
    deliverables: [
      "Primary and secondary logo suite (all formats)",
      "Brand colour palette with usage guidelines",
      "Typography system (primary + secondary fonts)",
      "Comprehensive brand guidelines PDF",
      "Business card and letterhead design",
      "Brand pattern and graphic element library",
      "Social media profile graphics",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe InDesign"],
    startingPrice: "From $899",
    targetClients: {
      sme: "Startups and growing businesses establishing their identity for the first time.",
      corporate: "Established organisations undergoing a rebrand or brand refresh.",
    },
    process: [
      { step: "Brand Discovery", description: "Workshops to define your brand personality, values, and positioning." },
      { step: "Concept Development", description: "3 distinct creative directions presented for your team to review." },
      { step: "Refinement", description: "Your chosen direction is refined to perfection across all applications." },
      { step: "Brand Delivery", description: "Complete asset library and brand guidelines, ready to deploy." },
    ],
    relatedServices: ["web-design", "social-media", "digital-marketing"],
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Management",
    shortDescription: "Consistent, compelling social presence that builds community.",
    description:
      "We plan, create, and manage your social channels so you can focus on running your business, while we build your audience and engagement.",
    href: "/services/social-media",
    previewImage: "/images/social-media.png",
    previewBlur: blurData.socialMedia,
    deliverables: [
      "Monthly content calendar (12 posts/month minimum)",
      "Branded static and animated story templates",
      "Community management (comments, DMs)",
      "Monthly analytics report with engagement metrics",
      "Hashtag research and optimisation",
      "Platform-specific content adaptation",
    ],
    tools: ["Canva Pro", "Meta Business Suite", "Later", "Buffer", "CapCut"],
    startingPrice: "From $499/mo",
    targetClients: {
      sme: "Businesses wanting consistent social presence without hiring in-house.",
      corporate: "Multi-brand organisations needing coordinated social governance.",
    },
    process: [
      { step: "Brand Audit", description: "Review existing channels, tone, and competitor positioning." },
      { step: "Strategy & Calendar", description: "Content pillars, posting schedule, and campaign ideas for the month ahead." },
      { step: "Create & Schedule", description: "All content produced, approved, and scheduled." },
      { step: "Monitor & Report", description: "Daily community management and monthly performance review." },
    ],
    relatedServices: ["brand-identity", "digital-marketing", "analytics"],
  },
  {
    id: "ecommerce",
    number: "05",
    title: "E-Commerce Solutions",
    shortDescription: "Online stores engineered to convert browsers into buyers.",
    description:
      "We build high-performance e-commerce stores that look beautiful, load fast, and make purchasing frictionless — whether you're selling 10 products or 10,000.",
    href: "/services/ecommerce",
    previewImage: "/images/ecommerce.png",
    previewBlur: blurData.ecommerce,
    deliverables: [
      "Full product catalogue setup and configuration",
      "Secure payment gateway integration (Stripe, PayPal, Afterpay)",
      "Inventory management system setup",
      "Mobile-optimised checkout flow",
      "Abandoned cart recovery automation",
      "Conversion rate optimisation",
      "SEO product and category pages",
    ],
    tools: ["Shopify", "WooCommerce", "Stripe", "Next.js Commerce"],
    startingPrice: "From $1,499",
    targetClients: {
      sme: "Retailers and product businesses launching or migrating their online store.",
      corporate: "Brands needing enterprise e-commerce with ERP integrations.",
    },
    process: [
      { step: "Store Strategy", description: "Platform selection, product architecture, and UX planning." },
      { step: "Design & Build", description: "Custom storefront design built for your brand and product range." },
      { step: "Configure & Test", description: "Payment, shipping, tax, inventory — all configured and stress-tested." },
      { step: "Launch & Optimise", description: "Soft launch with analytics tracking and conversion monitoring." },
    ],
    relatedServices: ["web-design", "digital-marketing", "analytics"],
  },
  {
    id: "analytics",
    number: "06",
    title: "Analytics & Reporting",
    shortDescription: "Turn your data into decisions that drive growth.",
    description:
      "We implement proper tracking, build custom dashboards, and deliver monthly reports that give you clear visibility over what's working — and what isn't.",
    href: "/services/analytics",
    previewImage: "/images/analytics-reporting.png",
    previewBlur: blurData.analyticsReporting,
    deliverables: [
      "Google Analytics 4 (GA4) setup and configuration",
      "Custom Looker Studio dashboard",
      "Monthly PDF performance report",
      "Heatmap and session recording setup (Hotjar / Clarity)",
      "Goal and conversion tracking",
      "E-commerce and funnel tracking",
    ],
    tools: ["GA4", "Google Looker Studio", "Hotjar", "Microsoft Clarity", "Google Tag Manager"],
    startingPrice: "From $299/mo",
    targetClients: {
      sme: "Business owners who want to understand their website and marketing performance.",
      corporate: "Marketing teams needing unified reporting across multiple data sources.",
    },
    process: [
      { step: "Audit", description: "Review existing tracking setup and identify gaps." },
      { step: "Implement", description: "Deploy correct tagging and tracking across all digital properties." },
      { step: "Dashboard", description: "Build a custom reporting dashboard tailored to your KPIs." },
      { step: "Report", description: "Monthly insight reports with strategic recommendations." },
    ],
    relatedServices: ["digital-marketing", "web-design", "ecommerce"],
  },
  {
    id: "cybersecurity-governance",
    number: "07",
    title: "Cybersecurity Governance Advisory",
    shortDescription: "Strategic governance frameworks for organisations that can't afford to get it wrong.",
    description:
      "Through Digibly Govern, we provide expert cybersecurity governance advisory services grounded in leading international frameworks. We help public sector and regulated industry clients mature their security posture with clarity and confidence.",
    href: "/services/cybersecurity-governance",
    previewImage: "/images/cybersecurity.png",
    previewBlur: blurData.cybersecurity,
    deliverables: [
      "Governance maturity assessment (SIGMA framework)",
      "Current-state risk and gap analysis",
      "Policy and procedure recommendations",
      "Framework alignment roadmap (NIST CSF 2.0, COBIT 2019)",
      "AI governance alignment (NIST AI RMF 1.0)",
      "Executive-level summary report",
      "Board-ready risk register",
    ],
    tools: ["NIST CSF 2.0", "COBIT 2019", "CMMI", "NIST AI RMF 1.0", "ISO 27001"],
    startingPrice: "Custom Engagement",
    targetClients: {
      sme: "Regulated SMEs in finance, health, or critical infrastructure needing compliance clarity.",
      corporate: "Large enterprises conducting board-level cybersecurity governance reviews.",
      government: "Government agencies, departments, and public sector bodies aligning with Australian Cyber Security Strategy.",
    },
    process: [
      { step: "Scoping & Discovery", description: "Define the assessment scope, stakeholders, and current documentation." },
      { step: "Maturity Assessment", description: "Systematic evaluation against chosen frameworks using the SIGMA methodology." },
      { step: "Gap Analysis", description: "Identify critical gaps, risk priorities, and capability shortfalls." },
      { step: "Report & Roadmap", description: "Deliver executive report with prioritised recommendations and governance roadmap." },
    ],
    relatedServices: ["analytics", "web-design", "digital-marketing"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
