import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { MultiStep, MultiStepProps, Box } from '@hello.softis/andromeda-react'

export default {
  title: 'Navigation/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    step: 1,
  },
  argTypes: {
    size: { control: 'number' },
    step: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='w-80 p-4'>
          <Story />
        </Box>
      </div>
    )
  ]
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {};
