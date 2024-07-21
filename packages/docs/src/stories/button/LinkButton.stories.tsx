import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@andromeda/react';

export default {
  title: 'Form/Button/LinkButton',
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