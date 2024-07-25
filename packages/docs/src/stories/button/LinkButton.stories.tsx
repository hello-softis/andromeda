import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Link, LinkProps } from '@andromeda-softis/react'

export default {
  title: 'Form/Button/LinkButton',
  component: Link,
  args: {
    children: 'Label',
    colors: 'primary',
    sizes: 'md',
    disable: false
  },
  argTypes: {
    children: { control: 'text' },
    colors: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    sizes: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg'],
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
} as Meta<LinkProps>;

export const Primary: StoryObj<LinkProps> = {}

export const Secondary: StoryObj<LinkProps> = {
  args: {
    colors: 'secondary'
  }
}

export const Tertiary: StoryObj<LinkProps> = {
  args: {
    colors: 'tertiary'
  }
}

export const Disable: StoryObj<LinkProps> = {
  args: {
    disable: true
  }
}