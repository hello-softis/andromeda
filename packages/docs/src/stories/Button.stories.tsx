import '../index.css'
import type { StoryObj, Meta } from '@storybook/react'
import { App } from '../app'

export default {
  title: 'Button',
  component: App,
} as Meta

export const Primary: StoryObj = {
  args: {
    label: 'Button',
  },
}