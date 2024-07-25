import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { ButtonIcon, ButtonIconProps } from '@andromeda-ui/react';
import { PlusIcon, GearIcon, DoubleArrowUpIcon } from '@radix-ui/react-icons'

PlusIcon.displayName = 'PlusIcon';
GearIcon.displayName = 'GearIcon';
DoubleArrowUpIcon.displayName = 'DoubleArrowUpIcon';

const iconMap = {
  plus: <PlusIcon />,
  gear: <GearIcon />,
  doubleArrowUp: <DoubleArrowUpIcon />,
};

export default {
  title: 'Form/Button/IconButton',
  component: ButtonIcon,
  args: {
    children: iconMap['plus'],
    colors: 'primary',
    sizes: 'md',
    loading: false,
    disable: false
  },
  argTypes: {
    children: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    colors: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    sizes: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disable: { control: 'boolean' },
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
    colors: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonIconProps> = {
  args: {
    colors: 'tertiary',
  },
}

export const Loading: StoryObj<ButtonIconProps> = {
  args: {
    loading: true,
  },
}

export const Disabled: StoryObj<ButtonIconProps> = {
  args: {
    disable: true,
  },
}