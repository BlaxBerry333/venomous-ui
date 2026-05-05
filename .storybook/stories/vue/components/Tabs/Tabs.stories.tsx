import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { defineComponent, h, ref, watch } from 'vue';
import {
  StoryVueWrapper,
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Tabs, TabTitle, TabPanel } from '@packages/vue/components/Tabs';
import tabsCss from '@packages/styles/components/Tabs.scss?inline';

type Args = WithHeadlessStyledMode<{
  __controlMode__?: boolean;
  defaultValue?: string;
  value?: string;
  activationMode?: 'automatic' | 'manual';
  loop?: boolean;
  onValueChange?: (value: string) => void;
}>;

const TAB_ITEMS: ReadonlyArray<{ value: string; label: string; disabled?: boolean }> = [
  { value: 'overview', label: 'Overview' },
  { value: 'usage', label: 'Usage' },
  { value: 'api', label: 'API' },
  { value: 'changelog', label: 'Changelog', disabled: true },
];

const UncontrolledTabsDemo = defineComponent({
  props: { args: { type: Object, required: true } },
  setup(props) {
    return () => {
      const a = props.args as Args;
      const { value: _v, __mode__: _m, __controlMode__: _c, ...rest } = a;
      void _v;
      void _m;
      void _c;
      return h(Tabs, rest as Record<string, unknown>, {
        default: () => [
          ...TAB_ITEMS.map((item) =>
            h(
              TabTitle,
              // disabled 按存在性展开：item.disabled 是 boolean | undefined，
              // exactOptionalPropertyTypes 下不能直接传 undefined。
              {
                key: item.value,
                value: item.value,
                ...(item.disabled === true ? { disabled: true } : {}),
              },
              { default: () => item.label },
            ),
          ),
          ...TAB_ITEMS.map((item) =>
            h(
              TabPanel,
              { key: item.value, value: item.value },
              { default: () => h('p', `Panel content for "${item.label}".`) },
            ),
          ),
        ],
      });
    };
  },
});

const ControlledTabsDemo = defineComponent({
  props: { args: { type: Object, required: true } },
  setup(props) {
    const argsValue = () => (props.args as Args).value;
    const value = ref<string | undefined>(argsValue() ?? TAB_ITEMS[0]?.value);
    watch(argsValue, (next) => {
      if (next !== undefined) value.value = next;
    });
    return () => {
      const a = props.args as Args;
      const { __mode__: _m, __controlMode__: _c, value: _argsV, ...rest } = a;
      void _m;
      void _c;
      void _argsV;
      return h(
        Tabs,
        {
          ...(rest as Record<string, unknown>),
          ...(value.value !== undefined ? { value: value.value } : {}),
          'onValue-change': (next: string) => {
            a.onValueChange?.(next);
            value.value = next;
          },
        },
        {
          default: () => [
            ...TAB_ITEMS.map((item) =>
              h(
                TabTitle,
                {
                  key: item.value,
                  value: item.value,
                  ...(item.disabled === true ? { disabled: true } : {}),
                },
                { default: () => item.label },
              ),
            ),
            ...TAB_ITEMS.map((item) =>
              h(
                TabPanel,
                { key: item.value, value: item.value },
                { default: () => h('p', `Panel content for "${item.label}".`) },
              ),
            ),
          ],
        },
      );
    };
  },
});

const meta: Meta<Args> = {
  title: 'vue/components/Tabs',
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
      description: 'on = 受控（demo 内部 ref 驱动 value）；off = 非受控（用 defaultValue）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    defaultValue: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 wrapper remount 以重新生效。',
      control: { type: 'select' },
      options: TAB_ITEMS.map((it) => it.value),
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    value: {
      description: '受控选中值。controls 切换会反向同步 demo 内部 ref。',
      control: { type: 'select' },
      options: TAB_ITEMS.map((it) => it.value),
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: true },
    },
    activationMode: {
      control: { type: 'inline-radio' },
      options: ['automatic', 'manual'],
      table: { category: 'Props' },
    },
    loop: { control: { type: 'boolean' }, table: { category: 'Props' } },
    onValueChange: { table: { category: 'Events' } },
  },
  decorators: [makeHeadlessStyledDecorator(tabsCss, 'Tabs')],
};

export default meta;

export const Tabs_: StoryObj<Args> = {
  name: 'Tabs',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? ControlledTabsDemo : UncontrolledTabsDemo;
    return (
      <StoryVueWrapper
        key={`${String(isControlled)}-${String(args.defaultValue)}`}
        component={Demo}
        props={{ args }}
      />
    );
  },
};

export const HeadlessUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: false },
  render: (args) => (
    <StoryVueWrapper
      key={String(args.defaultValue)}
      component={UncontrolledTabsDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
</script>

<template>
  <Tabs defaultValue="overview">
    <TabTitle value="overview">Overview</TabTitle>
    <TabTitle value="usage">Usage</TabTitle>
    <TabTitle value="api">API</TabTitle>
    <TabTitle value="changelog" :disabled="true">Changelog</TabTitle>

    <TabPanel value="overview">Overview content</TabPanel>
    <TabPanel value="usage">Usage content</TabPanel>
    <TabPanel value="api">API content</TabPanel>
    <TabPanel value="changelog">Changelog content</TabPanel>
  </Tabs>
</template>`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledTabsDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';

const value = ref('overview');
</script>

<template>
  <Tabs :value="value" @value-change="(next) => (value = next)">
    <TabTitle value="overview">Overview</TabTitle>
    <TabTitle value="usage">Usage</TabTitle>
    <TabTitle value="api">API</TabTitle>
    <TabTitle value="changelog" :disabled="true">Changelog</TabTitle>

    <TabPanel value="overview">Overview content</TabPanel>
    <TabPanel value="usage">Usage content</TabPanel>
    <TabPanel value="api">API content</TabPanel>
    <TabPanel value="changelog">Changelog content</TabPanel>
  </Tabs>
</template>`,
      },
    },
  },
};

export const StyledUncontrolled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => (
    <StoryVueWrapper
      key={String(args.defaultValue)}
      component={UncontrolledTabsDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tabs.css';
</script>

<template>
  <Tabs defaultValue="overview">
    <TabTitle value="overview">Overview</TabTitle>
    <TabTitle value="usage">Usage</TabTitle>
    <TabTitle value="api">API</TabTitle>
    <TabTitle value="changelog" :disabled="true">Changelog</TabTitle>

    <TabPanel value="overview">Overview content</TabPanel>
    <TabPanel value="usage">Usage content</TabPanel>
    <TabPanel value="api">API content</TabPanel>
    <TabPanel value="changelog">Changelog content</TabPanel>
  </Tabs>
</template>`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledTabsDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tabs.css';

const value = ref('overview');
</script>

<template>
  <Tabs :value="value" @value-change="(next) => (value = next)">
    <TabTitle value="overview">Overview</TabTitle>
    <TabTitle value="usage">Usage</TabTitle>
    <TabTitle value="api">API</TabTitle>
    <TabTitle value="changelog" :disabled="true">Changelog</TabTitle>

    <TabPanel value="overview">Overview content</TabPanel>
    <TabPanel value="usage">Usage content</TabPanel>
    <TabPanel value="api">API content</TabPanel>
    <TabPanel value="changelog">Changelog content</TabPanel>
  </Tabs>
</template>`,
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

const VerticalTabsDemo = defineComponent({
  props: { args: { type: Object, required: true } },
  setup(props) {
    return () => {
      const a = props.args as Args;
      const { value: _v, __mode__: _m, __controlMode__: _c, ...rest } = a;
      void _v;
      void _m;
      void _c;
      return h('div', { class: VERTICAL_DEMO_SCOPE }, [
        h('style', VERTICAL_CSS),
        h(
          Tabs,
          { ...(rest as Record<string, unknown>) },
          {
            default: () => [
              ...TAB_ITEMS.map((item) =>
                h(
                  TabTitle,
                  {
                    key: item.value,
                    value: item.value,
                    ...(item.disabled === true ? { disabled: true } : {}),
                  },
                  { default: () => item.label },
                ),
              ),
              ...TAB_ITEMS.map((item) =>
                h(
                  TabPanel,
                  { key: item.value, value: item.value },
                  { default: () => h('p', `Panel content for "${item.label}".`) },
                ),
              ),
            ],
          },
        ),
      ]);
    };
  },
});

export const VerticalUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => (
    <StoryVueWrapper
      key={String(args.defaultValue)}
      component={VerticalTabsDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tabs.css';
</script>

<template>
  <Tabs defaultValue="overview">
    <TabTitle value="overview">Overview</TabTitle>
    <TabTitle value="usage">Usage</TabTitle>
    <TabTitle value="api">API</TabTitle>
    <TabTitle value="changelog" :disabled="true">Changelog</TabTitle>

    <TabPanel value="overview">Overview content</TabPanel>
    <TabPanel value="usage">Usage content</TabPanel>
    <TabPanel value="api">API content</TabPanel>
    <TabPanel value="changelog">Changelog content</TabPanel>
  </Tabs>
</template>

<style>
.venomous--Tabs {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.venomous--Tabs > [role='tablist'] {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
}
</style>`,
      },
    },
  },
};

// keepMounted sample —— 在 TabPanel 单条上声明 keepMounted，表单输入跨 tab 切换不丢失
const KeepMountedTabsDemo = defineComponent({
  props: { args: { type: Object, required: true } },
  setup(props) {
    return () => {
      const a = props.args as Args;
      // 这个 demo 的 panel value 是 form-a / form-b，meta 默认的 defaultValue='overview'
      // 在这里找不到匹配 panel——必须剥掉，再用本 demo 自己的 defaultValue。
      const { value: _v, defaultValue: _dv, __mode__: _m, __controlMode__: _c, ...rest } = a;
      void _v;
      void _dv;
      void _m;
      void _c;
      return h(
        Tabs,
        { ...(rest as Record<string, unknown>), defaultValue: 'form-a' },
        {
          default: () => [
            h(TabTitle, { key: 'a', value: 'form-a' }, { default: () => 'Form A' }),
            h(TabTitle, { key: 'b', value: 'form-b' }, { default: () => 'Form B' }),
            h(
              TabPanel,
              { key: 'a-panel', value: 'form-a', keepMounted: true },
              {
                default: () => [
                  h('p', 'Type something, switch tabs, come back — input is preserved.'),
                  h('input', { placeholder: 'form A input', style: { marginTop: '8px' } }),
                ],
              },
            ),
            h(
              TabPanel,
              { key: 'b-panel', value: 'form-b', keepMounted: true },
              {
                default: () => [
                  h('p', 'Same applies here.'),
                  h('input', { placeholder: 'form B input', style: { marginTop: '8px' } }),
                ],
              },
            ),
          ],
        },
      );
    };
  },
});

export const KeepMountedUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => (
    <StoryVueWrapper key="keepMounted-stable" component={KeepMountedTabsDemo} props={{ args }} />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tabs, TabTitle, TabPanel } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tabs.css';
</script>

<template>
  <Tabs defaultValue="form-a">
    <TabTitle value="form-a">Form A</TabTitle>
    <TabTitle value="form-b">Form B</TabTitle>

    <TabPanel value="form-a" :keepMounted="true">
      <input placeholder="form A input" />
    </TabPanel>
    <TabPanel value="form-b" :keepMounted="true">
      <input placeholder="form B input" />
    </TabPanel>
  </Tabs>
</template>`,
      },
    },
  },
};
