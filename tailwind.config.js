/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      fade: "rgba(0, 0, 0, 0.13)",
    },
    fontSize: {
      xm: "13px",
      sm: "14px",
      md: "16px",
      base: "18px",
      lg: ["20px", { fontWeight: "700" }],
      xl: ["22px", { fontWeight: "700" }],
      "2xl": ["28px", { fontWeight: "700" }],
      "3xl": ["36px", { fontWeight: "700" }],
      "4xl": ["58px", { fontWeight: "700" }],
    },
    extend: {
      gridTemplateColumns: {
        layout: "4fr 5fr",
        template: "3fr 4fr 3fr",
      },
      gridTemplateRows: {
        template: "repeat(auto-fit, auto)",
      },
    },
  },
  plugins: [],
};
