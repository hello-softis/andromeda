import type { StoryObj, Meta } from '@storybook/react';
import { Badge, BadgeProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'custom',
    size: 'sm',
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['new', 'danger', 'success', 'warning', 'info', 'custom'],
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<BadgeProps>;

export const New: StoryObj<BadgeProps> = {
  args: { variant: 'new' },
};

export const Danger: StoryObj<BadgeProps> = {
  args: { variant: 'danger' },
};

export const Success: StoryObj<BadgeProps> = {
  args: { variant: 'success' },
};

export const Warning: StoryObj<BadgeProps> = {
  args: { variant: 'warning' },
};

export const Info: StoryObj<BadgeProps> = {
  args: { variant: 'info' },
};

export const Custom: StoryObj<BadgeProps> = {
  args: { variant: 'custom' },
};