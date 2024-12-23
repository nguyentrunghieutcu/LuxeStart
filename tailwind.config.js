const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './angular/src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    darkMode: 'class',
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        accent: '#5A46D7',
        default: '#5A46D7',
        warn: colors.red[600]
      },
      animation: {
        fadein: 'fadein 1s linear 1s forwards',
      },
      keyframes: {
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require("./plugin")],
}
