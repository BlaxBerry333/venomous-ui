import type { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, MenuItem, Popper } from '@packages/common';

const meta = {
  title: 'Common Components/Popper',
  component: Popper,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    position: {
      description: 'Position of the popper',
      control: 'select',
      options: ['bottom', 'left', 'right', 'top'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom' },
      },
    },
    id: {
      description: 'Unique id of the popper',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    renderPopperHandler: {
      description: 'Render the popper handler',
      table: {
        category: 'Events',
        type: { summary: '(props: PopperHandlerType) => JSX.Element' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    position: 'bottom',
    renderPopperHandler: () => <Button text="Open" />,
  },
} satisfies Meta<typeof Popper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <Popper
        {...args}
        renderPopperHandler={({ isOpen, openPopper }) => (
          <MenuItem
            label="Open"
            isActive={isOpen}
            clickable
            onClick={openPopper}
            onMouseEnter={openPopper}
          />
        )}
      >
        Hello World
      </Popper>
    );
  },
};

export const MultipleToggleHover: Story = {
  name: 'MultipleToggleHover',
  render: function RenderStory() {
    return (
      <Flex row>
        <Popper
          id="AAA"
          position="bottom"
          renderPopperHandler={({ isOpen, openPopper }) => (
            <MenuItem
              label="AAA"
              isActive={isOpen}
              clickable
              onClick={openPopper}
              onMouseEnter={openPopper}
            />
          )}
        >
          AAA
        </Popper>
        <Popper
          id="BBB"
          position="bottom"
          renderPopperHandler={({ isOpen, openPopper }) => (
            <MenuItem
              label="BBB"
              isActive={isOpen}
              clickable
              onClick={openPopper}
              onMouseEnter={openPopper}
            />
          )}
        >
          BBB
        </Popper>
      </Flex>
    );
  },
};

export const Nested: Story = {
  name: 'Nested',
  render: function RenderStory() {
    return (
      <Popper
        position="bottom"
        renderPopperHandler={(parent) => (
          <MenuItem
            label="AAA"
            isActive={parent.isOpen}
            clickable
            onClick={parent.openPopper}
            onMouseEnter={parent.openPopper}
          />
        )}
        sx={{ py: 0, px: '8px' }}
      >
        <Popper
          position="right"
          renderPopperHandler={(child) => (
            <MenuItem
              label="BBB"
              isActive={child.isOpen}
              clickable
              onClick={child.openPopper}
              onMouseEnter={child.openPopper}
            />
          )}
        >
          Hello World
          <Button text="Hello" onClick={() => alert('Hello')} />
        </Popper>
      </Popper>
    );
  },
};
