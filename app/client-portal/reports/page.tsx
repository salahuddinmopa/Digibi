"use client";

import { mockReports } from "@/data/portal-mock";
import { Download, FileText } from "lucide-react";

export default function ReportsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          Reports
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Download your monthly performance reports.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              {["Report", "Month", "Type", "Date Uploaded", "Action"].map((h) => (
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
            {mockReports.map((report) => (
              <tr key={report.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <td className="py-4 pr-4">
                  <div className="flex items-center gap-2">
                    <FileText size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                    <span className="text-sm" style={{ color: "var(--cream)" }}>{report.name}</span>
                  </div>
                </td>
                <td className="py-4 pr-4 text-sm" style={{ color: "var(--warm)" }}>
                  {report.month}
                </td>
                <td className="py-4 pr-4">
                  <span
                    className="text-xs px-2 py-1"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: "var(--gold)",
                    }}
                  >
                    {report.type}
                  </span>
                </td>
                <td className="py-4 pr-4 text-sm" style={{ color: "var(--muted)" }}>
                  {report.uploaded}
                </td>
                <td className="py-4">
                  <button
                    className="flex items-center gap-2 text-xs btn-ghost py-1.5 px-3"
                    onClick={() => alert("PDF download would trigger here in production.")}
                  >
                    <Download size={12} />
                    Download PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
