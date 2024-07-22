/** @type {import('tailwindcss').Config} */
import * as tokens from '@andromeda/tokens';

export default {
  content: ['../react/src/**/*.{js,ts,jsx,tsx}','./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: tokens.twColors,
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      fontFamily: {
        sans: tokens.fonts.default,
        mono: tokens.fonts.code,
      },
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      spacing: tokens.space,
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
