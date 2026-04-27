<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div
    class="venomous__typography-title"
    :style="{
      color: 'var(--venomous-color-fg-default)',
      background: 'var(--venomous-color-bg-surface)',
      padding: '16px',
      borderRadius: '8px',
    }"
  >
    {{ label }}
  </div>
</template>
