<template>
  <img :src="url" v-if="url" :alt="alt" :style="style" class="rounded-image" />
</template>
<script lang="ts" setup>
const props = defineProps<{
  url: string | null | undefined | false;
  alt?: string;
  size?: number;
  inline?: boolean;
}>();

const style = computed(() => {
  if (props.inline) {
    return {
      height: `1.5rem`,
      width: "1.5rem",
    };
  } else {
    if (props.size) {
      return {
        height: `${props.size}px`,
        width: `${props.size}px`,
      };
    }
  }
  return {};
});
</script>
<style>
.rounded-image {
  border-radius: 50%;
  object-fit: cover;
}
</style>
