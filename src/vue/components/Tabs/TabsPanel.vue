<script setup lang="ts">
import { computed, inject } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTabsPanelProps } from "./Tabs.types";
import { TABS_INJECTION_KEY } from "./Tabs.types";

const classes = CSS_CLASSES.tabs;

const props = withDefaults(defineProps<TTabsPanelProps>(), {
  className: "",
});

const context = inject(TABS_INJECTION_KEY);

if (!context) {
  throw new Error("TabsPanel must be used within a Tabs component");
}

const { value, unmountStrategy } = context;

const panelId = computed(() => `tabs-panel-${props.value}`);
const tabId = computed(() => `tabs-tab-${props.value}`);
const isActive = computed(() => value.value === props.value);

// Determine if panel should be rendered based on unmount strategy
const shouldRender = computed(() => {
  return unmountStrategy.value === "unmountOnHide" ? isActive.value : true;
});

const panelClassNames = computed(() => {
  return [classes.panel, props.className].filter(Boolean).join(" ");
});
</script>

<template>
  <div
    v-if="shouldRender"
    :id="panelId"
    :class="panelClassNames"
    role="tabpanel"
    :aria-labelledby="tabId"
    :hidden="!isActive"
    tabindex="0"
  >
    <slot />
  </div>
</template>
