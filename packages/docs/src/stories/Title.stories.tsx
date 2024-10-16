import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Title, TitleProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Typography/Title',
  component: Title,
  args: {
    children: 'Title',
    size: 'base',
    weight: 'normal',
    as: 'h2'
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md','base', 'lg', 'xl', '2xl', ]
    },
    weight: {
      control: { type: 'inline-radio' },
      options: ['normal', 'medium', 'semibold', 'bold']
    },
  },
  parameters:{
    docs: {
      story: 'Por padrão o heading sempre será um `H2`, mas podemos alterar isso com a propriedade `as`'
    }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Story />
        </div>
    </div>
    ),
  ]
} as Meta<TitleProps>;

export const Default: StoryObj<TitleProps> = {}
