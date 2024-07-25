import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioGroup, RadioGroupProps, Radio } from '@andromeda/react';

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
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Default" value="default" id="r1" />
      <Radio label="Comfortable" value="comfortable" id="r2" />
      <Radio label="Compact" value="compact" id="r3" />
    </RadioGroup>
  ),
};

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <RadioGroup {...args}>
      <Radio label="Default" value="default" id="r1" />
      <Radio label="Comfortable" value="comfortable" id="r2" />
      <Radio label="Compact" value="compact" id="r3" />
    </RadioGroup>
  ),
};
