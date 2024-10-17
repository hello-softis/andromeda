import type { StoryObj, Meta } from '@storybook/react';
import {   TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger, TooltipRootProps, 
  Button,
  Title,
  Text,
  Box} from '@hello.softis/andromeda-react'

export default {
  title: 'Overlay/Tooltip',
  component: TooltipProvider,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className='w-full h-full flex items-center justify-center'>
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<TooltipRootProps>;

export const Default: StoryObj<TooltipRootProps> = {
  args: {
    children: [<>
            <TooltipRoot>
          <TooltipTrigger>
            <Button>LABEL</Button>
          </TooltipTrigger>
          <TooltipPortal>
            <TooltipContent>
              <Title size="sm">Lorem</Title>
              <Text size="sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc
                eu mi efficitur porta. Sed porta velit et luctus tempor.
              </Text>
              <TooltipArrow />
            </TooltipContent>
          </TooltipPortal>
        </TooltipRoot>
   </>]
  }
};
