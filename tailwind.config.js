/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            '*.html',
            './css/**/*.css'],
  theme: {
    extend: {},
    colors: {
      'slate': {
        DEFAULT: '#525252',
        400: '#686868'
      },
    },
  },
  plugins: [],
}

