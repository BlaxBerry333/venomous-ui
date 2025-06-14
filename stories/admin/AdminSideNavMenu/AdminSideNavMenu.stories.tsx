import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { AdminSideNavMenu, type AdminSideNavMenuProps } from '@packages/admin';
import { Text } from '@packages/common';
import CollapsedSidebarMeta from '@stories/common/Collapse/CollapsedSidebar.stories';
import MenuMeta from '@stories/common/Menu/Menu.stories';

const meta = {
  title: 'Admin Components/AdminSideNavMenu',
  component: AdminSideNavMenu,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    menuHeaderHeight: CollapsedSidebarMeta.argTypes.headerHeight,
    menuWidth: CollapsedSidebarMeta.argTypes.width,
    renderHeader: CollapsedSidebarMeta.argTypes.renderHeader,
    collapsedWidth: CollapsedSidebarMeta.argTypes.collapsedWidth,
    collapseButtonSx: CollapsedSidebarMeta.argTypes.collapseButtonSx,
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
  },
  args: {
    menuHeaderHeight: CollapsedSidebarMeta.args.headerHeight,
    menuWidth: CollapsedSidebarMeta.args.width,
    collapsedWidth: CollapsedSidebarMeta.args.collapsedWidth,
    menuItems: [],
    currentPath: '',
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
          label: 'LogicLogicLogicLogicLogicLogic', // cspell:disable-line
          icon: 'hugeicons:hierarchy-square-01',
          subItems: [
            {
              label: 'list',
              icon: 'hugeicons:dashboard-square-01',
              url: '/logic/list',
              onClick: () => alert('Logic List'),
            },
            {
              label: 'createcreatecreatecreatecreate', // cspell:disable-line
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
        renderHeader={() => (
          <>
            <LogoElement />
            <Text text={'I Library'} isTitle ellipsis />
          </>
        )}
      />
    );
  },
};
