import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        surface: "#070A13",
        night: "#090B14",
        neon: "#2D7BFF",
        violetGlow: "#7C3AED"
      },
      boxShadow: {
        glow: "0 0 40px rgba(45,123,255,0.35)",
        card: "0 20px 60px rgba(0,0,0,0.45)"
      },
      backgroundImage: {
        "hero-grid": "radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSlow: "pulse 3.5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" }
        }
      }
    },
  },
  plugins: [],
};

export default config;
