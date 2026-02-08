<script setup lang="ts">
import { computed, ref } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { useBodyScrollLock, useFocusTrap, useInitialFocus, useKeydown, useOverlayState } from "@/vue/composables";
import { Portal } from "../Portal";
import type { TModalProps } from "./Modal.types";

const classes = CSS_CLASSES.modal;

const props = withDefaults(defineProps<TModalProps>(), {
  size: "md",
  showCloseButton: true,
  closeOnBackdrop: true,
  closeOnEsc: true,
  className: "",
});

const emit = defineEmits<{
  close: [];
}>();

// Generate unique ID for aria-labelledby
const titleId = `modal-title-${Math.random().toString(36).slice(2, 9)}`;

// Ref for the modal container
const modalRef = ref<HTMLDivElement | null>(null);

// Overlay state management (visibility, closing animation, focus restore)
const { isVisible, isClosing } = useOverlayState(() => props.open);

// Overlay behavior composables
useInitialFocus(modalRef, () => isVisible.value && !isClosing.value);
useBodyScrollLock(() => isVisible.value);
useFocusTrap(modalRef, () => isVisible.value);
useKeydown(
  "Escape",
  () => emit("close"),
  () => isVisible.value && props.closeOnEsc,
);

const backdropClassNames = computed(() => {
  return [classes.backdrop, isClosing.value ? classes.backdropClosing : ""].filter(Boolean).join(" ");
});

const modalClassNames = computed(() => {
  return [classes.root, classes.sizes[props.size], isClosing.value ? classes.closing : "", props.className]
    .filter(Boolean)
    .join(" ");
});

function handleBackdropClick(event: MouseEvent) {
  if (props.closeOnBackdrop && event.target === event.currentTarget) {
    emit("close");
  }
}

function handleClose() {
  emit("close");
}
</script>

<template>
  <Portal v-if="isVisible">
    <div :class="backdropClassNames" role="presentation" @click="handleBackdropClick">
      <div
        ref="modalRef"
        :class="modalClassNames"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="title ? titleId : undefined"
      >
        <!-- Simple mode: title prop provided -->
        <template v-if="title">
          <div :class="classes.header">
            <h2 :id="titleId" :class="classes.title">{{ title }}</h2>
            <button v-if="showCloseButton" type="button" :class="classes.close" aria-label="Close" @click="handleClose">
              <slot name="closeIcon" />
            </button>
          </div>
          <div :class="classes.body">
            <slot />
          </div>
          <div v-if="$slots.footer" :class="classes.footer">
            <slot name="footer" />
          </div>
        </template>

        <!-- Custom mode: render slot directly -->
        <template v-else>
          <slot />
        </template>
      </div>
    </div>
  </Portal>
</template>
