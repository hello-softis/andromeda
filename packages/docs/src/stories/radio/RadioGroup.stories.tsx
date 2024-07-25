import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from '@andromeda/react';

export default {
  title: 'Form/Radio/RadioGroup',
  component: RadioGroup,
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
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<RadioGroupProps>;

export const Default: StoryObj<RadioGroupProps> = {
  args: {
    defaultValue: 'default',
  },
};

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
  },
};
