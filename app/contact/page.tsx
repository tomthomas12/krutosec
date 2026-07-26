import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Krutosec for a free security consultation.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-ink/10 grain">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="max-w-xl">
          <span className="trace-eyebrow text-teal-dark">Contact</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Let&apos;s secure your business.
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-ink/70">
            Tell us about your application, network, or product, and we&apos;ll come back with a
            scoped recommendation — no obligation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Email</p>
                  <p className="text-[14px] text-ink/60">hello@krutosec.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Phone</p>
                  <p className="text-[14px] text-ink/60">+44 20 0000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-display text-[15px] font-medium text-ink">Office</p>
                  <p className="text-[14px] text-ink/60">United Kingdom (remote-first, global clients)</p>
                </div>
              </div>

              <div className="mt-8 h-52 rounded-md border border-ink/10 bg-sandDeep/60 flex items-center justify-center">
                <span className="font-mono text-xs uppercase tracking-wider text-ink/40">Map placeholder</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-md border border-ink/10 bg-white/50 p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">Company</label>
                  <input
                    type="text"
                    name="company"
                    className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                    placeholder="Company Ltd."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-mono text-[11px] uppercase tracking-wider text-ink/55">What do you need tested?</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-sm border border-ink/15 bg-sand/40 px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                    placeholder="A web app, an API, our AWS environment..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark"
              >
                Send Message
              </button>
              <p className="mt-3 text-center text-[12px] text-ink/45">
                We reply within one business day. NDAs available on request.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
