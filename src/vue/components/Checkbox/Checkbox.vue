<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TCheckboxProps } from "./Checkbox.types";

const classes = CSS_CLASSES.checkbox;

const props = withDefaults(defineProps<TCheckboxProps>(), {
  size: "md",
  checked: undefined,
  disabled: false,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  change: [value: boolean];
}>();

const slots = defineSlots<{
  default?(): unknown;
  checkedIcon?(): unknown;
  uncheckedIcon?(): unknown;
}>();

const isCustomMode = computed(() => Boolean(slots.checkedIcon || slots.uncheckedIcon));

const isChecked = computed(() => props.modelValue ?? props.checked);

const classNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    isCustomMode.value ? classes.custom : "",
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
    <input type="checkbox" :class="classes.input" :checked="isChecked" :disabled="disabled" @change="handleChange" />
    <span v-if="isCustomMode" :class="classes.control">
      <span :class="classes.icon">
        <slot v-if="isChecked" name="checkedIcon" />
        <slot v-else name="uncheckedIcon" />
      </span>
    </span>
    <span v-if="label || slots.default" :class="classes.label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
