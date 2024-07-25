import type { StoryObj, Meta } from '@storybook/react';
import { Switch, SwitchProps } from '@andromeda-softis/react'

export default {
  title: 'Form/Switch',
  component: Switch,
  children: 'Label',
  disable: false,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Story />
      </div>
    ),
  ],
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {
  args: {
    children: 'Label',
    disabled: false,
  },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    children: 'Label',
    disabled: true,
  },
};
