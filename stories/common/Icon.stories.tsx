import type { Meta, StoryObj } from '@storybook/react';

import { Flex, Icon } from '@packages/common';

const meta = {
  title: 'Common Components/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    icon: {
      description: 'Icon name',
      control: 'select',
      options: [
        'solar:box-minimalistic-bold-duotone',
        'solar:filters-bold-duotone',
        'devicon:google',
        'skill-icons:instagram',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    width: {
      description: 'Icon width',
      control: 'number',
      table: {
        defaultValue: { summary: '20' },
      },
    },
    color: {
      description: 'Icon color',
      control: 'select',
      options: ['primary', 'error', 'auto'],
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    icon: 'mdi:home',
    width: 20,
    color: 'auto',
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DefaultIcon',
};

export const SolarIcon: Story = {
  name: 'SolarIcon',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: (_) => (
    <Flex row gap={1}>
      <Icon icon="solar:folder-favourite-bookmark-bold" width={40} />
      <Icon icon="solar:folder-favourite-bookmark-bold-duotone" width={40} />
      <Icon icon="solar:folder-favourite-bookmark-broken" width={40} />
      <Icon icon="solar:folder-favourite-bookmark-line-duotone" width={40} />
      <Icon icon="solar:folder-favourite-bookmark-linear" width={40} />
      <Icon icon="solar:folder-favourite-bookmark-linear" width={40} color="error" />
      <Icon icon="solar:folder-favourite-bookmark-linear" width={40} color="primary" />
    </Flex>
  ),
};
