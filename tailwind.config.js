/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: '#c532f5',
        jubileu: {
          100: '#39edd8',
          200: '#30c9b8',
          300: '#27a395',
          400: '#1d7a70'
        }
      }
    },
  },
  plugins: [],
}

