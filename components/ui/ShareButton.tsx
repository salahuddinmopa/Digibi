"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <button
      onClick={copy}
      className="btn-ghost text-xs py-2 px-4 flex items-center gap-2"
    >
      {copied ? <Check size={12} /> : <Share2 size={12} />}
      {copied ? "Copied!" : "Copy Link"}
    </button>
  );
}
