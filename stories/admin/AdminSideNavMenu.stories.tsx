import { AdminSideNavMenu, type AdminSideNavMenuProps } from '@packages/admin';
import { Text } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
    currentPath: {
      description: 'Current route pathname',
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
    currentPath: '',
    menuHeaderElement: null,
  },
} satisfies Meta<typeof AdminSideNavMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: function RenderStory({ menuItems: _, ...args }) {
    const LogoElement: React.FC = () => (
      <img
        src="https://raw.githubusercontent.com/BlaxBerry333/venomous-ui/962fa42bc6d3fc7ae799c44206d8289ead2f2f5b/public/favicon.svg"
        width={32}
        height={32}
        alt="logo"
        draggable={false}
      />
    );

    const menuItems = React.useMemo<AdminSideNavMenuProps['menuItems']>(
      () => [
        {
          label: 'Analysis',
          icon: 'hugeicons:pie-chart-02',
          url: '/analysis',
          onClick: () => alert('Analysis'),
        },
        {
          label: 'Draft',
          icon: 'hugeicons:node-edit',
          subItems: [
            {
              label: 'list',
              icon: 'hugeicons:dashboard-square-01',
              url: '/draft/list',
              onClick: () => alert('Draft List'),
            },
            {
              label: 'create',
              icon: 'hugeicons:dashboard-square-add',
              url: '/draft/create',
              onClick: () => alert('Draft Create'),
            },
          ],
        },
        {
          label: 'Logic',
          icon: 'hugeicons:hierarchy-square-01',
          subItems: [
            {
              label: 'list',
              icon: 'hugeicons:dashboard-square-01',
              url: '/logic/list',
              onClick: () => alert('Logic List'),
            },
            {
              label: 'create',
              icon: 'hugeicons:dashboard-square-add',
              url: '/logic/create',
              onClick: () => alert('Logic Create'),
            },
          ],
        },
      ],
      [],
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
