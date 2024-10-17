import type { StoryObj, Meta } from '@storybook/react';
import {
  DropdownCheckboxItem,
  DropdownContent,
  DropdownGroup,
  DropdownItem,
  DropdownItemIndicator,
  DropdownLabel,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownRoot,
  DropdownSeparator,
  DropdownProps,
  Title, 
  Text,
  DropdownTrigger,
  Button,
  DropdownPortal,
  Box
} from '@hello.softis/andromeda-react';
import { Tick02Icon } from '@houstonicons/react';
import { useState } from 'react';

export default {
  title: 'Overlay/Dropdown',
  component: DropdownRoot,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className='w-full h-full flex items-center justify-center'>
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {
  render: (args) => {
    const [person, setPerson] = useState<string>('banana');
    const [bookmarksChecked, setBookmarksChecked] = useState<boolean>(false);

    return (
      <DropdownRoot {...args}>
<DropdownTrigger>
          <Button>LABEL</Button>
        </DropdownTrigger>
        <DropdownPortal>
          <DropdownContent>
            <DropdownItem>
              <Text className="!text-grey-300">Item 01</Text>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownGroup>
              <DropdownLabel>
                <Title size="xs">Group</Title>
              </DropdownLabel>
              <DropdownCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                <Text className="!text-grey-300">Item 02</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownCheckboxItem>
            </DropdownGroup>
            <DropdownSeparator />
            <DropdownLabel>
              <Title size="xs">Group</Title>
            </DropdownLabel>
            <DropdownRadioGroup value={person} onValueChange={setPerson}>
              <DropdownRadioItem value="banana">
                <Text className="!text-grey-300">Item 03</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownRadioItem>
              <DropdownSeparator />
              <DropdownRadioItem value="jack">
                <Text className="!text-grey-300">Item 04</Text>
                <DropdownItemIndicator>
                  <Tick02Icon size={16} color="white" />
                </DropdownItemIndicator>
              </DropdownRadioItem>
            </DropdownRadioGroup>
          </DropdownContent>
        </DropdownPortal>
      </DropdownRoot>
    );
  },
};
