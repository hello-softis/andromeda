import type { StoryObj, Meta } from '@storybook/react';
import { Box, Breadcrumb, BreadcrumbProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Breadcrumb',
  component: Breadcrumb,
  args: {
    disabled: false,
    crumbs: ['Home', 'Settings', 'Profile'],
  },
  argTypes: {
    disabled: { control: 'boolean' },
    crumbs: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className='w-80 p-4'>
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<BreadcrumbProps>;

export const Default: StoryObj<BreadcrumbProps> = {
  args: {
    disabled: false
  },
};

export const Disabled: StoryObj<BreadcrumbProps> = {
  args: {
    disabled: true
  },
};

