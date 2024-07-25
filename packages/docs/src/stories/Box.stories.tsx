import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@andromeda-ui/react';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    hover: { control: 'boolean' },
    full: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {
  args: {
    hover: true,
    full: false
  },
};
