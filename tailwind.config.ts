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
          primary: "#0e0d0b",
          secondary: "#131210",
          surface: "#1c1a17",
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8d48a",
          pale: "#f5ecd0",
        },
        cream: "#f0ead8",
        warm: "#d4c9b0",
        muted: "#7a7468",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        heading: "-0.02em",
        label: "0.12em",
        wide: "0.08em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #c9a84c 0%, #e8d48a 50%, #c9a84c 100%)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-gold": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        gold: "0 0 40px rgba(201,168,76,0.15)",
        "gold-sm": "0 0 20px rgba(201,168,76,0.1)",
        "gold-lg": "0 0 80px rgba(201,168,76,0.2)",
        surface: "0 4px 40px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
