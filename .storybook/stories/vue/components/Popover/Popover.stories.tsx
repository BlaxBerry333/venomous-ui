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
import { Popover, PopoverContent, PopoverTrigger } from '@packages/vue/components/Popover';
import buttonCss from '@packages/styles/components/Button.scss?inline';
import popoverCss from '@packages/styles/components/Popover.scss?inline';

type Args = WithHeadlessStyledMode<{
  __controlMode__?: boolean;
  defaultOpen?: boolean;
  open?: boolean;
  placement?: string;
  offset?: number;
  collisionPadding?: number;
  flip?: boolean;
  shift?: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
  closeOnScroll?: boolean;
  returnFocusOnClose?: boolean;
  ariaRole?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
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

const contentInlineStyle = { background: 'pink', padding: '16px 8px' };

const UncontrolledPopoverDemo = defineComponent({
  props: {
    args: { type: Object, required: true },
  },
  setup(props) {
    return () => {
      // 剥离 args.open：meta 默认值仅给 controls 显示 toggle，传给 Popover 会触发受控分支
      const { open: _ignored, ...restArgs } = props.args as Record<string, unknown>;
      void _ignored;
      return h(Popover, restArgs, {
        default: () => [
          h(PopoverTrigger, null, {
            default: () => h(Button as never, null, { default: () => 'Open Popover' }),
          }),
          h(
            PopoverContent,
            { style: contentInlineStyle },
            {
              default: () => h('p', null, 'This is PopoverContent.'),
            },
          ),
        ],
      });
    };
  },
});

const ControlledPopoverDemo = defineComponent({
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
        Popover,
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
            h(PopoverTrigger, null, {
              default: () =>
                h(Button as never, null, { default: () => 'Open Popover (controlled)' }),
            }),
            h(
              PopoverContent,
              { style: contentInlineStyle },
              {
                default: () => [
                  h('p', null, 'This is PopoverContent.'),
                  h(
                    Button as never,
                    { onClick: () => (open.value = false) },
                    { default: () => 'Close' },
                  ),
                ],
              },
            ),
          ],
        },
      );
    };
  },
});

const meta: Meta<Args> = {
  title: 'vue/components/Popover',
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
    closeOnOutsideClick: { table: { category: 'Props' } },
    closeOnEsc: { table: { category: 'Props' } },
    closeOnScroll: { table: { category: 'Props' } },
    returnFocusOnClose: { table: { category: 'Props' } },
    ariaRole: {
      control: { type: 'select' },
      options: ['dialog', 'tooltip', 'menu', 'listbox', 'grid', 'tree'],
      table: { category: 'Props' },
    },
    ariaLabel: { table: { disable: true } },
    ariaLabelledBy: { table: { disable: true } },
    onOpenChange: { table: { category: 'Events' } },
  },
  decorators: [
    makeHeadlessStyledDecorator([
      { css: popoverCss, componentName: 'Popover' },
      { css: buttonCss, componentName: 'Button' },
    ]),
  ],
};

export default meta;

// key 绑 mode + defaultOpen：切换都强制 wrapper remount 让非受控初始值重新生效
export const Popover_: StoryObj<Args> = {
  name: 'Popover',
  render: (args) => {
    const isControlled = args.__controlMode__ === true;
    const Demo = isControlled ? ControlledPopoverDemo : UncontrolledPopoverDemo;
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
      component={UncontrolledPopoverDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent, Button } from 'venomous-ui/vue/components';
</script>

<template>
  <Popover aria-label="Demo popover">
    <PopoverTrigger>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent :style="{ background: 'pink', padding: '16px 8px' }">
      <p>This is PopoverContent.</p>
    </PopoverContent>
  </Popover>
</template>`,
      },
    },
  },
};

export const HeadlessControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledPopoverDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import { Popover, PopoverTrigger, PopoverContent, Button } from 'venomous-ui/vue/components';

const open = ref(false);
</script>

<template>
  <Popover :open="open" @open-change="(next) => (open = next)" aria-label="Demo popover">
    <PopoverTrigger>
      <Button>Open Popover (controlled)</Button>
    </PopoverTrigger>
    <PopoverContent :style="{ background: 'pink', padding: '16px 8px' }">
      <p>This is PopoverContent.</p>
      <Button @click="open = false">Close</Button>
    </PopoverContent>
  </Popover>
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
      component={UncontrolledPopoverDemo}
      props={{ args }}
    />
  ),
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';
</script>

<template>
  <Popover aria-label="Demo popover">
    <PopoverTrigger>
      <Button>Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent :style="{ background: 'pink', padding: '16px 8px' }">
      <p>This is PopoverContent.</p>
    </PopoverContent>
  </Popover>
</template>`,
      },
    },
  },
};

export const StyledControlled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true, __controlMode__: true },
  render: (args) => <StoryVueWrapper component={ControlledPopoverDemo} props={{ args }} />,
  parameters: {
    docs: {
      source: {
        language: 'html',
        code: `<script setup lang="ts">
import { ref } from 'vue';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/vue/components';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';

const open = ref(false);
</script>

<template>
  <Popover :open="open" @open-change="(next) => (open = next)" aria-label="Demo popover">
    <PopoverTrigger>
      <Button>Open Popover (controlled)</Button>
    </PopoverTrigger>
    <PopoverContent :style="{ background: 'pink', padding: '16px 8px' }">
      <p>This is PopoverContent.</p>
      <Button @click="open = false">Close</Button>
    </PopoverContent>
  </Popover>
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
            Popover,
            {
              ...restArgs,
              key: p,
              placement: p,
              ariaLabel: `Popover ${p}`,
            },
            {
              default: () => [
                h(PopoverTrigger, null, {
                  default: () =>
                    h(Button as never, { style: { minWidth: '100px' } }, { default: () => p }),
                }),
                h(
                  PopoverContent,
                  { style: contentInlineStyle },
                  {
                    default: () => h('p', null, 'This is PopoverContent.'),
                  },
                ),
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from 'venomous-ui/vue/components';
import type { ComponentBasePlacement } from 'venomous-ui/utils/types';
import 'venomous-ui/styles/components/Popover.css';
import 'venomous-ui/styles/components/Button.css';

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
    <Popover
      v-for="p in PLACEMENTS"
      :key="p"
      :placement="p"
      :aria-label="\`Popover \${p}\`"
    >
      <PopoverTrigger>
        <Button :style="{ minWidth: '100px' }">{{ p }}</Button>
      </PopoverTrigger>
      <PopoverContent :style="{ background: 'pink', padding: '16px 8px' }">
        <p>This is PopoverContent.</p>
      </PopoverContent>
    </Popover>
  </div>
</template>`,
      },
    },
  },
};
