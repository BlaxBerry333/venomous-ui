import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portal } from '@packages/react/Portal';

const meta: Meta<typeof Portal> = {
  title: 'Components/Portal',
  component: Portal,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Portal>;

export const ToBody: Story = {
  render: () => (
    <div style={{ overflow: 'hidden', width: 200, height: 60, border: '1px dashed gray' }}>
      Clipped container
      <Portal>
        <div style={{ position: 'fixed', right: 16, bottom: 16 }}>
          Rendered into document.body, not clipped
        </div>
      </Portal>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ border: '1px dashed gray', padding: 8 }}>
      <Portal container={null}>Rendered in place (container=null)</Portal>
    </div>
  ),
};
