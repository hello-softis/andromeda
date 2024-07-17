/** @type {import('tailwindcss').Config} */
import * as tokens from '@andromeda/tokens';

export default {
  content: ['../react/src/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: tokens.twColors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: tokens.fonts,
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
    },
  },
  plugins: [],
};
