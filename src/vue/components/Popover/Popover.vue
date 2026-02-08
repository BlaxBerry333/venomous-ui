<script setup lang="ts">
import { computed, getCurrentInstance, ref } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TPopoverPlacement } from "@/core/types";
import { useClickOutside, useDelayedToggle, useFloatingPosition, useKeydown } from "@/vue/composables";
import { Portal } from "../Portal";
import type { TPopoverProps } from "./Popover.types";

const classes = CSS_CLASSES.popover;

const props = defineProps<TPopoverProps>();

const emit = defineEmits<{
  "update:open": [value: boolean];
}>();

// Get vnode props to check which props were actually passed
// Vue's boolean casting makes unpassed boolean props = false, so we need this check
const instance = getCurrentInstance();
const vnodeProps = instance?.vnode.props;

/**
 * Check if a boolean prop was explicitly passed
 * Vue casts unpassed boolean props to false, so we check vnode.props
 */
function wasPropPassed(propName: string): boolean {
  if (!vnodeProps) return false;
  // Check both camelCase and kebab-case versions
  const kebabName = propName.replace(/([A-Z])/g, "-$1").toLowerCase();
  return propName in vnodeProps || kebabName in vnodeProps;
}

/**
 * Get boolean prop value with proper default handling
 * Returns the prop value if passed, otherwise returns the default
 */
function getBooleanProp(propName: keyof TPopoverProps, defaultValue: boolean): boolean {
  if (wasPropPassed(propName)) {
    return props[propName] as boolean;
  }
  return defaultValue;
}

// Apply defaults manually - for boolean props, check if they were actually passed
const placement = computed<TPopoverPlacement>(() => props.placement ?? "bottom");
const trigger = computed(() => props.trigger ?? "click");
const closeOnClickOutside = computed(() => getBooleanProp("closeOnClickOutside", true));
const closeOnEsc = computed(() => getBooleanProp("closeOnEsc", true));
const disabled = computed(() => getBooleanProp("disabled", false));
const className = computed(() => props.className ?? "");

// Generate unique ID for aria-controls
const popoverId = `popover-${Math.random().toString(36).slice(2, 9)}`;

// Internal state for uncontrolled mode
const internalOpen = ref(false);

// Check if 'open' prop was explicitly passed
const isControlled = computed(() => wasPropPassed("open") || wasPropPassed("modelValue"));
const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value));

const triggerRef = ref<HTMLElement | null>(null);
const popoverRef = ref<HTMLDivElement | null>(null);

function setOpen(value: boolean) {
  if (!isControlled.value) {
    internalOpen.value = value;
  }
  emit("update:open", value);
}

function toggle() {
  if (disabled.value) return;
  setOpen(!isOpen.value);
}

// Delayed show/hide for hover mode
const { show, hide, cancelHide } = useDelayedToggle(
  () => setOpen(true),
  () => setOpen(false),
  100,
  150,
  () => disabled.value,
);

// Floating position management
const { position } = useFloatingPosition(
  triggerRef,
  popoverRef,
  () => placement.value,
  () => isOpen.value,
);

// ESC key handling
useKeydown(
  "Escape",
  () => setOpen(false),
  () => isOpen.value && closeOnEsc.value,
);

// Click outside handling
useClickOutside(
  [triggerRef, popoverRef],
  () => setOpen(false),
  () => isOpen.value && closeOnClickOutside.value,
);

function handleTriggerClick() {
  if (trigger.value === "click") {
    toggle();
  }
}

function handleTriggerMouseEnter() {
  if (trigger.value === "hover") {
    show();
  }
}

function handleTriggerMouseLeave() {
  if (trigger.value === "hover") {
    hide();
  }
}

function handlePopoverMouseEnter() {
  if (trigger.value === "hover") {
    cancelHide();
  }
}

function handlePopoverMouseLeave() {
  if (trigger.value === "hover") {
    hide();
  }
}

const popoverClassNames = computed(() => {
  return [classes.root, classes.placements[placement.value], className.value].filter(Boolean).join(" ");
});
</script>

<template>
  <span
    ref="triggerRef"
    style="display: contents"
    :aria-expanded="isOpen"
    aria-haspopup="dialog"
    :aria-controls="isOpen ? popoverId : undefined"
    @click="handleTriggerClick"
    @mouseenter="handleTriggerMouseEnter"
    @mouseleave="handleTriggerMouseLeave"
  >
    <slot />
  </span>
  <Portal v-if="isOpen">
    <div
      :id="popoverId"
      ref="popoverRef"
      role="dialog"
      :class="popoverClassNames"
      :style="{ top: `${position.top}px`, left: `${position.left}px` }"
      @mouseenter="handlePopoverMouseEnter"
      @mouseleave="handlePopoverMouseLeave"
    >
      <slot name="content" />
      <div :class="classes.arrow" />
    </div>
  </Portal>
</template>
