/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/pages/Main/*.{js,jsx,ts,tsx}",
    "./src/pages/Login/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': 'Merriweather, Helvetica, Arial, serif',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'beige-dark': '#c1a77f',
        'beige': '#e8d2b6'
      },
    },
  },
  plugins: [],
}
