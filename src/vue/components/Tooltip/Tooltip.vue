<script setup lang="ts">
import { computed, getCurrentInstance, ref, useSlots } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTooltipPlacement } from "@/core/types";
import { useDelayedToggle, useFloatingPosition } from "@/vue/composables";
import { Portal } from "../Portal";
import type { TTooltipProps } from "./Tooltip.types";

const classes = CSS_CLASSES.tooltip;

const props = defineProps<TTooltipProps>();

defineSlots<{
  default(): unknown;
  content?(): unknown;
}>();

const slots = useSlots();

// Get vnode props to check which props were actually passed
// Vue's boolean casting makes unpassed boolean props = false
const instance = getCurrentInstance();
const vnodeProps = instance?.vnode.props;

function wasPropPassed(propName: string): boolean {
  if (!vnodeProps) return false;
  const kebabName = propName.replace(/([A-Z])/g, "-$1").toLowerCase();
  return propName in vnodeProps || kebabName in vnodeProps;
}

// Apply defaults - for boolean props, check if actually passed
const placement = computed<TTooltipPlacement>(() => props.placement ?? "top");
const delay = computed(() => props.delay ?? 200);
const disabled = computed(() => (wasPropPassed("disabled") ? props.disabled : false));
const className = computed(() => props.className ?? "");

// Generate unique ID for aria-describedby
const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`;

const isVisible = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLDivElement | null>(null);

// Delayed show/hide
const { show, hide } = useDelayedToggle(
  () => {
    isVisible.value = true;
  },
  () => {
    isVisible.value = false;
  },
  delay.value,
  100,
  () => disabled.value,
);

// Floating position management
const { position } = useFloatingPosition(
  triggerRef,
  tooltipRef,
  () => placement.value,
  () => isVisible.value,
);

const tooltipClassNames = computed(() => {
  return [classes.root, classes.placements[placement.value], className.value].filter(Boolean).join(" ");
});

// Expose methods for parent to call
defineExpose({
  show,
  hide,
});
</script>

<template>
  <span
    ref="triggerRef"
    style="display: contents"
    :aria-describedby="isVisible ? tooltipId : undefined"
    @mouseenter="show"
    @mouseleave="hide"
    @focus="show"
    @blur="hide"
  >
    <slot />
  </span>
  <Portal v-if="isVisible">
    <div
      :id="tooltipId"
      ref="tooltipRef"
      role="tooltip"
      :class="tooltipClassNames"
      :style="{ top: `${position.top}px`, left: `${position.left}px` }"
    >
      <slot v-if="slots.content" name="content" />
      <template v-else>{{ props.content }}</template>
      <div :class="classes.arrow" />
    </div>
  </Portal>
</template>
