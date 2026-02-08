<script setup lang="ts">
import { computed, onMounted, onUnmounted, shallowRef, triggerRef } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { toastStore as defaultStore } from "@/core/helpers/toast-store";
import type { TToastStore } from "@/core/types";
import ToastItem from "./ToastItem.vue";
import type { TToasterProps } from "./Toast.types";

const classes = CSS_CLASSES.toast;

const props = withDefaults(defineProps<TToasterProps>(), {
  placement: "top",
  duration: 4000,
  closable: true,
  className: "",
});

const store = computed<TToastStore>(() => props.store ?? defaultStore);

const toasts = shallowRef(store.value.getToasts());
let unsubscribe: (() => void) | null = null;

onMounted(() => {
  unsubscribe = store.value.subscribe(() => {
    toasts.value = store.value.getToasts();
    triggerRef(toasts);
  });
});

onUnmounted(() => {
  unsubscribe?.();
});

const containerClassNames = computed(() => {
  return [classes.container, classes.placements[props.placement], props.className].filter(Boolean).join(" ");
});
</script>

<template>
  <Teleport v-if="toasts.length > 0" to="body">
    <ol :class="containerClassNames" role="region" aria-label="Notifications" tabindex="-1">
      <ToastItem
        v-for="t in toasts"
        :key="t.id"
        :toast="t"
        :store="store"
        :default-duration="props.duration"
        :default-closable="props.closable"
        :icons="props.icons"
      />
    </ol>
  </Teleport>
</template>
