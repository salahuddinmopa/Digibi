"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MetricCard {
  label: string;
  value: string;
  badge: string;
}

interface FrameworkBadge {
  label: string;
}

interface ListCard {
  title: string;
  items: string[];
}

interface ServiceImageHeroProps {
  image: string;
  blurDataURL: string;
  imageAlt: string;
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  height?: string;
  objectPosition?: string;
  metricCards?: MetricCard[];
  frameworkBadges?: FrameworkBadge[];
  listCard?: ListCard;
  scanLine?: boolean;
  breadcrumb?: string;
}

export default function ServiceImageHero({
  image,
  blurDataURL,
  imageAlt,
  eyebrow,
  heading,
  body,
  ctaLabel = "Get a Quote",
  ctaHref = "/get-a-quote",
  height = "65vh",
  objectPosition = "center",
  metricCards,
  frameworkBadges,
  listCard,
  scanLine = false,
  breadcrumb,
}: ServiceImageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden ${scanLine ? "img-scan-line" : ""}`}
      style={{ height, minHeight: 480, marginTop: 80 }}
    >
      {/* Image */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={95}
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="object-cover"
        style={{ objectPosition }}
        sizes="100vw"
      />

      {/* Left gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(14,13,11,0.95) 0%, rgba(14,13,11,0.75) 35%, rgba(14,13,11,0.25) 65%, rgba(14,13,11,0.08) 100%)",
        }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(14,13,11,0.7) 0%, transparent 40%)" }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container-wide">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            {breadcrumb && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs uppercase tracking-label mb-4 flex items-center gap-2"
                style={{ color: "var(--muted)" }}
              >
                <Link href="/services" style={{ color: "var(--muted)" }}>
                  Services
                </Link>
                <span style={{ color: "var(--gold)", fontSize: "0.4rem" }}>◆</span>
                <span style={{ color: "var(--gold)" }}>{breadcrumb}</span>
              </motion.p>
            )}

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs uppercase tracking-label mb-4"
              style={{ color: "var(--gold)" }}
            >
              {eyebrow}
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display mb-4"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
                fontWeight: 300,
                color: "var(--gold-light)",
                lineHeight: 1.05,
              }}
            >
              {heading}
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="origin-left mb-5"
              style={{ width: 40, height: 1, background: "var(--gold)" }}
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base mb-8 max-w-lg"
              style={{ color: "var(--warm)", lineHeight: 1.7 }}
            >
              {body}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href={ctaHref} className="btn-gold inline-flex items-center gap-2">
                {ctaLabel}
                <ArrowRight size={14} />
              </Link>
            </motion.div>

            {/* Framework badges */}
            {frameworkBadges && frameworkBadges.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="flex flex-wrap gap-2 mt-8"
              >
                {frameworkBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="text-xs uppercase tracking-label px-3 py-1.5"
                    style={{
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "var(--gold)",
                      background: "rgba(14,13,11,0.7)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {badge.label}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Floating metric cards — desktop only */}
      {metricCards && metricCards.length > 0 && (
        <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-3 z-10">
          {metricCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="px-4 py-3"
              style={{
                background: "rgba(14,13,11,0.88)",
                border: "1px solid var(--border)",
                backdropFilter: "blur(8px)",
                minWidth: 140,
              }}
            >
              <p
                className="font-display text-2xl font-light mb-0.5"
                style={{ color: "var(--gold-light)", lineHeight: 1 }}
              >
                {card.value}
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {card.label}
              </p>
              <span
                className="text-xs px-1.5 py-0.5 mt-1 inline-block"
                style={{
                  background: "rgba(201,168,76,0.12)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--gold)",
                }}
              >
                {card.badge}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Floating list card — desktop only */}
      {listCard && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-10"
          style={{
            background: "rgba(14,13,11,0.88)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(8px)",
            borderRadius: 4,
            padding: "20px 24px",
            width: 220,
          }}
        >
          <p
            className="text-xs uppercase tracking-label mb-4"
            style={{ color: "var(--gold)", letterSpacing: "0.12em" }}
          >
            {listCard.title}
          </p>
          <ul className="space-y-2.5">
            {listCard.items.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "var(--warm)", lineHeight: 1.5 }}>
                <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: 1 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-1 rounded-full"
          style={{ background: "var(--gold)" }}
        />
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }} />
      </motion.div>
    </section>
  );
}
