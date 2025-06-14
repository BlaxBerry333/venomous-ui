import type { Meta, StoryObj } from '@storybook/react';

import { Button, Collapse, Paper } from '@packages/common';

const meta = {
  title: 'Common Components/Collapse/Collapse',
  component: Collapse,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    defaultIsCollapsed: {
      description: 'Default collapsed state',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    renderTrigger: {
      description: 'Render custom trigger',
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
  },
  args: {
    defaultIsCollapsed: false,
    renderTrigger: () => null,
  },
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <Paper sx={{ width: 200 }}>
        <Collapse
          {...args}
          renderTrigger={({ isCollapsed, toggleCollapsed }) => (
            <Button
              onClick={toggleCollapsed}
              text={`click to ${isCollapsed ? 'Collapse' : 'Expand'}`}
            />
          )}
        >
          <div style={{ backgroundColor: '#cccccc', width: '100%' }}>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
          <div style={{ backgroundColor: '#cccccc', width: '100%' }}>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
          <div style={{ backgroundColor: '#cccccc', width: '100%' }}>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </div>
        </Collapse>
      </Paper>
    );
  },
};
