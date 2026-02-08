<script setup lang="ts">
import { computed, inject, ref } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTabsListProps } from "./Tabs.types";
import { TABS_INJECTION_KEY } from "./Tabs.types";

const classes = CSS_CLASSES.tabs;

const props = withDefaults(defineProps<TTabsListProps>(), {
  className: "",
});

const context = inject(TABS_INJECTION_KEY);

if (!context) {
  throw new Error("TabsList must be used within a Tabs component");
}

const { orientation, value, onValueChange, getTabs } = context;

const listRef = ref<HTMLDivElement | null>(null);

function handleKeyDown(event: KeyboardEvent) {
  const tabs = getTabs();
  const enabledTabs = tabs.filter((t) => !t.disabled);
  if (enabledTabs.length === 0) return;

  const currentIndex = enabledTabs.findIndex((t) => t.value === value.value);
  let nextIndex = currentIndex;

  const isHorizontal = orientation.value === "horizontal";
  const prevKey = isHorizontal ? "ArrowLeft" : "ArrowUp";
  const nextKey = isHorizontal ? "ArrowRight" : "ArrowDown";

  switch (event.key) {
    case prevKey:
      event.preventDefault();
      nextIndex = currentIndex <= 0 ? enabledTabs.length - 1 : currentIndex - 1;
      break;
    case nextKey:
      event.preventDefault();
      nextIndex = currentIndex >= enabledTabs.length - 1 ? 0 : currentIndex + 1;
      break;
    case "Home":
      event.preventDefault();
      nextIndex = 0;
      break;
    case "End":
      event.preventDefault();
      nextIndex = enabledTabs.length - 1;
      break;
    default:
      return;
  }

  if (nextIndex !== currentIndex && enabledTabs[nextIndex]) {
    onValueChange(enabledTabs[nextIndex].value);
    // Focus the new tab button within this tablist (scoped to avoid cross-instance conflicts)
    const tabButton = listRef.value?.querySelector(
      `[data-tabs-value="${CSS.escape(enabledTabs[nextIndex].value)}"]`,
    ) as HTMLElement | null;
    tabButton?.focus();
  }
}

const listClassNames = computed(() => {
  return [classes.list, props.className].filter(Boolean).join(" ");
});
</script>

<template>
  <div ref="listRef" :class="listClassNames" role="tablist" :aria-orientation="orientation" @keydown="handleKeyDown">
    <slot />
  </div>
</template>
