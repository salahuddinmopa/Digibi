import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Submit your project brief and receive a detailed quote from Digibly Group within 24 hours.",
};

export default function GetAQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Start Here"
        title="Tell Us About"
        titleItalic="Your Project."
        subtitle="Complete the four-step form below and we'll come back with a detailed, no-obligation quote within 24 hours."
        breadcrumbs={[{ label: "Get a Quote" }]}
      />

      <section className="section-padding" style={{ background: "var(--bg-primary)" }}>
        <div className="container-wide max-w-3xl">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
