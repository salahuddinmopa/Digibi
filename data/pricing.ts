export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
}

export interface AddOn {
  service: string;
  price: string;
  period?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    price: "$499",
    description: "For businesses that need a professional online presence, fast.",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Basic on-page SEO",
      "Contact form integration",
      "Google Analytics setup",
      "30-day post-launch support",
      "1 round of revisions",
    ],
    cta: "Get Started",
    ctaHref: "/get-a-quote",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$1,299",
    period: "+ $199/mo",
    description: "The complete growth package for ambitious growing businesses.",
    features: [
      "Up to 15-page custom website",
      "Brand kit (logo, colours, typography)",
      "Advanced SEO setup",
      "Social media profile setup",
      "Email marketing integration",
      "Monthly performance report",
      "Priority support",
      "2 rounds of revisions",
      "CMS for easy updates",
    ],
    cta: "Most Popular — Start Here",
    ctaHref: "/get-a-quote",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "bespoke",
    name: "Bespoke",
    price: "Custom",
    description: "Tailored engagements for complex requirements and enterprise clients.",
    features: [
      "Custom web + app development",
      "Multi-channel marketing strategy",
      "Full brand identity system",
      "Dedicated account director",
      "SLA support commitment",
      "Governance advisory available",
      "Quarterly strategy reviews",
      "Unlimited revisions",
      "White-glove onboarding",
    ],
    cta: "Book a Discovery Call",
    ctaHref: "/contact",
  },
];

export const addOns: AddOn[] = [
  { service: "Logo design (standalone)", price: "$399" },
  { service: "Additional website pages", price: "$150", period: "per page" },
  { service: "Monthly SEO retainer", price: "$449", period: "/mo" },
  { service: "Google Ads management", price: "$599", period: "/mo" },
  { service: "Social media management (12 posts)", price: "$499", period: "/mo" },
  { service: "Monthly analytics report", price: "$299", period: "/mo" },
  { service: "E-commerce store setup", price: "From $1,499" },
  { service: "Brand guidelines document", price: "$299" },
  { service: "Cybersecurity governance assessment", price: "Custom" },
];

export const pricingFAQs: FAQ[] = [
  {
    question: "How does payment work?",
    answer:
      "We require a 50% deposit to commence work, with the remaining 50% due on final delivery and client sign-off. For monthly retainers, invoices are issued at the start of each month.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "The Launch package includes 1 round of revisions, Studio includes 2 rounds, and Bespoke engagements include unlimited revisions within the agreed scope. Additional revision rounds beyond what's included are billed at $120/hour.",
  },
  {
    question: "Do I own my website and assets after the project?",
    answer:
      "Yes, absolutely. Full intellectual property and ownership of all deliverables — including your website, logo, and brand assets — transfers to you on receipt of final payment.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "A Launch package typically takes 2–3 weeks. A Studio website takes 4–6 weeks. Bespoke projects vary by scope and are scoped in detail before commencement.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. Many clients start on the Launch or Studio package and add services over time as their business grows. We make transitions between packages seamless.",
  },
  {
    question: "Do you work with government clients?",
    answer:
      "Yes. We have experience working with government agencies and public sector organisations, both for digital services and through Digibly Govern for cybersecurity governance advisory.",
  },
  {
    question: "What is not included in the pricing?",
    answer:
      "Pricing does not include third-party software licences (e.g., WordPress plugins, Shopify subscriptions), domain registration, hosting costs, or paid advertising budgets. We'll always be transparent about any additional costs before you commit.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "For projects over $1,500, we can arrange milestone-based payment schedules. Discuss this with us during your initial consultation and we'll find an arrangement that works.",
  },
];
