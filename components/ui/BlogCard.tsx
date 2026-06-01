import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  imageAlt,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block gold-card overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9', borderRadius: '12px 12px 0 0', backgroundColor: 'var(--bg-secondary)' }}>
        <Image
          src={image || `https://placehold.co/800x450/1c1a17/c9a84c?text=${encodeURIComponent(category)}`}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(14,13,11,0.6) 0%, transparent 60%)",
          }}
        />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className="text-xs uppercase tracking-label px-3 py-1"
            style={{
              background: "var(--gold-primary)",
              color: "var(--bg-primary)",
              fontWeight: 700,
              letterSpacing: '0.14em',
              borderRadius: '2px',
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-display text-xl mb-3 group-hover:text-gold-light transition-colors"
          style={{ color: "var(--cream)", fontWeight: 400, lineHeight: 1.3 }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: "var(--warm)", lineHeight: 1.7 }}
        >
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs" style={{ color: "var(--muted)" }}>
            <span>{date}</span>
            <span>·</span>
            <span>{readTime}</span>
          </div>
          <div
            className="flex items-center gap-1 text-xs uppercase tracking-label transition-all duration-300 group-hover:gap-2"
            style={{ color: "var(--gold)" }}
          >
            <span>Read</span>
            <ArrowRight size={10} />
          </div>
        </div>
      </div>
    </Link>
  );
}
