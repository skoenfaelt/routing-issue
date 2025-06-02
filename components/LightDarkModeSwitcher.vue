<script setup lang="ts">
defineProps<{
  color: string
}>()
const { TOGGLE_DARK_MODE } = useThemeStore()
</script>

<template>
  <v-btn
    icon="$themeLightDark"
    class="ml-3"
    :color="color"
    rounded="sm"
    size="small"
    variant="flat"
    @click="TOGGLE_DARK_MODE"
  />
</template>

<style scoped lang="scss"></style>
