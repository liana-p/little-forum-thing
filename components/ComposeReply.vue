<template>
  <Dialog header="Header" :visible="showDialog" class="w-full">
    <h3>Post a new reply</h3>
    <div class="w-full">
      <MarkdownEditor
        id="replybody"
        v-model:threadContent="replyContent"
        label="Type a reply (markdown supported)"
        value=""
      />
    </div>
    <Button
      @click="sendReply"
      :disabled="sending || replyContent.length < 10"
      label="Send reply"
    />
  </Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";

const props = defineProps<{
  showDialog: boolean;
}>();
const emit = defineEmits(["send"]);
const replyContent = ref("");
const sending = ref(false);
function sendReply() {
  sending.value = true;
  emit("send", replyContent.value);
  sending.value = false;
}
</script>
