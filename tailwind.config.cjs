/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052CC",
        secondary: "#172B4D",
        background: "#FFFFFF",
        text1: "#091E42",
        text2: "#C1C7D0",
        text3: "#ffffff",
        danger: "#BF2600",
        success: "#006644",
      },
      boxShadow: {
        shadow1: "0px 8px 20px rgba(35, 35, 35, 0.1)",
        shadow2:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      },
    },
  },
  plugins: [],
};
