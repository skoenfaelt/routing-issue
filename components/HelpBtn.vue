<script setup lang="ts">
defineProps<{
  color: string
}>()

const initialVisitCookie = useCookie<boolean>('initial_visit')

const updateShowIntroduction = (newValue: boolean) => {
  initialVisitCookie.value = newValue
}
</script>

<template>
  <v-btn
    icon="$help"
    class="ml-3"
    :color="color"
    rounded="sm"
    size="small"
    variant="flat"
    @click="updateShowIntroduction(false)"
  />
</template>

<style scoped>

</style>
