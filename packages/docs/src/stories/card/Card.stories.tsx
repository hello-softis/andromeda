import type { StoryObj, Meta } from '@storybook/react';
import { Box, Text, CardRoot, CardContent, CardProps } from '@hello.softis/andromeda-react'
import '../../index.css'

export default {
  title: 'Surfaces/Card/Card',
  component: CardRoot,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className='w-[500px] p-4'>
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {
  args: {
    children: [
      <CardContent className="!rounded-none !rounded-b-sm" key="card-content">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dignissimos earum doloremque vel illum esse cumque tenetur harum
          blanditiis ipsam, provident illo consectetur placeat temporibus,
          ipsa at atque iusto commodi? Vel?
        </Text>
      </CardContent>
    ]
  },
};
