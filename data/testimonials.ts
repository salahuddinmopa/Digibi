export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Digibly Group transformed our online presence completely. Our new website brought in 40% more enquiries within the first month. The attention to detail in the design is unlike anything we'd seen from other agencies.",
    name: "Sarah Chen",
    role: "Director",
    company: "Apex Consulting Group",
    initials: "SC",
  },
  {
    id: "2",
    quote:
      "The cybersecurity governance advisory Digibly Govern provided was exceptional. Their NIST CSF alignment report gave our board the clarity it needed to approve our entire security uplift programme.",
    name: "Michael Thornton",
    role: "Chief Information Security Officer",
    company: "Federal Agency (Confidential)",
    initials: "MT",
  },
  {
    id: "3",
    quote:
      "From brand identity to Google Ads, Digibly Group handled everything. Our cost-per-lead dropped 62% while enquiry quality improved dramatically. The monthly reports alone are worth the retainer.",
    name: "Priya Nair",
    role: "Founder & CEO",
    company: "Nair & Partners Legal",
    initials: "PN",
  },
  {
    id: "4",
    quote:
      "Working with Digibly Group felt like having a senior creative director and a technical lead in one team. The rebrand they delivered has completely changed how our clients perceive us.",
    name: "James Whitfield",
    role: "Managing Director",
    company: "Whitfield Property Group",
    initials: "JW",
  },
  {
    id: "5",
    quote:
      "Our e-commerce store now converts at 4.8% — up from 1.2% before Digibly Group rebuilt it. The checkout experience they designed is seamless, and mobile sales have tripled.",
    name: "Lauren Park",
    role: "Head of Digital",
    company: "Artisan Collective AU",
    initials: "LP",
  },
  {
    id: "6",
    quote:
      "Digibly Group's social media management has saved us countless hours and the quality is consistently outstanding. Our Instagram following grew from 800 to 12,400 in eight months.",
    name: "David Okafor",
    role: "Owner",
    company: "Okafor Health & Wellness",
    initials: "DO",
  },
];
