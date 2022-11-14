<template>
  <Menubar :model="items">
    <template #end>
      <nuxt-link to="/account">
        <Button
          :label="user ? 'Account' : 'Login / Signup'"
          class="p-button-link"
        />
      </nuxt-link>
    </template>
  </Menubar>
  <div class="container mx auto md px-4">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { darkTheme } from "naive-ui";
import Menubar from "primevue/menubar";

const user = await useSupabaseUser();
const config = useConfig();
const items = ref([
  {
    label: config.title,
    icon: "pi pi-fw pi-home",
    url: "/",
  },
]);
</script>
