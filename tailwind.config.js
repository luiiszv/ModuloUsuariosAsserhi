/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#8FBE3D",
        secondary: {
          100:"#02AAE3",
          200: "#8CBD41"
        },

        total: "#00000000"
      }
    },
  },
  plugins: [],
}

