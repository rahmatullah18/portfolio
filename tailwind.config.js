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
        'picture-header': "url('/img/mamat2.svg')",
        'picture-content': "url('https://my.spline.design/weirdbubblecopy-c6fffce1dad082f34a6807ad58d316b5')",
      },
      boxShadow: {
        'custom': '27px 12px 62px -16px rgba(121,86,230,0.59)',
      }
    },
  },
  plugins: [],
}
