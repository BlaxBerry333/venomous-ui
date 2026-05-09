<script setup lang="ts">
import { computed, inject, useAttrs, type StyleValue } from 'vue';
import { POPOVER_INJECT_KEY } from '@packages/vue/composables';
import { COMPONENTS } from '@packages/utils/classnames';
import type { PopoverTriggerProps } from './Popover.type';

// 容器组件：渲染一个 div，把 trigger props（onClick / aria-* / role / tabindex / anchorName）
// 注入到 div 上。slot 任意，由其撑大容器尺寸（matchTriggerWidth 会读容器宽度）。
defineOptions({ inheritAttrs: false });

defineProps<PopoverTriggerProps>();

const ctx = inject(POPOVER_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <PopoverTrigger> must be used inside <Popover>.');
}

const attrs = useAttrs() as { class?: unknown; style?: unknown } & Record<string, unknown>;

// class / style 改由模板合并；attrs 透传给 hook 仅做语义层属性
const forwardedAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});

const triggerProps = computed(() => ctx.popover.getTriggerProps(forwardedAttrs.value));

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
const mergedClass = computed(() => [COMPONENTS.POPOVER_TRIGGER, attrs.class as unknown]);

const setRef = (node: unknown) => {
  if (node instanceof HTMLElement) {
    ctx.popover.setTriggerEl(node);
  } else {
    ctx.popover.setTriggerEl(null);
  }
};
</script>

<template>
  <div v-bind="triggerBindProps" :ref="setRef" :class="mergedClass" :style="mergedStyle">
    <slot />
  </div>
</template>
