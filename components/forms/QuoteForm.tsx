"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  quoteStep1Schema, quoteStep2Schema, quoteStep3Schema, quoteStep4Schema,
  QuoteStep1Data, QuoteStep2Data, QuoteStep3Data, QuoteStep4Data, industries,
} from "@/lib/validations";
import { Check, Loader2, CheckCircle, ChevronRight, ChevronLeft, Leaf } from "lucide-react";
import Link from "next/link";

const serviceOptions = [
  "Website Design & Development",
  "Digital Marketing (SEO/PPC)",
  "Brand Identity & Design",
  "Social Media Management",
  "E-Commerce Store",
  "Analytics & Reporting",
  "Cybersecurity Governance Advisory",
  "Other",
];

const budgetOptions = [
  "Under $500",
  "$500–$1,500",
  "$1,500–$5,000",
  "$5,000–$20,000",
  "$20,000+",
  "Discuss with team",
];

const companySizes = ["Solo", "2–10", "11–50", "51–200", "200+"];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<QuoteStep1Data & QuoteStep2Data & QuoteStep3Data>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const step1 = useForm<QuoteStep1Data>({ resolver: zodResolver(quoteStep1Schema) });
  const step2 = useForm<QuoteStep2Data>({
    resolver: zodResolver(quoteStep2Schema),
    defaultValues: { services: [], hasExistingWebsite: false, budgetRange: "Discuss with team" },
  });
  const step3 = useForm<QuoteStep3Data>({ resolver: zodResolver(quoteStep3Schema) });
  const step4 = useForm<QuoteStep4Data>({ resolver: zodResolver(quoteStep4Schema) });

  const watchServices = step2.watch("services") || [];
  const hasWebsite = step2.watch("hasExistingWebsite");

  const handleStep1 = step1.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(2);
  });
  const handleStep2 = step2.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(3);
  });
  const handleStep3 = step3.handleSubmit((data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(4);
  });
  const handleStep4 = step4.handleSubmit(async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  });

  const fieldCls = {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    color: "var(--cream)",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-dm-sans)",
    transition: "border-color 0.2s",
  };
  const label = {
    display: "block" as const,
    fontSize: "0.7rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "0.5rem",
    color: "var(--muted)",
  };
  const err = { fontSize: "0.75rem", color: "#e8a84c", marginTop: "0.25rem" };

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <CheckCircle size={48} className="mx-auto mb-6" style={{ color: "var(--gold)" }} />
        <h2
          className="font-display text-3xl mb-4"
          style={{ fontWeight: 300, color: "var(--gold-light)" }}
        >
          Brief Submitted
        </h2>
        <p className="text-sm mb-8 mx-auto" style={{ color: "var(--warm)", maxWidth: "440px", lineHeight: 1.7 }}>
          Thank you. We&apos;ve received your project brief and will be in touch within 24 hours. A confirmation has been sent to {formData.email}.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    );
  }

  const steps = ["About You", "Your Project", "Deliverables", "Review & Submit"];

  return (
    <div>
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0"
                style={{
                  background: step > i + 1 ? "var(--gold)" : step === i + 1 ? "rgba(201,168,76,0.2)" : "transparent",
                  border: `1px solid ${step >= i + 1 ? "var(--gold)" : "var(--border)"}`,
                  color: step > i + 1 ? "var(--bg-primary)" : step === i + 1 ? "var(--gold)" : "var(--muted)",
                }}
              >
                {step > i + 1 ? <Check size={12} /> : i + 1}
              </div>
              <span
                className="text-xs uppercase tracking-label hidden sm:block"
                style={{ color: step === i + 1 ? "var(--gold)" : "var(--muted)" }}
              >
                {s}
              </span>
              {i < steps.length - 1 && (
                <div className="flex-1 h-px mx-2" style={{ background: step > i + 1 ? "var(--gold)" : "var(--border)", minWidth: 20 }} />
              )}
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full" style={{ background: "var(--border-subtle)" }}>
          <div
            className="h-full transition-all duration-500"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%`, background: "var(--gold)" }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <form onSubmit={handleStep1}>
          <h2 className="font-display text-2xl mb-6" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
            Tell us about yourself
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label style={label}>Full Name *</label>
              <input {...step1.register("fullName")} type="text" placeholder="Jane Smith" style={fieldCls} />
              {step1.formState.errors.fullName && <p style={err}>{step1.formState.errors.fullName.message}</p>}
            </div>
            <div>
              <label style={label}>Email *</label>
              <input {...step1.register("email")} type="email" placeholder="jane@example.com" style={fieldCls} />
              {step1.formState.errors.email && <p style={err}>{step1.formState.errors.email.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label style={label}>Phone</label>
              <input {...step1.register("phone")} type="tel" placeholder="+61 400 000 000" style={fieldCls} />
            </div>
            <div>
              <label style={label}>Company</label>
              <input {...step1.register("company")} type="text" placeholder="Your Company" style={fieldCls} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label style={label}>Company Size *</label>
              <select {...step1.register("companySize")} style={{ ...fieldCls, cursor: "pointer" }}>
                {companySizes.map((s) => (
                  <option key={s} value={s} style={{ background: "#1c1a17" }}>{s} employees</option>
                ))}
              </select>
            </div>
            <div>
              <label style={label}>Industry *</label>
              <select {...step1.register("industry")} style={{ ...fieldCls, cursor: "pointer" }}>
                <option value="">Select industry...</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind} style={{ background: "#1c1a17" }}>{ind}</option>
                ))}
              </select>
              {step1.formState.errors.industry && <p style={err}>{step1.formState.errors.industry.message}</p>}
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-gold">
              Next Step <ChevronRight size={14} />
            </button>
          </div>
        </form>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <form onSubmit={handleStep2}>
          <h2 className="font-display text-2xl mb-6" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
            Tell us about your project
          </h2>

          <div className="mb-6">
            <label style={label}>Services Needed * (select all that apply)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceOptions.map((svc) => {
                const checked = watchServices.includes(svc);
                return (
                  <label
                    key={svc}
                    className="flex items-center gap-3 p-3 cursor-pointer transition-all"
                    style={{
                      background: checked ? "rgba(201,168,76,0.1)" : "var(--bg-surface)",
                      border: `1px solid ${checked ? "rgba(201,168,76,0.4)" : "var(--border)"}`,
                    }}
                  >
                    <input
                      type="checkbox"
                      value={svc}
                      {...step2.register("services")}
                      className="sr-only"
                    />
                    <div
                      className="w-4 h-4 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: checked ? "var(--gold)" : "transparent",
                        border: `1px solid ${checked ? "var(--gold)" : "var(--border)"}`,
                      }}
                    >
                      {checked && <Check size={10} style={{ color: "var(--bg-primary)" }} />}
                    </div>
                    <span className="text-xs" style={{ color: checked ? "var(--gold-light)" : "var(--warm)" }}>
                      {svc}
                    </span>
                  </label>
                );
              })}
            </div>
            {step2.formState.errors.services && <p style={err}>{step2.formState.errors.services.message}</p>}
          </div>

          <div className="mb-5">
            <label style={label}>Project Description *</label>
            <textarea
              {...step2.register("projectDescription")}
              rows={4}
              placeholder="Tell us about your project, goals, and any specific requirements..."
              style={{ ...fieldCls, resize: "vertical" }}
            />
            {step2.formState.errors.projectDescription && <p style={err}>{step2.formState.errors.projectDescription.message}</p>}
          </div>

          <div className="mb-5">
            <label style={label}>Do you have an existing website?</label>
            <div className="flex gap-4">
              {[true, false].map((val) => (
                <label key={String(val)} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    value={String(val)}
                    {...step2.register("hasExistingWebsite", { setValueAs: (v) => v === "true" })}
                  />
                  <span className="text-sm" style={{ color: "var(--warm)" }}>{val ? "Yes" : "No"}</span>
                </label>
              ))}
            </div>
          </div>

          {hasWebsite && (
            <div className="mb-5">
              <label style={label}>Current Website URL</label>
              <input
                {...step2.register("existingWebsiteUrl")}
                type="url"
                placeholder="https://yourwebsite.com.au"
                style={fieldCls}
              />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div>
              <label style={label}>Target Launch Date</label>
              <input {...step2.register("targetLaunchDate")} type="date" style={fieldCls} />
            </div>
            <div>
              <label style={label}>Budget Range *</label>
              <select {...step2.register("budgetRange")} style={{ ...fieldCls, cursor: "pointer" }}>
                {budgetOptions.map((b) => (
                  <option key={b} value={b} style={{ background: "#1c1a17" }}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(1)} className="btn-ghost flex items-center gap-2">
              <ChevronLeft size={14} /> Back
            </button>
            <button type="submit" className="btn-gold flex items-center gap-2">
              Next Step <ChevronRight size={14} />
            </button>
          </div>
        </form>
      )}

      {/* Step 3 — dynamic based on services selected */}
      {step === 3 && (
        <form onSubmit={handleStep3}>
          <h2 className="font-display text-2xl mb-6" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
            Additional details
          </h2>

          {watchServices.includes("Website Design & Development") && (
            <div className="mb-8 p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Web Design Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={label}>Pages Needed</label>
                  <select {...step3.register("pagesNeeded")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["1–5", "6–10", "11–20", "20+", "Not sure"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v} pages</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={label}>CMS Preference</label>
                  <select {...step3.register("cmsPreference")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["WordPress", "Webflow", "Sanity", "Custom", "No preference"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-5">
                <label style={label}>Design Style Preference</label>
                <select {...step3.register("designStyle")} style={{ ...fieldCls, cursor: "pointer" }}>
                  <option value="">Select...</option>
                  {["Minimal & Clean", "Bold & Modern", "Warm & Premium", "Corporate & Professional", "Creative & Expressive", "Similar to current site", "No preference"].map((v) => (
                    <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {(watchServices.includes("Digital Marketing (SEO/PPC)") || watchServices.includes("Social Media Management")) && (
            <div className="mb-8 p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Marketing Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label style={label}>Current Monthly Ad Spend</label>
                  <select {...step3.register("monthlyAdSpend")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["$0 (not running ads)", "Under $500/mo", "$500–$2,000/mo", "$2,000–$5,000/mo", "$5,000+/mo"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={label}>Primary Platform</label>
                  <select {...step3.register("primaryPlatform")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["Google Ads", "Meta (Facebook/Instagram)", "LinkedIn", "All platforms", "Not sure"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {watchServices.includes("Cybersecurity Governance Advisory") && (
            <div className="mb-8 p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--gold)" }}>
                Governance Advisory Details
              </p>
              <div className="space-y-5">
                <div>
                  <label style={label}>Organisation Type</label>
                  <select {...step3.register("organisationType")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["Federal Government Agency", "State/Territory Government", "Local Government", "Regulated Private Sector", "Critical Infrastructure", "Higher Education", "Other Public Sector"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={label}>Current Framework in Use</label>
                  <select {...step3.register("currentFramework")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["NIST CSF", "COBIT", "ISO 27001", "ISM (Australian Government)", "Essential Eight", "None / Not sure"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={label}>Assessment Scope</label>
                  <select {...step3.register("assessmentScope")} style={{ ...fieldCls, cursor: "pointer" }}>
                    <option value="">Select...</option>
                    {["Whole of organisation", "Specific business unit", "ICT/Digital systems only", "AI governance only", "Not yet defined"].map((v) => (
                      <option key={v} value={v} style={{ background: "#1c1a17" }}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {watchServices.length > 0 && watchServices.every((s) => !["Website Design & Development", "Digital Marketing (SEO/PPC)", "Social Media Management", "Cybersecurity Governance Advisory"].includes(s)) && (
            <p className="text-sm mb-6" style={{ color: "var(--warm)" }}>
              No additional details required for your selected services. Click next to review your brief.
            </p>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(2)} className="btn-ghost flex items-center gap-2">
              <ChevronLeft size={14} /> Back
            </button>
            <button type="submit" className="btn-gold flex items-center gap-2">
              Review Brief <ChevronRight size={14} />
            </button>
          </div>
        </form>
      )}

      {/* Step 4 — Review & Submit */}
      {step === 4 && (
        <form onSubmit={handleStep4}>
          <h2 className="font-display text-2xl mb-6" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
            Review your brief
          </h2>

          <div className="space-y-4 mb-8">
            {[
              { label: "Name", value: formData.fullName },
              { label: "Email", value: formData.email },
              { label: "Company", value: formData.company || "—" },
              { label: "Industry", value: formData.industry },
              { label: "Company Size", value: formData.companySize },
              { label: "Services", value: Array.isArray(formData.services) ? (formData.services as string[]).join(", ") : "—" },
              { label: "Budget", value: formData.budgetRange },
              { label: "Project Description", value: formData.projectDescription },
            ].map((row) => (
              <div
                key={row.label}
                className="flex gap-4 p-4"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <span className="text-xs uppercase tracking-label w-32 flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }}>
                  {row.label}
                </span>
                <span className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Climate Pledge box */}
          <div
            className="flex items-start gap-4 mb-6 p-4"
            style={{ borderLeft: "3px solid var(--gold)", background: "var(--bg-surface)" }}
          >
            <Leaf size={16} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
            <div>
              <p className="text-sm mb-1" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                Your project contributes to the Digibly Climate Pledge. 5% of net revenue from this engagement will be donated to Australian climate organisations.
              </p>
              <a
                href="/climate-pledge"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-label transition-colors hover:text-gold"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Learn about our pledge →
              </a>
            </div>
          </div>

          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...step4.register("agreeToTerms")}
                className="mt-1 flex-shrink-0"
              />
              <span className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                I agree to Digibly Group&apos;s{" "}
                <a href="/terms" target="_blank" style={{ color: "var(--gold)" }}>
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" target="_blank" style={{ color: "var(--gold)" }}>
                  Privacy Policy
                </a>
                .
              </span>
            </label>
            {step4.formState.errors.agreeToTerms && (
              <p style={err}>{step4.formState.errors.agreeToTerms.message}</p>
            )}
          </div>

          {status === "error" && (
            <p className="text-sm mb-4" style={{ color: "#e8a84c" }}>
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex justify-between">
            <button type="button" onClick={() => setStep(3)} className="btn-ghost flex items-center gap-2">
              <ChevronLeft size={14} /> Back
            </button>
            <button type="submit" disabled={status === "loading"} className="btn-gold flex items-center gap-2">
              {status === "loading" ? (
                <><Loader2 size={14} className="animate-spin" /> Submitting...</>
              ) : (
                "Submit Project Brief"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
