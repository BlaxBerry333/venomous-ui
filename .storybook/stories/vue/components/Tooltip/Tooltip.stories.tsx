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
import { Tooltip, TooltipContent, TooltipTrigger } from '@packages/vue/components/Tooltip';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import tooltipCss from '@packages/styles/components/Tooltip.scss?inline';

type Args = WithHeadlessStyledMode<{
  __controlMode__?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  placement?: string;
  offset?: number;
  collisionPadding?: number;
  flip?: boolean;
  shift?: boolean;
  openDelay?: number;
  closeDelay?: number;
  closeOnEsc?: boolean;
  trigger?: 'hover' | 'click';
  disabled?: boolean;
  onOpenChange?: (open: boolean, reason?: string) => void;
}>;

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

// 默认 story 用：content 文本随 args.trigger 切换（preview 页面 controls 可改 trigger）
function renderPreviewContent(trigger: 'hover' | 'click' | undefined) {
  if (trigger === 'click') {
    return 'Click trigger: tooltip stays open until you click outside or press Esc.';
  }
  return 'Leaving the trigger auto-closes after closeDelay.';
}

// 触发器统一用带背景色的 div —— 跟具体业务组件解耦，纯展示 Tooltip 自身的定位/触发能力
const triggerBoxStyle = {
  background: 'pink',
  textAlign: 'center',
  padding: '0 16px',
};

const PreviewUncontrolledTooltipDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    return () => {
      // 剥离 args.open：meta 默认值仅给 controls 显示 toggle，传给 Tooltip 会触发受控分支
      const { open: _ignored, ...restArgs } = props.args as Record<string, unknown>;
      void _ignored;
      const trigger = (props.args as { trigger?: 'hover' | 'click' }).trigger;
      const label = trigger === 'click' ? 'Click me' : 'Hover me';
      return h(Tooltip, restArgs, {
        default: () => [
          h(TooltipTrigger, null, {
            default: () => h('div', { style: triggerBoxStyle }, label),
          }),
          h(TooltipContent, null, {
            default: () => renderPreviewContent(trigger),
          }),
        ],
      });
    };
  },
});

const PreviewControlledTooltipDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    const argsOpen = () => (props.args as { open?: boolean }).open;
    const open = ref(argsOpen() ?? false);
    watch(argsOpen, (next) => {
      if (next !== undefined) open.value = next;
    });
    return () => {
      const trigger = (props.args as { trigger?: 'hover' | 'click' }).trigger;
      const label = trigger === 'click' ? 'Click me' : 'Hover me';
      return h(
        Tooltip,
        {
          ...(props.args as Record<string, unknown>),
          open: open.value,
          onOpenChange: (next: boolean, reason?: string) => {
            (props.args as { onOpenChange?: (n: boolean, r?: string) => void }).onOpenChange?.(
              next,
              reason,
            );
            open.value = next;
          },
        },
        {
          default: () => [
            h(TooltipTrigger, null, {
              default: () => h('div', { style: triggerBoxStyle }, label),
            }),
            h(TooltipContent, null, {
              default: () => renderPreviewContent(trigger),
            }),
          ],
        },
      );
    };
  },
});

// docs 页面 4 个固定 hover demo
const HoverUncontrolledTooltipDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    return () => {
      const { open: _ignored, ...restArgs } = props.args as Record<string, unknown>;
      void _ignored;
      return h(
        Tooltip,
        { ...restArgs, trigger: 'hover' },
        {
          default: () => [
            h(TooltipTrigger, null, {
              default: () => h('div', { style: triggerBoxStyle }, 'Hover me'),
            }),
            h(TooltipContent, null, {
              default: () => 'Leaving the trigger auto-closes after closeDelay.',
            }),
          ],
        },
      );
    };
  },
});

const HoverControlledTooltipDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    const argsOpen = () => (props.args as { open?: boolean }).open;
    const open = ref(argsOpen() ?? false);
    watch(argsOpen, (next) => {
      if (next !== undefined) open.value = next;
    });
    return () => {
      return h(
        Tooltip,
        {
          ...(props.args as Record<string, unknown>),
          trigger: 'hover',
          open: open.value,
          onOpenChange: (next: boolean, reason?: string) => {
            (props.args as { onOpenChange?: (n: boolean, r?: string) => void }).onOpenChange?.(
              next,
              reason,
            );
            open.value = next;
          },
        },
        {
          default: () => [
            h(TooltipTrigger, null, {
              default: () => h('div', { style: triggerBoxStyle }, 'Hover me'),
            }),
            h(TooltipContent, null, {
              default: () => 'Leaving the trigger auto-closes after closeDelay.',
            }),
          ],
        },
      );
    };
  },
});

const meta: Meta<Args> = {
  title: 'vue/components/Tooltip',
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
      description: 'on = 受控（demo 内部 ref 驱动 open）；off = 非受控（用 defaultOpen）',
      control: { type: 'boolean' },
      table: { category: 'Controlled/Uncontrolled' },
    },
    defaultOpen: {
      description:
        '非受控初始值，仅 mount 时读取一次。在 controls 里改会触发 story remount 以重新生效。',
      table: { category: 'Props' },
      if: { arg: '__controlMode__', truthy: false },
    },
    open: {
      description: '受控 open 状态。controls 切换会反向同步 demo 内部 ref，便于测试受控接入。',
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
    onOpenChange: { table: { category: 'Events' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: tooltipCss, componentName: 'Tooltip' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

// key 绑 mode + defaultOpen：切换都强制 wrapper remount 让非受控初始值重新生效
export const Tooltip_: StoryObj<Args> = {
  name: 'Tooltip',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? PreviewControlledTooltipDemo : PreviewUncontrolledTooltipDemo;
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
      component={HoverUncontrolledTooltipDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/vue/components';
</script>

<template>
  <Tooltip>
    <TooltipTrigger>
      <div :style="{ background: 'pink', textAlign: 'center', padding: '0 16px' }">Hover me</div>
    </TooltipTrigger>
    <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
  </Tooltip>
</template>`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={HoverControlledTooltipDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/vue/components';

const open = ref(false);
</script>

<template>
  <Tooltip :open="open" @open-change="(next) => (open = next)">
    <TooltipTrigger>
      <div :style="{ background: 'pink', textAlign: 'center', padding: '0 16px' }">Hover me</div>
    </TooltipTrigger>
    <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
  </Tooltip>
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
      component={HoverUncontrolledTooltipDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tooltip.css';
</script>

<template>
  <Tooltip>
    <TooltipTrigger>
      <div :style="{ background: 'pink', textAlign: 'center', padding: '0 16px' }">Hover me</div>
    </TooltipTrigger>
    <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
  </Tooltip>
</template>`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={HoverControlledTooltipDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tooltip.css';

const open = ref(false);
</script>

<template>
  <Tooltip :open="open" @open-change="(next) => (open = next)">
    <TooltipTrigger>
      <div :style="{ background: 'pink', textAlign: 'center', padding: '0 16px' }">Hover me</div>
    </TooltipTrigger>
    <TooltipContent>Leaving the trigger auto-closes after closeDelay.</TooltipContent>
  </Tooltip>
</template>`,
      },
    },
  },
};

const PlacementMatrixDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    return () => {
      const {
        open: _ignored,
        placement: _placementIgnored,
        ...restArgs
      } = props.args as Record<string, unknown>;
      void _ignored;
      void _placementIgnored;
      return h(
        'div',
        {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '24px',
            padding: '80px',
          },
        },
        PLACEMENTS.map((p) =>
          h(
            Tooltip,
            {
              ...restArgs,
              key: p,
              placement: p,
            },
            {
              default: () => [
                h(TooltipTrigger, null, {
                  default: () => h('div', { style: triggerBoxStyle }, p),
                }),
                h(TooltipContent, null, { default: () => p }),
              ],
            },
          ),
        ),
      );
    };
  },
});

export const PlacementUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <StoryVueWrapper component={PlacementMatrixDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent } from 'venomous-ui/vue/components';
import type { ComponentBasePlacement } from 'venomous-ui/utils/types';

const PLACEMENTS: readonly ComponentBasePlacement[] = [
  'top', 'top-start', 'top-end',
  'bottom', 'bottom-start', 'bottom-end',
  'left', 'left-start', 'left-end',
  'right', 'right-start', 'right-end',
];
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      gap: '24px',
      padding: '80px',
    }"
  >
    <Tooltip
      v-for="p in PLACEMENTS"
      :key="p"
      :placement="p"
    >
      <TooltipTrigger>
        <div :style="{ background: 'pink', textAlign: 'center', padding: '0 16px' }">{{ p }}</div>
      </TooltipTrigger>
      <TooltipContent>{{ p }}</TooltipContent>
    </Tooltip>
  </div>
</template>`,
      },
    },
  },
};

const ClickTriggerDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    return () => {
      const {
        open: _ignored,
        trigger: _triggerIgnored,
        ...restArgs
      } = props.args as Record<string, unknown>;
      void _ignored;
      void _triggerIgnored;
      return h(
        Tooltip,
        { ...restArgs, trigger: 'click' },
        {
          default: () => [
            h(TooltipTrigger, null, {
              default: () => h(Button as never, null, { default: () => 'Click me' }),
            }),
            h(TooltipContent, null, {
              default: () => 'Click outside or press Esc to close.',
            }),
          ],
        },
      );
    };
  },
});

export const ClickTriggerUsage: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: false },
  render: (args) => <StoryVueWrapper component={ClickTriggerDemo} props={{ args }} />,
  parameters: {
    docs: {
      description: {
        story:
          'Click trigger keeps the tooltip open until the user clicks outside or presses Esc — hover does not close it. Use this when content needs a deliberate dismiss action.',
      },
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Button,
} from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Tooltip.css';
import 'venomous-ui/styles/components/Button.css';
</script>

<template>
  <Tooltip trigger="click">
    <TooltipTrigger>
      <Button>Click me</Button>
    </TooltipTrigger>
    <TooltipContent>Click outside or press Esc to close.</TooltipContent>
  </Tooltip>
</template>`,
      },
    },
  },
};
