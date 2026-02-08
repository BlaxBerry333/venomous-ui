<script setup lang="ts">
import { computed, useSlots } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TBadgeProps } from "./Badge.types";

const classes = CSS_CLASSES.badge;
const slots = useSlots();

const props = withDefaults(defineProps<TBadgeProps>(), {
  dot: false,
  max: 99,
  colorScheme: "error",
  hidden: false,
  className: "",
});

const shouldShow = computed(() => {
  if (props.hidden) return false;
  if (props.dot) return true;
  if (props.content === undefined) return false;
  if (typeof props.content === "number" && props.content <= 0) return false;
  return true;
});

const displayContent = computed(() => {
  if (props.dot) return undefined;
  if (typeof props.content === "number" && props.content > props.max) return `${props.max}+`;
  if (props.content !== undefined) return String(props.content);
  return undefined;
});

const badgeClassNames = computed(() => {
  return [classes.root, classes.colors[props.colorScheme], props.dot ? classes.dot : "", props.className]
    .filter(Boolean)
    .join(" ");
});

const hasChildren = computed(() => !!slots.default);
</script>

<template>
  <span v-if="hasChildren" :class="classes.wrapper">
    <slot />
    <sup v-if="shouldShow" :class="badgeClassNames">{{ displayContent }}</sup>
  </span>
  <sup v-else-if="shouldShow" :class="badgeClassNames">{{ displayContent }}</sup>
</template>
