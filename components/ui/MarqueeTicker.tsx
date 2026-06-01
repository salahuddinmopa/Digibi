"use client";

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
  reverse?: boolean;
  darkText?: boolean;
}

export default function MarqueeTicker({
  items,
  speed = 30,
  separator = "◆",
  className = "",
  reverse = false,
  darkText = false,
}: MarqueeTickerProps) {
  const doubledItems = [...items, ...items];

  const textColor = darkText ? "var(--bg-primary)" : "var(--warm)";
  const dotColor  = darkText ? "rgba(26,23,16,0.4)" : "var(--gold)";

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className="inline-flex"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {doubledItems.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span
              className="font-display italic text-sm tracking-wide"
              style={{ color: textColor, fontWeight: darkText ? 600 : 300, letterSpacing: "0.06em" }}
            >
              {item}
            </span>
            <span className="text-xs" style={{ color: dotColor }}>{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
