import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { CheckboxRoot, CheckboxIndicator, CheckboxProps, Box, Text } from '@hello.softis/andromeda-react'
import { Tick02Icon } from '@houstonicons/react';
export default {
  title: 'Form/Checkbox',
  component: CheckboxRoot,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='flex gap-4 p-4 w-[300px] items-center justify-center'>
          <Story />
          <Text>Label</Text>
        </Box>
      </div>
    )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {
  args: {
    children: <CheckboxIndicator><Tick02Icon size={16} color="white" strokeWidth={2} /></CheckboxIndicator>, 
    disabled: false,
  },
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    children: <CheckboxIndicator><Tick02Icon size={16} color="white" strokeWidth={2} /></CheckboxIndicator>,
    disabled: true,
  },
};
