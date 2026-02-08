<script setup lang="ts">
import { computed, inject } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { SELECT_INJECTION_KEY, type TSelectContext } from "./selectContext";
import type { TSelectOptionProps } from "./SelectOption.types";

const classes = CSS_CLASSES.select;

const props = withDefaults(defineProps<TSelectOptionProps>(), {
  disabled: false,
  className: "",
});

const slots = defineSlots<{
  default(): unknown;
  selectedIcon?(): unknown;
}>();

const injectedContext = inject<TSelectContext | undefined>(SELECT_INJECTION_KEY, undefined);

if (!injectedContext) {
  throw new Error("SelectOption must be used within a Select component with default slot");
}

// After the check, we know context is defined
const context = injectedContext;

const isSelected = computed(() => props.value === context.value.value);
const isHighlighted = computed(() => props.value === context.highlightedValue.value);

const optionClassNames = computed(() =>
  [
    classes.option,
    isSelected.value ? classes.optionStates.selected : "",
    isHighlighted.value ? classes.optionStates.highlighted : "",
    props.disabled ? classes.optionStates.disabled : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" "),
);

function handleClick() {
  if (props.disabled) return;
  context.onSelect(props.value);
}

function handleMouseDown(e: MouseEvent) {
  // Prevent focus loss from trigger button to avoid border flicker
  e.preventDefault();
}

function handleMouseEnter() {
  context.onHighlight(props.value);
}
</script>

<template>
  <div
    role="option"
    :class="optionClassNames"
    :aria-selected="isSelected"
    :aria-disabled="disabled || undefined"
    @mousedown="handleMouseDown"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
  >
    <span :class="classes.optionLabel"><slot /></span>
    <span v-if="isSelected && slots.selectedIcon" :class="classes.optionIcon">
      <slot name="selectedIcon" />
    </span>
  </div>
</template>
