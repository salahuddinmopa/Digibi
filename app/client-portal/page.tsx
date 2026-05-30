import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FolderOpen, Receipt, FileText, MessageSquare } from "lucide-react";
import { mockProjects, mockInvoices, mockReports, mockMessages } from "@/data/portal-mock";

export default async function PortalDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/client-portal/login");

  const clientName = session.user?.name || "Client";
  const activeProjects = mockProjects.filter((p) => p.status !== "Completed").length;
  const pendingInvoices = mockInvoices.filter((i) => i.status === "Unpaid" || i.status === "Overdue").length;
  const recentMessages = mockMessages.slice(-3).reverse();

  const metrics = [
    { label: "Active Projects", value: activeProjects, Icon: FolderOpen, href: "/client-portal/projects" },
    { label: "Pending Invoices", value: pendingInvoices, Icon: Receipt, href: "/client-portal/invoices" },
    { label: "Reports Ready", value: mockReports.length, Icon: FileText, href: "/client-portal/reports" },
    { label: "Messages", value: mockMessages.length, Icon: MessageSquare, href: "/client-portal/messages" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1
          className="font-display text-3xl mb-1"
          style={{ color: "var(--gold-light)", fontWeight: 300 }}
        >
          Welcome back, {clientName.split(" ")[0]}.
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Here&apos;s what&apos;s happening with your projects.
        </p>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {metrics.map(({ label, value, Icon, href }) => (
          <Link
            key={label}
            href={href}
            className="group p-6 gold-card"
          >
            <div className="flex items-start justify-between mb-4">
              <Icon size={18} style={{ color: "var(--gold)" }} />
            </div>
            <p
              className="font-display text-4xl mb-1"
              style={{ fontWeight: 300, color: "var(--gold-light)" }}
            >
              {value}
            </p>
            <p className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>
              {label}
            </p>
          </Link>
        ))}
      </div>

      {/* Recent activity + projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projects */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
              Active Projects
            </p>
            <Link href="/client-portal/projects" className="text-xs" style={{ color: "var(--muted)" }}>
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {mockProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-4"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>
                      {proj.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {proj.service}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-1"
                    style={{
                      background: proj.status === "Completed"
                        ? "rgba(100,200,100,0.1)"
                        : proj.status === "Review"
                        ? "rgba(201,168,76,0.1)"
                        : "rgba(100,150,255,0.1)",
                      border: `1px solid ${proj.status === "Completed" ? "rgba(100,200,100,0.3)" : proj.status === "Review" ? "rgba(201,168,76,0.3)" : "rgba(100,150,255,0.3)"}`,
                      color: proj.status === "Completed" ? "#7dd87d" : proj.status === "Review" ? "var(--gold)" : "#7db8ff",
                    }}
                  >
                    {proj.status}
                  </span>
                </div>
                <div className="h-1 rounded-full mt-2" style={{ background: "var(--border)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${proj.progress}%`, background: "var(--gold)" }}
                  />
                </div>
                <p className="text-xs mt-1 text-right" style={{ color: "var(--muted)" }}>
                  {proj.progress}%
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent messages */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
              Recent Messages
            </p>
            <Link href="/client-portal/messages" className="text-xs" style={{ color: "var(--muted)" }}>
              View all →
            </Link>
          </div>
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="p-4"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs uppercase tracking-label"
                    style={{ color: msg.from === "digibly" ? "var(--gold)" : "var(--warm)" }}
                  >
                    {msg.from === "digibly" ? "Digibly Group" : "You"}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>· {msg.timestamp}</span>
                </div>
                <p className="text-sm line-clamp-2" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                  {msg.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
