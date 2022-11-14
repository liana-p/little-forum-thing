// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/supabase"],
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primeflex/primeflex.css",
  ],
  build: {
    transpile: ["primevue"],
  },
});
