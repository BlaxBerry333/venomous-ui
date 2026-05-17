<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue';
import { COMPONENTS } from '@packages/utils/classnames';
import type { TabTitleProps } from './Tabs.type';
import { TABS_INJECT_KEY } from './shared';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<TabTitleProps>(), {
  disabled: false,
});

const ctx = inject(TABS_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <TabTitle> must be used inside <Tabs>.');
}

const attrs = useAttrs() as {
  'data-tabs-resolved-value'?: string;
  class?: unknown;
} & Record<string, unknown>;

// value 取值优先级：显式 props.value > Tabs 父组件预扫注入的 data-tabs-resolved-value
const resolvedValue = computed<string>(() => {
  const v = props.value ?? attrs['data-tabs-resolved-value'];
  // Tabs 预扫总注入 data-tabs-resolved-value 给被识别的 TabTitle；防御不可达
  /* v8 ignore next 4 */
  if (v === undefined) {
    throw new Error(
      '[venomous-ui] <TabTitle> 必须是 <Tabs> 的直接子（或在 v-for / Fragment 内），或显式传 `value`。',
    );
  }
  return v;
});

// 剔除 `class`：内置 class 与消费方 class 在模板 :class="[内置, attrs.class]" 合并；
// 若仍在 spread 里写 class 会被 v-bind 后写覆盖，消费方 class 静默丢失。
const forwardedAttrs = computed(() => {
  const { 'data-tabs-resolved-value': _v, class: _c, ...rest } = attrs;
  void _v;
  void _c;
  return rest;
});

const triggerProps = computed(() =>
  ctx.tabs.getTriggerProps(
    props.disabled
      ? { value: resolvedValue.value, disabled: true }
      : { value: resolvedValue.value },
    forwardedAttrs.value,
  ),
);
</script>

<template>
  <button v-bind="triggerProps" :class="[COMPONENTS.TABS_TITLE, attrs.class]">
    <slot />
  </button>
</template>
