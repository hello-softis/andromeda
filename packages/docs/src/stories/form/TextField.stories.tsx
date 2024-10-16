import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { TextField, InputProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    placeholder: 'Placeholder',
    prefix: '',
    disabled: false,
    invalid: false,
  },
  argTypes: {
    placeholder: { control: 'text' },
    prefix: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Story/>
      </div>
    ),
  ],
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'cal.com/'
  }
}

export const WithError: StoryObj<InputProps> = {
  args: {
    invalid: true
  }
}