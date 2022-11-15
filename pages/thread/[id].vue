<template>
  <Breadcrumb :home="home" :model="breadcrumbItems" />
  <h2>{{ thread.title }}</h2>
  <h4>
    Posted by <InlineProfile :user="thread.created_by" /> at
    {{ thread.created_at }}
  </h4>
  <div>
    <Markdown :source="thread.body" />
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from "primevue/breadcrumb";
import Markdown from "vue3-markdown-it";
import { DbThreadJoined } from "~~/types/dbTypes";

const config = useConfig();
const route = useRoute();
const threadId = ref(route.params.id);
const result = await useFetch(`/api/thread/${route.params.id}/`);
let thread = ref(result.data.value! as DbThreadJoined);

if (!thread.value) {
  thread.value = defaultThread() as any;
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
</script>
