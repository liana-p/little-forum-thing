<template>
  <Breadcrumb :home="home" :model="breadcrumbItems" />
  <div v-if="section">
    <h1>Forum Section: {{ section.name }}</h1>
    <h3>{{ section.description }}</h3>
    <Divider />
    <h2>Forum sections:</h2>
    <DataView :value="viewData" :dataKey="'slug'" :layout="'grid'">
      <template #grid="category">
        <div class="md:col-6 col-6 p-3 m-1">
          <nuxt-link :to="category.data.link">
            <Card class="section-grid-item">
              <template #content>
                <h2>{{ category.data.name }}</h2>
                <p>{{ category.data.description }}</p>
              </template>
            </Card>
          </nuxt-link>
        </div>
      </template>
    </DataView>
  </div>
  <div v-else>
    <h1>Section {{ route.params.section }} not found</h1>
  </div>
</template>
<script lang="ts" setup>
import DataView from "primevue/dataview";
import Card from "primevue/card";
import Divider from "primevue/divider";
const route = useRoute();
const config = useConfig();
const sections = useSections();
const section =
  sections.find((s) => s.slug === route.params.section) ?? sections[0];
console.log(section);

const viewData = section?.categories ?? [];

const home = {
  icon: "pi pi-home",
  to: "/",
};
const breadcrumbItems = [
  {
    label: section.name,
    to: `/section/${section.slug}`,
  },
];
</script>
