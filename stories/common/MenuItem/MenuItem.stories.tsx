import type { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuItem } from '@packages/common';
import TextMeta from '../Text/Text.stories';

const meta = {
  title: 'Common Components/MenuItem',
  component: MenuItem,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Item label',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    icon: {
      description: 'Item icon',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    isActive: {
      description: 'Item active',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clickable: {
      description: 'Item clickable',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Item disabled',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    ellipsis: {
      ...TextMeta.argTypes?.ellipsis,
    },
    onClick: {
      description: 'Callback function when the modal is closed',
      if: { arg: 'clickable', truthy: true },
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    label: 'Menu item',
    icon: 'solar:box-minimalistic-bold-duotone',
    isActive: false,
    clickable: false,
    disabled: false,
    ellipsis: false,
    onClick: () => alert('onClick'),
  },
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory({ ...args }) {
    return (
      <div style={{ width: 200 }}>
        <MenuItem {...args} />
      </div>
    );
  },
};

export const WithParent: Story = {
  name: 'WithParent',
  render: function RenderStory() {
    return (
      <>
        {/* According to parent's width */}
        <MenuItem label="Without Parent" sx={{ background: 'pink' }} />

        {/* According to <div/>'s 350px */}
        <div style={{ width: 350 }}>
          <MenuItem label="Inside Custom Element" sx={{ background: 'orange' }} />
        </div>

        {/* According to <Menu/>'s 250px */}
        <Menu
          width={250}
          items={[{ label: 'Inside Menu Component' }]}
          renderItem={(item) => <MenuItem label={item.label} sx={{ background: 'skyblue' }} />}
        />
      </>
    );
  },
};

export const Ellipsis: Story = {
  name: 'Ellipsis',
  render: function RenderStory() {
    return (
      <div style={{ width: 250 }}>
        <MenuItem
          label="Content Text Content Text Content Text Content Text"
          sx={{ background: 'pink' }}
        />

        <MenuItem
          ellipsis
          label="Content Text Content Text Content Text Content Text"
          sx={{ background: 'skyblue' }}
        />
      </div>
    );
  },
};
