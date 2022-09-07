const colors = require('tailwindcss/colors')

module.exports = {
  content: ["../lib/**/*.{ex,heex}", "./js/**/*.js"],
  theme: {
    colors: {
      primary: colors.sky,
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      blue: colors.blue,
      sky: colors.sky,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      white: colors.white
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
