import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Avatars, AvatarProps } from '../../react/dist';
import { useEffect, useState } from 'react';

const generateAvatarUrl = (name: string) => {
  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&background=5B4699&color=fff`;
}

const withDynamicSrc = (Story: any, context: any) => {
  const [src, setSrc] = useState(generateAvatarUrl(context.args.name));

  useEffect(() => {
    setSrc(generateAvatarUrl(context.args.name));
  }, [context.args.name]);

  return <Story {...context} args={{ ...context.args, src }} />;
};

export default {
  title: 'Data Display/Avatar',
  component: Avatars,
  args: {
    name: 'Gusttavo Castro',
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
    (Story, context) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {withDynamicSrc(Story, context)}
      </div>
    ),
  ],
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {};

export const WithLabel: StoryObj<AvatarProps> = {
  args: {
    label: 'Developer',
    sizes: 'xl',
  },
};
