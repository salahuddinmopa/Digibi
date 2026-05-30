import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  breadcrumbs?: Breadcrumb[];
  centered?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  titleItalic,
  subtitle,
  cta,
  ctaSecondary,
  breadcrumbs,
  centered = false,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-40 pb-20 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      <div className={`container-wide relative z-10 ${centered ? "text-center" : ""}`}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <ScrollReveal direction="none" duration={0.4}>
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 flex-wrap" style={{ justifyContent: centered ? "center" : "flex-start" }}>
                <li>
                  <Link
                    href="/"
                    className="text-xs uppercase tracking-label transition-colors"
                    style={{ color: "var(--muted)" }}
                  >
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span style={{ color: "var(--gold)", fontSize: "0.5rem" }}>◆</span>
                    {crumb.href ? (
                      <Link
                        href={crumb.href}
                        className="text-xs uppercase tracking-label transition-colors hover:text-gold"
                        style={{ color: i === breadcrumbs.length - 1 ? "var(--gold)" : "var(--muted)" }}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span
                        className="text-xs uppercase tracking-label"
                        style={{ color: "var(--gold)" }}
                      >
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </ScrollReveal>
        )}

        {/* Eyebrow */}
        {eyebrow && (
          <ScrollReveal delay={0.05} direction="none">
            <p
              className="text-xs uppercase tracking-label mb-4"
              style={{ color: "var(--gold)" }}
            >
              {eyebrow}
            </p>
          </ScrollReveal>
        )}

        {/* Title */}
        <ScrollReveal delay={0.1}>
          <h1
            className="font-display mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 300,
              color: "var(--gold-light)",
              lineHeight: 1.05,
              maxWidth: centered ? "none" : "800px",
            }}
          >
            {title}
            {titleItalic && (
              <em
                className="block"
                style={{ fontStyle: "italic", color: "var(--cream)" }}
              >
                {titleItalic}
              </em>
            )}
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        {subtitle && (
          <ScrollReveal delay={0.2}>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ color: "var(--warm)", lineHeight: 1.7, margin: centered ? "0 auto 2rem" : undefined }}
            >
              {subtitle}
            </p>
          </ScrollReveal>
        )}

        {/* CTAs */}
        {(cta || ctaSecondary) && (
          <ScrollReveal delay={0.3}>
            <div
              className="flex flex-wrap gap-4"
              style={{ justifyContent: centered ? "center" : "flex-start" }}
            >
              {cta && (
                <Link href={cta.href} className="btn-gold">
                  {cta.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="btn-ghost">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          </ScrollReveal>
        )}
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
