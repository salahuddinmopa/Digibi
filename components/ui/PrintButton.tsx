"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="btn-ghost text-xs py-2 px-4 flex items-center gap-2"
    >
      <Printer size={12} />
      Print
    </button>
  );
}
