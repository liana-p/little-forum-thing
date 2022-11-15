<template>
  <span>
    <ProfileAvatar :user="user" :inline="true" />
    {{ user.display_name }}
    <Username :username="user.username" />
  </span>
</template>
<script lang="ts" setup>
import { DbProfileRow } from "types/dbTypes";
const props = defineProps<{
  user: DbProfileRow;
}>();
</script>
