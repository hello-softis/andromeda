import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { InputText, InputTextProps, Box, Text } from '@andromeda/react';

export default {
  title: 'Form/TextInput',
  component: InputText,
  args: {
    placeholder: '',
    prefix: '',
    disabled: false
  },
  argTypes: {
    placeholder: { control: 'text' },
    prefix: { control: 'text' },
    disabled: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='w-full max-w-full'>
          <div className='p-3 flex flex-col gap-2'>
            <Text sizes='sm' weight={true}>Email address</Text>
            <Story/>
          </div>
        </Box>
      </div>
    ),
  ],
} as Meta<InputTextProps>;

export const Default: StoryObj<InputTextProps> = {
  args: {
    placeholder: 'Enter your email'
  }
}

export const Disabled: StoryObj<InputTextProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<InputTextProps> = {
  args: {
    prefix: 'cal.com/'
  }
}
