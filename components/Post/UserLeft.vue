<template>
  <div class="mr-3">
    <ProfileAvatar :user="user" :size="150" />
  </div>
</template>
<script lang="ts" setup>
import Card from "primevue/card";
import { DbProfileRow } from "~~/types/dbTypes";

const props = defineProps<{
  user: DbProfileRow;
}>();
</script>
