import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Spinner, SpinnerProps } from '@andromeda-softis/react'

const colorOptions = [
  'softis-light', 
  'softis-mid', 
  'softis-dark', 
  'softis-low', 
  'comet-50', 
  'comet-100', 
  'comet-200', 
  'comet-300', 
  'comet-400', 
  'comet-500', 
  'comet-600', 
  'comet-700', 
  'comet-800', 
  'comet-900', 
  'comet-950', 
  'nebula-50', 
  'nebula-100', 
  'nebula-200', 
  'nebula-300', 
  'nebula-400', 
  'nebula-500', 
  'nebula-600', 
  'nebula-700', 
  'nebula-800', 
  'nebula-900', 
  'nebula-950', 
  'success-light', 
  'success-base', 
  'success-low', 
  'danger-light', 
  'danger-base', 
  'danger-low', 
  'warning-light', 
  'warning-base', 
  'warning-low', 
  'new-light', 
  'new-base', 
  'new-low', 
  'black', 
  'white', 
  'grey-50', 
  'grey-100', 
  'grey-200', 
  'grey-300', 
  'grey-400', 
  'grey-500', 
  'grey-600', 
  'grey-700', 
  'grey-800', 
  'grey-900', 
  'grey-950', 
  'text-title', 
  'text-base', 
  'text-support', 
  'placeholder', 
  'inputs-icons', 
  'shape-tertiary', 
  'shape-secondary', 
  'shape-primary', 
  'color-background'
];

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {
    sizes: 'md',
    colors: 'softis-light',
  },
  argTypes: {
    sizes: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    colors: {
      control: { type: 'select' },
      options: colorOptions,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SpinnerProps>;

export const Default: StoryObj<SpinnerProps> = {}