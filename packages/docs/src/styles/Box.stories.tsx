import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@andromeda/react';

export default {
  title: 'Layout/Box',
  component: Box
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box {...args} />
    </div>
  ),
};