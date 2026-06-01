import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:    "#1a1710",
          secondary:  "#211e15",
          tertiary:   "#2a261a",
          elevated:   "#322d1e",
          light:      "#f7f3eb",
          "light-2":  "#ede8db",
          surface:    "#2a261a",
        },
        gold: {
          DEFAULT:  "#c9a84c",
          primary:  "#c9a84c",
          bright:   "#e8c96a",
          light:    "#e8c96a",
          pale:     "#f0dea0",
          dim:      "#8a6e2e",
        },
        cream:  "#f2ece0",
        warm:   "#c8bfa8",
        muted:  "#8a8070",
        text: {
          primary:        "#f2ece0",
          secondary:      "#c8bfa8",
          muted:          "#8a8070",
          dim:            "#5a5448",
          light:          "#1a1710",
          "light-body":   "#3d3828",
          "light-muted":  "#7a7060",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body:    ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        ui:      ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        heading:  "-0.02em",
        label:    "0.12em",
        wide:     "0.08em",
        widest:   "0.22em",
      },
      borderRadius: {
        card:     "10px",
        "card-sm":"8px",
        "card-lg":"16px",
        pill:     "100px",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a84c 0%, #e8d48a 50%, #c9a84c 100%)",
      },
      animation: {
        marquee:     "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        float:       "float 6s ease-in-out infinite",
        "pulse-gold":"pulse-gold 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        "warm-sm":  "0 2px 8px rgba(26,23,16,0.12)",
        "warm-md":  "0 8px 24px rgba(26,23,16,0.16)",
        "warm-lg":  "0 16px 48px rgba(26,23,16,0.2)",
        "warm-xl":  "0 24px 72px rgba(26,23,16,0.24)",
        gold:       "0 8px 32px rgba(201,168,76,0.15)",
        "gold-lg":  "0 16px 56px rgba(201,168,76,0.2)",
        surface:    "0 4px 40px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
