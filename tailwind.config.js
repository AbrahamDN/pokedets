/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
    },
  },
  plugins: [],
};
