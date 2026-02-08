<script setup lang="ts">
import { computed, ref } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { useBodyScrollLock, useFocusTrap, useInitialFocus, useKeydown, useOverlayState } from "@/vue/composables";
import { Portal } from "../Portal";
import type { TDrawerProps } from "./Drawer.types";

const classes = CSS_CLASSES.drawer;

const props = withDefaults(defineProps<TDrawerProps>(), {
  placement: "right",
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
const titleId = `drawer-title-${Math.random().toString(36).slice(2, 9)}`;

// Ref for the drawer container
const drawerRef = ref<HTMLDivElement | null>(null);

// Overlay state management (visibility, closing animation, focus restore)
const { isVisible, isClosing } = useOverlayState(() => props.open);

// Overlay behavior composables
useInitialFocus(drawerRef, () => isVisible.value && !isClosing.value);
useBodyScrollLock(() => isVisible.value);
useFocusTrap(drawerRef, () => isVisible.value);
useKeydown(
  "Escape",
  () => emit("close"),
  () => isVisible.value && props.closeOnEsc,
);

const backdropClassNames = computed(() => {
  return [classes.backdrop, isClosing.value ? classes.backdropClosing : ""].filter(Boolean).join(" ");
});

const drawerClassNames = computed(() => {
  return [
    classes.root,
    classes.placements[props.placement],
    classes.sizes[props.size],
    isClosing.value ? classes.closing : "",
    props.className,
  ]
    .filter(Boolean)
    .join(" ");
});

function handleBackdropClick() {
  if (props.closeOnBackdrop) {
    emit("close");
  }
}

function handleClose() {
  emit("close");
}
</script>

<template>
  <Portal v-if="isVisible">
    <!-- Backdrop -->
    <div :class="backdropClassNames" role="presentation" aria-hidden="true" @click="handleBackdropClick" />
    <!-- Drawer -->
    <div
      ref="drawerRef"
      :class="drawerClassNames"
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
  </Portal>
</template>
