<template>
  <div>
    <!-- <div v-if="isThread(post)">
      <h1>{{ post.title }}</h1>
    </div> -->
    <div class="flex justify-content-between w-full">
      <h3>
        {{ user.display_name }}&nbsp;<Username :username="user.username" />
      </h3>
      <h3>{{ new Date(post.created_at!).toLocaleString() }}</h3>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Post } from "~~/types/dbTypes";

const props = defineProps<{
  post: Post;
}>();
const user = ref(props.post.created_by);
</script>
