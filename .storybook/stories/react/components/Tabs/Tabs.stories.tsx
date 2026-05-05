import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Tabs, TabTitle, TabPanel } from '@packages/react/components/Tabs';
import tabsCss from '@packages/styles/components/Tabs.scss?inline';

type Args = WithHeadlessStyledMode<
  React.ComponentProps<typeof Tabs> & { __controlMode__?: boolean }
>;

// 静态 4 项 + 1 disabled。consumer 自定义 children（emoji / 多语义文字）演示色继承。
const TAB_ITEMS: ReadonlyArray<{ value: string; label: string; disabled?: boolean }> = [
  { value: 'overview', label: 'Overview' },
  { value: 'usage', label: 'Usage' },
  { value: 'api', label: 'API' },
  { value: 'changelog', label: 'Changelog', disabled: true },
];

function UncontrolledDemo({ args }: { args: Args }) {
  // 剥离 args.value：meta 给了 value 默认值是为了让 controls 显示输入控件，
  // 非受控 demo 不能把 value 透给 Tabs（否则触发受控分支）。
  const { value: _v, __mode__, __controlMode__, ...rest } = args;
  void _v;
  void __controlMode__;
  void __mode__;
  return (
    <Tabs {...rest}>
      {TAB_ITEMS.map((item) => (
        <TabTitle key={item.value} value={item.value} disabled={item.disabled}>
          {item.label}
        </TabTitle>
      ))}
      {TAB_ITEMS.map((item) => (
        <TabPanel key={item.value} value={item.value}>
          <p>Panel content for &quot;{item.label}&quot;.</p>
        </TabPanel>
      ))}
    </Tabs>
  );
}

function ControlledDemo({ args }: { args: Args }) {
  const [value, setValue] = useState<string | undefined>(args.value ?? TAB_ITEMS[0]?.value);
  // controls 改 args.value 时反向同步内部 state，让 controls 切换驱动 Tabs。
  useEffect(() => {
    if (args.value !== undefined) setValue(args.value);
  }, [args.value]);

  const { __mode__, __controlMode__, value: _argsV, ...rest } = args;
  void __mode__;
  void __controlMode__;
  void _argsV;
  return (
    <Tabs
      {...rest}
      {...(value !== undefined ? { value } : {})}
      onValueChange={(next) => {
        args.onValueChange?.(next);
        setValue(next);
      }}
    >
      {TAB_ITEMS.map((item) => (
        <TabTitle key={item.value} value={item.value} disabled={item.disabled}>
          {item.label}
        </TabTitle>
      ))}
      {TAB_ITEMS.map((item) => (
        <TabPanel key={item.value} value={item.value}>
          <p>Panel content for &quot;{item.label}&quot;.</p>
        </TabPanel>
      ))}
    </Tabs>
  );
}

const meta: Meta<Args> = {
  title: 'react/components/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    __controlMode__: false,
    defaultValue: 'overview',
    value: 'overview',
    activationMode: 'automatic',
    loop: true,
    onValueChange: fn(),
  },
  argTypes: {
    __mode__: headlessStyledArgType,
    __controlMode__: {
      name: 'Controlled',
      description: 'on = 受控（demo 内部 state 驱动 value）；off = 非受控（用 defaultValue）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    defaultValue: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 story remount 以重新生效。',
      control: { type: 'select' },
      options: TAB_ITEMS.map((it) => it.value),
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    value: {
      description: '受控选中值。controls 切换会反向同步 demo 内部 state。',
      control: { type: 'select' },
      options: TAB_ITEMS.map((it) => it.value),
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: true },
    },
    // children 是 React 自动推断进 args 的，对运行时演示无意义——隐藏不显示
    children: { control: false, table: { disable: true } },
    activationMode: {
      control: { type: 'inline-radio' },
      options: ['automatic', 'manual'],
      table: { category: 'Props' },
    },
    loop: { control: { type: 'boolean' }, table: { category: 'Props' } },
    onValueChange: { table: { category: 'Props' } },
  },
  decorators: [makeHeadlessStyledDecorator(tabsCss, 'Tabs')],
};

export default meta;

// 默认 story：dev 侧边栏入口，按 __controlMode__ 切换演示受控 / 非受控。
// key 绑 mode + defaultValue：mode 切换 / defaultValue 改动都强制 remount，
// 让「非受控初始值」语义重新生效，避免两种 demo 残留状态串扰。
export const Tabs_: StoryObj<Args> = {
  name: 'Tabs',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? ControlledDemo : UncontrolledDemo;
    return <Demo args={args} key={`${String(isControlled)}-${String(args.defaultValue)}`} />;
  },
};

export const HeadlessUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: false },
  render: (args) => <UncontrolledDemo args={args} key={String(args.defaultValue)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';

export default function App() {
  return (
    <Tabs defaultValue="overview">
      <TabTitle value="overview">Overview</TabTitle>
      <TabTitle value="usage">Usage</TabTitle>
      <TabTitle value="api">API</TabTitle>
      <TabTitle value="changelog" disabled>Changelog</TabTitle>

      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="usage">Usage content</TabPanel>
      <TabPanel value="api">API content</TabPanel>
      <TabPanel value="changelog">Changelog content</TabPanel>
    </Tabs>
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
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';

export default function App() {
  const [value, setValue] = useState('overview');
  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabTitle value="overview">Overview</TabTitle>
      <TabTitle value="usage">Usage</TabTitle>
      <TabTitle value="api">API</TabTitle>
      <TabTitle value="changelog" disabled>Changelog</TabTitle>

      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="usage">Usage content</TabPanel>
      <TabPanel value="api">API content</TabPanel>
      <TabPanel value="changelog">Changelog content</TabPanel>
    </Tabs>
  );
}`,
      },
    },
  },
};

export const StyledUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <UncontrolledDemo args={args} key={String(args.defaultValue)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tabs.css';

export default function App() {
  return (
    <Tabs defaultValue="overview">
      <TabTitle value="overview">Overview</TabTitle>
      <TabTitle value="usage">Usage</TabTitle>
      <TabTitle value="api">API</TabTitle>
      <TabTitle value="changelog" disabled>Changelog</TabTitle>

      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="usage">Usage content</TabPanel>
      <TabPanel value="api">API content</TabPanel>
      <TabPanel value="changelog">Changelog content</TabPanel>
    </Tabs>
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
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tabs.css';

export default function App() {
  const [value, setValue] = useState('overview');
  return (
    <Tabs value={value} onValueChange={setValue}>
      <TabTitle value="overview">Overview</TabTitle>
      <TabTitle value="usage">Usage</TabTitle>
      <TabTitle value="api">API</TabTitle>
      <TabTitle value="changelog" disabled>Changelog</TabTitle>

      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="usage">Usage content</TabPanel>
      <TabPanel value="api">API content</TabPanel>
      <TabPanel value="changelog">Changelog content</TabPanel>
    </Tabs>
  );
}`,
      },
    },
  },
};

// Vertical sample —— canvas 用 wrapper class 把示范 CSS scope 在本 demo 内（避免污染同 docs
// 页的横排 demo）。source code 只用注释说明用户在自己的样式表里直接写 `.venomous--Tabs`。
const VERTICAL_DEMO_SCOPE = 'venomous-tabs-vertical-demo';
const VERTICAL_CSS = `
.${VERTICAL_DEMO_SCOPE} .venomous--Tabs { display: flex; gap: 16px; align-items: flex-start; }
.${VERTICAL_DEMO_SCOPE} .venomous--Tabs > [role='tablist'] {
  display: flex; flex-direction: column; gap: 4px; min-width: 140px;
}
.${VERTICAL_DEMO_SCOPE} .venomous--Tabs > [role='tablist'] > button { justify-content: flex-start; }
`;

function VerticalDemo({ args }: { args: Args }) {
  const { value: _v, __mode__: _m, __controlMode__: _c, ...rest } = args;
  void _v;
  void _m;
  void _c;
  return (
    <div className={VERTICAL_DEMO_SCOPE}>
      <style>{VERTICAL_CSS}</style>
      <Tabs {...rest}>
        {TAB_ITEMS.map((item) => (
          <TabTitle key={item.value} value={item.value} disabled={item.disabled}>
            {item.label}
          </TabTitle>
        ))}
        {TAB_ITEMS.map((item) => (
          <TabPanel key={item.value} value={item.value}>
            <p>Panel content for &quot;{item.label}&quot;.</p>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}

export const VerticalUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <VerticalDemo args={args} key={String(args.defaultValue)} />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tabs.css';

export default function App() {
  return (
    <Tabs defaultValue="overview">
      <TabTitle value="overview">Overview</TabTitle>
      <TabTitle value="usage">Usage</TabTitle>
      <TabTitle value="api">API</TabTitle>
      <TabTitle value="changelog" disabled>Changelog</TabTitle>

      <TabPanel value="overview">Overview content</TabPanel>
      <TabPanel value="usage">Usage content</TabPanel>
      <TabPanel value="api">API content</TabPanel>
      <TabPanel value="changelog">Changelog content</TabPanel>
    </Tabs>
  );
}

// .venomous--Tabs {
//   display: flex;
//   gap: 16px;
//   align-items: flex-start;
// }
// .venomous--Tabs > [role='tablist'] {
//   display: flex;
//   flex-direction: column;
//   gap: 4px;
//   min-width: 140px;
// }
`,
      },
    },
  },
};

// keepMounted sample —— 演示「切 tab 后 panel 内表单输入不丢失」。
// keepMounted 在 TabPanel 单条上声明：consumer 按需选择哪个 panel 保留 DOM——
//   - 不传 / false（默认）：该 panel 未激活时 unmount，input 重挂会重置
//   - true：该 panel 始终在 DOM，仅切 hidden，input 实例保留，输入还在
function KeepMountedDemo({ args }: { args: Args }) {
  // 这个 demo 的 panel value 是 form-a / form-b，meta 默认的 defaultValue='overview'
  // 在这里找不到匹配 panel——必须剥掉，再用本 demo 自己的 defaultValue。
  const { value: _v, defaultValue: _dv, __mode__: _m, __controlMode__: _c, ...rest } = args;
  void _v;
  void _dv;
  void _m;
  void _c;
  return (
    <Tabs {...rest} defaultValue="form-a">
      <TabTitle value="form-a">Form A</TabTitle>
      <TabTitle value="form-b">Form B</TabTitle>

      <TabPanel value="form-a" keepMounted>
        <p>Type something, switch tabs, come back — input is preserved.</p>
        <input placeholder="form A input" defaultValue="" style={{ marginTop: 8 }} />
      </TabPanel>
      <TabPanel value="form-b" keepMounted>
        <p>Same applies here.</p>
        <input placeholder="form B input" defaultValue="" style={{ marginTop: 8 }} />
      </TabPanel>
    </Tabs>
  );
}

export const KeepMountedUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <KeepMountedDemo args={args} key="keepMounted-stable" />,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Tabs, TabTitle, TabPanel } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Tabs.css';

export default function App() {
  return (
    <Tabs defaultValue="form-a">
      <TabTitle value="form-a">Form A</TabTitle>
      <TabTitle value="form-b">Form B</TabTitle>

      <TabPanel value="form-a" keepMounted>
        <input placeholder="form A input" />
      </TabPanel>
      <TabPanel value="form-b" keepMounted>
        <input placeholder="form B input" />
      </TabPanel>
    </Tabs>
  );
}`,
      },
    },
  },
};
