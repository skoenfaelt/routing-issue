import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/test-utils',
    // '@nuxtjs/i18n', // search in project for "without i18n" to see all references
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    'vuetify-nuxt-module',
  ],
  devtools: { enabled: true },

  css: ['./assets/styles/tailwind.css', './assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    families: [
      { name: 'Nunito', provider: 'google' },
    ],
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    lazy: true,
    locales: [
      { code: 'de', file: 'de-DE.json', languagetag: 'de-DE' },
    ],
    defaultLocale: 'de',
  },
  pinia: {
    storesDirs: ['./stores/**', './**/stores/**'],
  },
})
