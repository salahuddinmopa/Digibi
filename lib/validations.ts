import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.enum([
    "General Enquiry",
    "Project Quote",
    "Partnership",
    "Cybersecurity Advisory",
    "Press",
  ]),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const quoteStep1Schema = z.object({
  fullName: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  companySize: z.enum(["Solo", "2–10", "11–50", "51–200", "200+"]),
  industry: z.string().min(1, "Please select an industry"),
});

export const quoteStep2Schema = z.object({
  services: z.array(z.string()).min(1, "Select at least one service"),
  projectDescription: z.string().min(20, "Please describe your project (min 20 characters)"),
  hasExistingWebsite: z.boolean(),
  existingWebsiteUrl: z.string().optional(),
  targetLaunchDate: z.string().optional(),
  budgetRange: z.enum([
    "Under $500",
    "$500–$1,500",
    "$1,500–$5,000",
    "$5,000–$20,000",
    "$20,000+",
    "Discuss with team",
  ]),
});

export const quoteStep3Schema = z.object({
  pagesNeeded: z.string().optional(),
  cmsPreference: z.string().optional(),
  designStyle: z.string().optional(),
  monthlyAdSpend: z.string().optional(),
  primaryPlatform: z.string().optional(),
  organisationType: z.string().optional(),
  currentFramework: z.string().optional(),
  assessmentScope: z.string().optional(),
});

export const quoteStep4Schema = z.object({
  agreeToTerms: z.literal(true).refine((v) => v === true, { message: "You must agree to the Terms of Service" }),
});

export type QuoteStep1Data = z.infer<typeof quoteStep1Schema>;
export type QuoteStep2Data = z.infer<typeof quoteStep2Schema>;
export type QuoteStep3Data = z.infer<typeof quoteStep3Schema>;
export type QuoteStep4Data = z.infer<typeof quoteStep4Schema>;

export const industries = [
  "Government / Public Sector",
  "Education",
  "Health & Medical",
  "Legal & Professional Services",
  "Finance & Insurance",
  "Real Estate & Property",
  "Technology & Software",
  "Retail & Consumer Goods",
  "Food & Hospitality",
  "Construction & Trades",
  "Non-Profit / Charity",
  "Creative & Arts",
  "Transport & Logistics",
  "Agriculture",
  "Manufacturing",
  "Media & Communications",
  "Consulting & Advisory",
  "Defence & Security",
  "Energy & Utilities",
  "Other",
];
