<script setup lang="ts">
import { computed, provide, readonly, ref, useSlots } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { Tooltip } from "../Tooltip";
import type { TFormFieldProps } from "./FormField.types";

const classes = CSS_CLASSES.formField;

const props = withDefaults(defineProps<TFormFieldProps>(), {
  required: false,
  size: "md",
  orientation: "vertical",
  className: "",
});

defineSlots<{
  default(): unknown;
  tooltip?(): unknown;
  tooltipIcon?(): unknown;
}>();

// Use useSlots() to detect slot presence at runtime
const slots = useSlots();

// Generate unique IDs
const fieldId = `form-field-${Math.random().toString(36).slice(2, 9)}`;
const errorId = `form-field-error-${Math.random().toString(36).slice(2, 9)}`;

const hasError = computed(() => Boolean(props.error));

// Provide context for child form controls
provide("formFieldId", readonly(ref(fieldId)));
provide(
  "formFieldErrorId",
  computed(() => (hasError.value ? errorId : undefined)),
);
provide("formFieldError", hasError);

const rootClassNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    classes.orientations[props.orientation!],
    props.controlPosition ? classes.controlPositions[props.controlPosition] : "",
    hasError.value ? classes.states.error : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});
</script>

<template>
  <div :class="rootClassNames">
    <div v-if="label" :class="classes.labelRow">
      <label :for="fieldId" :class="classes.label">
        <span v-if="required" :class="classes.required">* </span>
        {{ label }}
      </label>
      <Tooltip v-if="(tooltip || !!slots.tooltip) && !!slots.tooltipIcon" placement="top">
        <span :class="classes.tooltipTrigger">
          <slot name="tooltipIcon" />
        </span>
        <template #content>
          <slot name="tooltip">{{ tooltip }}</slot>
        </template>
      </Tooltip>
    </div>
    <div :class="classes.control">
      <slot />
    </div>
    <div v-if="hasError" :id="errorId" :class="classes.error" role="alert">
      {{ error }}
    </div>
  </div>
</template>
