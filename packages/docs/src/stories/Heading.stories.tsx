import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@andromeda/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Title',
    sizes: 'md',
    weight: true,
    as: 'h2'
  },
  argTypes: {
    sizes: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    weight: {
      control: { type: 'boolean' },
    }
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {}
