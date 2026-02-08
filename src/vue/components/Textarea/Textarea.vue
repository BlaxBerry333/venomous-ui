<script setup lang="ts">
import { computed, inject, onMounted, ref, watch } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TTextareaProps } from "./Textarea.types";

const classes = CSS_CLASSES.textarea;

const props = withDefaults(defineProps<TTextareaProps>(), {
  size: "md",
  resize: "vertical",
  autoResize: false,
  disabled: false,
  readOnly: false,
  error: undefined,
  rows: 3,
  className: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const textareaRef = ref<HTMLTextAreaElement | null>(null);

// Inject error state from FormField if available
const formFieldError = inject<{ value: boolean } | undefined>("formFieldError", undefined);
const hasError = computed(() => props.error ?? formFieldError?.value ?? false);

const classNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    !props.autoResize ? classes.resize[props.resize] : classes.resize.none,
    hasError.value ? classes.states.error : "",
    props.disabled ? classes.states.disabled : "",
    props.readOnly ? classes.states.readonly : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

function adjustHeight() {
  const textarea = textareaRef.value;
  if (!textarea || !props.autoResize) return;

  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
  if (props.autoResize) {
    adjustHeight();
  }
}

onMounted(() => {
  adjustHeight();
});

watch(
  () => props.modelValue,
  () => {
    if (props.autoResize) {
      // Wait for DOM update
      requestAnimationFrame(adjustHeight);
    }
  },
);
</script>

<template>
  <textarea
    ref="textareaRef"
    :class="classNames"
    :disabled="disabled"
    :readonly="readOnly"
    :rows="rows"
    :placeholder="placeholder"
    :value="modelValue"
    :aria-invalid="hasError || undefined"
    @input="handleInput"
  />
</template>
