import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-md border border-ink/10 bg-sand/60 p-7">
        <Quote size={22} className="text-teal/50" />
        <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/75">&ldquo;{quote}&rdquo;</p>
        <div className="mt-6 border-t border-ink/10 pt-4">
          <p className="font-display text-sm font-medium text-ink">{name}</p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-ink/50">{role}</p>
        </div>
      </div>
    </Reveal>
  );
}
