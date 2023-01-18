const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      quantico: "var(--quantico-font)",
      rajdhani: "var(--rajdhani-font)",
      opensans: "var(--opensans-font)",
      sans: "var(--opensans-font)",
    },

    extend: {},
  },
  plugins: [],
};
