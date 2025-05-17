import type { Meta, StoryObj } from '@storybook/react';

import { AdminFullScreen, AdminHeader, AdminSettingsDrawer } from '@packages/admin';
import { Flex, Text } from '@packages/common';
import type { FC } from 'react';

const meta = {
  title: 'Admin Components/AdminHeader',
  component: AdminHeader,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    children: {
      description: 'Children element',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'null' },
      },
    },
  },
  args: {
    children: null,
  },
} satisfies Meta<typeof AdminHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    const LogoElement: FC = () => (
      <img
        src="https://raw.githubusercontent.com/BlaxBerry333/venomous-ui/962fa42bc6d3fc7ae799c44206d8289ead2f2f5b/public/favicon.svg"
        width={40}
        height={40}
        alt="logo"
        draggable={false}
      />
    );

    return (
      <div style={{ height: '30svh', width: '100%', position: 'relative', overflow: 'scroll' }}>
        <AdminHeader {...args}>
          <Flex row gap={0} alignItems="self-end">
            <LogoElement />
            <Text text={'I Library'} isTitle sx={{ transform: 'translateY(6px)' }} />
          </Flex>
          <Flex row id={'VenomousUI-AdminHeader-Actions'}>
            <AdminFullScreen />
            <AdminSettingsDrawer width={300} />
          </Flex>
        </AdminHeader>

        <div style={{ height: '100vh', backgroundColor: 'pink' }} />
        <div style={{ height: '100vh', backgroundColor: 'skyblue' }} />
      </div>
    );
  },
};
