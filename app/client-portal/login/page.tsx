"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loader2, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function PortalLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
      setLoading(false);
    } else {
      router.push("/client-portal");
    }
  };

  const fieldCls = {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    color: "var(--cream)",
    padding: "0.875rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-dm-sans)",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/">
            <span className="font-display text-2xl" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
              Digibly Group
            </span>
          </Link>
          <p className="text-xs uppercase tracking-label mt-2" style={{ color: "var(--muted)" }}>
            Client Portal
          </p>
        </div>

        <div
          className="p-8"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          <h1
            className="font-display text-2xl mb-2"
            style={{ color: "var(--gold-light)", fontWeight: 300 }}
          >
            Welcome back
          </h1>
          <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
            Sign in to access your client dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-xs uppercase tracking-label mb-2"
                style={{ color: "var(--muted)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={fieldCls}
                autoComplete="email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-xs uppercase tracking-label mb-2"
                style={{ color: "var(--muted)" }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={fieldCls}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: "#e8a84c" }}>
                <AlertCircle size={12} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full justify-center"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div
            className="mt-6 pt-6 text-center text-xs"
            style={{ borderTop: "1px solid var(--border-subtle)", color: "var(--muted)" }}
          >
            <p className="mb-1">Demo credentials:</p>
            <p>admin@digiblygroup.com.au / digibly2025</p>
          </div>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: "var(--muted)" }}>
          Not a client?{" "}
          <Link href="/get-a-quote" style={{ color: "var(--gold)" }}>
            Start a project
          </Link>
        </p>
      </div>
    </div>
  );
}
