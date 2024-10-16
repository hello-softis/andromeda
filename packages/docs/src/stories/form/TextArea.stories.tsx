import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { TextArea, TextAreaProps, Box, Text } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Write your thoughts here',
    disabled: false
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='w-80'>
          <div className='p-3 flex flex-col gap-2'>
            <Text size='sm' weight='bold'>Observations</Text>
            <Story/>
          </div>
        </Box>
      </div>
    ),
  ],
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
