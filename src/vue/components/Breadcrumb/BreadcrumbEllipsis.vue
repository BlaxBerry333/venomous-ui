<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TBreadcrumbEllipsisProps } from "./Breadcrumb.types";

const classes = CSS_CLASSES.breadcrumb;

const props = withDefaults(defineProps<TBreadcrumbEllipsisProps>(), {
  className: "",
});

const itemClass = computed(() => {
  return `${classes.item} ${props.className}`.trim();
});
</script>

<template>
  <li :class="itemClass">
    <span :class="classes.ellipsis" role="presentation">
      <slot>&#x2026;</slot>
    </span>
  </li>
</template>
