import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Security research and engineering notes from the Krutosec team.",
};

const posts = [
  { tag: "OWASP", title: "The OWASP Top 10, and what actually shows up in our reports", excerpt: "Which categories we see most often across real client engagements, and why the ranking rarely matches the checklist." },
  { tag: "API Security", title: "Broken object-level authorization is still the most common API finding", excerpt: "A walkthrough of how BOLA slips past code review and how to test for it before an attacker does." },
  { tag: "LLM Security", title: "Testing LLM features against the OWASP Top 10 for LLMs", excerpt: "Our methodology for prompt injection, jailbreaks, and data leakage testing on production AI features." },
  { tag: "Cloud Security", title: "The cloud misconfigurations we find on nearly every assessment", excerpt: "Common IAM, storage, and network gaps across AWS, Azure, and GCP environments." },
  { tag: "WordPress", title: "Hardening WordPress beyond the security plugin", excerpt: "What we check in a WordPress penetration test that a plugin scan won't catch." },
];

export default function BlogPage() {
  return (
    <section className="border-b border-ink/10 grain">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <span className="trace-eyebrow text-teal-dark">Blog</span>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">Research & Notes</h1>
          <p className="mt-5 max-w-xl text-[15.5px] text-ink/70">
            Findings, methodology, and engineering notes from our penetration testing and secure
            development work.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <a href="#" className="group flex items-start justify-between gap-6 py-7">
                <div>
                  <span className="trace-eyebrow text-teal-dark">{p.tag}</span>
                  <h2 className="mt-2 font-display text-xl font-medium text-ink transition-colors group-hover:text-teal-dark">
                    {p.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-ink/60">{p.excerpt}</p>
                </div>
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-ink/30 transition-colors group-hover:text-teal" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
