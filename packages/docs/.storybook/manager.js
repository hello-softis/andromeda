import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
 
addons.setConfig({
  theme: themes.dark,
  backgrounds: {
    default: themes.dark.color || 'black',
  },
  canvas: {
    default: themes.dark.color || 'black',
  }
});