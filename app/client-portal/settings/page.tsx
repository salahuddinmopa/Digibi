"use client";

import { useState } from "react";
import { mockClient } from "@/data/portal-mock";
import { Check } from "lucide-react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: mockClient.name,
    email: mockClient.email,
    phone: mockClient.phone,
    company: mockClient.company,
  });
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    projectUpdates: true,
    invoiceAlerts: true,
    marketingEmails: false,
  });

  const fieldCls = {
    background: "var(--bg-surface)",
    border: "1px solid var(--border)",
    color: "var(--cream)",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    fontFamily: "var(--font-dm-sans)",
  };
  const label = {
    display: "block" as const,
    fontSize: "0.7rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    marginBottom: "0.5rem",
    color: "var(--muted)",
  };

  const save = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          Settings
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Manage your profile and notification preferences.
        </p>
      </div>

      <div className="space-y-8 max-w-xl">
        {/* Profile */}
        <div className="p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-label mb-6" style={{ color: "var(--gold)" }}>
            Profile Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label style={label}>Full Name</label>
              <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} type="text" style={fieldCls} />
            </div>
            <div>
              <label style={label}>Email</label>
              <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} type="email" style={fieldCls} />
            </div>
            <div>
              <label style={label}>Phone</label>
              <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} type="tel" style={fieldCls} />
            </div>
            <div>
              <label style={label}>Company</label>
              <input value={profile.company} onChange={(e) => setProfile({ ...profile, company: e.target.value })} type="text" style={fieldCls} />
            </div>
          </div>
          <button onClick={save} className="btn-gold text-xs py-2.5 px-5 flex items-center gap-2">
            {saved ? <><Check size={12} /> Saved</> : "Save Changes"}
          </button>
        </div>

        {/* Notifications */}
        <div className="p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-label mb-6" style={{ color: "var(--gold)" }}>
            Notification Preferences
          </p>
          <div className="space-y-4">
            {[
              { key: "projectUpdates", label: "Project Updates", description: "Receive notifications when your project milestones change." },
              { key: "invoiceAlerts", label: "Invoice Alerts", description: "Be notified when new invoices are issued or payments are due." },
              { key: "marketingEmails", label: "Marketing Emails", description: "Receive occasional tips, insights, and news from Digibly Group." },
            ].map(({ key, label: lbl, description }) => (
              <div key={key} className="flex items-start gap-4">
                <button
                  onClick={() => setNotifications({ ...notifications, [key]: !notifications[key as keyof typeof notifications] })}
                  className="mt-0.5 flex-shrink-0 w-10 h-5 rounded-full relative transition-colors"
                  style={{
                    background: notifications[key as keyof typeof notifications] ? "var(--gold)" : "var(--border)",
                  }}
                  role="switch"
                  aria-checked={notifications[key as keyof typeof notifications]}
                >
                  <span
                    className="absolute top-0.5 w-4 h-4 rounded-full transition-all"
                    style={{
                      background: "#fff",
                      left: notifications[key as keyof typeof notifications] ? "calc(100% - 18px)" : "2px",
                    }}
                  />
                </button>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>{lbl}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Change password notice */}
        <div className="p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-label mb-3" style={{ color: "var(--gold)" }}>
            Change Password
          </p>
          <p className="text-sm mb-4" style={{ color: "var(--warm)" }}>
            To change your password, please contact us at{" "}
            <a href="mailto:hello@digiblygroup.com.au" style={{ color: "var(--gold)" }}>
              hello@digiblygroup.com.au
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
