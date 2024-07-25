import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { TagDelete, TagDeleteProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Data Display/Tag/TagDelete',
  component: TagDelete,
  args: {
    children: 'LABEL',
    sizes: 'md',
    disable: false,
  },
  argTypes: {
    sizes: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
    disable: {
      control: { type: 'boolean' },
    },

  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<TagDeleteProps>;

export const Default: StoryObj<TagDeleteProps> = {}

