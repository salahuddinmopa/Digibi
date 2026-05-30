import { ReactNode } from "react";
import Image from "next/image";
import PortalSidebar from "@/components/portal/PortalSidebar";

export default function PortalLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex relative"
      style={{ background: "var(--bg-secondary)", paddingTop: "80px" }}
    >
      <div className="fixed inset-0 z-0 pointer-events-none hidden sm:block" aria-hidden="true">
        <Image
          src="/images/analytics-reporting.png"
          alt=""
          fill
          quality={40}
          className="object-cover object-center"
          style={{ filter: "blur(80px) brightness(0.06) saturate(0.5)", opacity: 0.8 }}
          sizes="100vw"
        />
      </div>
      <PortalSidebar />
      <main className="flex-1 p-8 lg:p-12 overflow-auto relative z-10">{children}</main>
    </div>
  );
}
