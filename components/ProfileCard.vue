<template>
  <Card>
    <template #title>
      <ProfileAvatar :user="user" :size="200" />
      <h1>{{ user.display_name }}</h1>
    </template>
    <template #subtitle>
      <p>@{{ user.username }}</p>
      <p>{{ user.description }}</p>
      <p v-if="user.website">
        <a :href="user.website">{{ user.website }}</a>
      </p>
    </template>
    <template #footer>
      <Markdown :source="user.signature" />
    </template>
  </Card>
</template>
<script lang="ts" setup>
import Card from "primevue/card";
import { DbProfileRow } from "~~/types/dbTypes";
import Markdown from "vue3-markdown-it";

const props = defineProps<{
  user: DbProfileRow;
}>();
</script>
