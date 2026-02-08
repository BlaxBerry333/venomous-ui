<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TCardProps } from "./Card.types";

const classes = CSS_CLASSES.card;

const props = withDefaults(defineProps<TCardProps>(), {
  variant: "elevated",
  clickable: false,
  className: "",
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const classNames = computed(() => {
  return [
    classes.root,
    classes.variants[props.variant],
    props.clickable ? classes.states.clickable : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

// Handle keyboard interaction for clickable cards
function handleKeyDown(event: KeyboardEvent) {
  if (props.clickable && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    emit("click", event as unknown as MouseEvent);
  }
}
</script>

<template>
  <div
    :class="classNames"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @keydown="handleKeyDown"
  >
    <slot />
  </div>
</template>
