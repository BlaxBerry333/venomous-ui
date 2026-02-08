<script setup lang="ts">
import { computed, inject, onUnmounted, provide, ref, useSlots, watch } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TSelectOption } from "@/core/types";
import { useClickOutside, useKeydown } from "@/vue/composables";
import { Portal } from "../Portal";
import SelectOption from "./SelectOption.vue";
import { SELECT_INJECTION_KEY, type TSelectContext } from "./selectContext";
import type { TSelectProps } from "./Select.types";

const classes = CSS_CLASSES.select;

const props = withDefaults(defineProps<TSelectProps>(), {
  placeholder: "Select...",
  size: "md",
  disabled: false,
  readOnly: false,
  error: undefined,
  maxHeight: 300,
  className: "",
});

// Inject error state from FormField if available
const formFieldError = inject<{ value: boolean } | undefined>("formFieldError", undefined);
const hasError = computed(() => props.error ?? formFieldError?.value ?? false);

const emit = defineEmits<{
  "update:modelValue": [value: string | number];
  change: [value: string | number, option: TSelectOption];
}>();

const slots = defineSlots<{
  default?(): unknown;
  dropdownIcon?(): unknown;
  selectedIcon?(): unknown;
}>();

const vueSlots = useSlots();

// Determine if using custom slot mode
const isCustomMode = computed(() => !!vueSlots.default);

const isOpen = ref(false);
const highlightedIndex = ref(-1);
const triggerRef = ref<HTMLButtonElement | null>(null);
const dropdownRef = ref<HTMLDivElement | null>(null);

// Generate unique ID
const selectId = `select-${Math.random().toString(36).slice(2, 9)}`;

// Find selected option (only for simple mode)
const selectedOption = computed(() => {
  if (isCustomMode.value || !props.options) return undefined;
  return props.options.find((opt) => opt.value === props.modelValue);
});

// Display label
const displayLabel = computed(() => {
  if (isCustomMode.value) {
    return props.modelValue?.toString();
  }
  return selectedOption.value?.label;
});

// Get highlighted value from index (for simple mode keyboard nav)
const highlightedValue = computed(() => {
  if (isCustomMode.value || highlightedIndex.value < 0 || !props.options) return undefined;
  return props.options[highlightedIndex.value]?.value;
});

// Toggle dropdown
function toggle() {
  if (props.disabled || props.readOnly) return;
  isOpen.value = !isOpen.value;
  highlightedIndex.value = -1;
}

// Close dropdown
function close() {
  isOpen.value = false;
  highlightedIndex.value = -1;
}

// Handle option selection via context (works for both modes)
function handleSelect(optionValue: string | number) {
  const option = props.options?.find((opt) => opt.value === optionValue);
  emit("update:modelValue", optionValue);
  emit("change", optionValue, option || { value: optionValue, label: String(optionValue) });
  close();
  triggerRef.value?.focus();
}

// Handle highlight via context
function handleHighlight(optionValue: string | number) {
  const index = props.options?.findIndex((opt) => opt.value === optionValue) ?? -1;
  if (index >= 0) {
    highlightedIndex.value = index;
  }
}

// Create a stable ref for the current value
const currentValue = ref(props.modelValue);
watch(
  () => props.modelValue,
  (newValue) => {
    currentValue.value = newValue;
  },
);

// Provide context for both modes
const contextValue: TSelectContext = {
  value: currentValue,
  onSelect: handleSelect,
  highlightedValue: computed(() => highlightedValue.value),
  onHighlight: handleHighlight,
};

provide(SELECT_INJECTION_KEY, contextValue);

// Dropdown position (left-aligned with trigger, not centered like tooltip)
const dropdownPosition = ref({ top: 0, left: 0 });
let cleanupPositionListeners: (() => void) | null = null;

function updateDropdownPosition() {
  if (!triggerRef.value) return;
  const rect = triggerRef.value.getBoundingClientRect();
  dropdownPosition.value = {
    top: rect.bottom + 4, // 4px gap
    left: rect.left,
  };
}

watch(isOpen, (open) => {
  // Cleanup previous listeners
  cleanupPositionListeners?.();
  cleanupPositionListeners = null;

  if (open && triggerRef.value) {
    // Double rAF for accurate measurement
    requestAnimationFrame(() => {
      requestAnimationFrame(updateDropdownPosition);
    });

    window.addEventListener("scroll", updateDropdownPosition, true);
    window.addEventListener("resize", updateDropdownPosition);

    cleanupPositionListeners = () => {
      window.removeEventListener("scroll", updateDropdownPosition, true);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }
});

onUnmounted(() => {
  cleanupPositionListeners?.();
});

// ESC to close
useKeydown("Escape", close, () => isOpen.value);

// Click outside to close
useClickOutside([triggerRef, dropdownRef], close, () => isOpen.value);

// Keyboard navigation
function handleKeyDown(e: KeyboardEvent) {
  if (!isOpen.value) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isOpen.value = true;
      if (!isCustomMode.value) {
        highlightedIndex.value = 0;
      }
    }
    return;
  }

  // Keyboard navigation only works in simple mode
  if (isCustomMode.value) {
    if (e.key === "Tab") {
      close();
    }
    return;
  }

  const options = props.options || [];

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      highlightedIndex.value = highlightedIndex.value + 1 >= options.length ? 0 : highlightedIndex.value + 1;
      break;
    case "ArrowUp":
      e.preventDefault();
      highlightedIndex.value = highlightedIndex.value - 1 < 0 ? options.length - 1 : highlightedIndex.value - 1;
      break;
    case "Enter":
    case " ":
      e.preventDefault();
      if (highlightedIndex.value >= 0 && options[highlightedIndex.value]) {
        const option = options[highlightedIndex.value];
        if (!option.disabled) {
          handleSelect(option.value);
        }
      }
      break;
    case "Tab":
      close();
      break;
  }
}

const rootClassNames = computed(() => {
  return [
    classes.root,
    classes.sizes[props.size],
    isOpen.value ? classes.states.open : "",
    hasError.value ? classes.states.error : "",
    props.disabled ? classes.states.disabled : "",
    props.readOnly ? classes.states.readonly : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

const dropdownStyle = computed(() => ({
  top: `${dropdownPosition.value.top}px`,
  left: `${dropdownPosition.value.left}px`,
  width: triggerRef.value ? `${triggerRef.value.offsetWidth}px` : undefined,
  maxHeight: typeof props.maxHeight === "number" ? `${props.maxHeight}px` : props.maxHeight,
}));
</script>

<template>
  <div :class="rootClassNames">
    <input v-if="name" type="hidden" :name="name" :value="modelValue ?? ''" />
    <button
      ref="triggerRef"
      type="button"
      :class="classes.trigger"
      :disabled="disabled"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-controls="isOpen ? selectId : undefined"
      :aria-invalid="hasError || undefined"
      @click="toggle"
      @keydown="handleKeyDown"
    >
      <span :class="displayLabel ? classes.value : `${classes.value} ${classes.placeholder}`">
        {{ displayLabel || placeholder }}
      </span>
      <span v-if="slots.dropdownIcon" :class="classes.icon">
        <slot name="dropdownIcon" />
      </span>
    </button>

    <Portal v-if="isOpen">
      <div :id="selectId" ref="dropdownRef" role="listbox" :class="classes.dropdown" :style="dropdownStyle">
        <!-- Custom mode: render default slot -->
        <template v-if="isCustomMode">
          <slot />
        </template>

        <!-- Simple mode: render options using SelectOption -->
        <template v-else>
          <SelectOption v-for="option in options" :key="option.value" :value="option.value" :disabled="option.disabled">
            {{ option.label }}
          </SelectOption>
        </template>
      </div>
    </Portal>
  </div>
</template>
