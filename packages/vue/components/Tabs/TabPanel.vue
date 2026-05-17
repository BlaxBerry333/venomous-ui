<script setup lang="ts">
import { computed, inject, useAttrs } from 'vue';
import { COMPONENTS } from '@packages/utils/classnames';
import type { TabPanelProps } from './Tabs.type';
import { TABS_INJECT_KEY } from './shared';

defineOptions({ inheritAttrs: false });

const props = defineProps<TabPanelProps>();

const ctx = inject(TABS_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <TabPanel> must be used inside <Tabs>.');
}

const attrs = useAttrs() as {
  'data-tabs-resolved-value'?: string;
  class?: unknown;
} & Record<string, unknown>;

const resolvedValue = computed<string>(() => {
  const v = props.value ?? attrs['data-tabs-resolved-value'];
  // Tabs 预扫总注入 data-tabs-resolved-value 给被识别的 TabPanel；防御不可达
  /* v8 ignore next 4 */
  if (v === undefined) {
    throw new Error(
      '[venomous-ui] <TabPanel> 必须是 <Tabs> 的直接子（或在 v-for / Fragment 内），或显式传 `value`。',
    );
  }
  return v;
});

// 剔除 `class`：理由同 TabTitle
const forwardedAttrs = computed(() => {
  const { 'data-tabs-resolved-value': _v, class: _c, ...rest } = attrs;
  void _v;
  void _c;
  return rest;
});

// keepMounted=true：未激活仍渲染（hidden 切换）。默认 false 直接 unmount。
const keepMounted = computed<boolean>(() => props.keepMounted === true);

const shouldRender = computed(() =>
  ctx.tabs.isPanelMounted(resolvedValue.value, keepMounted.value),
);

const panelProps = computed(() =>
  ctx.tabs.getPanelProps(
    keepMounted.value
      ? { value: resolvedValue.value, keepMounted: true }
      : { value: resolvedValue.value },
    forwardedAttrs.value,
  ),
);
</script>

<template>
  <div v-if="shouldRender" v-bind="panelProps" :class="[COMPONENTS.TABS_PANEL, attrs.class]">
    <slot />
  </div>
</template>
