import '../../index.css';
import type { StoryObj, Meta } from '@storybook/react';
import { ButtonEmptyState, ButtonEmptyProps } from '@andromeda/react';
import { PlusIcon } from '@radix-ui/react-icons'

PlusIcon.displayName = 'PlusIcon';

export default {
  title: 'Form/Button/EmptyStateButton',
  component: ButtonEmptyState,
  args: {
    children: 'Label',
    leadingIcon: <PlusIcon className='text-softis-light size-[24px]' />
  },
  argTypes: {
    children: { control: 'text' },
    leadingIcon: { control: 'select'}
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ButtonEmptyProps>;

export const Primary: StoryObj<ButtonEmptyProps> = {}
