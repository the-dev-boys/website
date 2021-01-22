module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      transform: ['hover'],
    },
    fontFamily:{
      'poppins': ['Poppins'],
    },
    minHeight: {
      '3/4': '75%',
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],

    },
  },
  plugins: [],
}
