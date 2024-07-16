import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import '../src/index.css';
import '@andromeda/tokens'
import '../tailwind.config'

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#202024',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;