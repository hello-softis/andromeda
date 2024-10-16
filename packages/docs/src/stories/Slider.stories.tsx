import type { StoryObj, Meta } from '@storybook/react';
import { Box, SliderRoot, SliderTrack, SliderRange, SliderThumb, SliderProps } from '@hello.softis/andromeda-react';

export default {
  title: 'Form/Slider',
  component: SliderRoot,
  args: {
    disabled: false,
    min: 30,
    max: 100,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    max: { control: 'number' },
    min: { control: 'number' },
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className="w-96 p-4">
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<SliderProps>;

export const Default: StoryObj<SliderProps> = {
  args: {
    disabled: false,
    min: 30,
    children: <><SliderTrack><SliderRange /></SliderTrack><SliderThumb /></>
  },
};

export const Disabled: StoryObj<SliderProps> = {
  args: {
    disabled: true,
    min: 30,
    children: <><SliderTrack><SliderRange /></SliderTrack><SliderThumb /></>
  },
};
