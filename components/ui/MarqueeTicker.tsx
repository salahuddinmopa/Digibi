"use client";

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
  separator?: string;
  className?: string;
  reverse?: boolean;
}

export default function MarqueeTicker({
  items,
  speed = 30,
  separator = "◆",
  className = "",
  reverse = false,
}: MarqueeTickerProps) {
  const doubledItems = [...items, ...items];

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
            <span className="font-display italic text-warm text-sm tracking-wide">
              {item}
            </span>
            <span className="text-gold text-xs opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
