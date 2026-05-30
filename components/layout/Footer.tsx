"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon, TwitterIcon } from "@/components/ui/SocialIcons";

const services = [
  { label: "Web Design & Development", href: "/services/web-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Brand Identity", href: "/services/brand-identity" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "E-Commerce", href: "/services/ecommerce" },
  { label: "Analytics & Reporting", href: "/services/analytics" },
  { label: "Cybersecurity Governance", href: "/services/cybersecurity-governance" },
];

const studio = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Climate Pledge", href: "/climate-pledge" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Client Portal", href: "/client-portal" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="font-display text-2xl"
                style={{ color: "var(--gold-light)", fontWeight: 400 }}
              >
                Digibly Group
              </span>
            </Link>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--warm)", lineHeight: 1.7, maxWidth: "260px" }}
            >
              Craft that elevates every brand. A full-service digital agency and governance consultancy based in Canberra, Australia.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/digiblygroup" },
                { Icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/company/digiblygroup" },
                { Icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/digiblygroup" },
                { Icon: TwitterIcon, label: "Twitter/X", href: "https://twitter.com/digiblygroup" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center transition-colors duration-200"
                  style={{
                    color: "var(--muted)",
                    border: "1px solid var(--border-subtle)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs uppercase tracking-label mb-6"
              style={{ color: "var(--gold)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors duration-200 hover:text-gold"
                    style={{ color: "var(--warm)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio */}
          <div>
            <h4
              className="text-xs uppercase tracking-label mb-6"
              style={{ color: "var(--gold)" }}
            >
              Studio
            </h4>
            <ul className="space-y-3">
              {studio.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors duration-200 hover:text-gold"
                    style={{ color: "var(--warm)" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs uppercase tracking-label mb-6"
              style={{ color: "var(--gold)" }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
                  Email
                </p>
                <a
                  href="mailto:hello@digiblygroup.com.au"
                  className="text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "var(--warm)" }}
                >
                  hello@digiblygroup.com.au
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
                  Phone
                </p>
                <a
                  href="tel:+61200000000"
                  className="text-sm transition-colors duration-200 hover:text-gold"
                  style={{ color: "var(--warm)" }}
                >
                  +61 2 XXXX XXXX
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
                  Location
                </p>
                <p className="text-sm" style={{ color: "var(--warm)" }}>
                  Canberra, ACT, Australia
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
                  Office Hours
                </p>
                <p className="text-sm" style={{ color: "var(--warm)" }}>
                  Mon–Fri: 9:00 AM – 6:00 PM AEST
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid var(--border-subtle)" }}
      >
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-wrap">
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Digibly Group. All rights reserved. ABN: XX XXX XXX XXX
          </p>
          <Link
            href="/climate-pledge"
            className="flex items-center gap-1.5 text-xs transition-colors hover:text-gold"
            style={{ color: "rgba(201,168,76,0.6)" }}
          >
            <Leaf size={11} />
            5% Climate Pledge
          </Link>
          <p
            className="text-xs italic font-display"
            style={{ color: "var(--muted)" }}
          >
            Craft that Elevates Every Brand · Est. 2019
          </p>
        </div>
      </div>
    </footer>
  );
}
