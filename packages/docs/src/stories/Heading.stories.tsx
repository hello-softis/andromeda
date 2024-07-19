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
  } 
} as Meta<HeadingProps>;

export const Paragraph: StoryObj<HeadingProps> = {
  render: (args) => (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <Heading {...args} />
      </div>
    </div>
  )
}
