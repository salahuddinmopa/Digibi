export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  tags: string[];
  outcome: string;
  description: string;
  category: string;
  image?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "apex-consulting",
    title: "Brand Identity & Website Redesign",
    client: "Apex Consulting Group",
    tags: ["Web Design", "Branding"],
    outcome: "40% increase in inbound enquiries within 30 days of launch",
    description:
      "Complete brand overhaul and website rebuild for a Canberra-based management consultancy. We developed a sophisticated identity system and a custom Next.js website optimised for conversion and search visibility.",
    category: "Web Design",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Apex+Consulting",
  },
  {
    id: "artisan-collective",
    title: "E-Commerce Platform Launch",
    client: "Artisan Collective AU",
    tags: ["E-Commerce", "Web Design"],
    outcome: "Conversion rate improved from 1.2% to 4.8%; mobile sales tripled",
    description:
      "End-to-end Shopify build for a premium Australian artisan goods marketplace. Included custom theme development, payment gateway integration, inventory management, and a mobile-first checkout experience.",
    category: "E-Commerce",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Artisan+Collective",
  },
  {
    id: "nair-partners",
    title: "Digital Marketing & Lead Generation",
    client: "Nair & Partners Legal",
    tags: ["Marketing", "Analytics"],
    outcome: "Cost-per-lead reduced 62% while enquiry quality improved significantly",
    description:
      "Full-funnel digital marketing strategy for a boutique Canberra law firm. Included Google Ads restructure, landing page optimisation, email nurture sequences, and monthly analytics reporting.",
    category: "Marketing",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Nair+Partners",
  },
  {
    id: "okafor-wellness",
    title: "Social Media Growth Campaign",
    client: "Okafor Health & Wellness",
    tags: ["Social Media", "Branding"],
    outcome: "Instagram following grew from 800 to 12,400 in 8 months",
    description:
      "Strategic social media management including content calendar development, branded template design, community management, and monthly performance reporting across Instagram, Facebook, and LinkedIn.",
    category: "Marketing",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Okafor+Wellness",
  },
  {
    id: "federal-agency-governance",
    title: "Cybersecurity Governance Assessment",
    client: "Federal Agency (Confidential)",
    tags: ["Governance", "Cybersecurity"],
    outcome: "Board approved $2.4M security uplift programme based on our roadmap",
    description:
      "Comprehensive governance maturity assessment using the SIGMA framework aligned to NIST CSF 2.0 and COBIT 2019. Delivered an executive summary and board-ready risk register that enabled the agency to secure programme funding.",
    category: "Governance",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Governance+Advisory",
  },
  {
    id: "whitfield-property",
    title: "Brand Identity & Marketing Suite",
    client: "Whitfield Property Group",
    tags: ["Branding", "Web Design"],
    outcome: "Repositioned brand led to 28% increase in average transaction value",
    description:
      "Premium brand identity development for a Canberra property group. Included logo suite, typography and colour system, brand guidelines, website redesign, and a complete marketing collateral suite.",
    category: "Branding",
    image: "https://placehold.co/800x500/1c1a17/c9a84c?text=Whitfield+Property",
  },
];

export const portfolioCategories = ["All", "Web Design", "Marketing", "Branding", "E-Commerce", "Governance"];

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((p) => p.category === category || p.tags.includes(category));
}
