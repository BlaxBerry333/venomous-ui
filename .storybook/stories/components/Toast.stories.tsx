import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@packages/react/Button';
import { Toaster, toast } from '@packages/react/Toast';

const meta: Meta<typeof Toaster> = {
  title: 'Components/Toast',
  component: Toaster,
  parameters: { layout: 'centered' },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'],
    },
    limit: { control: 'number' },
  },
  args: { placement: 'bottom-end', limit: 3 },
};
export default meta;

type Story = StoryObj<typeof Toaster>;

export const Variants: Story = {
  render: (args) => (
    <>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="secondary" onClick={() => toast('Draft saved')}>
          Info
        </Button>
        <Button variant="secondary" onClick={() => toast.success('Published')}>
          Success
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            toast.warning('Storage almost full', { description: '92% of 10 GB used.' })
          }
        >
          Warning
        </Button>
        <Button
          variant="danger"
          onClick={() =>
            toast.danger('Upload failed', { description: 'File is larger than 10 MB.' })
          }
        >
          Danger
        </Button>
        <Button variant="ghost" onClick={() => toast.dismiss()}>
          Dismiss all
        </Button>
      </div>
      <Toaster {...args} />
    </>
  ),
};
