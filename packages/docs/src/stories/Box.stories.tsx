import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    hover: { control: 'boolean' },
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
  },
  render: (args) => (
    <Box {...args} style={{ width: '20rem', height: '20rem' }} />
  ),
};
