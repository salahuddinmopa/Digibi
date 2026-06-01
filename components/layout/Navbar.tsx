"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services", climate: false },
  { label: "About", href: "/about", climate: false },
  { label: "Portfolio", href: "/portfolio", climate: false },
  { label: "Pricing", href: "/pricing", climate: false },
  { label: "Blog", href: "/blog", climate: false },
  { label: "Contact", href: "/contact", climate: false },
  { label: "Climate Pledge", href: "/climate-pledge", climate: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(26,23,16,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid var(--gold-border)" : "1px solid transparent",
        }}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="Digibly Group - Home"
            >
              <span
                className="font-display text-xl tracking-wide"
                style={{ color: "var(--gold-bright)", fontWeight: 500 }}
              >
                Digibly
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: "var(--gold-primary)",
                  animation: "spin 40s linear infinite",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-display text-xl tracking-wide"
                style={{ color: "var(--text-secondary)", fontWeight: 300, opacity: 0.8 }}
              >
                Group
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-11">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm uppercase tracking-label transition-colors duration-200 relative group flex items-center gap-1.5"
                      style={{
                        color: active ? "var(--gold-primary)" : link.climate ? "rgba(201,168,76,0.75)" : "var(--text-secondary)",
                        fontWeight: 500,
                      }}
                    >
                      {link.climate && <Leaf size={11} />}
                      {link.label}
                      <span
                        className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                        style={{
                          background: "var(--gold)",
                          width: active ? "100%" : "0%",
                        }}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                href="/get-a-quote"
                className="hidden lg:inline-flex btn-ghost text-xs py-2.5 px-5"
              >
                Begin a Project
              </Link>
              <button
                className="lg:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                style={{ color: "var(--cream)" }}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 flex flex-col pt-24 pb-10 px-6"
          style={{ background: "rgba(26,23,16,0.98)" }}
        >
          <nav>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-4 font-display text-3xl transition-colors duration-200"
                    style={{
                      color: pathname === link.href ? "var(--gold)" : "var(--cream)",
                      borderBottom: "1px solid var(--border-subtle)",
                      fontWeight: 300,
                      animationDelay: `${i * 50}ms`,
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/get-a-quote" className="btn-gold w-full justify-center">
                Begin a Project
              </Link>
            </div>
          </nav>
          <div className="mt-auto">
            <p className="text-xs" style={{ color: "var(--muted)" }}>
              hello@digiblygroup.com.au
            </p>
          </div>
        </div>
      )}
    </>
  );
}
