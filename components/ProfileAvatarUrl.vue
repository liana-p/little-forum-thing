<template>
  <slot name="content" :url="avatarUrl"></slot>
</template>
<script lang="ts" setup>
import { DbProfileRow } from "~~/types/dbTypes";

const props = defineProps<{
  user: DbProfileRow;
}>();
const avatarUrl = ref(await useAvatar(props.user.avatar_url));
</script>
