/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#3ABFF8",
          "accent": "#828DF8",
          "secondary": "#F471B5",
          "neutral": "#b3c5ef",
          "base-100": "#0F1729",
          "base-200": "#141E36",
          "base-300": "#2B4275",
          "info": "#0CA6E9",
          "success": "#2BD4BD",
          "warning": "#F4C152",
          "error": "#FB6F84",
        },
        light: {
          // "primary": "#570df8",
          // "secondary": "#f000b8",
          // "accent": "#37cdbe",
          "neutral": "#0f172a",
          "primary": "#3ABFF8",
          "accent": "#828DF8",
          "secondary": "#F471B5",
          // "neutral": "#b3c5ef",
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
