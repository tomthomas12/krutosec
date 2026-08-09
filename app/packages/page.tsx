import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PricingCard from "@/components/PricingCard";
import { Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Penetration Testing Packages",
  description: "Compare Krutosec's PT100, PT200, and PT300 penetration testing packages.",
};

const rows: [string, boolean | string, boolean | string, boolean | string][] = [
  ["Automated vulnerability scan", true, true, true],
  ["Manual web application testing", false, true, true],
  ["API security testing", false, true, true],
  ["Vulnerability validation", true, true, true],
  ["Risk analysis & remediation guidance", false, true, true],
  ["Business logic testing", false, false, true],
  ["Technology-specific testing", false, false, true],
  ["Architecture review", false, false, true],
  ["Zero-day research", false, false, true],
  ["Free retest included", false, true, true],
  ["Priority support", false, false, true],
  ["Turnaround", "2 days", "8 days", "Custom"],
];

export default function PackagesPage() {
  return (
    <>
      <section className="border-b border-ink/10 bg-sand grain">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <span className="trace-eyebrow text-teal-dark">Pricing</span>
            <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
              Penetration Testing Packages
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink/70">
              Three tiers built around how much of your attack surface needs manual coverage.
              Scale up as your product and compliance needs grow.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
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
              features={["Everything in PT200", "Advanced manual testing", "Business logic testing", "Technology-specific testing", "Zero-day research", "Architecture review", "Priority support"]}
              cta="Contact Sales"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-sand">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal className="mb-8 text-center">
            <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">Compare packages</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto rounded-md border border-ink/10 bg-white/50">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/10 font-mono text-[11px] uppercase tracking-wider text-ink/50">
                    <th className="px-5 py-4 font-medium">Coverage</th>
                    <th className="px-5 py-4 font-medium text-center">PT100</th>
                    <th className="px-5 py-4 font-medium text-center text-teal-dark">PT200</th>
                    <th className="px-5 py-4 font-medium text-center">PT300</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row[0]} className="border-b border-ink/10 last:border-0">
                      <td className="px-5 py-3.5 text-ink/75">{row[0]}</td>
                      {[row[1], row[2], row[3]].map((cell, idx) => (
                        <td key={idx} className="px-5 py-3.5 text-center">
                          {typeof cell === "string" ? (
                            <span className="font-mono text-[13px] text-ink/70">{cell}</span>
                          ) : cell ? (
                            <Check size={16} className="mx-auto text-teal" />
                          ) : (
                            <X size={16} className="mx-auto text-ink/25" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
