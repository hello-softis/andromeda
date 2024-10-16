import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButtonRoot, RadioButtonItem, RadioButtonProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/RadioGroup',
  component: RadioButtonRoot,
  args: {
    defaultValue: 'default',
    disabled: false,
  },
  argTypes: {
    defaultValue: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<RadioButtonProps>;

export const Default: StoryObj<RadioButtonProps> = {
  args: {
    defaultValue: 'default',
    children: [
        <RadioButtonItem value="default" id="1" label="default" />,
        <RadioButtonItem value="comfortable" id="2" label="comfortable" />,
        <RadioButtonItem value="compact" id="3" label="compact" />
    ]
  },
};

export const Disabled: StoryObj<RadioButtonProps> = {
  args: {
    disabled: true,
  },
};
