<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import type { TToastData, TToastStore, TToastType } from "@/core/types";
import type { TToastIcons } from "./Toast.types";

const classes = CSS_CLASSES.toast;

const DEFAULT_TYPE_ICONS: Record<TToastType, string> = {
  success: "\u2713",
  error: "\u2715",
  warning: "\u26A0",
  info: "\u2139",
};

const props = defineProps<{
  toast: TToastData;
  store: TToastStore;
  defaultDuration: number;
  defaultClosable: boolean;
  icons?: TToastIcons;
}>();

const isClosing = ref(false);
const itemRef = ref<HTMLLIElement | null>(null);

let timer: ReturnType<typeof setTimeout> | null = null;
let remaining = 0;
let startTime = 0;

const duration = props.toast.duration ?? props.defaultDuration;
const closable = props.toast.closable ?? props.defaultClosable;
const typeIconFn = props.icons?.[props.toast.type];
const closeIconFn = props.icons?.close;

function handleClose(isAutoClose = false) {
  if (isClosing.value) return;
  isClosing.value = true;

  const element = itemRef.value;
  if (!element) {
    props.store.dismiss(props.toast.id);
    if (isAutoClose) props.toast.onAutoClose?.();
    return;
  }

  const onAnimationEnd = () => {
    element.removeEventListener("animationend", onAnimationEnd);
    props.store.dismiss(props.toast.id);
    if (isAutoClose) props.toast.onAutoClose?.();
  };
  element.addEventListener("animationend", onAnimationEnd);
}

function startTimer() {
  if (duration <= 0) return;
  startTime = Date.now();
  timer = setTimeout(() => handleClose(true), remaining);
}

function handleMouseEnter() {
  if (duration <= 0 || !timer) return;
  clearTimeout(timer);
  timer = null;
  remaining -= Date.now() - startTime;
}

function handleMouseLeave() {
  if (duration <= 0 || remaining <= 0) return;
  startTimer();
}

onMounted(() => {
  if (duration > 0) {
    remaining = duration;
    startTimer();
  }
});

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<template>
  <li
    ref="itemRef"
    :class="[classes.root, classes.types[props.toast.type], isClosing && classes.closing]"
    role="status"
    :aria-live="props.toast.type === 'error' ? 'assertive' : 'polite'"
    aria-atomic="true"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span :class="classes.icon">
      <component v-if="typeIconFn" :is="typeIconFn" />
      <template v-else>{{ DEFAULT_TYPE_ICONS[props.toast.type] }}</template>
    </span>

    <div :class="classes.content">
      <p :class="classes.title">{{ props.toast.title }}</p>
      <p v-if="props.toast.description" :class="classes.description">{{ props.toast.description }}</p>
    </div>

    <button v-if="closable" type="button" :class="classes.close" aria-label="Close" @click="handleClose(false)">
      <component v-if="closeIconFn" :is="closeIconFn" />
      <template v-else>&#x2715;</template>
    </button>
  </li>
</template>
