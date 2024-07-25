import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { MultiStep, MultiStepProps, Box } from '@hello.softis/andromeda-react'

export default {
  title: 'Navigation/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  argTypes: {
    size: { control: 'number' },
    currentStep: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box hover={false} hasChildren={true} full={true}>
          <div className='p-3'>
            <Story />
          </div>
        </Box>
      </div>
    )
  ]
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {};
