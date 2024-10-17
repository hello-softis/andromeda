import type { StoryObj, Meta } from '@storybook/react';
import { HoverCardRoot, HoverCardPortal, HoverCardContent, HoverCardTrigger, HoverCardArrow, HoverCardProps, AvatarFallback, AvatarRoot, AvatarImage, Title, Text, Button } from '@hello.softis/andromeda-react'
import { Add01Icon } from '@houstonicons/react';

export default {
  title: 'Overlay/Hover Card',
  component: HoverCardRoot,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<HoverCardProps>;

export const Default: StoryObj<HoverCardProps> = {
  args: {
    children: [<>
    <HoverCardTrigger>
          <button className="cursor-default">
            <AvatarRoot size="md">
              <AvatarImage
                alt="Gusttavo Castro"
                src="https://github.com/.png"
              />
              <AvatarFallback>GC</AvatarFallback>
            </AvatarRoot>
          </button>
        </HoverCardTrigger>
        <HoverCardPortal>
          <HoverCardContent>
            <AvatarRoot size="md">
              <AvatarImage
                alt="Gusttavo Castro"
                src="https://github.com/.png"
              />
              <AvatarFallback>GC</AvatarFallback>
            </AvatarRoot>
            <Title className="mt-4">Gusttavo Castro</Title>
            <Text className="mt-4">Software Engineer</Text>
            <Text className="mt-[0.5rem]">--</Text>
            <Button className="mt-8 uppercase w-full">
              <Add01Icon
                size={12}
                color="white"
                variant="solid"
                strokeWidth={2}
              />
              connect
            </Button>
            <HoverCardArrow />
          </HoverCardContent>
        </HoverCardPortal></>]
  }
};
