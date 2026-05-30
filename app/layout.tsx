import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import CookieBanner from "@/components/ui/CookieBanner";
import PortalProvider from "@/components/portal/PortalProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Digibly Group — Craft that Elevates Every Brand",
    template: "%s | Digibly Group",
  },
  description:
    "A full-service digital agency and governance consultancy for businesses that believe the details matter. Based in Canberra, Australia.",
  keywords: [
    "digital agency",
    "web design",
    "digital marketing",
    "cybersecurity governance",
    "branding",
    "Canberra",
    "Australia",
  ],
  authors: [{ name: "Digibly Group" }],
  creator: "Digibly Group",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://digiblygroup.com.au",
    siteName: "Digibly Group",
    title: "Digibly Group — Craft that Elevates Every Brand",
    description:
      "A full-service digital agency and governance consultancy based in Canberra, Australia.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@digiblygroup",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body">
        <PortalProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </PortalProvider>
      </body>
    </html>
  );
}
