import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabPanel, Tabs, TabTitle } from '@packages/react/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  argTypes: {
    activationMode: { control: 'select', options: ['automatic', 'manual'] },
    loop: { control: 'boolean' },
  },
  args: {
    activationMode: 'automatic',
    loop: true,
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabTitle>Overview</TabTitle>
      <TabTitle>Activity</TabTitle>
      <TabTitle>Settings</TabTitle>
      <TabPanel>Overview content</TabPanel>
      <TabPanel>Activity content</TabPanel>
      <TabPanel>Settings content</TabPanel>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabTitle>Overview</TabTitle>
      <TabTitle disabled>Billing</TabTitle>
      <TabTitle>Settings</TabTitle>
      <TabPanel>Overview content</TabPanel>
      <TabPanel>Billing content</TabPanel>
      <TabPanel>Settings content</TabPanel>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  args: { activationMode: 'manual' },
  render: Basic.render!,
};
