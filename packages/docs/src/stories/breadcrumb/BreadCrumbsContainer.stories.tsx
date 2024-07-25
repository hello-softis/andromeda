import type { StoryObj, Meta } from '@storybook/react';
import { BreadCrumb, BreadCrumbsProps, BreadCrumbItem } from '@andromeda-ui/react';

export default {
  title: 'Form/Breadcrumb/BreadcrumbContainer',
  component: BreadCrumb,
  args: {
    disabled: false
  },
  argTypes: {
    disabled: { control: 'boolean' }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<BreadCrumbsProps>;

export const Default: StoryObj<BreadCrumbsProps> = {
  args: {
    disabled: false
  },
  render: (args) => (
    <BreadCrumb {...args}>
      <BreadCrumbItem link="/component">Component</BreadCrumbItem>
      <BreadCrumbItem link="/form">Form</BreadCrumbItem>
      <BreadCrumbItem link="/breadcrumb" isCurrentPage={true}>Breadcrumb</BreadCrumbItem>
    </BreadCrumb>
  )
};

export const Inactive: StoryObj<BreadCrumbsProps> = {
  args: {
    disabled: true
  },
  render: (args) => (
    <BreadCrumb {...args}>
      <BreadCrumbItem link="/component">Component</BreadCrumbItem>
      <BreadCrumbItem link="/form">Form</BreadCrumbItem>
      <BreadCrumbItem link="/breadcrumb" isCurrentPage={true}>Breadcrumb</BreadCrumbItem>
    </BreadCrumb>
  )
};
