/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#020D0A",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      green: {
        50: "#EEF2F1",
        100: "#6D9773",
        200: "#6D9773",
        300: "#638A69",
        400: "#254c3d",
        500: "#0C3B2E",
      }, // restflow
      yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        400: "#facc15",
        500: "#eab308",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fb713b",
        400: "#fa5a15",
        500: "#e14d0b",
        600: "#ea580c",
      },
      grayText: {
        100: "#DBE2E0",
      }, // Primary colors, used mainly for links, buttons and svg icons

      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {
      dropShadow: {
        navbar: "0 0 8px 0 rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        inder: ["Inder", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/images/background.svg')",
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
