module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#F0F0F7',
        },
        black: {
          500: '#2C3046',
          800: '#171926',
        },
        yellow: {
          200: '#F2C791',
          500: '#F2AA52',
          600: '#D9984A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
