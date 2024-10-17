import type { StoryObj, Meta } from '@storybook/react';
import {     SelectedFieldGroup,
  SelectedFieldItem,
  SelectedFieldLabel,
  SelectFieldContent,
  SelectFieldIcon,
  SelectFieldRoot,
  SelectFieldTrigger,
  SelectFieldValue,
  SelectFieldViewPort, SelectFieldProps, 
  Box} from '@hello.softis/andromeda-react'

export default {
  title: 'Form/Selection Field',
  component: SelectFieldRoot,
  argTypes: {
    hover: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Box className='p-4'>
          <Story />
        </Box>
      </div>
    ),
  ],
} as Meta<SelectFieldProps>;

export const Default: StoryObj<SelectFieldProps> = {
  args: {
    children: [<>        <SelectFieldTrigger ariaLabel="course">
      <SelectFieldValue placeholder="Placeholder" />
      <SelectFieldIcon />
    </SelectFieldTrigger>
    <SelectFieldContent>
      <SelectFieldViewPort>
        <SelectedFieldGroup>
          <SelectedFieldLabel>Options</SelectedFieldLabel>
          <SelectedFieldItem value="1">Option 1</SelectedFieldItem>
          <SelectedFieldItem value="2">Option 2</SelectedFieldItem>
          <SelectedFieldItem value="3">Option 3</SelectedFieldItem>
          <SelectedFieldItem value="4">Option 4</SelectedFieldItem>
          <SelectedFieldItem value="5">Option 5</SelectedFieldItem>
        </SelectedFieldGroup>
      </SelectFieldViewPort>
    </SelectFieldContent></>]
  }
};
