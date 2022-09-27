/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'purple-figma': '#5562FF',
        'yellow-figma': '#FFD100',
        'black-figma': '#262626',
        'red-figma': '#FE481C',
        'orange-figma': '#DED1C1',
      },
      backgroundImage: {
        'picture-header': "url('/img/mamat.svg')",
      }
    },
  },
  plugins: [],
}
