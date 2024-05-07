/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightgray: {
          100: "#d7d7d7",
          200: "#cad0cb",
          300: "#ccc",
          400: "#cacaca",
        },
        gray1: {
          100: "#828282",
          200: "#827a7a",
          300: "#1c1c1c",
          400: "rgba(255, 255, 255, 0.8)",
          500: "rgba(0, 0, 0, 0.02)",

        },

        whitesmoke: {
          100: "#f5f5f5",
          200: "#f1f1f1",
          300: "#efefef",
          400: "#e8eee7",
          500: "#eaeaea",
        },
        mediumseagreen: "#2da950",

        "gray-600": "#617275",
        darkgray: {
          100: "#a6a3a0",
          200: "#9e9d9d",
        },
        gainsboro: "#e3e3e3",
        mediumseagreen: "#2da950",
        gray: "#828282",

        darkslategray: {
          100: "#3c3c3c",
          200: "#002e18",
        },
        dimgray: "#727272",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "covered-by-your-grace": "'Covered By Your Grace'",
        switzer: "Switzer",
      },
      borderRadius: {
        "21xl": "40px",
        "88xl-1": "107.1px",
        "45xl": "64px",

        "81xl": "100px",

        "8xl-1": "27.1px",
        "9xl-4": "28.4px",
        "92xl-5": "111.5px",
        "46xl-3": "65.3px",
        "88xl-1": "107.1px",
        "45xl": "64px",
      },
    },
    fontSize: {
      lg: "18px",
      xl: "20px",
      "37xl": "56px",
      "17xl": "36px",

      mini: "15px",
      "41xl": "60px",
      "13xl": "32px",
      "45xl": "64px",
      "3xl-8": "22.8px",
      "44xl-4": "63.4px",
      base: "16px",
      "5xl": "24px",
      "21xl": "40px",
      "37xl": "56px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
