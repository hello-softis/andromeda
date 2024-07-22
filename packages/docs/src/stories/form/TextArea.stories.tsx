import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { TextArea, TextAreaProps, Box, Text } from '@andromeda/react';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: '',
    disabled: false
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='w-full max-w-full'>
          <div className='p-3 flex flex-col gap-2'>
            <Text sizes='sm' weight={true}>Observations</Text>
            <Story/>
          </div>
        </Box>
      </div>
    ),
  ],
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Enter your email'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
