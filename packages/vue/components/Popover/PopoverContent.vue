<script setup lang="ts">
import { computed, inject, onMounted, ref, useAttrs, watch, type StyleValue } from 'vue';
import { POPOVER_INJECT_KEY } from '@packages/vue/composables';
import { COMPONENTS } from '@packages/utils/classnames';
import type { PopoverContentProps } from './Popover.type';

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<PopoverContentProps>(), {
  keepMounted: false,
  matchTriggerWidth: true,
});

const ctx = inject(POPOVER_INJECT_KEY, null);
if (!ctx) {
  throw new Error('[venomous-ui] <PopoverContent> must be used inside <Popover>.');
}

const attrs = useAttrs() as { class?: unknown; style?: unknown } & Record<string, unknown>;

// SSR/hydrate 首帧不渲染，避免「无定位 → 0,0 闪 → Teleport」的视觉抖动
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const renderInline = computed(() => props.container === null);
const shouldRender = computed(() => {
  if (!ctx.popover.isContentMounted(props.keepMounted)) return false;
  if (renderInline.value) return true;
  return mounted.value;
});
const useTeleport = computed(() => mounted.value && !renderInline.value);
const teleportTarget = computed(() => props.container ?? 'body');

// 剔除 class/style 改由模板 :class / :style 合并；attrs.style 字符串形态会被 hook spread 污染
const forwardedAttrs = computed(() => {
  const { class: _c, style: _s, ...rest } = attrs;
  return rest;
});

// 让 hook 知道 JS 路径下要挂 ResizeObserver；anchor 路径仅靠 getContentProps 的 style 即可
watch(
  () => props.matchTriggerWidth,
  (v) => ctx.popover.setMatchTriggerWidth(v),
  { immediate: true },
);

const contentProps = computed(() =>
  ctx.popover.getContentProps(
    {
      ...forwardedAttrs.value,
      hidden: !ctx.popover.open.value && props.keepMounted ? true : undefined,
    } as never,
    { matchTriggerWidth: props.matchTriggerWidth },
  ),
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
const mergedClass = computed(() => [COMPONENTS.POPOVER_CONTENT, attrs.class as unknown]);

const setRef = (node: unknown) => {
  if (node instanceof HTMLElement) {
    ctx.popover.setContentEl(node);
  } else if (node && typeof node === 'object') {
    const dollarEl = (node as { $el?: unknown }).$el;
    ctx.popover.setContentEl(dollarEl instanceof HTMLElement ? dollarEl : null);
  } else {
    ctx.popover.setContentEl(null);
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
