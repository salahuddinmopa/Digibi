import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div>
        <p
          className="font-display opacity-10 mb-4 select-none"
          style={{ fontSize: "clamp(6rem, 15vw, 15rem)", color: "var(--gold)", lineHeight: 1, fontWeight: 300 }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="font-display text-4xl mb-4"
          style={{ color: "var(--gold-light)", fontWeight: 300, lineHeight: 1.1 }}
        >
          Page Not Found
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--warm)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-gold">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
