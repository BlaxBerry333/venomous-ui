import { useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Button } from '@packages/react/components/Button';
import { Dialog, type DialogHandle } from '@packages/react/components/Dialog';
import { COMPONENTS } from '@packages/utils/classnames';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import dialogCss from '@packages/styles/components/Dialog.scss?inline';

type Args = WithHeadlessStyledMode<
  React.ComponentProps<typeof Dialog> & { __controlMode__?: boolean }
>;

const meta: Meta<Args> = {
  title: 'react/components/Dialog',
  component: Dialog,
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    __controlMode__: false,
    defaultOpen: false,
    open: false,
    closeOnBackdropClick: true,
    closeOnEsc: true,
    lockScroll: true,
    ariaLabel: 'Demo dialog',
    onOpenChange: fn(),
  },
  argTypes: {
    __mode__: headlessStyledArgType,
    __controlMode__: {
      name: 'Controlled',
      description: 'on = 受控（demo 内部 state 驱动 open）；off = 非受控（用 defaultOpen + ref）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    children: { control: false, table: { category: 'Props' } },
    // defaultOpen 仅非受控模式下可调；受控模式藏起来避免引导消费方同时传 open + defaultOpen。
    defaultOpen: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 story remount 以重新生效。',
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    // open 仅受控模式下展示；可编辑 boolean，demo 内部 state 跟随 args.open 变化反向同步。
    open: {
      description: '受控 open 状态。controls 切换会反向同步 demo 内部 state，便于测试受控接入。',
      control: { type: 'boolean' },
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: true },
    },
    closeOnBackdropClick: { table: { category: 'Props' } },
    closeOnEsc: { table: { category: 'Props' } },
    lockScroll: { table: { category: 'Props' } },
    ariaLabel: { table: { disable: true } },
    ariaLabelledBy: { table: { disable: true } },
    onOpenChange: { table: { category: 'Props' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: dialogCss, componentName: 'Dialog' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

// 触发器用内置 Button：让 styled 切换时触发器和 Dialog 一起出样式。
// decorator 同时注入 Dialog + Button 两份 CSS，避免触发器在 styled 模式下「没样式」。

function UncontrolledDemo({ args }: { args: Args }) {
  const ref = useRef<DialogHandle>(null);
  // 剥离 args.open：meta 给了 open 默认值是为了让 controls 显示 toggle 控件，
  // 但非受控 demo 不能把 open 透给 Dialog（否则触发受控分支，命令式 ref 失效）。
  const { open: _ignored, ...restArgs } = args;
  void _ignored;
  return (
    <>
      <Button onClick={() => ref.current?.open()}>Open Dialog</Button>
      <Dialog {...restArgs} ref={ref}>
        <header className={COMPONENTS.DIALOG_HEADER}>
          <h2 className={COMPONENTS.DIALOG_TITLE}>Dialog title</h2>
        </header>
        <div className={COMPONENTS.DIALOG_BODY}>
          Native &lt;dialog&gt; gives you focus trap, inert background and Esc-to-close for free.
        </div>
        <footer className={COMPONENTS.DIALOG_FOOTER}>
          <Button onClick={() => ref.current?.close()}>Close</Button>
        </footer>
      </Dialog>
    </>
  );
}

function ControlledDemo({ args }: { args: Args }) {
  const [open, setOpen] = useState(args.open ?? false);
  // controls 改 args.open 时反向同步内部 state，让 controls 切换能驱动 dialog 开关。
  // demo 内部按钮 / Esc / backdrop 触发的 setOpen 不依赖此 effect（args.open 不变就不跑）。
  useEffect(() => {
    if (args.open !== undefined) setOpen(args.open);
  }, [args.open]);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog (controlled)</Button>
      <Dialog
        {...args}
        open={open}
        onOpenChange={(next) => {
          args.onOpenChange?.(next);
          setOpen(next);
        }}
      >
        <header className={COMPONENTS.DIALOG_HEADER}>
          <h2 className={COMPONENTS.DIALOG_TITLE}>Dialog Title (controlled)</h2>
        </header>
        <div className={COMPONENTS.DIALOG_BODY}>
          Open state lives in the consumer; Esc / backdrop notify via onOpenChange.
        </div>
        <footer className={COMPONENTS.DIALOG_FOOTER}>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </footer>
      </Dialog>
    </>
  );
}

// 默认 story：dev 侧边栏入口，按 __controlMode__ 切换演示受控 / 非受控。
// key 绑 mode + defaultOpen：mode 切换 / defaultOpen 改动都强制 remount，
// 让「非受控初始值」语义重新生效，避免两种 demo 残留状态串扰。
export const Dialog_: StoryObj<Args> = {
  name: 'Dialog',
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
        code: `import { useRef } from 'react';
import { Dialog, type DialogHandle, Button } from 'venomous-ui/react/components';

export default function App() {
  const ref = useRef<DialogHandle>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()}>Open</Button>
      <Dialog ref={ref} ariaLabel="Demo dialog">
        <p>Hello</p>
        <Button onClick={() => ref.current?.close()}>Close</Button>
      </Dialog>
    </>
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
import { Dialog, Button } from 'venomous-ui/react/components';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onOpenChange={setOpen} ariaLabel="Demo dialog">
        <p>Hello</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Dialog>
    </>
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
        code: `import { useRef } from 'react';
import { Dialog, type DialogHandle, Button } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  const ref = useRef<DialogHandle>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()}>Open</Button>
      <Dialog ref={ref} ariaLabel="Demo dialog">
        <p>Hello</p>
        <Button onClick={() => ref.current?.close()}>Close</Button>
      </Dialog>
    </>
  );
}`,
      },
    },
  },
};

// Dialog 现状已经把 style 透传到 <dialog>，所以「自定义尺寸 / 全屏」
// 不需要新增 size prop —— 用户传 style 即可覆盖默认 max-width / max-height。
// 三个例子：1（很小）/ 2（普通）/ fullscreen（全屏）；用户复制对应 style 字面量到自己代码里就能用。
const SIZE_OPTIONS: ReadonlyArray<{ label: string; style: React.CSSProperties }> = [
  { label: '1', style: { minWidth: 240, maxWidth: 320 } },
  { label: '2', style: { minWidth: 480, maxWidth: 640 } },
  {
    label: 'fullscreen',
    style: {
      width: '100dvw',
      height: '100dvh',
      maxWidth: 'none',
      maxHeight: 'none',
      borderRadius: 0,
    },
  },
];

function SizeUsageDemo({ args }: { args: Args }) {
  const ref = useRef<DialogHandle>(null);
  const [index, setIndex] = useState(0);
  const { open: _ignored, ...restArgs } = args;
  void _ignored;
  // index 永远来自 SIZE_OPTIONS.map 的 i，下标必定在范围内；
  // noUncheckedIndexedAccess 把元素类型推成 T | undefined，这里非空断言压回 T。
  const current = SIZE_OPTIONS[index]!;
  return (
    <>
      <Button onClick={() => ref.current?.open()}>Open Dialog</Button>
      <Dialog {...restArgs} ref={ref} style={current.style}>
        <div style={{ display: 'flex', gap: 8 }}>
          {SIZE_OPTIONS.map((opt, i) => (
            <Button key={opt.label} disabled={index === i} onClick={() => setIndex(i)}>
              {opt.label}
            </Button>
          ))}
        </div>
        <code style={{ display: 'block', marginTop: 8 }}>
          {`style={{${Object.entries(current.style)
            .map(([k, v]) => ` ${k}: ${typeof v === 'string' ? `'${v}'` : v}`)
            .join(',')} }}`}
        </code>
      </Dialog>
    </>
  );
}

export const SizeUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <SizeUsageDemo args={args} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { useRef } from 'react';
import { Dialog, type DialogHandle, Button } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  const ref = useRef<DialogHandle>(null);
  return (
    <>
      <Button onClick={() => ref.current?.open()}>Open</Button>

      {/* Small */}
      <Dialog ref={ref} style={{ minWidth: 240, maxWidth: 320 }} ariaLabel="Small dialog" />

      {/* Normal */}
      <Dialog ref={ref} style={{ minWidth: 480, maxWidth: 640 }} ariaLabel="Normal dialog" />

      {/* Fullscreen */}
      <Dialog
        ref={ref}
        style={{
          width: '100dvw',
          height: '100dvh',
          maxWidth: 'none',
          maxHeight: 'none',
          borderRadius: 0,
        }}
        ariaLabel="Fullscreen dialog"
      />
    </>
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
import { Dialog, Button } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog open={open} onOpenChange={setOpen} ariaLabel="Demo dialog">
        <p>Hello</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Dialog>
    </>
  );
}`,
      },
    },
  },
};
