import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  imageBlur?: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  href,
  icon,
  image,
  imageBlur,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block gold-card overflow-hidden transition-all duration-300"
    >
      {image && (
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <Image
            src={image}
            alt={`${title} — Digibly Group`}
            fill
            quality={85}
            placeholder={imageBlur ? "blur" : "empty"}
            blurDataURL={imageBlur}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-100 group-hover:opacity-30"
            style={{ background: "rgba(14,13,11,0.3)" }}
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <span
            className="font-display text-3xl font-light"
            style={{ color: "rgba(201,168,76,0.3)" }}
          >
            {number}
          </span>
          {icon && (
            <div className="mt-1" style={{ color: "var(--gold)" }}>
              {icon}
            </div>
          )}
        </div>
        <h3
          className="font-display text-xl mb-3 group-hover:text-gold-light transition-colors"
          style={{ color: "var(--cream)", fontWeight: 400 }}
        >
          {title}
        </h3>
        <p className="text-sm mb-6" style={{ color: "var(--warm)", lineHeight: 1.7 }}>
          {description}
        </p>
        <div
          className="flex items-center gap-2 text-xs uppercase tracking-label transition-all duration-300 group-hover:gap-4"
          style={{ color: "var(--gold)" }}
        >
          <span>Explore</span>
          <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}
