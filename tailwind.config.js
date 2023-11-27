/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        textWhite:{
          10: "#F8F9FA",
          20: "#E5E5E5"
        },
        navTransparentBg: {
          10: "#00000033",
          20: "#ffffff26",
          30: "#00000055",
          40: "#00000025",
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
        grayText2: "#6C757D" 
      }
    },
  },
  plugins: [],
}

