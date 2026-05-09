import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Button } from '@packages/react/components/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@packages/react/components/Tooltip';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import tooltipCss from '@packages/styles/components/Tooltip.scss?inline';

type Args = WithHeadlessStyledMode<
  React.ComponentProps<typeof Tooltip> & { __controlMode__?: boolean }
>;

const PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;

const TRIGGER_OPTIONS = ['hover', 'click'] as const;

const meta: Meta<Args> = {
  title: 'react/components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    __controlMode__: false,
    defaultOpen: false,
    open: false,
    placement: 'top',
    offset: 6,
    collisionPadding: 8,
    flip: true,
    shift: true,
    openDelay: 200,
    closeDelay: 200,
    closeOnEsc: true,
    trigger: 'hover',
    disabled: false,
    onOpenChange: fn(),
  },
  argTypes: {
    __mode__: headlessStyledArgType,
    __controlMode__: {
      name: 'Controlled',
      description: 'on = 受控（demo 内部 state 驱动 open）；off = 非受控（用 defaultOpen）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    children: { control: false, table: { category: 'Props' } },
    defaultOpen: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 story remount 以重新生效。',
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    open: {
      description: '受控 open 状态。controls 切换会反向同步 demo 内部 state，便于测试受控接入。',
      control: { type: 'boolean' },
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: true },
    },
    placement: {
      control: { type: 'select' },
      options: PLACEMENTS,
      table: { category: 'Props' },
    },
    offset: { control: { type: 'number', min: 0, max: 32 }, table: { category: 'Props' } },
    collisionPadding: {
      control: { type: 'number', min: 0, max: 32 },
      table: { category: 'Props' },
    },
    flip: { table: { category: 'Props' } },
    shift: { table: { category: 'Props' } },
    openDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
      table: { category: 'Props' },
    },
    closeDelay: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
      table: { category: 'Props' },
    },
    closeOnEsc: { table: { category: 'Props' } },
    trigger: {
      control: { type: 'radio' },
      options: TRIGGER_OPTIONS,
      table: { category: 'Props' },
    },
    disabled: { table: { category: 'Props' } },
    onOpenChange: { table: { category: 'Props' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: tooltipCss, componentName: 'Tooltip' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

// 默认 story 用：content 文本随 args.trigger 切换（preview 页面 controls 可改 trigger）
function PreviewContent({ trigger }: { trigger: 'hover' | 'click' | undefined }) {
  if (trigger === 'click') {
    return <span>Click trigger: tooltip stays open until you click outside or press Esc.</span>;
  }
  return <span>Leaving the trigger auto-closes after closeDelay.</span>;
}

// 触发器统一用带背景色的 div —— 跟具体业务组件解耦，纯展示 Tooltip 自身的定位/触发能力
const triggerBoxStyle: React.CSSProperties = {
  background: 'pink',
  textAlign: 'center',
  padding: '0 16px',
};

function PreviewUncontrolledDemo({ args }: { args: Args }) {
  // 剥离 args.open：meta 默认值仅给 controls 显示 toggle，传给 Tooltip 会触发受控分支
  const { open: _ignored, ...restArgs } = args;
  void _ignored;
  const label = args.trigger === 'click' ? 'Click me' : 'Hover me';
  return (
    <Tooltip {...restArgs}>
      <TooltipTrigger>
        <div style={triggerBoxStyle}>{label}</div>
      </TooltipTrigger>
      <TooltipContent>
        <PreviewContent trigger={args.trigger} />
      </TooltipContent>
    </Tooltip>
  );
}

function PreviewControlledDemo({ args }: { args: Args }) {
  const [open, setOpen] = useState(args.open ?? false);
  // controls 改 args.open 反向同步内部 state；demo 内部触发的 setOpen 不依赖此 effect
  useEffect(() => {
    if (args.open !== undefined) setOpen(args.open);
  }, [args.open]);
  const label = args.trigger === 'click' ? 'Click me' : 'Hover me';
  return (
    <Tooltip
      {...args}
      open={open}
      onOpenChange={(next, reason) => {
        args.onOpenChange?.(next, reason);
        setOpen(next);
      }}
    >
      <TooltipTrigger>
        <div style={triggerBoxStyle}>{label}</div>
      </TooltipTrigger>
      <TooltipContent>
        <PreviewContent trigger={args.trigger} />
      </TooltipContent>
    </Tooltip>
  );
}

// docs 页面 4 个 Headless/Styled × Uncontrolled/Controlled 用的固定 hover demo
function HoverUncontrolledDemo({ args }: { args: Args }) {
  const { open: _ignored, ...restArgs } = args;
  void _ignored;
  return (
    <Tooltip {...restArgs} trigger="hover">
      <TooltipTrigger>
        <div style={triggerBoxStyle}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}

function HoverControlledDemo({ args }: { args: Args }) {
  const [open, setOpen] = useState(args.open ?? false);
  useEffect(() => {
    if (args.open !== undefined) setOpen(args.open);
  }, [args.open]);
  return (
    <Tooltip
      {...args}
      trigger="hover"
      open={open}
      onOpenChange={(next, reason) => {
        args.onOpenChange?.(next, reason);
        setOpen(next);
      }}
    >
      <TooltipTrigger>
        <div style={triggerBoxStyle}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}

// key 绑 mode + defaultOpen：切换都强制 remount 让非受控初始值重新生效
export const Tooltip_: StoryObj<Args> = {
  name: 'Tooltip',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? PreviewControlledDemo : PreviewUncontrolledDemo;
    return <Demo args={args} key={`${String(isControlled)}-${String(args.defaultOpen)}`} />;
  },
};

export const HeadlessUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: false },
  render: (args) => <HoverUncontrolledDemo args={args} key={String(args.defaultOpen)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/react/components';

export default function App() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div style={{ background: 'pink', textAlign: 'center', padding: '0 16px' }}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <HoverControlledDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/react/components';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger>
        <div style={{ background: 'pink', textAlign: 'center', padding: '0 16px' }}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}`,
      },
    },
  },
};

export const StyledUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <HoverUncontrolledDemo args={args} key={String(args.defaultOpen)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tooltip.css';

export default function App() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div style={{ background: 'pink', textAlign: 'center', padding: '0 16px' }}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <HoverControlledDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { useState } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tooltip.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger>
        <div style={{ background: 'pink', textAlign: 'center', padding: '0 16px' }}>Hover me</div>
      </TooltipTrigger>
      <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
    </Tooltip>
  );
}`,
      },
    },
  },
};

function PlacementMatrixDemo({ args }: { args: Args }) {
  const { open: _ignored, placement: _placementIgnored, ...restArgs } = args;
  void _ignored;
  void _placementIgnored;
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: 24,
        padding: 80,
      }}
    >
      {PLACEMENTS.map((p) => (
        <Tooltip {...restArgs} key={p} placement={p}>
          <TooltipTrigger>
            <div style={triggerBoxStyle}>{p}</div>
          </TooltipTrigger>
          <TooltipContent>{p}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}

export const PlacementUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <PlacementMatrixDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/react/components';
import type { ComponentBasePlacement } from 'venomous-ui/utils/types';

const PLACEMENTS: readonly ComponentBasePlacement[] = [
  'top', 'top-start', 'top-end',
  'bottom', 'bottom-start', 'bottom-end',
  'left', 'left-start', 'left-end',
  'right', 'right-start', 'right-end',
];

export default function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: 24,
        padding: 80,
      }}
    >
      {PLACEMENTS.map((p) => (
        <Tooltip key={p} placement={p}>
          <TooltipTrigger>
            <div style={{ background: 'pink', textAlign: 'center', padding: '0 16px' }}>{p}</div>
          </TooltipTrigger>
          <TooltipContent>{p}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}`,
      },
    },
  },
};

function ClickTriggerDemo({ args }: { args: Args }) {
  const { open: _ignored, trigger: _triggerIgnored, ...restArgs } = args;
  void _ignored;
  void _triggerIgnored;
  return (
    <Tooltip {...restArgs} trigger="click">
      <TooltipTrigger>
        <Button>Click me</Button>
      </TooltipTrigger>
      <TooltipContent>Click outside or press Esc to close.</TooltipContent>
    </Tooltip>
  );
}

export const ClickTriggerUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <ClickTriggerDemo args={args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Click trigger keeps the tooltip open until the user clicks outside or presses Esc — hover does not close it. Use this when content needs a deliberate dismiss action.',
      },
      source: {
        language: 'tsx',
        code: `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
} from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tooltip.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  return (
    <Tooltip trigger="click">
      <TooltipTrigger>
        <Button>Click me</Button>
      </TooltipTrigger>
      <TooltipContent>Click outside or press Esc to close.</TooltipContent>
    </Tooltip>
  );
}`,
      },
    },
  },
};
