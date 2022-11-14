<template>
  <h2>{{ thread.title }}</h2>
  <h4>Posted by {{ thread.created_by }} at {{ thread.created_at }}</h4>
  <p>{{ thread.body }}</p>
</template>

<script lang="ts" setup>
const route = useRoute();
const threadId = ref(route.params.id);
const { data: thread } = await useFetch(`/api/thread/${route.params.id}`);
</script>
