import type { Meta, StoryObj } from '@storybook/react';

import { AdminSideNavMenu, type AdminSideNavMenuProps } from '@packages/admin';
import MenuMeta from '../common/Menu.stories';

const meta = {
  title: 'Admin Components/AdminSideNavMenu',
  component: AdminSideNavMenu,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    menuHeaderHeight: {
      description: 'Menu header height',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    menuWidth: {
      description: 'Menu header height',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '220' },
      },
    },
    menuItems: {
      ...MenuMeta.argTypes.items,
      description: 'Menu items',
    },
    activedItemUrl: {
      description: 'Actived item URL',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    logoSrc: {
      description: 'Logo source',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    appName: {
      description: 'App name',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
  args: {
    menuHeaderHeight: 50,
    menuWidth: 220,
    menuItems: [],
    activedItemUrl: '',
    logoSrc:
      'https://raw.githubusercontent.com/BlaxBerry333/venomous-ui/a51fd9d32216d9a7cf47e21cbe53bbee4dd114d6/public/favicon.svg',
    appName: 'VenomousUI',
  },
} satisfies Meta<typeof AdminSideNavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: function RenderStory({ menuItems: _, ...args }) {
    const menuItems: AdminSideNavMenuProps['menuItems'] = [
      {
        label: 'Files',
        icon: 'solar:folder-with-files-bold-duotone',
        subItems: [
          {
            label: 'list',
            icon: 'solar:folder-open-line-duotone',
            url: '',
          },
          {
            label: 'create',
            icon: 'solar:add-folder-line-duotone',
            url: '',
          },
        ],
      },
      {
        label: 'ABCDEFGHIJKLMN',
        icon: 'solar:box-minimalistic-bold-duotone',
        subItems: [
          {
            label: '123456',
            icon: 'solar:box-minimalistic-bold-duotone',
            url: '',
          },
        ],
      },
    ];

    return <AdminSideNavMenu menuItems={menuItems} {...args} />;
  },
};
