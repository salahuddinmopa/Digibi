"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("digibly-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("digibly-cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("digibly-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        padding: "1.5rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
      }}
    >
      <p
        className="text-sm mb-4"
        style={{ color: "var(--warm)", lineHeight: 1.6 }}
      >
        We use cookies to improve your experience and analyse site performance.
        By continuing, you agree to our{" "}
        <Link
          href="/privacy"
          className="underline"
          style={{ color: "var(--gold)" }}
        >
          Privacy Policy
        </Link>
        .
      </p>
      <div className="flex gap-3">
        <button onClick={accept} className="btn-gold text-xs py-2 px-4">
          Accept
        </button>
        <button
          onClick={decline}
          className="btn-ghost text-xs py-2 px-4"
          style={{ fontSize: "0.75rem" }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
