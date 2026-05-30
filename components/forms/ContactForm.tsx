"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

const subjects = [
  "General Enquiry",
  "Project Quote",
  "Partnership",
  "Cybersecurity Advisory",
  "Press",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "General Enquiry" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 text-center"
        style={{ background: "var(--bg-surface)", border: "1px solid rgba(201,168,76,0.25)" }}
      >
        <CheckCircle size={40} className="mx-auto mb-4" style={{ color: "var(--gold)" }} />
        <h3 className="font-display text-2xl mb-3" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          Message Sent
        </h3>
        <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
          Thank you for reaching out. We&apos;ll respond within one business day.
        </p>
      </div>
    );
  }

  const fieldStyle = {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    color: "var(--cream)",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-dm-sans)",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.7rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "0.5rem",
    color: "var(--muted)",
  };

  const errorStyle = {
    fontSize: "0.75rem",
    color: "#e8a84c",
    marginTop: "0.25rem",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            {...register("fullName")}
            type="text"
            placeholder="Jane Smith"
            style={fieldStyle}
            aria-invalid={!!errors.fullName}
          />
          {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@example.com"
            style={fieldStyle}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+61 400 000 000"
            style={fieldStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Company</label>
          <input
            {...register("company")}
            type="text"
            placeholder="Your Company Pty Ltd"
            style={fieldStyle}
          />
        </div>
      </div>

      <div className="mb-5">
        <label style={labelStyle}>Subject *</label>
        <select
          {...register("subject")}
          style={{ ...fieldStyle, cursor: "pointer" }}
          aria-invalid={!!errors.subject}
        >
          {subjects.map((s) => (
            <option key={s} value={s} style={{ background: "#1c1a17" }}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label style={labelStyle}>Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project or enquiry..."
          style={{ ...fieldStyle, resize: "vertical" }}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: "#e8a84c" }}>
          <AlertCircle size={14} />
          <span>Something went wrong. Please try again or email us directly.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold w-full justify-center"
        style={{ opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
