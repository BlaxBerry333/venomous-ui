<script setup lang="ts">
import { computed } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TSelectOption } from "@/core/types";
import { Checkbox } from "../Checkbox";
import type { TCheckboxGroupProps } from "./CheckboxGroup.types";

const classes = CSS_CLASSES.checkboxGroup;

const props = withDefaults(defineProps<TCheckboxGroupProps>(), {
  modelValue: () => [],
  orientation: "vertical",
  size: "md",
  disabled: false,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: (string | number)[]];
  change: [value: (string | number)[], option: TSelectOption, checked: boolean];
}>();

const slots = defineSlots<{
  checkedIcon?(): unknown;
  uncheckedIcon?(): unknown;
}>();

const classNames = computed(() => {
  return [classes.root, classes.orientations[props.orientation!], props.className].filter(Boolean).join(" ");
});

function handleChange(option: TSelectOption, checked: boolean) {
  const currentValue = props.modelValue || [];
  const newValue = checked ? [...currentValue, option.value] : currentValue.filter((v) => v !== option.value);
  emit("update:modelValue", newValue);
  emit("change", newValue, option, checked);
}

function isChecked(optionValue: string | number): boolean {
  return (props.modelValue || []).includes(optionValue);
}
</script>

<template>
  <div role="group" :class="classNames">
    <Checkbox
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :checked="isChecked(option.value)"
      :disabled="disabled || option.disabled"
      :size="size"
      @change="(checked: boolean) => handleChange(option, checked)"
    >
      <template v-if="slots.checkedIcon" #checkedIcon>
        <slot name="checkedIcon" />
      </template>
      <template v-if="slots.uncheckedIcon" #uncheckedIcon>
        <slot name="uncheckedIcon" />
      </template>
    </Checkbox>
  </div>
</template>
