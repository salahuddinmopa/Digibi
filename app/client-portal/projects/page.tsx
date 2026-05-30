import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { mockProjects } from "@/data/portal-mock";
import { Check } from "lucide-react";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/client-portal/login");

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          My Projects
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Track the progress of all your active and completed engagements.
        </p>
      </div>

      <div className="space-y-6">
        {mockProjects.map((proj) => (
          <div
            key={proj.id}
            className="p-6"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-display text-xl mb-1" style={{ color: "var(--cream)", fontWeight: 400 }}>
                  {proj.name}
                </h2>
                <p className="text-xs uppercase tracking-label" style={{ color: "var(--gold)" }}>
                  {proj.service}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="text-xs px-3 py-1"
                  style={{
                    background: proj.status === "Completed" ? "rgba(100,200,100,0.1)" : proj.status === "Review" ? "rgba(201,168,76,0.1)" : "rgba(100,150,255,0.1)",
                    border: `1px solid ${proj.status === "Completed" ? "rgba(100,200,100,0.3)" : proj.status === "Review" ? "rgba(201,168,76,0.3)" : "rgba(100,150,255,0.3)"}`,
                    color: proj.status === "Completed" ? "#7dd87d" : proj.status === "Review" ? "var(--gold)" : "#7db8ff",
                  }}
                >
                  {proj.status}
                </span>
              </div>
            </div>

            <p className="text-sm mb-4" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
              {proj.description}
            </p>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-2" style={{ color: "var(--muted)" }}>
                <span>Progress</span>
                <span>{proj.progress}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${proj.progress}%`, background: "var(--gold)" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
              <div>
                <p className="uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>Started</p>
                <p style={{ color: "var(--warm)" }}>{proj.startDate}</p>
              </div>
              <div>
                <p className="uppercase tracking-label mb-1" style={{ color: "var(--muted)" }}>Deadline</p>
                <p style={{ color: "var(--warm)" }}>{proj.deadline}</p>
              </div>
            </div>

            {/* Milestones */}
            <div>
              <p className="text-xs uppercase tracking-label mb-3" style={{ color: "var(--muted)" }}>
                Milestones
              </p>
              <div className="space-y-2">
                {proj.milestones.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: m.done ? "var(--gold)" : "transparent",
                        border: `1px solid ${m.done ? "var(--gold)" : "var(--border)"}`,
                      }}
                    >
                      {m.done && <Check size={10} style={{ color: "var(--bg-primary)" }} />}
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: m.done ? "var(--cream)" : "var(--muted)", textDecoration: m.done ? "none" : "none" }}
                    >
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
