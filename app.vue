<script lang="ts" setup>
const themeStore = useThemeStore()
const { themeSettings } = storeToRefs(themeStore)
</script>

<template>
  <v-app
    :theme="themeSettings.actTheme"
    :class="themeSettings.actTheme"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
