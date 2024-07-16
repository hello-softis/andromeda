/** @type {import('tailwindcss').Config} */
import * as tokens from '@andromeda/tokens'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
