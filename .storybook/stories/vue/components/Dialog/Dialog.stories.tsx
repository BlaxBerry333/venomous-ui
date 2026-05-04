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
import { Button } from '@packages/vue/components/Button';
import { Dialog, type DialogInstance } from '@packages/vue/components/Dialog';
import { COMPONENTS } from '@packages/utils/classnames';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import dialogCss from '@packages/styles/components/Dialog.scss?inline';

type Args = WithHeadlessStyledMode<{
  __controlMode__?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  lockScroll?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  onOpenChange?: (open: boolean) => void;
}>;

// 触发器用内置 Button：让 styled 切换时触发器和 Dialog 一起出样式。
// decorator 同时注入 Dialog + Button 两份 CSS，避免触发器在 styled 模式下「没样式」。
//
// dialogRef 用 Vue ref()（不是 plain let）：plain let 不进 reactivity，
// 在某些 Storybook + Vue render function 调度时序下，setRef 回写后按钮 onClick
// 闭包仍读到旧 null。改 ref() 让 setRef 写入后被 reactivity 系统跟踪。
const UncontrolledDialogDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    const dialogRef = ref<DialogInstance | null>(null);
    const setDialogRef = (vm: unknown) => {
      dialogRef.value = vm as DialogInstance | null;
    };
    return () => {
      // 剥离 args.open：meta 给了 open 默认值是为了让 controls 显示 toggle 控件，
      // 但非受控 demo 不能把 open 透给 Dialog（否则触发受控分支，命令式 ref 失效）。
      const { open: _ignored, ...restArgs } = props.args as Record<string, unknown>;
      void _ignored;
      return h('div', [
        h(
          Button as never,
          { onClick: () => dialogRef.value?.open() },
          { default: () => 'Open Dialog' },
        ),
        h(
          Dialog,
          { ref: setDialogRef, ...restArgs },
          {
            default: () => [
              h('header', { class: COMPONENTS.DIALOG_HEADER }, [
                h('h2', { class: COMPONENTS.DIALOG_TITLE }, 'Dialog title'),
              ]),
              h(
                'div',
                { class: COMPONENTS.DIALOG_BODY },
                'Native <dialog> gives you focus trap, inert background and Esc-to-close for free.',
              ),
              h('footer', { class: COMPONENTS.DIALOG_FOOTER }, [
                h(
                  Button as never,
                  { onClick: () => dialogRef.value?.close() },
                  { default: () => 'Close' },
                ),
              ]),
            ],
          },
        ),
      ]);
    };
  },
});

const ControlledDialogDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    const argsOpen = () => (props.args as { open?: boolean }).open;
    const open = ref(argsOpen() ?? false);
    // controls 改 args.open 时反向同步内部 ref，让 controls 切换能驱动 dialog 开关。
    // demo 内部按钮 / Esc / backdrop 触发的 open.value 写入不依赖此 watch（args.open 不变就不跑）。
    watch(argsOpen, (next) => {
      if (next !== undefined) open.value = next;
    });
    return () =>
      h('div', [
        h(
          Button as never,
          { onClick: () => (open.value = true) },
          { default: () => 'Open Dialog (controlled)' },
        ),
        h(
          Dialog,
          {
            ...(props.args as Record<string, unknown>),
            open: open.value,
            onOpenChange: (next: boolean) => {
              (props.args as { onOpenChange?: (n: boolean) => void }).onOpenChange?.(next);
              open.value = next;
            },
          },
          {
            default: () => [
              h('header', { class: COMPONENTS.DIALOG_HEADER }, [
                h('h2', { class: COMPONENTS.DIALOG_TITLE }, 'Dialog Title (controlled)'),
              ]),
              h(
                'div',
                { class: COMPONENTS.DIALOG_BODY },
                'Open state lives in the consumer; Esc / backdrop notify via @open-change.',
              ),
              h('footer', { class: COMPONENTS.DIALOG_FOOTER }, [
                h(
                  Button as never,
                  { onClick: () => (open.value = false) },
                  { default: () => 'Close' },
                ),
              ]),
            ],
          },
        ),
      ]);
  },
});

const meta: Meta<Args> = {
  title: 'vue/components/Dialog',
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
      description: 'on = 受控（demo 内部 ref 驱动 open）；off = 非受控（用 defaultOpen + ref）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    // defaultOpen 仅非受控模式下可调；受控模式藏起来避免引导消费方同时传 open + defaultOpen。
    defaultOpen: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 story remount 以重新生效。',
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    // open 仅受控模式下展示；可编辑 boolean，demo 内部 ref 跟随 args.open 变化反向同步。
    open: {
      description: '受控 open 状态。controls 切换会反向同步 demo 内部 ref，便于测试受控接入。',
      control: { type: 'boolean' },
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: true },
    },
    closeOnBackdropClick: { table: { category: 'Props' } },
    closeOnEsc: { table: { category: 'Props' } },
    lockScroll: { table: { category: 'Props' } },
    ariaLabel: { table: { disable: true } },
    ariaLabelledBy: { table: { disable: true } },
    onOpenChange: { table: { category: 'Events' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: dialogCss, componentName: 'Dialog' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

// 默认 story：dev 侧边栏入口，按 __controlMode__ 切换演示受控 / 非受控。
// key 绑 mode + defaultOpen：mode 切换 / defaultOpen 改动都强制 wrapper remount，
// 让「非受控初始值」语义重新生效，避免两种 demo 残留状态串扰。
export const Dialog_: StoryObj<Args> = {
  name: 'Dialog',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? ControlledDialogDemo : UncontrolledDialogDemo;
    return (
      <StoryVueWrapper
        key={`${String(isControlled)}-${String(args.defaultOpen)}`}
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
      key={String(args.defaultOpen)}
      component={UncontrolledDialogDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, type DialogInstance, Button } from 'venomous-ui/vue/components';

const dialogRef = ref<DialogInstance | null>(null);
</script>

<template>
  <Button @click="dialogRef?.open()">Open</Button>
  <Dialog ref="dialogRef" aria-label="Demo dialog">
    <p>Hello</p>
    <Button @click="dialogRef?.close()">Close</Button>
  </Dialog>
</template>`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledDialogDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, Button } from 'venomous-ui/vue/components';

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open</Button>
  <Dialog :open="open" @open-change="(next) => (open = next)" aria-label="Demo dialog">
    <p>Hello</p>
    <Button @click="open = false">Close</Button>
  </Dialog>
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
      key={String(args.defaultOpen)}
      component={UncontrolledDialogDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, type DialogInstance, Button } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

const dialogRef = ref<DialogInstance | null>(null);
</script>

<template>
  <Button @click="dialogRef?.open()">Open</Button>
  <Dialog ref="dialogRef" aria-label="Demo dialog">
    <p>Hello</p>
    <Button @click="dialogRef?.close()">Close</Button>
  </Dialog>
</template>`,
      },
    },
  },
};

// Dialog 现状已经把 style 透传到 <dialog>，所以「自定义尺寸 / 全屏」
// 不需要新增 size prop —— 用户传 :style 即可覆盖默认 max-width / max-height。
// 三个例子：1（很小）/ 2（普通）/ fullscreen（全屏）；用户复制对应 style 字面量到自己代码里就能用。
const SIZE_OPTIONS_VUE: ReadonlyArray<{ label: string; style: Record<string, string> }> = [
  { label: '1', style: { minWidth: '240px', maxWidth: '320px' } },
  { label: '2', style: { minWidth: '480px', maxWidth: '640px' } },
  {
    label: 'fullscreen',
    style: {
      width: '100dvw',
      height: '100dvh',
      maxWidth: 'none',
      maxHeight: 'none',
      borderRadius: '0',
    },
  },
];

const formatStyleLiteral = (style: Record<string, string>) =>
  `:style="{${Object.entries(style)
    .map(([k, v]) => ` ${k}: '${v}'`)
    .join(',')} }"`;

const SizeUsageDialogDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    const dialogRef = ref<DialogInstance | null>(null);
    const setDialogRef = (vm: unknown) => {
      dialogRef.value = vm as DialogInstance | null;
    };
    const index = ref(0);
    return () => {
      const { open: _ignored, ...restArgs } = props.args as Record<string, unknown>;
      void _ignored;
      // index 永远来自 SIZE_OPTIONS_VUE.map 的 i，下标必定在范围内；
      // noUncheckedIndexedAccess 把元素类型推成 T | undefined，这里非空断言压回 T。
      const current = SIZE_OPTIONS_VUE[index.value]!;
      return h('div', [
        h(
          Button as never,
          { onClick: () => dialogRef.value?.open() },
          { default: () => 'Open Dialog' },
        ),
        h(
          Dialog,
          { ref: setDialogRef, ...restArgs, style: current.style },
          {
            default: () => [
              h(
                'div',
                { style: { display: 'flex', gap: '8px' } },
                SIZE_OPTIONS_VUE.map((opt, i) =>
                  h(
                    Button as never,
                    {
                      key: opt.label,
                      disabled: index.value === i,
                      onClick: () => (index.value = i),
                    },
                    { default: () => opt.label },
                  ),
                ),
              ),
              h(
                'code',
                { style: { display: 'block', marginTop: '8px' } },
                formatStyleLiteral(current.style),
              ),
            ],
          },
        ),
      ]);
    };
  },
});

export const SizeUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <StoryVueWrapper component={SizeUsageDialogDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, type DialogInstance, Button } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

const dialogRef = ref<DialogInstance | null>(null);
</script>

<template>
  <Button @click="dialogRef?.open()">Open</Button>

  <!-- Small -->
  <Dialog ref="dialogRef" :style="{ minWidth: '240px', maxWidth: '320px' }" aria-label="Small dialog" />

  <!-- Normal -->
  <Dialog ref="dialogRef" :style="{ minWidth: '480px', maxWidth: '640px' }" aria-label="Normal dialog" />

  <!-- Fullscreen -->
  <Dialog
    ref="dialogRef"
    :style="{ width: '100dvw', height: '100dvh', maxWidth: 'none', maxHeight: 'none', borderRadius: '0' }"
    aria-label="Fullscreen dialog"
  />
</template>`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledDialogDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Dialog, Button } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Dialog.css';
import 'venomous-ui/styles/components/Button.css';

const open = ref(false);
</script>

<template>
  <Button @click="open = true">Open</Button>
  <Dialog :open="open" @open-change="(next) => (open = next)" aria-label="Demo dialog">
    <p>Hello</p>
    <Button @click="open = false">Close</Button>
  </Dialog>
</template>`,
      },
    },
  },
};
