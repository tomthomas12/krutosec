import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#E4DDD3",
        sandDeep: "#D8CEC0",
        teal: {
          DEFAULT: "#00A19B",
          light: "#3FC2BC",
          dark: "#00726E",
        },
        ink: "#171B1A",
        panel: "#0A1614",
        panelLine: "#173430",
        amber: "#E8A33D",
        mist: "#7FA8A3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(23,27,26,0.06) 1px, transparent 0)",
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        scan: "scan 3.2s linear infinite",
        blink: "blink 1.6s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
