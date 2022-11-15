<template>
  <ProfileAvatarUrl :user="user">
    <template #content="slotProps">
      <RoundImage
        :url="slotProps.url"
        :alt="`${user.display_name}'s avatar`"
        :size="size"
        :inline="inline"
      />
    </template>
  </ProfileAvatarUrl>
</template>
<script lang="ts" setup>
import { DbProfileRow } from "~~/types/dbTypes";
const props = defineProps<{
  user: DbProfileRow;
  size?: number;
  inline?: boolean;
}>();
</script>
