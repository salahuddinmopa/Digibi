"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  client: string;
  tags: string[];
  outcome: string;
  image?: string;
  description?: string;
}

export default function PortfolioCard({
  title,
  client,
  tags,
  outcome,
  image,
  description,
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="group block gold-card overflow-hidden text-left w-full"
        onClick={() => setOpen(true)}
      >
        <div className="relative overflow-hidden" style={{ height: 260 }}>
          <Image
            src={
              image ||
              `https://placehold.co/800x500/1c1a17/c9a84c?text=${encodeURIComponent(client)}`
            }
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center"
            style={{ background: "rgba(14,13,11,0.7)" }}
          >
            <div
              className="flex items-center gap-2 text-sm uppercase tracking-label"
              style={{ color: "var(--gold)" }}
            >
              <span>View Project</span>
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
            {client}
          </p>
          <h3
            className="font-display text-lg mb-3"
            style={{ color: "var(--cream)", fontWeight: 400 }}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1"
                style={{
                  background: "rgba(201,168,76,0.08)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: "var(--gold)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm italic" style={{ color: "var(--warm)" }}>
            {outcome}
          </p>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full gold-card overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10"
              onClick={() => setOpen(false)}
              style={{ color: "var(--muted)" }}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <div className="relative" style={{ height: 300 }}>
              <Image
                src={
                  image ||
                  `https://placehold.co/800x500/1c1a17/c9a84c?text=${encodeURIComponent(client)}`
                }
                alt={title}
                fill
                className="object-cover"
                sizes="672px"
              />
            </div>
            <div className="p-8">
              <p
                className="text-xs uppercase tracking-label mb-1"
                style={{ color: "var(--muted)" }}
              >
                {client}
              </p>
              <h2
                className="font-display text-2xl mb-4"
                style={{ color: "var(--gold-light)", fontWeight: 300 }}
              >
                {title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1"
                    style={{
                      background: "rgba(201,168,76,0.08)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--gold)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {description && (
                <p className="text-sm mb-4" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
                  {description}
                </p>
              )}
              <p
                className="text-sm font-medium italic"
                style={{ color: "var(--gold-light)" }}
              >
                Result: {outcome}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
