/** @type {import('tailwindcss').Config} */
import * as tokens from '@andromeda/tokens'

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-mode="dark"]'], // https://storybook.js.org/recipes/tailwindcss
  theme: {
    extend: {
      colors: tokens.colors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: tokens.fonts,
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
    },
  },
  plugins: [],
}
