<script setup lang="ts">
import { computed, ref, useSlots, watch } from "vue";

import { CSS_CLASSES } from "@/core/constants";
import { getAvatarInitials } from "@/core/helpers";
import type { TAvatarProps } from "./Avatar.types";

const classes = CSS_CLASSES.avatar;
const slots = useSlots();

const props = withDefaults(defineProps<TAvatarProps>(), {
  size: "md",
  shape: "circle",
  className: "",
});

const imgFailed = ref(false);

watch(
  () => props.src,
  () => {
    imgFailed.value = false;
  },
);

const rootClassNames = computed(() => {
  return [classes.root, classes.sizes[props.size], classes.shapes[props.shape], props.className]
    .filter(Boolean)
    .join(" ");
});

const ariaLabel = computed(() => props.alt || props.name || "avatar");

const showImage = computed(() => props.src && !imgFailed.value);
const showText = computed(() => !showImage.value && !!props.name);
const showIcon = computed(() => !showImage.value && !showText.value && !!slots.icon);
const showAlt = computed(() => !showImage.value && !showText.value && !showIcon.value && !!props.alt);

const initials = computed(() => (props.name ? getAvatarInitials(props.name) : ""));

function handleImgError() {
  imgFailed.value = true;
}
</script>

<template>
  <span :class="rootClassNames" role="img" :aria-label="ariaLabel">
    <img v-if="showImage" :class="classes.image" :src="props.src" :alt="props.alt || ''" @error="handleImgError" />
    <span v-else-if="showText" :class="classes.text">{{ initials }}</span>
    <span v-else-if="showIcon" :class="classes.icon">
      <slot name="icon" />
    </span>
    <span v-else-if="showAlt" :class="classes.text">{{ props.alt }}</span>
  </span>
</template>
