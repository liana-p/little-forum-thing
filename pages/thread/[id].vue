<template>
  <Breadcrumb :home="home" :model="breadcrumbItems" />
  <Post :post="thread" />
  <Post :post="reply" v-for="reply in replies" :key="reply.id" />
  <ThreadReplyButton :thread="thread" @new_reply="addNewReply" />
</template>

<script lang="ts" setup>
import Breadcrumb from "primevue/breadcrumb";
import Markdown from "vue3-markdown-it";
import { DbReplyJoined, DbThreadJoined } from "~~/types/dbTypes";

const config = useConfig();
const route = useRoute();
const threadId = ref(route.params.id);
const result = await useFetch(`/api/thread/${route.params.id}/`);
let thread = ref(result.data.value! as DbThreadJoined);
const replying = false;

if (!thread.value) {
  thread.value = defaultThread() as any;
}
const fetchReplies = await useFetch(`/api/replies/thread-replies`, {
  method: "get",
  query: {
    threadId: threadId.value,
  },
}).data.value;
const replies = ref(fetchReplies as DbReplyJoined[]);
if (!replies.value) {
  replies.value = [];
}
const category =
  config.categories.find((c) => c.slug === thread.value.categories![0]) ??
  config.categories[0];
const section =
  config.sections.find((s) => s.slug === category.section) ??
  config.sections[0];

const home = {
  icon: "pi pi-home",
  to: "/",
};
const breadcrumbItems = [
  {
    label: section.name,
    to: `/section/${section.slug}`,
  },
  {
    label: category.name,
    to: `/category/${category.slug}`,
  },
  {
    label: thread.value!.title,
    to: `/thread/${thread.value!.id}`,
  },
];

function addNewReply(newReply: DbReplyJoined) {
  replies.value.push(newReply);
}
</script>
