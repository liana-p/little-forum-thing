<template>
  <a :href="`/profile/${username}`">@{{ username }}</a>
</template>
<script lang="ts" setup>
const props = defineProps<{
  username: string;
}>();
</script>
