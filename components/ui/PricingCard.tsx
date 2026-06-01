import Link from "next/link";
import Image from "next/image";
import { Check, Leaf } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  badge?: string;
  bgImage?: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  ctaHref,
  featured = false,
  badge,
  bgImage,
}: PricingCardProps) {
  return (
    <div
      className="relative flex flex-col h-full transition-all duration-300 overflow-hidden"
      style={{
        background: featured ? "rgba(201,168,76,0.06)" : "var(--bg-surface)",
        border: `1px solid ${featured ? "rgba(201,168,76,0.4)" : "var(--border)"}`,
        boxShadow: featured ? "0 0 60px rgba(201,168,76,0.1)" : undefined,
        borderRadius: 10,
      }}
    >
      {/* Background image — z-index 0, must be behind content */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none hidden sm:block" style={{ zIndex: 0 }} aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            quality={40}
            className="object-cover object-right"
            style={{ filter: "blur(2px) brightness(0.08) saturate(0.4)" }}
            sizes="33vw"
          />
          {/* Dark overlay so content always readable */}
          <div className="absolute inset-0" style={{ background: "rgba(26,23,16,0.92)" }} />
        </div>
      )}

      {/* All card content — z-index 1, above background image */}
      <div className="relative flex flex-col flex-1 p-8" style={{ zIndex: 1 }}>
        {/* Badge — inline, not absolute, so overflow:hidden can't clip it */}
        {badge && (
          <div
            className="self-start text-xs uppercase tracking-label px-4 py-1.5 mb-5"
            style={{
              background: "var(--gold-primary)",
              color: "var(--bg-primary)",
              borderRadius: 2,
              fontWeight: 700,
              letterSpacing: "0.16em",
            }}
          >
            ★ {badge}
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <p
            className="text-xs uppercase tracking-label mb-3"
            style={{ color: "var(--gold-primary)" }}
          >
            {name}
          </p>
          <div className="flex items-end gap-2 mb-3">
            <span
              className="font-display"
              style={{
                fontSize: "3rem",
                fontWeight: 300,
                color: "var(--gold-bright)",
                lineHeight: 1,
              }}
            >
              {price}
            </span>
            {period && (
              <span className="text-sm mb-2" style={{ color: "var(--muted)" }}>
                {period}
              </span>
            )}
          </div>
          <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="gold-divider" />

        {/* Features — flex-1 pushes CTA to bottom */}
        <ul className="space-y-3 mb-8 flex-1">
          {features.map((feat, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check
                size={14}
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--gold-primary)" }}
              />
              <span style={{ color: "var(--warm)" }}>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Climate note */}
        <div
          className="flex items-center gap-2 mb-4 py-3"
          style={{ borderTop: "1px solid var(--border-subtle)" }}
        >
          <Leaf size={11} style={{ color: "rgba(201,168,76,0.6)", flexShrink: 0 }} />
          <span className="text-xs" style={{ color: "rgba(201,168,76,0.6)", lineHeight: 1.5 }}>
            This project contributes to the Digibly Climate Pledge
          </span>
        </div>

        {/* CTA */}
        <Link
          href={ctaHref}
          className={featured ? "btn-gold text-center justify-center" : "btn-ghost text-center justify-center"}
          style={{ textAlign: "center" }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
