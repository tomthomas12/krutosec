export default function CircuitTrace({
  className = "",
  opacity = 0.16,
  flip = false,
}: {
  className?: string;
  opacity?: number;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 300"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <g fill="none" stroke="#00A19B" strokeWidth="2" opacity={opacity}>
        <path d="M0 40 H120 L150 70 H260" />
        <path d="M0 90 H90 L115 115 H240" />
        <path d="M0 140 H200" />
        <path d="M0 190 H140 L165 165 H280" />
        <path d="M0 240 H100 L128 212 H230" />
        <path d="M260 70 V130 L290 160" />
        <path d="M240 115 V150" />
      </g>
      <g fill="#00A19B" opacity={opacity + 0.15}>
        <circle cx="120" cy="40" r="4" />
        <circle cx="260" cy="70" r="4" />
        <circle cx="90" cy="90" r="4" />
        <circle cx="240" cy="115" r="4" />
        <circle cx="200" cy="140" r="4" />
        <circle cx="140" cy="190" r="4" />
        <circle cx="280" cy="165" r="4" />
        <circle cx="100" cy="240" r="4" />
        <circle cx="230" cy="212" r="4" />
        <circle cx="290" cy="160" r="4" />
      </g>
    </svg>
  );
}
