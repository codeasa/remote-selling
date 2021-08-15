module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'fwd': '#E87722'
    }

  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
