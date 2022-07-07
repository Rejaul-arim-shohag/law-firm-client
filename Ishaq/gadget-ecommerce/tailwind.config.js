/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '10rem',
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'primary':"#21BF73",
      'secondary':"#B0EACD",
      'dark':"#2E374F",
      'white':"#fff"
    },
    // fontFamily: {
    //   'body': ['"Plus Jakarta Sans"']
    // },
    extend: {
      backgroundImage: {
        'hero-rectangle': "url('/src/assets/img/hero-pattern.svg')",
        'hero-wave': "url('/src/assets/img/bg-vector.svg')",
        'hero-vector': "url('/src/assets/img/hero-pattern.svg')"
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
