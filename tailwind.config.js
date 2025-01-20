/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
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
