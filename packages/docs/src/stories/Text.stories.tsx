import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa eaque debitis, officia illo repudiandae, tenetur praesentium tempore recusandae eius, blanditiis sequi! Pariatur error eligendi quam modi quibusdam molestias eaque quo.',
    size: 'base',
    weight: 'normal',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'base', 'lg']
    },
    weight: {
      control: { type: 'inline-radio' },
      options: ['normal', 'medium', 'semibold', 'bold']
    }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-80">
          <Story/>
        </div>
    </div>
    ), 
  ]
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {}
