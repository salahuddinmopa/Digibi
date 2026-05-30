import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { mockInvoices } from "@/data/portal-mock";
import { Eye } from "lucide-react";

function statusColor(status: string) {
  if (status === "Paid") return { bg: "rgba(100,200,100,0.1)", border: "rgba(100,200,100,0.3)", color: "#7dd87d" };
  if (status === "Overdue") return { bg: "rgba(255,100,100,0.1)", border: "rgba(255,100,100,0.3)", color: "#ff8080" };
  return { bg: "rgba(201,168,76,0.1)", border: "rgba(201,168,76,0.3)", color: "var(--gold)" };
}

export default async function InvoicesPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/client-portal/login");

  const total = mockInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const unpaid = mockInvoices.filter((i) => i.status !== "Paid").reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          Invoices
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          View and download your invoices.
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>Total Invoiced</p>
          <p className="font-display text-3xl" style={{ fontWeight: 300, color: "var(--cream)" }}>
            ${total.toFixed(2)}
          </p>
        </div>
        <div className="p-4" style={{ background: "var(--bg-surface)", border: "1px solid rgba(201,168,76,0.25)" }}>
          <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>Amount Outstanding</p>
          <p className="font-display text-3xl" style={{ fontWeight: 300, color: "var(--gold-light)" }}>
            ${unpaid.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Invoice #", "Date", "Description", "Amount", "Status", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left py-3 pr-4 text-xs uppercase tracking-label"
                  style={{ color: "var(--gold)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((inv) => {
              const sc = statusColor(inv.status);
              return (
                <tr key={inv.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="py-4 pr-4 text-sm font-medium" style={{ color: "var(--cream)" }}>
                    {inv.number}
                  </td>
                  <td className="py-4 pr-4 text-sm" style={{ color: "var(--warm)" }}>{inv.date}</td>
                  <td className="py-4 pr-4 text-sm" style={{ color: "var(--warm)", maxWidth: 200 }}>
                    <span className="line-clamp-1">{inv.description}</span>
                  </td>
                  <td className="py-4 pr-4 text-sm font-medium" style={{ color: "var(--cream)" }}>
                    ${inv.amount.toFixed(2)}
                  </td>
                  <td className="py-4 pr-4">
                    <span
                      className="text-xs px-2 py-1"
                      style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color }}
                    >
                      {inv.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/invoice/${inv.id}`}
                        className="flex items-center gap-1 text-xs btn-ghost py-1.5 px-3"
                      >
                        <Eye size={12} />
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
