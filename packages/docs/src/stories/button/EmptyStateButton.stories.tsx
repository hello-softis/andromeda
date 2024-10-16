import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { ButtonEmptyState, ButtonProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Button/EmptyStateButton',
  component: ButtonEmptyState,
  args: {
    children: 'Label',
    disabled: false,
  },
  argTypes: {
    children: { control: 'text' },
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

export const Default: StoryObj<ButtonProps> = {}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
