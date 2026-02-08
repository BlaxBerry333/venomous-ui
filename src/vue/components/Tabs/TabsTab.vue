<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, watch } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTabsTabProps } from "./Tabs.types";
import { TABS_INJECTION_KEY } from "./Tabs.types";

const classes = CSS_CLASSES.tabs;

const props = withDefaults(defineProps<TTabsTabProps>(), {
  disabled: false,
  className: "",
});

const context = inject(TABS_INJECTION_KEY);

if (!context) {
  throw new Error("TabsTab must be used within a Tabs component");
}

const { value, onValueChange, registerTab, unregisterTab } = context;

const panelId = computed(() => `tabs-panel-${props.value}`);
const tabId = computed(() => `tabs-tab-${props.value}`);
const isActive = computed(() => value.value === props.value);

// Register/unregister tab for keyboard navigation
onMounted(() => {
  registerTab(props.value, props.disabled);
});

onUnmounted(() => {
  unregisterTab(props.value);
});

// Update registration when disabled changes
watch(
  () => props.disabled,
  (disabled) => {
    registerTab(props.value, disabled);
  },
);

function handleClick() {
  if (!props.disabled) {
    onValueChange(props.value);
  }
}

const tabClassNames = computed(() => {
  return [
    classes.tab,
    isActive.value ? classes.tabStates.active : "",
    props.disabled ? classes.tabStates.disabled : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <button
    type="button"
    :id="tabId"
    :class="tabClassNames"
    role="tab"
    :aria-selected="isActive"
    :aria-controls="panelId"
    :tabindex="isActive ? 0 : -1"
    :disabled="disabled"
    :data-tabs-value="props.value"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
