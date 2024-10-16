import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Button/Button',
  component: Button,
  args: {
    children: 'LABEL',
    color: 'primary',
    size: 'lg',
    full: false,
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    full: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Story />
      </div>
    ),
  ],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    color: 'secondary',
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    color: 'tertiary',
  }
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    color: 'danger',
  }
}

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true,
  }
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}

