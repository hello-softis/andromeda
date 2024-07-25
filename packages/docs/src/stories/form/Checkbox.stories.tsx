import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { CheckBox, CheckboxProps, Box, Text } from '@hello.softis/andromeda-react'
export default {
  title: 'Form/Checkbox',
  component: CheckBox,
  args: {
    sizes: 'md'
  },
  argTypes: {
    sizes: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box hover={false} hasChildren={true} full={true}>
          <div className='p-3 flex flex-row gap-2 items-center'>
            <Story/>
            <Text sizes='sm' weight={true} >Accept terms of use</Text>
          </div>
        </Box>
      </div>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
