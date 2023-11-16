/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      navTransparentBg: {
        10: "rgba(0, 0, 0, 0.20)",
        20: "rgba(255, 255, 255, 0.15)",
      },
      grayText: {
        10: "#E5E5E5",
        20: "#6C757D"
      },
      darkText: "#495057",
      footerBg: {
        10: "#343A40",
        20: "#212529"
      },
      orangeText: "#D4A373",
    },
  },
  plugins: [],
}

