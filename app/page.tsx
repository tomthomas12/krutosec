import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Search,
  Cloud,
  Bot,
  Network,
  ShieldCheck,
  Radar,
  ClipboardCheck,
  Wrench,
  Clock3,
  FileText,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CircuitTrace from "@/components/CircuitTrace";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import StatCounter from "@/components/StatCounter";
import FaqItem from "@/components/FaqItem";
import TestimonialCard from "@/components/TestimonialCard";

const workflow = [
  { title: "Consultation", desc: "We scope your environment, goals, and compliance drivers." },
  { title: "Scope Definition", desc: "A written rules-of-engagement and target list, signed off by both sides." },
  { title: "Security Assessment", desc: "Manual and automated reconnaissance across the agreed surface." },
  { title: "Exploitation", desc: "Controlled, evidence-gathering exploitation of confirmed weaknesses." },
  { title: "Validation", desc: "Every finding is manually re-verified to remove false positives." },
  { title: "Reporting", desc: "A clear, severity-ranked report with reproduction steps and fixes." },
  { title: "Retesting", desc: "We confirm each remediation closes the gap, at no extra cost." },
  { title: "Secure Deployment", desc: "Sign-off documentation you can hand to auditors or customers." },
];

const techDev = ["React", "Next.js", "Node.js", "PHP", "WordPress", "Flutter", "Android", "iOS"];
const techSec = ["Burp Suite", "Nmap", "OWASP ZAP", "Metasploit", "Kali Linux", "Nessus", "Wireshark"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/10 grain">
        <CircuitTrace className="pointer-events-none absolute -left-10 top-10 h-[300px] w-[420px] opacity-70" />
        <CircuitTrace flip className="pointer-events-none absolute -right-10 bottom-0 h-[300px] w-[420px] opacity-70" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
          <Reveal>
            <span className="trace-eyebrow inline-flex items-center gap-2 text-teal-dark">
              <Radar size={14} /> Offensive Security &amp; Secure Development
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
              Protect your business before hackers find the weakness.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
              Krutosec secures applications, APIs, cloud infrastructure, mobile apps, and networks —
              through manual, evidence-backed penetration testing, and builds secure software from the
              ground up.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark"
              >
                Request a Penetration Test <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-ink/80 transition-colors hover:border-teal hover:text-teal-dark"
              >
                Free Consultation
              </Link>
            </div>
          </Reveal>

          {/* Signature element: scanline readout */}
          <Reveal delay={0.32}>
            <div className="relative mt-16 max-w-2xl overflow-hidden rounded-md border border-ink/15 bg-panel">
              <div
                className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-teal/0 via-teal/25 to-teal/0 animate-scan"
                aria-hidden="true"
              />
              <div className="relative grid grid-cols-3 divide-x divide-panelLine px-6 py-6 font-mono">
                <div className="pr-4">
                  <StatCounter value={500} suffix="+" label="Assessments Run" />
                </div>
                <div className="px-4">
                  <StatCounter value={1000} suffix="+" label="Vulns Found" />
                </div>
                <div className="pl-4">
                  <StatCounter value={99} suffix="%" label="Client Satisfaction" />
                </div>
              </div>
              <div className="border-t border-panelLine px-6 py-2.5">
                <p className="flex items-center gap-2 font-mono text-[11px] text-mist">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-light animate-blink" />
                  scan_status: continuous_assessment_active
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <span className="trace-eyebrow text-teal-dark">About Krutosec</span>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight text-ink md:text-[2.2rem]">
                Offensive security experts, held to the standard of the systems they&apos;re hired to break.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-relaxed text-ink/70">
                Krutosec is a team of certified penetration testers and secure-development engineers
                who think like attackers so your business doesn&apos;t have to find out the hard way.
                We combine hands-on offensive research with risk assessment and compliance support,
                so every engagement ends with findings you can actually act on — not a scanner printout.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "Offensive Security Experts",
                  "Certified Penetration Testers",
                  "Secure Development Team",
                  "Risk Assessment & Compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink/70">
                    <BadgeCheck size={16} className="mt-0.5 shrink-0 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECURE SOFTWARE DEVELOPMENT */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Build</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Secure Software Development</h2>
            <p className="mt-3 text-[15px] text-ink/65">
              Applications built with the same threat model we use to break into them.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={Code2}
              title="Web Development"
              description="Custom and content-managed sites, built secure from the first commit."
              points={["WordPress Development", "Custom Web Applications", "Landing & Business Sites", "Optional AI Chatbot"]}
            />
            <ServiceCard
              icon={Smartphone}
              title="Mobile App Development"
              description="Native and cross-platform apps, hardened before launch."
              points={["Android Apps", "iOS Apps", "Cross-platform Builds"]}
              delay={0.08}
            />
            <ServiceCard
              icon={Search}
              title="SEO Services"
              description="Technical foundations that rank, without opening new attack surface."
              points={["Technical SEO", "On-page SEO", "Performance Optimization"]}
              delay={0.16}
            />
            <ServiceCard
              icon={ShieldCheck}
              title="Web Hosting"
              description="Infrastructure managed with the same rigor as our pentest reports."
              points={["Secure Hosting", "SSL by Default", "Daily Backups", "High Availability"]}
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* CYBERSECURITY SERVICES */}
      <section className="border-b border-panelLine bg-panel text-sand grain-dark">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-light">Break</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-sand">Cybersecurity Services</h2>
            <p className="mt-3 text-[15px] text-mist">
              Manual testing across every layer your attackers actually target.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Code2, title: "Web Application Penetration Testing", desc: "OWASP Top 10 and business-logic flaws, tested manually." },
              { icon: Network, title: "API Penetration Testing", desc: "REST, GraphQL, and internal APIs, probed for auth and logic gaps." },
              { icon: Network, title: "Network Penetration Testing", desc: "Internal and external network testing to find lateral movement paths.", points: ["Internal", "External"] },
              { icon: Cloud, title: "Cloud Security Assessment", desc: "Misconfigurations and privilege issues across your cloud estate.", points: ["AWS", "Azure", "GCP"] },
              { icon: Smartphone, title: "Mobile Application Testing", desc: "Static and dynamic analysis of Android and iOS apps.", points: ["Android", "iOS"] },
              { icon: Bot, title: "LLM / AI Security Testing", desc: "Adversarial testing built for the OWASP Top 10 for LLMs.", points: ["Prompt Injection", "Jailbreaks", "Data Leakage", "Model Abuse"] },
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

      {/* PACKAGES PREVIEW */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Pricing</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Penetration Testing Packages</h2>
            <p className="mt-3 text-[15px] text-ink/65">Three tiers, scoped to how much attack surface you need covered.</p>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PricingCard
              code="PT100"
              name="Basic Security Assessment"
              tagline="Perfect for small websites"
              timeline="2 Day Turnaround"
              features={["Automated web application scan", "Vulnerability discovery", "Manual triaging", "PDF report"]}
            />
            <PricingCard
              code="PT200"
              name="Professional Assessment"
              tagline="Our most-scoped engagement"
              timeline="8 Day Turnaround"
              features={["Manual web application testing", "API security testing", "Vulnerability validation", "Risk analysis", "Detailed report + remediation guidance"]}
              featured
            />
            <PricingCard
              code="PT300"
              name="Elite Assessment"
              tagline="For complex, high-value targets"
              timeline="Custom Timeline"
              features={["Everything in PT200", "Advanced manual testing", "Business logic testing", "Technology-specific testing", "Architecture review", "Priority support"]}
              cta="Contact Sales"
            />
          </div>

          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <Link href="/packages" className="font-mono text-[13px] uppercase tracking-wider text-teal-dark hover:underline">
                Compare all packages in detail →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Why Krutosec</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Built for teams that need proof, not a scan</h2>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: BadgeCheck, title: "Certified Experts", desc: "Every tester holds industry-recognized offensive security certifications." },
              { icon: Wrench, title: "Manual + Automated", desc: "Automation finds the surface; our testers find what it misses." },
              { icon: ClipboardCheck, title: "Best-Practice Methodology", desc: "OWASP and PTES-aligned testing on every engagement." },
              { icon: Clock3, title: "Fast Turnaround", desc: "Clear timelines agreed upfront and held to." },
              { icon: FileText, title: "Detailed Reporting", desc: "Severity-ranked findings with reproduction steps, not jargon." },
              { icon: ShieldCheck, title: "Affordable Pricing", desc: "Packages scoped to the size of your actual attack surface." },
              { icon: HeartHandshake, title: "Continuous Support", desc: "Retesting and remediation guidance included, not billed separately." },
              { icon: Radar, title: "Real Attacker Mindset", desc: "We test the way an adversary actually behaves, not a checklist." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-teal/10 text-teal">
                  <f.icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-display text-[15px] font-medium text-ink">{f.title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/60">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Engagement Flow</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Eight steps, start to secure deployment</h2>
          </Reveal>

          <div className="relative mt-12">
            <div className="absolute left-[15px] top-2 hidden h-[calc(100%-2rem)] w-px bg-ink/15 md:block" />
            <div className="space-y-8 md:space-y-10">
              {workflow.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.05}>
                  <div className="flex gap-5 md:gap-6">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-teal bg-sand font-mono text-[12px] font-medium text-teal-dark">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-display text-[16px] font-medium text-ink">{w.title}</h3>
                      <p className="mt-1 text-[14px] text-ink/60">{w.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-b border-panelLine bg-panel text-sand">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-light">Tooling</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-sand">Technologies we build and break with</h2>
          </Reveal>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Reveal>
              <p className="trace-eyebrow mb-4 text-mist">Development</p>
              <div className="flex flex-wrap gap-2.5">
                {techDev.map((t) => (
                  <span key={t} className="rounded-sm border border-panelLine px-3.5 py-2 font-mono text-[12.5px] text-sand/85">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="trace-eyebrow mb-4 text-mist">Security</p>
              <div className="flex flex-wrap gap-2.5">
                {techSec.map((t) => (
                  <span key={t} className="rounded-sm border border-panelLine px-3.5 py-2 font-mono text-[12.5px] text-sand/85">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Reveal className="max-w-xl">
            <span className="trace-eyebrow text-teal-dark">Client Results</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">What teams say after the report lands</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="Krutosec found an authorization bypass our internal team had missed for two releases. The report was clear enough that engineering fixed it the same week."
              name="Head of Engineering"
              role="Fintech SaaS"
            />
            <TestimonialCard
              quote="First pentest partner we've used that actually re-tests fixes without a change order. The PT200 package covered exactly what we needed."
              name="CTO"
              role="Healthcare Platform"
              delay={0.08}
            />
            <TestimonialCard
              quote="The LLM security assessment surfaced a prompt-injection path we hadn't considered. Straightforward to prioritize and fix."
              name="Product Security Lead"
              role="AI Startup"
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal className="text-center">
            <span className="trace-eyebrow text-teal-dark">FAQ</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-ink">Common questions</h2>
          </Reveal>

          <div className="mt-10">
            <FaqItem q="What is penetration testing?" a="A controlled, authorized attempt to exploit weaknesses in your applications, network, or infrastructure — the same techniques a real attacker would use, performed under a signed scope so nothing is tested without your consent." />
            <FaqItem q="How long does a test take?" a="Anywhere from 2 days for a PT100 automated-led assessment to several weeks for a PT300 elite engagement, depending on scope. We agree the timeline before work begins." />
            <FaqItem q="Do you provide reports?" a="Yes — every engagement ends with a severity-ranked report including reproduction steps, evidence, business impact, and remediation guidance." />
            <FaqItem q="What industries do you serve?" a="Fintech, healthcare, SaaS, e-commerce, and AI/LLM-driven products are our most common engagements, though our methodology applies across most software-driven industries." />
            <FaqItem q="Do you sign NDAs?" a="Always. An NDA and rules-of-engagement document are standard before any testing begins." />
            <FaqItem q="Can you retest after fixes?" a="Yes — retesting confirmed remediations is included in PT200 and PT300 packages, and available as an add-on for PT100." />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden">
        <CircuitTrace className="pointer-events-none absolute -left-16 top-0 h-[260px] w-[380px] opacity-40" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">Let&apos;s secure your business.</h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-ink/65">
              Tell us what you&apos;re running, and we&apos;ll scope an assessment that matches your actual risk — not a generic package.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-teal px-6 py-3.5 font-mono text-[13px] uppercase tracking-wider text-sand transition-colors hover:bg-teal-dark"
              >
                Book a Security Assessment <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
