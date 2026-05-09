<script setup lang="ts">
import { computed, inject, useAttrs, type StyleValue } from 'vue';
import { TOOLTIP_INJECT_KEY } from '@packages/vue/composables';
import { COMPONENTS } from '@packages/utils/classnames';
import type { TooltipTriggerProps } from './Tooltip.type';

// 容器组件：渲染为 span（inline，包裹 icon button / 链接 / label 等不破坏布局）。
// 不写 role / tabindex —— focus 与可点击语义由 children 实际承担，避免双 tab stop。
defineOptions({ inheritAttrs: false });

defineProps<TooltipTriggerProps>();

const ctx = inject(TOOLTIP_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <TooltipTrigger> must be used inside <Tooltip>.');
}

const attrs = useAttrs() as { class?: unknown; style?: unknown } & Record<string, unknown>;

const forwardedAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});

const triggerProps = computed(() => ctx.tooltip.getTriggerProps(forwardedAttrs.value));

const triggerBindProps = computed(() => {
  const { style: _s, ...rest } = triggerProps.value as Record<string, unknown> & {
    style?: unknown;
  };
  void _s;
  return rest;
});
const mergedStyle = computed<StyleValue>(
  () =>
    [(triggerProps.value as { style?: StyleValue }).style, attrs.style as StyleValue].filter(
      (v) => v != null,
    ) as StyleValue,
);
const mergedClass = computed(() => [COMPONENTS.TOOLTIP_TRIGGER, attrs.class as unknown]);

const setRef = (node: unknown) => {
  if (node instanceof HTMLElement) {
    ctx.tooltip.setTriggerEl(node);
  } else {
    ctx.tooltip.setTriggerEl(null);
  }
};
</script>

<template>
  <span v-bind="triggerBindProps" :ref="setRef" :class="mergedClass" :style="mergedStyle">
    <slot />
  </span>
</template>
