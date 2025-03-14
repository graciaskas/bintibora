/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#a00113",
          100: "#a00213",
          200: "#a00413",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
    },
    fontFamily: {
      Ithin: ["Poppins-Thin", "sans-serif"],
      Iextralight: ["Poppins-ExtraLight", "sans-serif"],
      Ilight: ["Poppins-Light", "sans-serif"],
      Iregular: ["Inter_18pt-Regular", "sans-serif"],
      Imedium: ["Poppins-Medium", "sans-serif"],
      Isemibold: ["Poppins-SemiBold", "sans-serif"],
      Ibold: ["Inter_18pt-Bold", "sans-serif"],
      Iextrabold: ["Poppins-ExtraBold", "sans-serif"],
      Iblack: ["Inter_18pt-Black", "sans-serif"],
    },
  },
  plugins: [],
};
