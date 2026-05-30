import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="gold-card p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="#c9a84c" stroke="none" />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="font-display italic text-lg mb-8"
        style={{
          color: "var(--cream)",
          lineHeight: 1.6,
          fontWeight: 300,
          fontStyle: "italic",
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-medium"
          style={{
            background: "rgba(201,168,76,0.15)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "var(--gold)",
            fontFamily: "var(--font-cormorant)",
            fontWeight: 600,
          }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>
            {name}
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            {role}{company ? `, ${company}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
