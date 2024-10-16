import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { ButtonIcon, ButtonIconProps } from '@hello.softis/andromeda-react'
import { PlusSignIcon, Settings02Icon, ArrowDownDoubleIcon } from '@houstonicons/react'

const iconMap = {
  plus: <PlusSignIcon color="white" />,
  gear: <Settings02Icon color="white" />,
  doubleArrowUp: <ArrowDownDoubleIcon color="white" />,
};

export default {
  title: 'Form/Button/IconButton',
  component: ButtonIcon,
  args: {
    children: iconMap['plus'],
    color: 'primary',
    size: 'md',
    loading: false,
    disabled: false
  },
  argTypes: {
    children: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ButtonIconProps>

export const Primary: StoryObj<ButtonIconProps> = {}

export const Secondary: StoryObj<ButtonIconProps> = {
  args: {
    color: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonIconProps> = {
  args: {
    color: 'tertiary',
  },
}

export const Loading: StoryObj<ButtonIconProps> = {
  args: {
    loading: true,
  },
}

export const Disabled: StoryObj<ButtonIconProps> = {
  args: {
    disabled: true,
  },
}