"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "@/data/services";

interface Props {
  services: Service[];
}

export default function ServicesListWithPreview({ services }: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const hoveredService = services.find((s) => s.id === hoveredId);

  return (
    <div className="relative">
      {services.map((svc) => (
        <Link
          key={svc.id}
          href={svc.href}
          className="group flex items-start gap-6 py-7 relative transition-all duration-300"
          style={{ borderBottom: "1px solid var(--border-subtle)" }}
          onMouseEnter={() => setHoveredId(svc.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <span
            className="font-display text-3xl font-light flex-shrink-0 w-12 transition-colors duration-300 group-hover:text-gold"
            style={{ color: "rgba(201,168,76,0.25)" }}
          >
            {svc.number}
          </span>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3
                className="font-display text-xl transition-colors duration-300 group-hover:text-gold-light"
                style={{ color: "var(--cream)", fontWeight: 400 }}
              >
                {svc.title}
              </h3>
              <ArrowRight
                size={16}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: "var(--gold)" }}
              />
            </div>
            <p className="text-sm" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              {svc.shortDescription}
            </p>
          </div>
        </Link>
      ))}

      {/* Single shared hover preview card — desktop only */}
      <AnimatePresence mode="wait">
        {hoveredService && (
          <motion.div
            key={hoveredService.id}
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 8 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block absolute -right-8 top-0 pointer-events-none z-10"
            style={{ width: 320, height: 200 }}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: 12,
                border: "1px solid var(--border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src={hoveredService.previewImage}
                alt={`${hoveredService.title} preview — Digibly Group`}
                fill
                quality={85}
                placeholder="blur"
                blurDataURL={hoveredService.previewBlur}
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.2)" }} />
              <div
                className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: "linear-gradient(to top, rgba(14,13,11,0.8), transparent)" }}
              >
                <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
                  {hoveredService.title}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
