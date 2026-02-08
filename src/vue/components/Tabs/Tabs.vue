<script setup lang="ts">
import { computed, provide, ref, toRef, watch } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTabsProps } from "./Tabs.types";
import { TABS_INJECTION_KEY } from "./Tabs.types";

const classes = CSS_CLASSES.tabs;

const props = withDefaults(defineProps<TTabsProps>(), {
  orientation: "horizontal",
  variant: "line",
  unmountStrategy: "keepMounted",
  className: "",
});

const emit = defineEmits<{
  "update:value": [value: string];
}>();

// Internal state for uncontrolled mode
const internalValue = ref(props.defaultValue ?? "");

// Determine if controlled or uncontrolled
const isControlled = computed(() => props.value !== undefined);
const currentValue = computed(() => (isControlled.value ? props.value! : internalValue.value));

// Tab registry for keyboard navigation
const tabsRegistry = ref(new Map<string, { disabled: boolean }>());

function handleValueChange(newValue: string) {
  if (!isControlled.value) {
    internalValue.value = newValue;
  }
  emit("update:value", newValue);
}

function registerTab(value: string, disabled: boolean) {
  tabsRegistry.value.set(value, { disabled });
}

function unregisterTab(value: string) {
  tabsRegistry.value.delete(value);
}

function getTabs() {
  return Array.from(tabsRegistry.value.entries()).map(([value, { disabled }]) => ({
    value,
    disabled,
  }));
}

// Sync internal value with controlled value
watch(
  () => props.value,
  (newValue) => {
    if (newValue !== undefined) {
      internalValue.value = newValue;
    }
  },
);

// Provide context to child components
provide(TABS_INJECTION_KEY, {
  value: computed(() => currentValue.value),
  onValueChange: handleValueChange,
  orientation: toRef(props, "orientation"),
  variant: toRef(props, "variant"),
  unmountStrategy: toRef(props, "unmountStrategy"),
  registerTab,
  unregisterTab,
  getTabs,
});

const rootClassNames = computed(() => {
  return [classes.root, classes.orientations[props.orientation], classes.variants[props.variant], props.className]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <div :class="rootClassNames">
    <slot />
  </div>
</template>
