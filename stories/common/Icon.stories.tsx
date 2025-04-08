import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '@packages/common';

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
  },
  args: {
    icon: 'mdi:home',
    width: 20,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'DefaultIcon',
};
