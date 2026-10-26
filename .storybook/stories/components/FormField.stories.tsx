import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, CheckboxGroup } from '@packages/react/Checkbox';
import { FormField } from '@packages/react/FormField';
import { Input } from '@packages/react/Input';
import { Radio, RadioGroup } from '@packages/react/Radio';
import { Select } from '@packages/react/Select';
import { Switch } from '@packages/react/Switch';
import { Textarea } from '@packages/react/Textarea';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Email',
    description: 'We never share your email.',
    error: '',
    required: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <FormField {...args}>
        <Input type="email" placeholder="you@example.com" />
      </FormField>
    </div>
  ),
};

export const Invalid: Story = {
  args: { error: 'Enter a valid email address.' },
  render: WithInput.render!,
};

export const AllControls: Story = {
  render: () => (
    <form style={{ display: 'grid', gap: 20, maxWidth: 360 }}>
      <FormField label="Name" required>
        <Input />
      </FormField>
      <FormField label="Bio" description="Up to 200 characters.">
        <Textarea />
      </FormField>
      <FormField label="Country">
        <Select placeholder="Choose a country">
          <option value="jp">Japan</option>
          <option value="cn">China</option>
          <option value="us">United States</option>
        </Select>
      </FormField>
      <FormField label="Plan" error="Choose a plan.">
        <RadioGroup>
          <Radio value="free">Free</Radio>
          <Radio value="pro">Pro</Radio>
        </RadioGroup>
      </FormField>
      <FormField label="Interests">
        <CheckboxGroup orientation="horizontal" defaultValue={['design']}>
          <Checkbox value="design">Design</Checkbox>
          <Checkbox value="code">Code</Checkbox>
        </CheckboxGroup>
      </FormField>
      <Switch defaultChecked>Email notifications</Switch>
    </form>
  ),
};
