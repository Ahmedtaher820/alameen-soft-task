// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})