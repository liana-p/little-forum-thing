<template>
  <slot name="content" :url="avatarUrl"></slot>
</template>
<script lang="ts" setup>
import { DbProfileRow } from "~~/types/dbTypes";

const props = defineProps<{
  user: DbProfileRow;
}>();
const avatarUrl = ref(props.user.avatar_url);
</script>
