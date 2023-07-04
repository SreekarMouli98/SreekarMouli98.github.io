/** @type {import('tailwindcss').Config} */

const lightMode = {
  lightInitial: "#000000",
  lightPrimary: "#FCF6F5",
  lightPrimaryHigh: "#F3DCD8",
  lightSecondary: "#990011",
  lightSecondaryLow: "#9900114D",
};

const darkMode = {
  darkInitial: "#FFFFFF",
  darkPrimary: "#101820",
  darkPrimaryHigh: "#000000",
  darkSecondary: "#FEE715",
  darkSecondaryLow: "#FEE7154D",
};

module.exports = {
  prefix: "tw-",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...lightMode,
        ...darkMode,
      },
      fontFamily: {
        mono: ["Nova Mono", "monospace"],
        body: ["Ysabeau Infant", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
