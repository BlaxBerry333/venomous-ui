<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TButtonProps } from "./Button.types";

const classes = CSS_CLASSES.button;

const props = withDefaults(defineProps<TButtonProps>(), {
  size: "md",
  variant: "solid",
  colorScheme: "theme",
  disabled: false,
  fullWidth: false,
  className: "",
});

const classNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    classes.variants[props.variant],
    props.colorScheme !== "theme" ? classes.colors[props.colorScheme] : "",
    props.fullWidth ? classes.states.fullWidth : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <button :class="classNames" :disabled="disabled">
    <slot />
  </button>
</template>
