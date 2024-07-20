import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Avatars, AvatarProps } from '@andromeda/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatars,
  args: {
    name: 'Gusttavo Castro',
    src: 'https://ui-avatars.com/api/?name=Gusttavo+Castro&background=5B4699&color=fff',
    sizes: 'lg',
    label: '',
    theme: 'default'
  },
  argTypes: {
    name: { control: 'text' },
    src: { control: 'text' },
    sizes: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    label: { control: 'text' },
    theme: {
      control: { type: 'inline-radio' },
      options: ['default', 'creator', 'educator', 'moderator', 'company'],
    },
  }
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {
  render: (args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Avatars {...args} />
      </div>
    );
  },
};

export const WithLabel: StoryObj<AvatarProps> = {
  args: {
    label: 'Developer',
    sizes: 'xl'
  },

  render: (args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Avatars {...args} />
      </div>
    );
  },
};