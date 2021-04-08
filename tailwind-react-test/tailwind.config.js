module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#65A30D',
        secondary: '#A16207',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
