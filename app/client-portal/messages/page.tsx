"use client";

import { useState } from "react";
import { mockMessages } from "@/data/portal-mock";
import { Send } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        from: "client",
        content: input.trim(),
        timestamp: new Date().toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }) + ", " + new Date().toLocaleTimeString("en-AU", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 160px)" }}>
      <div className="mb-6">
        <h1 className="font-display text-3xl mb-1" style={{ color: "var(--gold-light)", fontWeight: 300 }}>
          Messages
        </h1>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Your conversation with the Digibly Group team.
        </p>
      </div>

      {/* Message thread */}
      <div
        className="flex-1 overflow-y-auto space-y-4 p-4 mb-4"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
          >
            <div
              className="max-w-sm p-4"
              style={{
                background: msg.from === "client" ? "rgba(201,168,76,0.12)" : "var(--bg-primary)",
                border: `1px solid ${msg.from === "client" ? "rgba(201,168,76,0.25)" : "var(--border)"}`,
              }}
            >
              <p className="text-xs uppercase tracking-label mb-1" style={{ color: "var(--gold)" }}>
                {msg.from === "client" ? "You" : "Digibly Group"}
              </p>
              <p className="text-sm" style={{ color: "var(--warm)", lineHeight: 1.6 }}>
                {msg.content}
              </p>
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        className="flex gap-3 p-4"
        style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type your message..."
          className="flex-1"
          style={{
            background: "var(--bg-primary)",
            border: "1px solid var(--border)",
            color: "var(--cream)",
            padding: "0.625rem 0.875rem",
            fontSize: "0.875rem",
            outline: "none",
            fontFamily: "var(--font-dm-sans)",
          }}
        />
        <button
          onClick={send}
          className="btn-gold py-2 px-4"
          aria-label="Send message"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
