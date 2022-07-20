/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = withMT(
  {
    darkMode: 'class',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      'node_modules/preline/dist/*.js'
    ],
    theme: {
      container: {
        center: true,
        // padding: '9rem',
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          // xl: '6rem',
          // '2xl': '9rem',
        },
      },
      screens: {
        sm: '640px',

        md: '768px',

        lg: '1024px',

        xl: '1280px',

        // 2xl: '1536px'
      },


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
          'light': "#F4F4F6",
          'dark': "#2E374F",
          'white': "#fff"
        },
      },
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp'),require('preline/plugin')],
  }
)
