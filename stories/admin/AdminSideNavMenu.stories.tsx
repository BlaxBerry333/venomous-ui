import { AdminSideNavMenu, type AdminSideNavMenuProps } from '@packages/admin';
import { Text } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
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
    activedMenuItemUrl: {
      description: 'Actived item URL',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    menuHeaderElement: {
      description: 'Menu header element',
      control: 'object',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'null' },
      },
    },
  },
  args: {
    menuHeaderHeight: 50,
    menuWidth: 220,
    menuItems: [],
    activedMenuItemUrl: '',
    menuHeaderElement: null,
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

    const LogoElement: FC = () => (
      <img
        src="https://raw.githubusercontent.com/BlaxBerry333/venomous-ui/962fa42bc6d3fc7ae799c44206d8289ead2f2f5b/public/favicon.svg"
        width={32}
        height={32}
        alt="logo"
        draggable={false}
      />
    );

    return (
      <AdminSideNavMenu
        menuItems={menuItems}
        {...args}
        menuHeaderElement={
          <>
            <LogoElement />
            <Text text={'I Library'} isTitle />
          </>
        }
      />
    );
  },
};
