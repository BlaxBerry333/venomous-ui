<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TSkeletonProps } from "./Skeleton.types";

const classes = CSS_CLASSES.skeleton;

const props = withDefaults(defineProps<TSkeletonProps>(), {
  variant: "rect",
  animation: "pulse",
  className: "",
});

const classNames = computed(() => {
  return [
    classes.root,
    props.variant !== "rect" ? classes.variants[props.variant] : "",
    props.animation ? classes.animations[props.animation] : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

const mergedStyle = computed(() => {
  const s: Record<string, string> = {};
  if (props.width !== undefined) s.width = typeof props.width === "number" ? `${props.width}px` : props.width;
  if (props.height !== undefined) s.height = typeof props.height === "number" ? `${props.height}px` : props.height;
  return s;
});
</script>

<template>
  <span :class="classNames" :style="mergedStyle" aria-hidden="true">
    <slot />
  </span>
</template>
