/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
      },
      colors: {
        'purple-figma': '#5562FF',
        'yellow-figma': '#FFD100',
        'black-figma': '#262626',
        'red-figma': '#FE481C',
        'orange-figma': '#DED1C1',
      },
      backgroundImage: {
        'picture-header': "url('https://res.cloudinary.com/grosir113/image/upload/v1671602450/portfolio/mamat_v7hwxx.svg')",
      },
      boxShadow: {
        'custom': '27px 12px 62px -16px rgba(121,86,230,0.59)',
      }
    },
  },
  plugins: [],
}
