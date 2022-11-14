<template>
  <h2>Create a new thread</h2>
  <form class="form-widget" @submit.prevent="createThread">
    <div>
      <label for="title">Title</label>
      <input
        id="title"
        type="text"
        v-model="title"
        placeholder="Write an interesting title..."
        required
      />
    </div>
    <div>
      <label for="threadBody">Thread body (markdown supported)</label>
      <textarea
        id="threadBody"
        rows="10"
        v-model="threadBody"
        required
      ></textarea>
    </div>
    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Post new thread'"
        :disabled="loading"
      />
    </div>
  </form>
</template>
<script setup lang="ts">
const supabase = useSupabaseClient();

const title = ref("");
const loading = ref(false);
const threadBody = ref("");

const router = useRouter();
async function createThread() {
  try {
    loading.value = true;
    const result: any = await $fetch("/api/threads/create-thread", {
      method: "post",
      body: {
        title: title.value,
        body: threadBody.value,
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
</script>
