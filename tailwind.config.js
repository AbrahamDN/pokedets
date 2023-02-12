/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

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
      colors: {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
      },
      fontFamily: {
        bakbakOne: ["Bakbak One", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        layout: "4fr 5fr",
        template: "3fr 4fr 3fr",
      },
      gridTemplateRows: {
        template: "repeat(auto-fit, auto)",
      },
      height: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
