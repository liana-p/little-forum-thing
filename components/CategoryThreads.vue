<template>
  <Breadcrumb :home="home" :model="breadcrumbItems" />
  <div class="flex justify-content-between">
    <h1 class="text-lg font-bold">Threads in {{ category.name }}</h1>
    <nuxt-link to="/create-thread">
      <Button
        :label="user ? 'Create a new thread' : 'Login to create a new thread'"
        :disabled="!user"
      ></Button>
    </nuxt-link>
  </div>
  <DataTable :value="tableData" v-if="threads && threads.length > 0">
    <Column field="title" header="Title">
      <template #body="slotProps">
        <nuxt-link :to="slotProps.data.link">
          {{ slotProps.data.title }}
        </nuxt-link>
      </template>
    </Column>
    <Column field="author" header="Author">
      <template #body="slotProps">
        <InlineProfile :user="slotProps.data.author" />
      </template>
    </Column>
    <Column field="replies" header="Replies"></Column>
    <Column field="date" header="Date"></Column>
  </DataTable>
  <h2 v-else>There are no threads here</h2>
</template>
<script setup lang="ts">
import Breadcrumb from "primevue/breadcrumb";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
const user = useSupabaseUser();
const props = defineProps<{
  category: string;
}>();

const config = useConfig();
let category =
  config.categories.find((c) => c.slug === props.category) ??
  config.categories[0];
if (!category) {
  category = config.categories[0];
}
const section =
  config.sections.find((s) => s.slug === category.section) ??
  config.sections[0];

const { data: threads } = await useFetch(
  `/api/threads/category/${category.slug}`
);

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
];

const tableData =
  threads.value?.map((thread) => {
    return {
      title: thread.title,
      author: thread.created_by,
      replies: 0,
      date: thread.created_at,
      link: `/thread/${thread.id}`,
    };
  }) ?? [];
</script>
