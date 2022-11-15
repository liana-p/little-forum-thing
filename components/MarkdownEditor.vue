<template>
  <TabView>
    <TabPanel header="Edit">
      <span class="p-float-label">
        <textarea
          :id="id"
          class="w-full"
          rows="10"
          :autoResize="true"
          v-model="content"
          @input="emit('update:threadContent', content)"
          required
        ></textarea>
        <label :for="id">{{ label }}</label>
      </span>
    </TabPanel>
    <TabPanel header="Preview">
      <Markdown :source="content" />
    </TabPanel>
  </TabView>
</template>
<script lang="ts" setup>
import Markdown from "vue3-markdown-it";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

const props = defineProps<{
  threadContent: string;
  id: string;
  label: string;
}>();
const content = ref(props.threadContent);
const emit = defineEmits(["update:threadContent"]);
</script>
