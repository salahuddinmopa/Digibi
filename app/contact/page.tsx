import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Leaf } from "lucide-react";
import { InstagramIcon, LinkedinIcon, FacebookIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Digibly Group. We're based in Canberra, ACT and work with clients across Australia.",
};

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "hello@digiblygroup.com.au",
    href: "mailto:hello@digiblygroup.com.au",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+61 2 XXXX XXXX",
    href: "tel:+61200000000",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Canberra, ACT, Australia",
    href: null,
  },
  {
    Icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM AEST",
    href: null,
  },
];

const socials = [
  { Icon: InstagramIcon, label: "Instagram", handle: "@digiblygroup", href: "https://instagram.com/digiblygroup" },
  { Icon: LinkedinIcon, label: "LinkedIn", handle: "/digiblygroup", href: "https://linkedin.com/company/digiblygroup" },
  { Icon: FacebookIcon, label: "Facebook", handle: "/digiblygroup", href: "https://facebook.com/digiblygroup" },
  { Icon: TwitterIcon, label: "Twitter/X", handle: "@digiblygroup", href: "https://twitter.com/digiblygroup" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's Build"
        titleItalic="Something Together."
        subtitle="Whether you have a clear brief or just an idea, we'd love to hear from you. We respond to all enquiries within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — info */}
            <div>
              <ScrollReveal>
                <p className="text-xs uppercase tracking-label mb-6" style={{ color: "var(--gold)" }}>
                  Contact Information
                </p>
              </ScrollReveal>

              <div className="space-y-6 mb-10">
                {contactInfo.map((item, i) => (
                  <ScrollReveal key={item.label} delay={i * 0.08}>
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                        style={{ border: "1px solid var(--border)", color: "var(--gold)" }}
                      >
                        <item.Icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm transition-colors hover:text-gold"
                            style={{ color: "var(--warm)" }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: "var(--warm)" }}>
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Socials */}
              <ScrollReveal delay={0.3}>
                <p className="text-xs uppercase tracking-label mb-4" style={{ color: "var(--muted)" }}>
                  Follow Us
                </p>
                <div className="space-y-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm transition-colors hover:text-gold group"
                      style={{ color: "var(--warm)" }}
                    >
                      <social.Icon size={16} style={{ color: "var(--gold)" }} />
                      <span>{social.label}</span>
                      <span style={{ color: "var(--muted)" }}>{social.handle}</span>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* Climate pledge line */}
              <ScrollReveal delay={0.33} className="mt-8">
                <div className="flex items-center gap-3">
                  <Leaf size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                  <div>
                    <p className="text-xs" style={{ color: "var(--warm)" }}>
                      Climate Pledge Member · 5% of revenue to climate action
                    </p>
                    <Link
                      href="/climate-pledge"
                      className="text-xs transition-colors hover:text-gold"
                      style={{ color: "rgba(201,168,76,0.6)" }}
                    >
                      /climate-pledge
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal delay={0.35} className="mt-10">
                <div
                  className="relative flex items-center justify-center"
                  style={{
                    height: 200,
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="text-center">
                    <MapPin size={24} className="mx-auto mb-2" style={{ color: "var(--gold)" }} />
                    <p className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>
                      Canberra, ACT, Australia
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right — form */}
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-xs uppercase tracking-label mb-6" style={{ color: "var(--gold)" }}>
                  Send Us a Message
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
