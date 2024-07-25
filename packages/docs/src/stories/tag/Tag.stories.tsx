import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Tag, TagProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Data Display/Tag/Tag',
  component: Tag,
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
} as Meta<TagProps>;

export const Default: StoryObj<TagProps> = {}

export const Inactive: StoryObj<TagProps> = {
  args: {
    disable: true,
  },
}
