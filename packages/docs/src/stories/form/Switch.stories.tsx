import type { StoryObj, Meta } from '@storybook/react';
import { SwitchRoot, SwitchThumb, SwitchProps, Box, Text } from '@hello.softis/andromeda-react';

export default {
  title: 'Form/Switch',
  component: SwitchRoot,
  argTypes: {
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
    ),
  ],
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {
  args: {
    children: <SwitchThumb />, 
    disabled: false,
  },
};

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    children: <SwitchThumb />,
    disabled: true,
  },
};
