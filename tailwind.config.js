module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
