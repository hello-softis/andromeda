import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { ButtonLink, ButtonLinkProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Button/LinkButton',
  component: ButtonLink,
  args: {
    children: 'Label',
    color: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    children: { control: 'text' },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
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
} as Meta<ButtonLinkProps>;

export const Primary: StoryObj<ButtonLinkProps> = {}

export const Secondary: StoryObj<ButtonLinkProps> = {
  args: {
    color: 'secondary'
  }
}

export const Tertiary: StoryObj<ButtonLinkProps> = {
  args: {
    color: 'tertiary'
  }
}

export const Disabled: StoryObj<ButtonLinkProps> = {
  args: {
    disabled: true
  }
}