/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors:{
      'primary':"#21BF73",
      'secondary':"#B0EACD",
      'dark':"#2E374F"
    },
    // fontFamily: {
    //   'body': ['"Plus Jakarta Sans"']
    // },
    extend: {
      backgroundImage: {
        'hero-rectangle': "url('/img/hero-pattern.svg')",
        'hero-wave': "url('/img/hero-pattern.svg')",
        'hero-vector': "url('/img/hero-pattern.svg')",
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
