import type { StoryObj, Meta } from '@storybook/react';
import { BreadCrumb, BreadCrumbsProps } from '@andromeda/react';

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
  }
};

export const Inactive: StoryObj<BreadCrumbsProps> = {
  args: {
    disabled: true
  }
};
