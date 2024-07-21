import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '@andromeda/react';

export default {
  title: 'Loading/Spinner',
  component: Spinner,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SpinnerProps>;

export const Default: StoryObj<SpinnerProps> = {}