"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and what you need tested.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong sending your message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong sending your message.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-teal/30 bg-teal/5 p-12 text-center">
        <CheckCircle2 size={36} className="text-teal" />
        <h3 className="mt-4 font-display text-xl font-medium text-ink">Message sent</h3>
        <p className="mt-2 max-w-xs text-[14px] text-ink/60">
          Thanks, we&apos;ve got it. We reply within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[12px] uppercase tracking-wider text-teal-dark hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-ink/10 bg-white/50 p-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Name</label>
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
            placeholder="Jane Doe"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Email</label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
            placeholder="jane@company.com"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Phone</label>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
            placeholder="+44 7000 000000"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Company</label>
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
            placeholder="Company Ltd."
          />
        </div>
        <div className="sm:col-span-2">
          <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">What services do you need?</label>
          <textarea
            name="message"
            rows={5}
            required
            className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
            placeholder="A web app, an API, our AWS environment..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-sm border border-red-300 bg-red-50 px-3.5 py-3 text-[13px] text-red-700">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" && <Loader2 size={15} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      <p className="mt-3 text-center text-[12px] text-ink/45">
        We reply within one business day. NDAs available on request.
      </p>
    </form>
  );
}
