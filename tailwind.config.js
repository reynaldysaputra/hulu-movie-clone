module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      animation: ['group-hover'],
      opacity: ['group-hover'],
      fontWeight: ['group-hover'],
      textColor: ['active'],
      zIndex: ['hover']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
