import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@pinia/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    apiUrl: process.env.API_ENDPOINT_URL,
    public: {},
  },
  app: {
    head: {
      title: process.env.APP_NAME,
      titleTemplate: '%s - SaaS App Name',
      meta: [
        { name: 'description', content: 'The best SaaS for solving your problems. Discover our features, pricing, and more.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
})
