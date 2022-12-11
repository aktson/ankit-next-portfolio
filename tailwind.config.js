/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#FFB86B",
          "accent": "#FF7AC6",
          "secondary": "#BF95F9",
          "neutral": "#ffffff",
          "base-100": "#272935",
          "base-200": "#2F3240",
          "info": "#66ADF0",
          "success": "#37E1BF",
          "warning": "#414558",
          "error": "#E64B3D",
        },
        light: {
          "primary": "#570df8",
          "secondary": "#f000b8",
          "accent": "#37cdbe",
          "neutral": "#0f172a",
          "base-100": "#f8fafc",
          "base-200": "#f1f5f9",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#ffffff",
          "error": "#f87272",
        },

      },

    ],
  },
  plugins: [require("daisyui")],
}
