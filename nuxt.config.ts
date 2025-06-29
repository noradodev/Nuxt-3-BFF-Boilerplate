import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@pinia/nuxt','@vueuse/nuxt' ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  runtimeConfig: {
    apiUrl: process.env.API_ENDPOINT_URL || 'localhost:4000/api/v1',
    public: {},
  },
})