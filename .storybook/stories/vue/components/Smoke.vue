<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div
    class="venomous--text--default venomous--bg--default"
    :style="{
      padding: '16px',
      borderRadius: '8px',
    }"
  >
    {{ label }}
  </div>
</template>
