import type { StoryObj, Meta } from '@storybook/react';
import {   ModalActions,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalOverlay,
  ModalPortal,
  ModalRoot,
  ModalTitle,
  ModalTrigger, ModalProps, 
  Button,
  Title,
  Text,
  ButtonIcon,
  AvatarRoot,
  AvatarImage,
  AvatarFallback} from '@hello.softis/andromeda-react'
import { Cancel01Icon } from '@houstonicons/react';

export default {
  title: 'Overlay/Modal',
  component: ModalRoot,
  argTypes: {
    children: { control: { disable: true } },
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ModalProps>;

export const Modal: StoryObj<ModalProps> = {
  args: {
    children: [<><ModalTrigger>
      <Button>LABEL</Button>
    </ModalTrigger>
    <ModalPortal>
      <ModalOverlay />
      <ModalContent>
        <ModalTitle>
          <Title weight="bold" size="lg">
            Lorem
          </Title>
        </ModalTitle>
        <ModalDescription>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis culpa quaerat repellat cupiditate distinctio cumque
            accusantium omnis possimus veritatis quisquam illo architecto
            neque delectus beatae, voluptates, quia quos ducimus aliquid!
          </Text>
        </ModalDescription>
      </ModalContent>
    </ModalPortal></>]
  }
};

export const ModalWithActions: StoryObj<ModalProps> = {
  args: {
    children: [<><ModalTrigger>
      <Button>LABEL</Button>
    </ModalTrigger>
    <ModalPortal>
      <ModalOverlay />
      <ModalContent className="pb-0">
        <ModalTitle>
          <Title weight="bold" size="lg">
            Lorem
          </Title>
        </ModalTitle>
        <ModalDescription>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis culpa quaerat repellat cupiditate distinctio cumque
            accusantium omnis possimus veritatis quisquam illo architecto
            neque delectus beatae, voluptates, quia quos ducimus aliquid!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            perferendis qui, tenetur voluptas soluta, fuga expedita dolores
            ex dolorem repellat provident nemo. Repellendus nemo beatae modi
            in quae esse commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque modi, quos fugit illo, veritatis quis
            provident molestias, autem sequi repudiandae nemo odit
            doloremque cum neque aliquid officia possimus sint iusto.
            Reiciendis culpa quaerat repellat cupiditate distinctio cumque
            accusantium omnis possimus veritatis quisquam illo architecto
            neque delectus beatae, voluptates, quia quos ducimus aliquid!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            perferendis qui, tenetur voluptas soluta, fuga expedita dolores
            ex dolorem repellat provident nemo. Repellendus nemo beatae modi
            in quae esse commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque modi, quos fugit illo, veritatis quis
            provident molestias, autem sequi repudiandae nemo odit
            doloremque cum neque aliquid officia possimus sint iusto.
          </Text>
        </ModalDescription>
        <ModalActions className="bottom-0">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </ModalActions>
      </ModalContent>
    </ModalPortal></>]
  }
}

export const ModalHeader: StoryObj<ModalProps> = {
  args: {
    children: [<>        <ModalTrigger>
      <Button>LABEL</Button>
    </ModalTrigger>
    <ModalPortal>
      <ModalOverlay />
      <ModalContent className="pt-0">
        <ModalActions className="top-0 justify-between px-0">
          <Title weight="bold" size="lg">
            Lorem
          </Title>
          <ModalClose>
            <ButtonIcon color="tertiary">
              <Cancel01Icon color="white" />
            </ButtonIcon>
          </ModalClose>
        </ModalActions>
        <ModalTitle></ModalTitle>
        <ModalDescription>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reiciendis culpa quaerat repellat cupiditate distinctio cumque
            accusantium omnis possimus veritatis quisquam illo architecto
            neque delectus beatae, voluptates, quia quos ducimus aliquid!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            perferendis qui, tenetur voluptas soluta, fuga expedita dolores
            ex dolorem repellat provident nemo. Repellendus nemo beatae modi
            in quae esse commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque modi, quos fugit illo, veritatis quis
            provident molestias, autem sequi repudiandae nemo odit
            doloremque cum neque aliquid officia possimus sint iusto.
            Reiciendis culpa quaerat repellat cupiditate distinctio cumque
            accusantium omnis possimus veritatis quisquam illo architecto
            neque delectus beatae, voluptates, quia quos ducimus aliquid!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            perferendis qui, tenetur voluptas soluta, fuga expedita dolores
            ex dolorem repellat provident nemo. Repellendus nemo beatae modi
            in quae esse commodi? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque modi, quos fugit illo, veritatis quis
            provident molestias, autem sequi repudiandae nemo odit
            doloremque cum neque aliquid officia possimus sint iusto.
          </Text>
        </ModalDescription>
      </ModalContent>
    </ModalPortal></>]
  }
}

export const ModalImageHeader: StoryObj<ModalProps> = {
  args: {
    children: [<>        <ModalTrigger>
      <Button>LABEL</Button>
    </ModalTrigger>
    <ModalPortal>
      <ModalOverlay />
      <ModalContent className="relative overflow-y-visible">
        <ModalTitle className="-mt-20 flex !justify-center">
          <AvatarRoot size="xl">
            <AvatarImage alt="Gusttavo Castro" src="" />
            <AvatarFallback>GC</AvatarFallback>
          </AvatarRoot>
        </ModalTitle>
        <ModalDescription className="mt-6 text-center">
          <Title weight="bold" size="base">
            Title
          </Title>
          <Text>Subtitle</Text>
        </ModalDescription>
        <ModalClose className="top-8 right-8 absolute">
          <ButtonIcon color="tertiary">
            <Cancel01Icon color="white" />
          </ButtonIcon>
        </ModalClose>
      </ModalContent>
    </ModalPortal></>]
  }
}
