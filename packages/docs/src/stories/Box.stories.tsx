import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '../../react/dist';

export default {
  title: 'Layout/Box',
  component: Box,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {}