import type { Metadata } from "next";
import { BadgeCheck, Target, Users, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import CircuitTrace from "@/components/CircuitTrace";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Krutosec is a team of certified offensive security testers and secure development engineers.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/10 grain">
        <CircuitTrace className="pointer-events-none absolute -right-10 top-0 h-[280px] w-[400px] opacity-60" />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <span className="trace-eyebrow text-teal-dark">About Us</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              We think like attackers, so you don&apos;t have to find out like one.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink/70">
              Krutosec was founded on a simple idea: security testing should produce evidence, not
              anxiety. We are certified penetration testers and secure-development engineers who
              combine offensive research with practical risk assessment, so every finding comes with
              a clear path to fixing it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { icon: BadgeCheck, title: "Offensive Security Experts", desc: "Hands-on testers with backgrounds across web, cloud, mobile, and AI systems." },
              { icon: ShieldCheck, title: "Certified Penetration Testers", desc: "Industry-recognized certifications underpin every engagement we run." },
              { icon: Target, title: "Risk Assessment & Compliance", desc: "Findings mapped to business impact and the frameworks your auditors expect." },
              { icon: Users, title: "Secure Development Team", desc: "Engineers who build the same applications we're hired to break." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="flex gap-4 rounded-md border border-ink/10 bg-white/50 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-teal/10 text-teal">
                    <f.icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-display text-[16px] font-medium text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink/60">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">Want to work with us on your next assessment?</h2>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark"
            >
              Get a Free Consultation <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
