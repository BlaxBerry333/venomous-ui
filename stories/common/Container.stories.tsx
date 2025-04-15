import type { Meta, StoryObj } from '@storybook/react';

import { Container } from '@packages/common';

const meta = {
  title: 'Common Components/Container',
  component: Container,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    maxWidth: {
      description: 'Button background color',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'fullwidth'],
      table: {
        type: { summary: '"xs" | "sm" | "md" | "lg" | "xl" | "fullwidth"' },
        defaultValue: { summary: 'lg' },
      },
    },
  },
  args: {
    maxWidth: 'lg',
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    return (
      <Container {...args}>
        <div
          style={{
            backgroundColor: 'skyblue',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div>
            Breakpoint: <strong>{args.maxWidth}</strong>
          </div>
        </div>
      </Container>
    );
  },
};
