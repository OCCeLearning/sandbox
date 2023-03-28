/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      colors: {
        darkblue: 'rgb(0, 55, 103)',
        sand: 'rgb(234, 230, 222)',
        darksand: 'rgb(235, 217, 173)',
      },
    },
  },
  plugins: [],
}
