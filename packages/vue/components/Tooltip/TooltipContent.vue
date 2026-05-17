<script setup lang="ts">
import { computed, inject, onMounted, ref, useAttrs, type StyleValue } from 'vue';
import { TOOLTIP_INJECT_KEY } from '@packages/vue/composables';
import { COMPONENTS } from '@packages/utils/classnames';
import type { TooltipContentProps } from './Tooltip.type';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<TooltipContentProps>(), {
  keepMounted: false,
});

const ctx = inject(TOOLTIP_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <TooltipContent> must be used inside <Tooltip>.');
}

const attrs = useAttrs() as { class?: unknown; style?: unknown } & Record<string, unknown>;

// SSR/hydrate 首帧不渲染，避免「无定位 → 0,0 闪 → Teleport」的视觉抖动
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const renderInline = computed(() => props.container === null);
const shouldRender = computed(() => {
  if (!ctx.tooltip.isContentMounted(props.keepMounted)) return false;
  if (renderInline.value) return true;
  return mounted.value;
});
const useTeleport = computed(() => mounted.value && !renderInline.value);
const teleportTarget = computed(() => props.container ?? 'body');

const forwardedAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});

const contentProps = computed(() =>
  ctx.tooltip.getContentProps({
    ...forwardedAttrs.value,
    hidden: !ctx.tooltip.open.value && props.keepMounted ? true : undefined,
  } as never),
);

const contentBindProps = computed(() => {
  const { style: _s, ...rest } = contentProps.value as Record<string, unknown> & {
    style?: unknown;
  };
  void _s;
  return rest;
});
const mergedStyle = computed<StyleValue>(
  () =>
    [(contentProps.value as { style?: StyleValue }).style, attrs.style as StyleValue].filter(
      (v) => v != null,
    ) as StyleValue,
);
const mergedClass = computed(() => [COMPONENTS.TOOLTIP_CONTENT, attrs.class as unknown]);

const setRef = (node: unknown) => {
  if (node instanceof HTMLElement) {
    ctx.tooltip.setContentEl(node);
    /* v8 ignore start */
  } else if (node && typeof node === 'object') {
    // SFC :ref 在大多数情况下传入裸 HTMLElement；自定义组件实例（$el unwrap）边角不可达
    const dollarEl = (node as { $el?: unknown }).$el;
    ctx.tooltip.setContentEl(dollarEl instanceof HTMLElement ? dollarEl : null);
    /* v8 ignore stop */
  } else {
    ctx.tooltip.setContentEl(null);
  }
};
</script>

<template>
  <Teleport v-if="shouldRender && useTeleport" :to="teleportTarget">
    <div v-bind="contentBindProps" :ref="setRef" :class="mergedClass" :style="mergedStyle">
      <slot />
    </div>
  </Teleport>
  <div
    v-else-if="shouldRender"
    v-bind="contentBindProps"
    :ref="setRef"
    :class="mergedClass"
    :style="mergedStyle"
  >
    <slot />
  </div>
</template>
