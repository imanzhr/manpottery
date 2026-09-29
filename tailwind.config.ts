import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        ivory: "#FAF8F4",
        stone: "#3D3833",
        "warm-gray": "#8A827A",
        terracotta: "#C4956A",
        "terracotta-dark": "#A87D56",
        sand: "#E8E0D4",
        sage: "#B5C4B1",
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)", "serif"],
        body: ["var(--font-nunito)", "sans-serif"],
        sans: ["var(--font-nunito)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
