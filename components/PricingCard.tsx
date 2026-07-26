import { Check } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function PricingCard({
  code,
  name,
  timeline,
  tagline,
  features,
  featured = false,
  cta = "Request This Package",
  delay = 0,
}: {
  code: string;
  name: string;
  timeline: string;
  tagline: string;
  features: string[];
  featured?: boolean;
  cta?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-md p-7 ${
          featured
            ? "border-2 border-teal bg-panel text-sand shadow-[0_20px_60px_-20px_rgba(0,161,155,0.5)]"
            : "border border-ink/10 bg-sand/60 text-ink"
        }`}
      >
        {featured && (
          <span className="absolute -top-3 left-7 rounded-sm bg-amber px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink">
            Most Popular
          </span>
        )}
        <span className={`trace-eyebrow ${featured ? "text-teal-light" : "text-teal"}`}>{code}</span>
        <h3 className="mt-2 font-display text-2xl font-medium">{name}</h3>
        <p className={`mt-1 text-sm ${featured ? "text-mist" : "text-ink/60"}`}>{tagline}</p>
        <p className={`mt-4 font-mono text-xs uppercase tracking-wider ${featured ? "text-teal-light" : "text-teal-dark"}`}>
          {timeline}
        </p>

        <ul className="mt-6 flex-1 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-[14px] leading-snug">
              <Check size={16} className={`mt-0.5 shrink-0 ${featured ? "text-teal-light" : "text-teal"}`} />
              <span className={featured ? "text-sand/90" : "text-ink/75"}>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`mt-8 block rounded-sm px-5 py-3 text-center font-mono text-[13px] uppercase tracking-wider transition-colors ${
            featured
              ? "bg-teal text-sand hover:bg-teal-light"
              : "border border-teal text-teal-dark hover:bg-teal hover:text-sand"
          }`}
        >
          {cta}
        </Link>
      </div>
    </Reveal>
  );
}
