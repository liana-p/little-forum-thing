<template>
  <Button label="Reply" @click="replyToThread" :disabled="replying" />
  <ComposeReply :showDialog="replying" @send="sendReply" />
</template>
<script setup lang="ts">
import { DbThreadJoined } from "~~/types/dbTypes";

const props = defineProps<{
  thread: DbThreadJoined;
}>();
const emit = defineEmits(["new_reply"]);
const replying = ref(false);
function replyToThread() {
  replying.value = true;
}

async function sendReply(replyContent: string) {
  const result = await useFetch(`/api/thread/${props.thread.id}`, {
    method: "post",
    body: {
      body: replyContent,
    },
  });
  if (result.data.value) {
    emit("new_reply", result.data.value);
  }
  replying.value = false;
}
</script>
