/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      OrangePrimary: 'hsl(26, 100%, 55%)',
      PaleOrange: 'hsl(25, 100%, 94%)',
      VeryDarkBlue: 'hsl(220, 13%, 13%)',
      DarkGrayishBlue: 'hsl(219, 9%, 45%)',
      GrayishBlue: 'hsl(220, 14%, 75%)',
      LightGrayishBlue: 'hsl(223, 64%, 98%)',
      WhiteStyle: 'hsl(0, 0%, 100%)',
      BlackStyle: 'hsl(0, 0%, 0%)'
    },
    extend: {
      screens: {
        mobile: { max: '444px' },
        desktop: { max: '1440px' }
      },
      keyframes: {
        slideDown: {
          '0%, 100%': { translateY: '-20px', opacity: 0 }
        }
      },

      animation: {
        slideDown: 'slideDown 0.5s ease-in-out'
      }
    }
  },
  plugins: []
}
