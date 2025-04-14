import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Text } from '@packages/common';

const meta = {
  title: 'Common Components/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    text: {
      description: 'Icon text',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    isLabel: {
      description: 'Is label',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isTitle: {
      description: 'Is title',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    titleLevel: {
      description: 'Title level',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h3' },
      },
    },
    ellipsis: {
      description: "Is Ellipsisable ( According to parent element's width )",
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    text: 'Xxxxxxxxxx',
    isLabel: false,
    isTitle: false,
    titleLevel: 'h3',
    ellipsis: false,
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DefaultText',
  render: (args) => <Text {...args} />,
};

export const Levels: Story = {
  name: 'Levels',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex gap={2}>
      <Text isTitle titleLevel="h1" text="h1.Heading" />
      <Text isTitle titleLevel="h2" text="h2.Heading" />
      <Text isTitle titleLevel="h3" text="h3.Heading" />
      <Text isTitle titleLevel="h4" text="h4.Heading" />
      <Text isTitle titleLevel="h5" text="h5.Heading" />
      <Text isTitle titleLevel="h6" text="h6.Heading" />
      <Text text="body.Heading" />
      <Text isLabel text="label.Heading" />
    </Flex>
  ),
};

export const Ellipsis: Story = {
  name: 'Ellipsis',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex sx={{ width: '200px', background: 'pink' }}>
      <Text text="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
      <Text ellipsis text="ABCDEFGHIJKLMNOPQRSTUVWXYZ" />
    </Flex>
  ),
};
