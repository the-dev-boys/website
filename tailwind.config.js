module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transform: ['hover'],
    },
    fontFamily:{
      'poppins': ['Poppins'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
