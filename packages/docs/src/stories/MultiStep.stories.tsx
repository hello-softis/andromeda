import '../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { MultiStep, MultiStepProps, Box } from '@andromeda/react';

export default {
  title: 'Navigation/MultiStep',
  component: MultiStep,
  args: {
    size: 3,
    currentStep: 1
  },
  argTypes: {
    size: { control: 'number' },
    currentStep: { control: 'number' }
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center items-center min-h-screen">
        <Box className='w-full max-w-full'>
            <Story/>
        </Box>
      </div>
    )
  ]
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {};
