import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em" },
        ],
        h1: [
          "clamp(2rem, 4vw, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(1.5rem, 3vw, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em" },
        ],
        h3: ["1.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        sm: "2px",
        md: "3px",
        lg: "4px",
        xl: "6px",
        "2xl": "10px",
      },
      boxShadow: {
        sm: "0 1px 2px hsl(var(--foreground) / 0.05)",
        card: "0 8px 24px -16px hsl(var(--foreground) / 0.16)",
        elevated: "0 20px 52px -24px hsl(var(--foreground) / 0.24)",
        glow: "0 0 32px -12px hsl(var(--primary) / 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease both",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
