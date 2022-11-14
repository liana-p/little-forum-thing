<template>
  <CategoryThreads :category="route.params.category" />
</template>
<script lang="ts" setup>
const route = useRoute();
</script>
