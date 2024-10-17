import type { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps } from '@hello.softis/andromeda-react'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SkeletonProps>;

export const Line: StoryObj<SkeletonProps> = {
  render: (props) => <Skeleton className='w-40 h-2 my-1 rounded-full' />,
};

export const Circle: StoryObj<SkeletonProps> = {
  render: (props) => <Skeleton className='w-20 h-20 rounded-full' />,
};

export const Square: StoryObj<SkeletonProps> = {
  render: (props) => <Skeleton className='w-56 h-32 rounded-md' />,
};

export const Compound: StoryObj<SkeletonProps> = {
  render: (props) => (
    <div className='flex flex-col space-x-4 w-56'>
      <div className='flex justify-between mb-2'>
        <Skeleton className='w-10 h-10 rounded-full' />
        <div className='w-36 flex flex-col gap-1.5 justify-center'>
          <Skeleton className='w-32 h-2 my-1 rounded-full' />
          <Skeleton className='w-20 h-2 my-1 rounded-full' />
        </div>
      </div>
      <Skeleton className='w-full h-24 rounded-md !ml-0 my-1.5' />
      <div className='flex gap-1 !ml-0'>
        <Skeleton className='w-9 h-3 my-1 rounded-full' />
        <Skeleton className='w-9 h-3 my-1 rounded-full' />
        <Skeleton className='w-9 h-3 my-1 rounded-full' />
      </div>
      <div className='flex flex-col gap-1 !ml-0'>
        <div className='flex flex-col'>
          <Skeleton className='w-full h-3 my-1 rounded-full' />
          <Skeleton className='w-full h-3 my-1 rounded-full' />
        </div>
        <Skeleton className='w-24 h-3 my-1 rounded-full' />
      </div>
    </div>
  ),
};
