import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabList, TabPanel, Tabs, TabTitle } from '@packages/react/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'padded' },
  argTypes: {
    activationMode: { control: 'select', options: ['automatic', 'manual'] },
    loop: { control: 'boolean' },
  },
  args: {
    defaultValue: 'overview',
    activationMode: 'automatic',
    loop: true,
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList aria-label="Project">
        <TabTitle value="overview">Overview</TabTitle>
        <TabTitle value="activity">Activity</TabTitle>
        <TabTitle value="settings">Settings</TabTitle>
      </TabList>
      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="activity">Activity content</TabPanel>
      <TabPanel value="settings">Settings content</TabPanel>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabList aria-label="Account">
        <TabTitle value="overview">Overview</TabTitle>
        <TabTitle value="billing" disabled>
          Billing
        </TabTitle>
        <TabTitle value="settings">Settings</TabTitle>
      </TabList>
      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="billing">Billing content</TabPanel>
      <TabPanel value="settings">Settings content</TabPanel>
    </Tabs>
  ),
};

export const ManualActivation: Story = {
  args: { activationMode: 'manual' },
  render: Basic.render!,
};
