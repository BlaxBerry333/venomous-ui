<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { PortalProps } from './Portal.type';

const props = defineProps<PortalProps>();

// SSR / hydrate 首帧：document 不可用，function / selector 都不能 resolve；统一走"保守"分支
// （selector 原样传给 Teleport，其余 fallback 到 'body'）。挂载后 isMounted=true 才进 client resolve。
// container=null 走 inline 分支，跳过 Teleport（inline 不依赖 document，SSR 阶段也可直接渲染）。
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const renderInline = computed(() => props.container === null);

const resolvedTarget = computed<string | HTMLElement>(() => {
  const c = props.container;
  if (!isMounted.value) {
    return typeof c === 'string' ? c : 'body';
  }
  if (c instanceof HTMLElement) return c;
  if (typeof c === 'function') {
    const el = (c as () => HTMLElement | null | undefined)();
    return el instanceof HTMLElement ? el : 'body';
  }
  if (typeof c === 'string') {
    const el = document.querySelector(c);
    return el instanceof HTMLElement ? el : 'body';
  }
  return 'body';
});
</script>

<template>
  <slot v-if="renderInline" />
  <Teleport v-else :to="resolvedTarget" :disabled="!isMounted">
    <slot />
  </Teleport>
</template>
