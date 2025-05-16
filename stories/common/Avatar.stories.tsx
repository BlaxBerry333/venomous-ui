import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@packages/common';
import DotBadgeMeta from './Badges/DotBadge.stories';
import IconBadgeMeta from './Badges/IconBadge.stories';

const meta = {
  title: 'Common Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Width of the avatar',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '40' },
      },
    },
    src: {
      description: 'Image source',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    alt: {
      description: 'Image alt',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },

    badgePosition: {
      ...DotBadgeMeta.argTypes?.position,
      table: {
        ...DotBadgeMeta.argTypes?.position?.table,
        defaultValue: { summary: 'bottom-right' },
      },
    },
    badgeColor: {
      ...DotBadgeMeta.argTypes?.color,
      table: {
        ...DotBadgeMeta.argTypes?.color?.table,
        defaultValue: { summary: 'primary' },
      },
    },

    withDotBadge: {
      description: 'Show a dot badge on the avatar',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dotBadgeIsVisible: {
      if: { arg: 'withDotBadge' },
      ...DotBadgeMeta.argTypes?.isVisible,
    },

    withIconBadge: {
      description: 'Show an icon badge on the avatar',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    iconBadgeIcon: {
      if: { arg: 'withIconBadge' },
      ...IconBadgeMeta.argTypes?.icon,
    },
  },
  args: {
    width: 40,
    src: 'https://avatars.githubusercontent.com/u/166675080?v=4',
    alt: 'BlackBerry333',

    badgePosition: 'bottom-right',
    badgeColor: 'primary',
    withDotBadge: false,
    dotBadgeIsVisible: DotBadgeMeta.args?.isVisible,
    withIconBadge: false,
    iconBadgeIcon: IconBadgeMeta.args?.icon,
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
};
