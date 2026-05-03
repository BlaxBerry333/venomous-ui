<script setup lang="ts">
import { computed, ref } from 'vue';
import { COMPONENTS } from '@packages/utils/classnames';
import type { ButtonProps } from './Button.type';

const { loading, disabled, type = 'button' } = defineProps<ButtonProps>();

const buttonRef = ref<HTMLButtonElement | null>(null);
defineExpose({ el: buttonRef });

const isInactive = computed(() => disabled || loading);

// loading/disabled 时拦截消费方 @click：捕获阶段先于同元素 bubble listener（含 fallthrough 来的）执行，
// stopImmediatePropagation 阻止后续 listener 触发。
const handleCaptureClick = (event: MouseEvent) => {
  if (isInactive.value) event.stopImmediatePropagation();
};

// loading 不能用原生 disabled（会断 form submit / focus），用 aria-disabled 做语义屏蔽。
// aria-disabled 不阻止 Enter/Space 触发 click，需在 keydown 显式 preventDefault。
// 不 stopImmediatePropagation——只阻浏览器派发的 click，用户的 keydown 监听器仍照常收到。
const handleCaptureKeyDown = (event: KeyboardEvent) => {
  if (isInactive.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
  }
};
</script>

<template>
  <button
    ref="buttonRef"
    :type="type"
    :disabled="disabled"
    :aria-busy="loading || undefined"
    :aria-disabled="isInactive || undefined"
    :data-loading="loading || undefined"
    :class="COMPONENTS.BUTTON"
    @click.capture="handleCaptureClick"
    @keydown.capture="handleCaptureKeyDown"
  >
    <slot />
  </button>
</template>
