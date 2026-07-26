import { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  points?: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-md border border-ink/10 bg-sand/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:bg-white/70 hover:shadow-[0_12px_40px_-16px_rgba(0,161,155,0.35)]">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-sand">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">{description}</p>
        {points && (
          <ul className="mt-4 space-y-1.5 border-t border-ink/10 pt-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-2 text-[13px] text-ink/60">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Reveal>
  );
}
