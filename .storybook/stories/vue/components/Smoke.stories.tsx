/**
 * @file Vue 占位 story —— 验证 VueWrapper 嫁接 + theme 切换。
 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { VueWrapper } from '../../../lib';
import Smoke from './Smoke.vue';

type Args = { label: string };

const meta: Meta<Args> = {
  args: { label: 'Hello from Vue' },
  render: (args) => <VueWrapper component={Smoke} props={args as Record<string, unknown>} />,
};

export default meta;

export const Default: StoryObj<Args> = {};
