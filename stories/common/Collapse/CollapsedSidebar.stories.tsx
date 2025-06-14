import type { Meta, StoryObj } from '@storybook/react';

import { CollapsedSidebar, Flex, Icon, Text } from '@packages/common';

const meta = {
  title: 'Common Components/Collapse/CollapsedSidebar',
  component: CollapsedSidebar,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Width of the sidebar',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '220' },
      },
    },
    collapsedWidth: {
      description: 'Width of the sidebar when collapsed',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '64' },
      },
    },
    defaultIsCollapsed: {
      description: 'Default collapsed state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    headerHeight: {
      description: 'Height of the header',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    renderHeader: {
      description: 'Render the header',
      control: false,
      table: {
        category: 'Events',
        type: {
          summary:
            '(params: { isCollapsed: boolean; toggleCollapsed: () => void }) => React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    renderContent: {
      description: 'Render the content',
      control: false,
      table: {
        category: 'Events',
        type: {
          summary:
            '(params: { isCollapsed: boolean; toggleCollapsed: () => void }) => React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    sx: {
      description: 'Custom styles',
      control: false,
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    collapseButtonSx: {
      description: 'Custom styles for the collapse button',
      control: false,
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    width: 220,
    collapsedWidth: 64,
    headerHeight: 50,
    defaultIsCollapsed: false,
  },
} satisfies Meta<typeof CollapsedSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <Flex row>
        <CollapsedSidebar
          {...args}
          renderHeader={() => (
            <>
              <Text text="Header" isTitle ellipsis width={1} />
            </>
          )}
        />
        <CollapsedSidebar
          {...args}
          renderHeader={() => (
            <>
              <Icon width={32} icon="solar:box-minimalistic-bold-duotone" />
              <Text text="Header" isTitle ellipsis width={1} ml={'16px'} />
            </>
          )}
        />
      </Flex>
    );
  },
};
