<script setup lang="ts">
import type { TPortalProps } from "./Portal.types";

const props = withDefaults(defineProps<TPortalProps>(), {
  to: "body",
  disabled: false,
});
</script>

<template>
  <Teleport :to="props.to" :disabled="props.disabled">
    <slot />
  </Teleport>
</template>
