import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { AvatarRoot, AvatarImage, AvatarFallback, Label, AvatarProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Data Display/Avatar',
  component: AvatarRoot,
  args: {
    name: 'Michael Johnson',
    src: 'https://github.com/.png',
    size: 'lg',
    label: 'creator',
    theme: 'default',
  },
  argTypes: {
    name: { control: 'text' },
    size: {
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

const getInitials = (name: string) => {
  const nameParts = name.split(' ');
  if (nameParts.length === 1) {
    const firstChar = nameParts[0].charAt(0).toUpperCase();
    const secondChar = nameParts[0].charAt(1) ? nameParts[0].charAt(1).toUpperCase() : '';
    return firstChar + secondChar;
  }
  const initials = nameParts.map(part => part.charAt(0).toUpperCase()).slice(0, 2); 
  return initials.join('');
};

export const Default: StoryObj<AvatarProps> = {
  render: (args) => (
    <AvatarRoot theme={args.theme} size={args.size}>
      <AvatarImage alt={args.name} src={args.src} />
      <AvatarFallback>{getInitials(args.name || '')}</AvatarFallback>
    </AvatarRoot>
  ),
};

export const WithLabel: StoryObj<AvatarProps> = {
  render: (args) => (
    <AvatarRoot theme="company" size="xl">
      <AvatarImage alt="Gusttavo Castro" src="https://github.com/.png" />
      <AvatarFallback>{getInitials(args.name || '')}</AvatarFallback>
      <Label>{'creator'.toUpperCase()}</Label>
    </AvatarRoot>
  ),
};
