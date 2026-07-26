import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2, Smartphone, Search, ShieldCheck, Cloud, Bot, Network } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: "Secure software development and offensive security services from Krutosec.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-sand grain">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <span className="trace-eyebrow text-teal-dark">Services</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Everything we build. Everything we break.
            </h1>
            <p className="mt-6 max-w-2xl text-[15.5px] leading-relaxed text-ink/70">
              Two disciplines, one team: secure development that ships with fewer findings, and
              offensive testing that catches what shipped anyway.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="development" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Build</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Secure Software Development</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={Code2}
              title="Web Development"
              description="Custom applications, single-page sites, and business websites built secure by default."
              points={["WordPress Development", "Custom Web Applications", "Single & Multi-page Sites", "Landing Pages", "Optional AI Chatbot Integration"]}
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile App Development"
              description="Native and cross-platform mobile applications, threat-modeled before the first release."
              points={["Android Apps", "iOS Apps", "Cross-platform Applications"]}
              delay={0.08}
            />
            <ServiceCard
              icon={Search}
              title="SEO Services"
              description="Technical foundations and performance work that improves ranking without new risk."
              points={["Technical SEO", "On-page SEO", "Performance Optimization"]}
              delay={0.16}
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Web Hosting"
              description="Infrastructure operated with the same discipline as our assessments."
              points={["Secure Hosting", "SSL by Default", "Daily Backups", "High Availability"]}
              delay={0.24}
            />
          </div>
        </div>
      </section>

      <section id="security" className="border-b border-panelLine bg-panel text-sand grain-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-light">Break</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-sand">Cybersecurity Services</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code2, title: "Web Application Penetration Testing", desc: "Manual testing for authentication, authorization, injection, and business-logic flaws across the OWASP Top 10." },
              { icon: Network, title: "API Penetration Testing", desc: "REST and GraphQL APIs tested for broken object-level authorization, rate-limit gaps, and data exposure." },
              { icon: Network, title: "Network Penetration Testing", desc: "Internal and external network testing to map lateral movement and privilege escalation paths.", points: ["Internal Testing", "External Testing"] },
              { icon: Cloud, title: "Cloud Security Assessment", desc: "Configuration review across identity, storage, and network layers of your cloud estate.", points: ["AWS", "Azure", "GCP"] },
              { icon: Smartphone, title: "Mobile Application Testing", desc: "Static and dynamic analysis covering storage, transport, and platform-specific weaknesses.", points: ["Android", "iOS"] },
              { icon: Bot, title: "LLM / AI Security Testing", desc: "Adversarial testing against prompt manipulation and model-abuse patterns.", points: ["Prompt Injection", "Jailbreaks", "Data Leakage", "Model Abuse", "OWASP Top 10 for LLMs"] },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="h-full rounded-md border border-panelLine bg-white/[0.03] p-6 transition-colors hover:border-teal/60">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-teal/15 text-teal-light">
                    <s.icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-sand">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">{s.desc}</p>
                  {s.points && (
                    <ul className="mt-4 space-y-1.5 border-t border-panelLine pt-4">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[12.5px] text-mist/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal-light" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">Not sure which service fits?</h2>
            <p className="mt-3 text-[14.5px] text-ink/60">Tell us what you&apos;re running and we&apos;ll recommend the right scope.</p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark"
            >
              Talk To Us <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
