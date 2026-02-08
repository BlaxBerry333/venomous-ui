<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TSwitchProps } from "./Switch.types";

const classes = CSS_CLASSES.switch;

const props = withDefaults(defineProps<TSwitchProps>(), {
  size: "md",
  checked: undefined,
  disabled: false,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  change: [value: boolean];
}>();

const isChecked = computed(() => props.modelValue ?? props.checked);

const classNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    isChecked.value ? classes.states.checked : "",
    props.disabled ? classes.states.disabled : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.checked);
  emit("change", target.checked);
}
</script>

<template>
  <label :class="classNames">
    <input type="checkbox" :checked="isChecked" :disabled="disabled" @change="handleChange" />
    <span :class="classes.track">
      <span :class="classes.thumb" />
    </span>
    <span v-if="label" :class="classes.label">{{ label }}</span>
  </label>
</template>
