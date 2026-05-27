/**
 * Portal 是纯行为原语 —— 自身无 DOM、无样式。
 * 不走 STORY_TEMPLATE 的 Headless / Styled 二分（对它无意义）。
 */
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portal } from '@packages/react/components/Portal';

type Args = React.ComponentProps<typeof Portal>;

const meta: Meta<Args> = {
  title: 'react/components/Portal',
  component: Portal,
  parameters: { layout: 'padded' },
  args: { container: 'body (default)' as never },
  argTypes: {
    children: { control: false, table: { category: 'Props' } },
    container: {
      control: { type: 'inline-radio' },
      options: ['body (default)', 'null (inline)'],
      mapping: { 'body (default)': undefined, 'null (inline)': null },
      table: { category: 'Props', defaultValue: { summary: 'document.body' } },
    },
  },
};

export default meta;

export const Portal_: StoryObj<Args> = {
  name: 'Portal',
  render: (args) => (
    <div style={{ border: '1px dashed #999', padding: 12 }}>
      parent
      <Portal {...args}>
        <div style={{ marginTop: 8 }}>I render at document.body, not inside parent</div>
      </Portal>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Portal } from 'venomous-ui/react/components';

export default function App() {
  return (
    <div>
      parent
      <Portal>
        <div>I render at document.body, not inside parent</div>
      </Portal>
    </div>
  );
}`,
      },
    },
  },
};
