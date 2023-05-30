/** @type {import('tailwindcss').Config} */

const lightMode = {
  lightInitial: "pink",
  lightPrimary: "#FCF6F5",
  lightPrimaryHigh: "#f3dcd8",
  lightSecondary: "#990011",
  lightSecondaryLow: "#9900114D",
};

const darkMode = {
  darkInitial: "green",
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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
