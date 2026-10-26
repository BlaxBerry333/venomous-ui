import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@packages/react/Checkbox';
import { Radio, RadioGroup } from '@packages/react/Radio';
import { Switch } from '@packages/react/Switch';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  argTypes: {
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { indeterminate: false, disabled: false, children: 'Accept terms' },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {};

export const States: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 8 }}>
      <Checkbox>Unchecked</Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox indeterminate>Indeterminate</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
    </div>
  ),
};

export const RadioAndSwitch: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <RadioGroup aria-label="Size" defaultValue="m" orientation="horizontal">
        <Radio value="s">Small</Radio>
        <Radio value="m">Medium</Radio>
        <Radio value="l">Large</Radio>
      </RadioGroup>
      <Switch>Dark mode</Switch>
      <Switch size="sm" defaultChecked>
        Compact
      </Switch>
    </div>
  ),
};
