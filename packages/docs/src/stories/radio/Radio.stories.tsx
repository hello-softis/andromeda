import '../../index.css';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import type { StoryObj, Meta } from '@storybook/react';
import { Radio, RadioProps } from '@andromeda-softis/react'

export default {
  title: 'Form/Radio/Radio',
  component: Radio,
  args: {
    label: 'Label',
    value: 'radio',
    id: 'r1'
  },
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    id: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <RadixRadioGroup.Root>
          <Story />
        </RadixRadioGroup.Root>
      </div>
    ),
  ],
} as Meta<RadioProps>;

export const Default: StoryObj<RadioProps> = {
  args: {
    label: 'Label',
  },
};