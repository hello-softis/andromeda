import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { DeleteIcon, TagDelete, TagProps } from '@hello.softis/andromeda-react'
import { Cancel01Icon } from '@houstonicons/react';

export default {
  title: 'Data Display/Tag/TagDelete',
  component: TagDelete,
  args: {
    size: 'md',
    disabled: false,
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<TagProps>;

export const Default: StoryObj<TagProps> = {
  args: {
    children: <>        LABEL
    <DeleteIcon>
      <Cancel01Icon size={8} color="white" />
    </DeleteIcon></>,
  },
}

export const Disabled: StoryObj<TagProps> = {
  args: {
    disabled: true,
  },
}
