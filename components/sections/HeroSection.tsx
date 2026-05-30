"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blurData } from "@/lib/animations";

interface Stat {
  value: string;
  label: string;
}

interface HeroSectionProps {
  stats: Stat[];
}

const orbitPills = ["Web Design", "Governance", "Branding", "Marketing", "E-Commerce"];

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)", paddingTop: "80px" }}
    >
      {/* Office image — full-screen background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero-office.png"
          alt="Digibly Group headquarters — a world-class digital agency and governance consultancy based in Australia"
          fill
          priority
          quality={95}
          placeholder="blur"
          blurDataURL={blurData.heroOffice}
          className="object-cover object-center img-ken-burns"
          sizes="100vw"
        />
        {/* Left gradient — keeps text readable, reveals right side (workspace + city) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(14,13,11,0.94) 0%, rgba(14,13,11,0.82) 40%, rgba(14,13,11,0.5) 65%, rgba(14,13,11,0.2) 82%, rgba(14,13,11,0.1) 100%)",
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,13,11,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Solid tint */}
        <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.12)" }} />
        {/* Gold vignette */}
        <div className="absolute inset-0 img-vignette-gold" />
      </div>

      {/* Rotated studio text — left edge */}
      <div
        className="absolute left-0 top-1/2 hidden lg:flex items-center gap-2"
        style={{
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center center",
          left: "-80px",
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <span className="w-6 h-px" style={{ background: "var(--gold)" }} />
        <span
          className="text-xs uppercase tracking-label"
          style={{ color: "var(--muted)", whiteSpace: "nowrap" }}
        >
          Digibly Group · Est. 2019
        </span>
      </div>

      <div className="container-wide w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-80px)] py-20">
          {/* Left panel */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p
                className="text-xs uppercase tracking-label mb-6 flex items-center gap-3"
                style={{ color: "var(--gold)" }}
              >
                <span className="w-8 h-px" style={{ background: "var(--gold)" }} />
                Full-Service Digital Agency · Canberra, Australia
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-display mb-8"
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                fontWeight: 300,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
                color: "var(--gold-light)",
              }}
            >
              Craft that
              <em
                className="block"
                style={{ fontStyle: "italic", color: "var(--cream)", fontWeight: 300 }}
              >
                Elevates
              </em>
              <span style={{ color: "var(--warm)", fontWeight: 300 }}>Every Brand.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg mb-10 max-w-md"
              style={{ color: "var(--warm)", lineHeight: 1.7 }}
            >
              A full-service digital agency and governance consultancy for businesses that believe the details matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <Link href="/get-a-quote" className="btn-gold">
                Begin a Project
                <ArrowRight size={14} />
              </Link>
              <Link href="/portfolio" className="btn-ghost">
                View Our Work
              </Link>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: "2rem" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-3xl font-light mb-1"
                    style={{ color: "var(--gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-label"
                    style={{ color: "var(--muted)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right panel — orbital (desktop only, overlaid on image) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="relative w-full"
              style={{ maxWidth: 500, aspectRatio: "1 / 1" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(201,168,76,0.18)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{ inset: "15%", border: "1px solid rgba(201,168,76,0.24)" }}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full"
                style={{ inset: "30%", border: "1px solid rgba(201,168,76,0.32)" }}
              />
              <div
                className="absolute rounded-full"
                style={{
                  inset: "25%",
                  background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              {orbitPills.map((pill, i) => {
                const angle = (i / orbitPills.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const radius = 42;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                return (
                  <motion.div
                    key={pill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.15 }}
                    className="absolute text-xs uppercase tracking-label px-3 py-1.5"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      background: "rgba(14,13,11,0.75)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "var(--gold-light)",
                      whiteSpace: "nowrap",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {pill}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
