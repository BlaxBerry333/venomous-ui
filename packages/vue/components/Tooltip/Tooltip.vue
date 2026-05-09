<script setup lang="ts">
import { provide, useAttrs } from 'vue';
import { TOOLTIP_INJECT_KEY, useTooltip } from '@packages/vue/composables';
import type { TooltipProps } from './Tooltip.type';

// Root 不渲染 DOM；inheritAttrs:false 防 attrs 落到 slot 子节点。
// open 走 attrs 而非 props，规避 boolean prop 未传被默认注入 false 的陷阱（同 Popover.vue / Dialog.vue）。
defineOptions({ inheritAttrs: false });

type TooltipTypedProps = Omit<TooltipProps, 'open'>;
const props = defineProps<TooltipTypedProps>();
const emit = defineEmits<{
  'open-change': [open: boolean, reason?: string];
}>();

const attrs = useAttrs() as { open?: boolean } & Record<string, unknown>;

// getter 形态保 props 响应性
const tooltip = useTooltip(() => ({
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
  ...(attrs.open !== undefined ? { open: attrs.open } : {}),
  ...(props.placement !== undefined ? { placement: props.placement } : {}),
  ...(props.offset !== undefined ? { offset: props.offset } : {}),
  ...(props.collisionPadding !== undefined ? { collisionPadding: props.collisionPadding } : {}),
  ...(props.flip !== undefined ? { flip: props.flip } : {}),
  ...(props.shift !== undefined ? { shift: props.shift } : {}),
  ...(props.openDelay !== undefined ? { openDelay: props.openDelay } : {}),
  ...(props.closeDelay !== undefined ? { closeDelay: props.closeDelay } : {}),
  ...(props.closeOnEsc !== undefined ? { closeOnEsc: props.closeOnEsc } : {}),
  ...(props.trigger !== undefined ? { trigger: props.trigger } : {}),
  ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
  onOpenChange: (next, reason) => emit('open-change', next, reason),
}));

provide(TOOLTIP_INJECT_KEY, { tooltip });

defineExpose({
  get open() {
    return tooltip.open.value;
  },
  setOpen: tooltip.setOpen,
});
</script>

<template>
  <slot />
</template>
