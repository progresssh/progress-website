/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      quantico: ["'Quantico', sans-serif;"],
      rajdhani: ["'Rajdhani', sans-serif;"],
      opensans: ["'Open Sans', sans-serif;"],
    },

    extend: {},
  },
  plugins: [],
};
