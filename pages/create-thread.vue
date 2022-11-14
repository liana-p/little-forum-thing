<template>
  <h2>Create a new thread</h2>
  <div class="card">
    <form class="form-widget" @submit.prevent="createThread">
      <div class="p-fluid grid">
        <div class="field col-12">
          <span class="p-float-label">
            <InputText
              id="title"
              type="text"
              v-model="title"
              placeholder="Write an interesting title..."
              required
            />
            <label for="title">Title</label>
          </span>
        </div>
        <div class="field col-12">
          <span class="p-float-label">
            <textarea
              id="threadBody"
              class="w-full"
              rows="10"
              :autoResize="true"
              v-model="threadBody"
              required
            ></textarea>
            <label for="threadBody">Thread body (markdown supported)</label>
          </span>
        </div>
        <div class="field col-12">
          <span class="p-float-label">
            <MultiSelect
              id="categories"
              v-model="selectedCategories"
              :options="categoriesSelectData"
              optionLabel="label"
              optionGroupLabel="label"
              optionGroupChildren="items"
              placeholder="Select at least 1 category"
              display="chip"
              required
            />
            <label for="categories">Select at least 1 category</label>
          </span>
        </div>
        <div class="field col-12">
          <Button
            type="submit"
            :label="loading ? 'Loading ...' : 'Post new thread'"
            :disabled="loading"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import InputText from "primevue/inputtext";
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";

const supabase = useSupabaseClient();

const title = ref("");
const loading = ref(false);
const threadBody = ref("");

const router = useRouter();
const selectedCategories = ref<any[]>([]);

async function createThread() {
  try {
    loading.value = true;
    const result: any = await $fetch("/api/threads/create-thread", {
      method: "post",
      body: {
        title: title.value,
        body: threadBody.value,
        categories: selectedCategories.value.map((c) => c.value),
      },
    });
    if (result) {
      loading.value = false;
      router.push(`/thread/${result.id}`);
    }
  } catch (e) {
    alert(e);
    loading.value = false;
  }
}
const sections = useSections();

const categoriesSelectData = sections.map((s) => {
  return {
    label: s.name,
    items: s.categories.map((c) => {
      return {
        label: c.name,
        value: c.slug,
      };
    }),
  };
});
</script>
