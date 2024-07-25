import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Avatars, AvatarProps } from '@andromeda-softis/react'

export default {
  title: 'Data Display/Avatar',
  component: Avatars,
  args: {
    name: '',
    src: 'https://github.com/.png',
    sizes: 'lg',
    label: '',
    theme: 'default',
  },
  argTypes: {
    name: { control: 'text' },
    sizes: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    label: { control: 'text' },
    theme: {
      control: { type: 'inline-radio' },
      options: ['default', 'creator', 'educator', 'moderator', 'company'],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {
  args: {
    name: 'Softis Andromeda',
    src: 'https://github.com/.png',
  },
};

export const WithLabel: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/hello-softis.png',
    label: 'Startup',
    sizes: 'xl',
  },
};