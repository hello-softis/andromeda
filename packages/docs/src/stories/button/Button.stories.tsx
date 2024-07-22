import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@andromeda/react';

export default {
  title: 'Form/Button/Button',
  component: Button,
  args: {
    children: 'LABEL',
    colors: 'primary',
    sizes: 'lg',
    full: false,
    disable: false,
  },
  argTypes: {
    children: { control: 'text' },
    colors: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
    },
    sizes: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xlg'],
    },
    disable: { control: 'boolean' },
    full: { control: 'boolean' },
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
    colors: 'secondary',
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    colors: 'tertiary',
  }
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    colors: 'danger',
  }
}

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true,
  }
}

export const Disable: StoryObj<ButtonProps> = {
  args: {
    disable: true,
  }
}
