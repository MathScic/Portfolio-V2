import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          terracotta: "#C96A4A",
          terracottaDark: "#A5523A",
          beige: "#F5EFE9",
          beigeSoft: "#EFE7E0",
          beige2: "#E8DED4",
          ink: "#1F1F1F",
          muted: "#6B6B6B",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
