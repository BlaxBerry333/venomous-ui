import type { Meta, StoryObj } from '@storybook/react';

import { Grid, Paper } from '@packages/common';

const meta = {
  title: 'Common Components/Grid',
  component: Grid,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    items: {
      description: 'List of items to render',
      control: 'object',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
      },
    },
    renderGridItem: {
      description: 'Function to render each item',
      control: 'object',
      table: {
        category: 'Events',
        type: { summary: '(item, index) => void' },
        defaultValue: { summary: 'null' },
      },
    },
    gridStyle: {
      description: 'Style for the grid',
      control: 'object',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    gridItemStyle: {
      description: 'Style for each grid item',
      control: 'object',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{}' },
      },
    },
    cols: {
      description: 'Number of columns',
      control: 'object',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: '{xs: 1, sm: 1, md: 2, lg: 3, xl: 4}' },
      },
    },
    width: {
      description: 'Width of the menu',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
    height: {
      description: 'Height of the menu',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '200' },
      },
    },
  },
  args: {
    items: [],
    renderGridItem: () => null,
    cols: { xs: 1, sm: 1, md: 2, lg: 3, xl: 4 },
    gridStyle: {},
    gridItemStyle: {},
    width: '100%',
    height: '100%',
  },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Virtualized: Story = {
  name: 'Virtualized',
  render: function RenderStory() {
    return (
      <Grid
        height={500}
        width="100%"
        cols={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        items={Array.from({ length: 100 }, (_, index) => index)}
        renderGridItem={(_, index) => (
          <Paper sx={{ height: 100, width: '100%' }}>{`Item ${index + 1}`}</Paper>
        )}
      />
    );
  },
};
