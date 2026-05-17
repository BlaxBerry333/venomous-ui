<script setup lang="ts">
import { provide, useAttrs } from 'vue';
import { POPOVER_INJECT_KEY, usePopover } from '@packages/vue/composables';
import type { PopoverProps } from './Popover.type';

// Root 不渲染 DOM；inheritAttrs:false 防 attrs 落到 slot 子节点（如 <button open="true">）。
// open 走 attrs 而非 props，规避 boolean prop 未传被默认注入 false 的陷阱（同 Dialog.vue）。
defineOptions({ inheritAttrs: false });

type PopoverTypedProps = Omit<PopoverProps, 'open'>;
const props = defineProps<PopoverTypedProps>();
const emit = defineEmits<{
  'open-change': [open: boolean, reason?: string];
}>();

const attrs = useAttrs() as { open?: boolean } & Record<string, unknown>;

// getter 形态保 props 响应性
// 每个 prop 的 `!== undefined` 双分支同形重复；测试不可能逐个 prop 都触发两支
/* v8 ignore start */
const popover = usePopover(() => ({
  ...(props.defaultOpen !== undefined ? { defaultOpen: props.defaultOpen } : {}),
  ...(attrs.open !== undefined ? { open: attrs.open } : {}),
  ...(props.placement !== undefined ? { placement: props.placement } : {}),
  ...(props.offset !== undefined ? { offset: props.offset } : {}),
  ...(props.collisionPadding !== undefined ? { collisionPadding: props.collisionPadding } : {}),
  ...(props.flip !== undefined ? { flip: props.flip } : {}),
  ...(props.shift !== undefined ? { shift: props.shift } : {}),
  ...(props.closeOnOutsideClick !== undefined
    ? { closeOnOutsideClick: props.closeOnOutsideClick }
    : {}),
  ...(props.closeOnEsc !== undefined ? { closeOnEsc: props.closeOnEsc } : {}),
  ...(props.closeOnScroll !== undefined ? { closeOnScroll: props.closeOnScroll } : {}),
  ...(props.returnFocusOnClose !== undefined
    ? { returnFocusOnClose: props.returnFocusOnClose }
    : {}),
  ...(props.anchorEl !== undefined ? { anchorEl: props.anchorEl } : {}),
  ...(props.ariaRole !== undefined ? { ariaRole: props.ariaRole } : {}),
  ...(props.ariaLabel !== undefined ? { ariaLabel: props.ariaLabel } : {}),
  ...(props.ariaLabelledBy !== undefined ? { ariaLabelledBy: props.ariaLabelledBy } : {}),
  onOpenChange: (next, reason) => emit('open-change', next, reason),
}));
/* v8 ignore stop */

provide(POPOVER_INJECT_KEY, { popover });

defineExpose({
  get open() {
    return popover.open.value;
  },
  setOpen: popover.setOpen,
});
</script>

<template>
  <slot />
</template>
