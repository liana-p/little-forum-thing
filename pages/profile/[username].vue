<template>
  <ProfileCard :user="user" v-if="user" />
  <div v-else>
    <p>Profile {{ username }} not found</p>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const username = ref(route.params.username as string);
const user = ref(await useFetch(`/api/profile/${username.value}`).data.value);
</script>
