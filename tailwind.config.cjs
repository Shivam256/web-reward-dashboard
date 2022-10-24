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
        shadow2: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      keyframes: {
        appear: {
          "0%": { background: "#fff" },
          "100%": { background: "rgba(0,0,0,0.74)" },
        },
        scl: {
          "0%": { bottom:'-10vh', },
          "100%": { bottom:'50vh'},
        },
      },
      animation: {
        appear: "appear 0.2s ease-in-out forwards",
        scl: "scl 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
