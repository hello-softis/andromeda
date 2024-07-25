import type { StoryObj, Meta } from '@storybook/react';
import { Box, Card, CardContent, CardText, CardTextProps } from '@andromeda/react';
import '../../index.css'

export default {
  title: 'Surfaces/Card/CardText',
  component: CardText,
  args: {
    children: ''
  },
  argTypes: {
    children: { controls: 'text' }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<CardTextProps>;

export const Default: StoryObj<CardTextProps> = {
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium repudiandae maxime, in similique iste. Aspernatur saepe ipsam eaque dolore, molestias repudiandae adipisci sit odio laudantium fuga consequuntur incidunt quis?'
  },
  render: (args) => (
    <div style={{ background: 'rgb(41, 41, 46)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Card style={{ maxWidth: '500px', width: '100%' }}>
        <CardContent>
          <CardText>{args.children}</CardText>
        </CardContent>
      </Card>
    </div>
  )
};
