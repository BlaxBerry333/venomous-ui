<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TSelectOption } from "@/core/types";
import { Radio } from "../Radio";
import type { TRadioGroupProps } from "./RadioGroup.types";

const classes = CSS_CLASSES.radioGroup;

const props = withDefaults(defineProps<TRadioGroupProps>(), {
  orientation: "vertical",
  size: "md",
  disabled: false,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number, option: TSelectOption];
}>();

const slots = defineSlots<{
  checkedIcon?(): unknown;
  uncheckedIcon?(): unknown;
}>();

// Generate unique group name if not provided
const groupName = computed(() => props.name || `radio-group-${Math.random().toString(36).slice(2, 9)}`);

const classNames = computed(() => {
  return [classes.root, classes.orientations[props.orientation!], props.className].filter(Boolean).join(" ");
});

function handleChange(option: TSelectOption) {
  emit("update:modelValue", option.value);
  emit("change", option.value, option);
}
</script>

<template>
  <div role="radiogroup" :class="classNames">
    <Radio
      v-for="option in options"
      :key="option.value"
      :name="groupName"
      :value="option.value"
      :label="option.label"
      :checked="option.value === modelValue"
      :disabled="disabled || option.disabled"
      :size="size"
      @change="handleChange(option)"
    >
      <template v-if="slots.checkedIcon" #checkedIcon>
        <slot name="checkedIcon" />
      </template>
      <template v-if="slots.uncheckedIcon" #uncheckedIcon>
        <slot name="uncheckedIcon" />
      </template>
    </Radio>
  </div>
</template>
