<script setup lang="ts">
import { computed, inject } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TInputProps } from "./Input.types";

const classes = CSS_CLASSES.input;

const props = withDefaults(defineProps<TInputProps>(), {
  type: "text",
  size: "md",
  disabled: false,
  readOnly: false,
  error: undefined,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const slots = defineSlots<{
  prefix?(): unknown;
  suffix?(): unknown;
}>();

// Inject error state from FormField if available
const formFieldError = inject<{ value: boolean } | undefined>("formFieldError", undefined);
const hasError = computed(() => props.error ?? formFieldError?.value ?? false);

const wrapperClassNames = computed(() => {
  return [
    classes.wrapper,
    classes.sizes[props.size],
    hasError.value ? classes.states.error : "",
    props.disabled ? classes.states.disabled : "",
    props.readOnly ? classes.states.readonly : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div :class="wrapperClassNames">
    <span v-if="slots.prefix" :class="classes.prefix">
      <slot name="prefix" />
    </span>
    <input
      :type="type"
      :class="classes.root"
      :disabled="disabled"
      :readonly="readOnly"
      :placeholder="placeholder"
      :value="modelValue"
      :aria-invalid="hasError || undefined"
      @input="handleInput"
    />
    <span v-if="slots.suffix" :class="classes.suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>
