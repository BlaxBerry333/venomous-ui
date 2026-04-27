/**
 * @file React 占位 story —— 验证 React 渲染链路 + theme 切换。
 */

import type { Meta, StoryObj } from '@storybook/react-vite';

const Smoke = ({ label }: { label: string }) => (
  <div
    className="venomous__typography-title"
    style={{
      color: 'var(--venomous-color-fg-default)',
      background: 'var(--venomous-color-bg-surface)',
      padding: 16,
      borderRadius: 8,
    }}
  >
    {label}
  </div>
);

const meta: Meta<typeof Smoke> = {
  title: 'React/Components/Smoke',
  component: Smoke,
  args: { label: 'Hello from React' },
};

export default meta;

export const Default: StoryObj<typeof Smoke> = {};
