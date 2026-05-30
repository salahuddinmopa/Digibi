import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { mockInvoices } from "@/data/portal-mock";
import { ArrowLeft, Leaf } from "lucide-react";
import PrintButton from "@/components/ui/PrintButton";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const invoice = mockInvoices.find((i) => i.id === params.id);
  return { title: invoice ? `Invoice ${invoice.number}` : "Invoice Not Found" };
}

export default function InvoicePage({ params }: Props) {
  const invoice = mockInvoices.find((i) => i.id === params.id);
  if (!invoice) notFound();

  const subtotal = invoice.lineItems.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const gst = subtotal * 0.1;
  const total = subtotal + gst;

  function statusColor(status: string) {
    if (status === "Paid") return "#7dd87d";
    if (status === "Overdue") return "#ff8080";
    return "var(--gold)";
  }

  return (
    <div className="min-h-screen py-16 px-4" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-3xl mx-auto">
        {/* Actions bar */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/client-portal/invoices"
            className="flex items-center gap-2 text-xs uppercase tracking-label"
            style={{ color: "var(--muted)" }}
          >
            <ArrowLeft size={12} />
            Back to Invoices
          </Link>
          <div className="flex gap-3">
            <PrintButton />
          </div>
        </div>

        {/* Invoice document */}
        <div
          id="invoice-document"
          className="p-10"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-10">
            <div>
              <h1
                className="font-display text-3xl mb-1"
                style={{ color: "var(--gold-light)", fontWeight: 300 }}
              >
                Digibly Group
              </h1>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                Canberra, ACT, Australia · ABN: XX XXX XXX XXX
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                hello@digiblygroup.com.au
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--gold)" }}>
                Invoice
              </p>
              <p className="font-display text-xl" style={{ color: "var(--cream)" }}>
                {invoice.number}
              </p>
              <span
                className="text-xs px-2 py-0.5 mt-2 inline-block"
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  color: statusColor(invoice.status),
                }}
              >
                {invoice.status}
              </span>
            </div>
          </div>

          {/* Bill to / dates */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <p className="text-xs uppercase tracking-label mb-2" style={{ color: "var(--muted)" }}>
                Bill To
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--cream)" }}>{invoice.clientName}</p>
              <p className="text-sm" style={{ color: "var(--warm)" }}>{invoice.clientCompany}</p>
              <p className="text-sm" style={{ color: "var(--warm)" }}>{invoice.clientAddress}</p>
            </div>
            <div className="text-right">
              <div className="mb-2">
                <p className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>Issue Date</p>
                <p className="text-sm" style={{ color: "var(--warm)" }}>{invoice.date}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-label" style={{ color: "var(--muted)" }}>Due Date</p>
                <p className="text-sm" style={{ color: "var(--warm)" }}>{invoice.dueDate}</p>
              </div>
            </div>
          </div>

          {/* Line items */}
          <table className="w-full mb-8" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Description", "Qty", "Unit Price", "Total"].map((h, i) => (
                  <th
                    key={h}
                    className={`py-3 text-xs uppercase tracking-label ${i > 0 ? "text-right" : "text-left"}`}
                    style={{ color: "var(--gold)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoice.lineItems.map((item, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td className="py-4 text-sm" style={{ color: "var(--warm)" }}>{item.description}</td>
                  <td className="py-4 text-sm text-right" style={{ color: "var(--warm)" }}>{item.qty}</td>
                  <td className="py-4 text-sm text-right" style={{ color: "var(--warm)" }}>${item.unitPrice.toFixed(2)}</td>
                  <td className="py-4 text-sm text-right font-medium" style={{ color: "var(--cream)" }}>
                    ${(item.qty * item.unitPrice).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-end mb-8">
            <div className="w-64">
              <div className="flex justify-between py-2 text-sm border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span style={{ color: "var(--muted)" }}>Subtotal</span>
                <span style={{ color: "var(--warm)" }}>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-sm border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span style={{ color: "var(--muted)" }}>GST (10%)</span>
                <span style={{ color: "var(--warm)" }}>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 text-base font-medium">
                <span style={{ color: "var(--cream)" }}>Total (AUD)</span>
                <span className="font-display text-xl" style={{ color: "var(--gold-light)", fontWeight: 400 }}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Payment info */}
          <div
            className="p-6 mb-8"
            style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}
          >
            <p className="text-xs uppercase tracking-label mb-3" style={{ color: "var(--gold)" }}>
              Payment Instructions
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p style={{ color: "var(--muted)" }}>Bank</p>
                <p style={{ color: "var(--warm)" }}>Australian Business Bank</p>
              </div>
              <div>
                <p style={{ color: "var(--muted)" }}>Account Name</p>
                <p style={{ color: "var(--warm)" }}>Digibly Group Pty Ltd</p>
              </div>
              <div>
                <p style={{ color: "var(--muted)" }}>BSB</p>
                <p style={{ color: "var(--warm)" }}>XXX-XXX</p>
              </div>
              <div>
                <p style={{ color: "var(--muted)" }}>Account Number</p>
                <p style={{ color: "var(--warm)" }}>XXXXXXXXXX</p>
              </div>
            </div>
            <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
              Payment due within 14 days of issue date. Please reference invoice number {invoice.number}.
            </p>
          </div>

          {/* Climate Pledge note */}
          <div
            className="mb-6 p-4"
            style={{ border: "1px solid var(--border)", background: "rgba(201,168,76,0.04)" }}
          >
            <div className="flex items-start gap-2">
              <Leaf size={12} className="flex-shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "var(--gold)" }}>
                  Climate Pledge
                </p>
                <p className="text-xs" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                  A portion of this invoice contributes to the Digibly Climate Pledge. 5% of Digibly Group&apos;s net revenue is donated annually to Australian climate organisations.
                </p>
                <p className="text-xs mt-1" style={{ color: "rgba(201,168,76,0.5)" }}>
                  digiblygroup.com.au/climate-pledge
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="font-display italic text-sm" style={{ color: "var(--muted)", fontWeight: 300 }}>
              Thank you for your business. — Digibly Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
