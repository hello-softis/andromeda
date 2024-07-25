import type { StoryObj, Meta } from '@storybook/react';
import { Card, Text, CardContent, CardText, CardHeader, CardHeaderProps } from '@andromeda/react';
import { GearIcon } from '@radix-ui/react-icons'
import '../../index.css'

GearIcon.displayName = 'DoubleArrowUpIcon';

const iconMap = {
  None: '',
  Text: <Text>1.789</Text>,
  Icon: <GearIcon />,
};

export default {
  title: 'Surfaces/Card/CardHeader',
  component: CardHeader,
  args: {
    children: '',
    rightContent: 'None'
  },
  argTypes: {
    children: { controls: 'text' },
    rightContent: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    }
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<CardHeaderProps>;

export const Default: StoryObj<CardHeaderProps> = {
  args: {
    children: 'Lorem ipsum'
  },
  render: (args) => (
    <div style={{ background: 'rgb(41, 41, 46)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Card style={{ maxWidth: '600px' }}>
        <CardHeader rightContent={args.rightContent}>{args.children}</CardHeader>
        <CardContent style={{ borderRadius: '0 0 6px 6px' }}>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium repudiandae maxime, in similique iste. Aspernatur saepe ipsam eaque dolore, molestias repudiandae adipisci sit odio laudantium fuga consequuntur incidunt quis?</CardText>
        </CardContent>
      </Card>
    </div>
  )
};

export const WithText: StoryObj<CardHeaderProps> = {
  args: {
    children: 'Lorem ipsum',
    rightContent: 'Text'
  },
  render: (args) => (
    <div style={{ background: 'rgb(41, 41, 46)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Card style={{ maxWidth: '600px' }}>
        <CardHeader rightContent={args.rightContent}>{args.children}</CardHeader>
        <CardContent style={{ borderRadius: '0 0 6px 6px' }}>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium repudiandae maxime, in similique iste. Aspernatur saepe ipsam eaque dolore, molestias repudiandae adipisci sit odio laudantium fuga consequuntur incidunt quis?</CardText>
        </CardContent>
      </Card>
    </div>
  )
};

export const WithIcon: StoryObj<CardHeaderProps> = {
  args: {
    children: 'Lorem ipsum',
    rightContent: 'Icon'
  },
  render: (args) => (
    <div style={{ background: 'rgb(41, 41, 46)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
      <Card style={{ maxWidth: '600px' }}>
        <CardHeader rightContent={args.rightContent}>{args.children}</CardHeader>
        <CardContent style={{ borderRadius: '0 0 6px 6px' }}>
          <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusantium repudiandae maxime, in similique iste. Aspernatur saepe ipsam eaque dolore, molestias repudiandae adipisci sit odio laudantium fuga consequuntur incidunt quis?</CardText>
        </CardContent>
      </Card>
    </div>
  )
};
