import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@packages/react/Input';
import { Textarea } from '@packages/react/Textarea';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
  args: { size: 'md', disabled: false, placeholder: 'Search…', 'aria-label': 'Search' },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 8, width: 280 }}>
      <Input {...args} size="sm" />
      <Input {...args} size="md" />
      <Input {...args} size="lg" />
    </div>
  ),
};

export const Invalid: Story = {
  args: { 'aria-invalid': true, defaultValue: 'not-an-email' },
};

export const Multiline: Story = {
  render: () => (
    <Textarea aria-label="Comment" placeholder="Leave a comment" style={{ width: 280 }} />
  ),
};
