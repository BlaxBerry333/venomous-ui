<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TRadioProps } from "./Radio.types";

const classes = CSS_CLASSES.radio;

const props = withDefaults(defineProps<TRadioProps>(), {
  size: "md",
  checked: false,
  disabled: false,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number];
}>();

const slots = defineSlots<{
  default?(): unknown;
  checkedIcon?(): unknown;
  uncheckedIcon?(): unknown;
}>();

const isCustomMode = computed(() => Boolean(slots.checkedIcon || slots.uncheckedIcon));

const isChecked = computed(() => {
  if (props.modelValue !== undefined && props.value !== undefined) {
    return props.modelValue === props.value;
  }
  return props.checked;
});

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

function handleChange() {
  if (props.value !== undefined) {
    emit("update:modelValue", props.value);
    emit("change", props.value);
  }
}
</script>

<template>
  <label :class="classNames">
    <input
      type="radio"
      :class="classes.input"
      :name="name"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
    />
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
