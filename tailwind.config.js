/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: '#00bcd4',
        grey: {
          light: '#e8e1e1',
          medium: '#777777'
        },
        background: {
          lighten: '#06101a',
          darken: '#050d16'
        },
      }
    },
  },
  plugins: [],
}

