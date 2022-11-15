<template>
  <div class="w-full m-3 p-3">
    <div v-if="isThread(post)">
      <h1>{{ post.title }}</h1>
    </div>
    <div class="card w-full p-3 post-container">
      <div class="flex">
        <PostUserLeft :user="post.created_by" />
        <PostBody :post="post" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DbThreadJoined, DbReplyJoined } from "~~/types/dbTypes";

const props = defineProps<{
  post: DbThreadJoined | DbReplyJoined;
}>();
</script>
<style>
.post-container {
  border-radius: 10px;
  border: 1px solid var(--surface-border);
}
</style>
