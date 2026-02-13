<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TBreadcrumbItemProps } from "./Breadcrumb.types";

const classes = CSS_CLASSES.breadcrumb;

const props = withDefaults(defineProps<TBreadcrumbItemProps>(), {
  isCurrentPage: false,
  disabled: false,
  className: "",
});

const itemClass = computed(() => {
  return `${classes.item} ${props.disabled ? classes.itemDisabled : ""} ${props.className}`.trim();
});

const textClass = computed(() => {
  return `${classes.text} ${props.isCurrentPage ? classes.textCurrent : ""}`.trim();
});

const spanAttrs = computed(() => {
  const attrs: Record<string, string> = {};
  if (props.isCurrentPage) attrs["aria-current"] = "page";
  if (props.disabled) attrs["aria-disabled"] = "true";
  return attrs;
});
</script>

<template>
  <li :class="itemClass">
    <a v-if="href && !isCurrentPage && !disabled" :href="href" :class="classes.link">
      <slot />
    </a>
    <span v-else v-bind="spanAttrs" :class="textClass">
      <slot />
    </span>
  </li>
</template>
