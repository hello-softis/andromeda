import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { InputText, InputTextProps, Box, Text } from '@andromeda/react';
import { LockClosedIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'

const iconMap = {
  noIcon: '',
  Locked: <LockClosedIcon />,
  EyeClose: <EyeClosedIcon />,
  EyeOpen: <EyeOpenIcon />,
};

export default {
  title: 'Form/TextInput',
  component: InputText,
  args: {
    placeholder: 'Placeholder',
    prefix: '',
    disabled: false,
    invalid: false,
    leadingIcon: iconMap['noIcon'],
    trailingIcon: iconMap['noIcon']
  },
  argTypes: {
    placeholder: { control: 'text' },
    prefix: { control: 'text' },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    leadingIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    trailingIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Story/>
      </div>
    ),
  ],
} as Meta<InputTextProps>;

export const Default: StoryObj<InputTextProps> = {}

export const Disabled: StoryObj<InputTextProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<InputTextProps> = {
  args: {
    prefix: 'cal.com/'
  }
}

export const WithIcon: StoryObj<InputTextProps> = {
  args: {
    leadingIcon: iconMap['Locked'],
  }
}

export const WithError: StoryObj<InputTextProps> = {
  args: {
    invalid: true
  }
}