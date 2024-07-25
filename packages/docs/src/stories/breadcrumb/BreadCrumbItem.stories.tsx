import type { StoryObj, Meta } from '@storybook/react';
import { Breadcrumb } from "@chakra-ui/breadcrumb"
import { BreadCrumbItem, BreadCrumbsItemProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Breadcrumb/BreadcrumbItem',
  component: BreadCrumbItem,
  args: {
    children: '',
    link: '',
    isCurrentPage: false
  },
  argTypes: {
    children: { control: 'text' },
    link: { control: 'text' },
    isCurrentPage: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Breadcrumb>
          <Story />
        </Breadcrumb>
      </div>
    ),
  ],
} as Meta<BreadCrumbsItemProps>;

export const Default: StoryObj<BreadCrumbsItemProps> = {
  args: {
    children: 'Breadcrumb',
    link: '#',
    isCurrentPage: false
  }
};

export const CurrentPage: StoryObj<BreadCrumbsItemProps> = {
  args: {
    children: 'Finished',
    link: '#',
    isCurrentPage: true,
  }
};