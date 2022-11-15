<template>
  <div class="flex flex-column flex-grow-1">
    <PostBodyHeader :post="post" />
    <div class="p-2">
      <div>
        <Markdown :source="post.body" />
      </div>
      <Divider />
      <div>
        <Markdown :source="post.created_by.signature" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Markdown from "vue3-markdown-it";
import { Post } from "~~/types/dbTypes";
import Divider from "primevue/divider";

const props = defineProps<{
  post: Post;
}>();
</script>
