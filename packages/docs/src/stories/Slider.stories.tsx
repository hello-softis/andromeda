import type { StoryObj, Meta } from '@storybook/react';
import { Slider, SliderProps } from '@hello.softis/andromeda-react'
export default {
  title: 'Form/Slider',
  component: Slider,
  args: {
    disabled: false,
    initialValue: [50],
    maxValue: 100
  },
  argTypes: {
    disabled: { control: 'boolean' },
    maxValue: { control: 'number'},
    initialValue: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SliderProps>;

export const Default: StoryObj<SliderProps> = {
  args: {
    disabled: false,
    initialValue: [50],
    maxValue: 100
  }
};

export const Inactive: StoryObj<SliderProps> = {
  args: {
    disabled: true,
    initialValue: [50],
    maxValue: 100
  }
};
