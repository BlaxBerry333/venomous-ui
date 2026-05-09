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
import { Popover, PopoverContent, PopoverTrigger } from '@packages/react/components/Popover';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import popoverCss from '@packages/styles/components/Popover.scss?inline';

type Args = WithHeadlessStyledMode<
  React.ComponentProps<typeof Popover> & { __controlMode__?: boolean }
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

const meta: Meta<Args> = {
  title: 'react/components/Popover',
  component: Popover,
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    __controlMode__: false,
    defaultOpen: false,
    open: false,
    placement: 'bottom',
    offset: 8,
    collisionPadding: 8,
    flip: true,
    shift: true,
    closeOnOutsideClick: true,
    closeOnEsc: true,
    closeOnScroll: false,
    returnFocusOnClose: true,
    ariaRole: 'dialog',
    ariaLabel: 'Demo popover',
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
    closeOnOutsideClick: { table: { category: 'Props' } },
    closeOnEsc: { table: { category: 'Props' } },
    closeOnScroll: { table: { category: 'Props' } },
    returnFocusOnClose: { table: { category: 'Props' } },
    ariaRole: {
      control: { type: 'select' },
      options: ['dialog', 'tooltip', 'menu', 'listbox', 'grid', 'tree'],
      table: { category: 'Props' },
    },
    anchorEl: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
    ariaLabelledBy: { table: { disable: true } },
    onOpenChange: { table: { category: 'Props' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: popoverCss, componentName: 'Popover' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

const contentInlineStyle: React.CSSProperties = { background: 'pink', padding: '16px 8px' };

function UncontrolledDemo({ args }: { args: Args }) {
  // 剥离 args.open：meta 默认值仅给 controls 显示 toggle，传给 Popover 会触发受控分支
  const { open: _ignored, ...restArgs } = args;
  void _ignored;
  return (
    <Popover {...restArgs}>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent style={contentInlineStyle}>
        <p>This is PopoverContent.</p>
      </PopoverContent>
    </Popover>
  );
}

function ControlledDemo({ args }: { args: Args }) {
  const [open, setOpen] = useState(args.open ?? false);
  // controls 改 args.open 反向同步内部 state；demo 内部触发的 setOpen 不依赖此 effect
  useEffect(() => {
    if (args.open !== undefined) setOpen(args.open);
  }, [args.open]);
  return (
    <Popover
      {...args}
      open={open}
      onOpenChange={(next, reason) => {
        args.onOpenChange?.(next, reason);
        setOpen(next);
      }}
    >
      <PopoverTrigger>
        <Button>Open Popover (controlled)</Button>
      </PopoverTrigger>
      <PopoverContent style={contentInlineStyle}>
        <p>This is PopoverContent.</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </PopoverContent>
    </Popover>
  );
}

// key 绑 mode + defaultOpen：切换都强制 remount 让非受控初始值重新生效
export const Popover_: StoryObj<Args> = {
  name: 'Popover',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? ControlledDemo : UncontrolledDemo;
    return <Demo args={args} key={`${String(isControlled)}-${String(args.defaultOpen)}`} />;
  },
};

export const HeadlessUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: false },
  render: (args) => <UncontrolledDemo args={args} key={String(args.defaultOpen)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Popover, PopoverTrigger, PopoverContent, Button } from 'venomous-ui/react/components';

export default function App() {
  return (
    <Popover ariaLabel="Demo popover">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent style={{ background: 'pink', padding: '16px 8px' }}>
        <p>This is PopoverContent.</p>
      </PopoverContent>
    </Popover>
  );
}`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <ControlledDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent, Button } from 'venomous-ui/react/components';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen} ariaLabel="Demo popover">
      <PopoverTrigger>
        <Button>Open Popover (controlled)</Button>
      </PopoverTrigger>
      <PopoverContent style={{ background: 'pink', padding: '16px 8px' }}>
        <p>This is PopoverContent.</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </PopoverContent>
    </Popover>
  );
}`,
      },
    },
  },
};

export const StyledUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <UncontrolledDemo args={args} key={String(args.defaultOpen)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  return (
    <Popover ariaLabel="Demo popover">
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent style={{ background: 'pink', padding: '16px 8px' }}>
        <p>This is PopoverContent.</p>
      </PopoverContent>
    </Popover>
  );
}`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <ControlledDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen} ariaLabel="Demo popover">
      <PopoverTrigger>
        <Button>Open Popover (controlled)</Button>
      </PopoverTrigger>
      <PopoverContent style={{ background: 'pink', padding: '16px 8px' }}>
        <p>This is PopoverContent.</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </PopoverContent>
    </Popover>
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
        <Popover {...restArgs} key={p} placement={p} ariaLabel={`Popover ${p}`}>
          <PopoverTrigger>
            <Button style={{ minWidth: 100 }}>{p}</Button>
          </PopoverTrigger>
          <PopoverContent style={contentInlineStyle}>
            <p>This is PopoverContent.</p>
          </PopoverContent>
        </Popover>
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
        code: `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/react/components';
import type { ComponentBasePlacement } from 'venomous-ui/utils/types';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';

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
        <Popover key={p} placement={p} ariaLabel={\`Popover \${p}\`}>
          <PopoverTrigger>
            <Button style={{ minWidth: 100 }}>{p}</Button>
          </PopoverTrigger>
          <PopoverContent style={{ background: 'pink', padding: '16px 8px' }}>
            <p>This is PopoverContent.</p>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}`,
      },
    },
  },
};
