/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-grid"],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        grey: '#f0f0f0',
        black: '#181818',
        darkBg: '#181818',
        darkText: '#ffffff',
        bgOrange: "#ffb42a", 
      },
      fontFamily: {
        bebas:["Bebas", "sans-serif"],
        // ibm: ['"IBM Plex Mono", serif'],
        // lato: ['"Lato", sans-serif'],
        poppins: ['"Poppins", sans-serif']
      },
    },
  },
  plugins: [],
}

