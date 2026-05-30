"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Receipt,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/client-portal", Icon: LayoutDashboard },
  { label: "My Projects", href: "/client-portal/projects", Icon: FolderOpen },
  { label: "Reports", href: "/client-portal/reports", Icon: FileText },
  { label: "Invoices", href: "/client-portal/invoices", Icon: Receipt },
  { label: "Messages", href: "/client-portal/messages", Icon: MessageSquare },
  { label: "Settings", href: "/client-portal/settings", Icon: Settings },
];

export default function PortalSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:flex flex-col w-64 flex-shrink-0 py-8"
      style={{
        background: "var(--bg-primary)",
        borderRight: "1px solid var(--border)",
        position: "sticky",
        top: 80,
        height: "calc(100vh - 80px)",
      }}
    >
      {/* Header */}
      <div className="px-6 mb-8">
        <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--gold)" }}>
          Client Portal
        </p>
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          Digibly Group
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {navItems.map(({ label, href, Icon }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200"
                  style={{
                    background: active ? "rgba(201,168,76,0.1)" : "transparent",
                    color: active ? "var(--gold-light)" : "var(--warm)",
                    borderLeft: active ? "2px solid var(--gold)" : "2px solid transparent",
                  }}
                >
                  <Icon size={16} style={{ color: active ? "var(--gold)" : "var(--muted)" }} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign out */}
      <div className="px-4 pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex items-center gap-3 px-3 py-2.5 text-sm w-full transition-colors hover:text-gold"
          style={{ color: "var(--muted)" }}
        >
          <LogOut size={16} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
