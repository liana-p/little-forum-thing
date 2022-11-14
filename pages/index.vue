<template>
  <h1>{{ config.title }}</h1>
  <h3>{{ config.description }}</h3>
  <Divider />
  <h2>Forum sections:</h2>
  <DataView :value="viewData" :dataKey="'slug'" :layout="'grid'">
    <template #grid="section">
      <div class="md:col-3 col-6 p-3 m-1">
        <nuxt-link :to="section.data.link">
          <Card class="section-grid-item">
            <template #title>
              <h3>{{ section.data.name }}</h3>
            </template>
            <template #subtitle>
              <p>{{ section.data.description }}</p>
            </template>
            <template #content>
              <h4>Categories in this section:</h4>
              <ul>
                <li
                  v-for="category in section.data.categories"
                  :key="category.slug"
                >
                  <nuxt-link :to="`/category/${category.slug}`">
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </template>
            <template #footer>
              <nuxt-link :to="section.data.link">
                <Button :label="'View Section'" />
              </nuxt-link>
            </template>
          </Card>
        </nuxt-link>
      </div>
    </template>
  </DataView>
</template>
<script lang="ts" setup>
import DataView from "primevue/dataview";
import Card from "primevue/card";
import Divider from "primevue/divider";

const config = useConfig();
const viewData = useSections();
</script>
<style>
.section-grid-item {
  border: 1px solid var(--surface-border);
}
</style>
