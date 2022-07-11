/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // padding: '9rem',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '9rem',
      },
    },
    // colors:{
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'primary':"#21BF73",
    //   'secondary':"#B0EACD",
    //   'dark':"#2E374F",
    //   'white':"#fff"
    // },
    // fontFamily: {
    //   'body': ['"Plus Jakarta Sans"']
    // },
    extend: {
      backgroundImage: {
        'hero-rectangle': "url('/src/assets/img/bg-rectangle.svg')",
        'hero-wave': "url('/src/assets/img/bg-wave.svg')",
        'hero-vector': "url('/src/assets/img/bg-vector.svg')",
        'hero-spiral': "url('/src/assets/img/bg-spiral.svg')"
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': "#21BF73",
        'secondary': "#B0EACD",
        'dark': "#2E374F",
        'white': "#fff"
      },
    },
  },
  plugins: [],
}
