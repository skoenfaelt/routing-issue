<script setup lang="ts">
const { t } = useI18n()
const initialVisitCookie = useCookie<boolean>('initial_visit')

const showIntroduction = ref(true)

watch(initialVisitCookie, (newValue) => {
  showIntroduction.value = !newValue
}, {
  immediate: true,
})

const updateShowIntroduction = (newValue: boolean) => {
  initialVisitCookie.value = newValue
}
</script>

<template>
  <v-dialog
    width="75%"
    :max-width="750"
    :model-value="showIntroduction"
    persistent
    @update:model-value="updateShowIntroduction"
  >
    <v-card class="p-8">
      <div class="text-center text-3xl font-bold">
        {{ t('introduction.title') }}
      </div>
      <div class="mt-2 text-base text-left">
        {{ t('introduction.description') }}
      </div>

      <v-row class="mt-3">
        <v-col>
          <v-sheet
            height="100%"
            rounded="sm"
            color="lightprimary"
            class="p-4 flex flex-col gap-4 items-center"
          >
            <div class="text-2xl">
              <v-icon
                color="primary"
                icon="$oneCircle"
              />
            </div>
            <div class="text-base">
              {{ t('introduction.step1') }}
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
            height="100%"
            rounded="sm"
            color="lightsecondary"
            class="p-4 flex flex-col gap-4 items-center"
          >
            <div class="text-2xl">
              <v-icon
                color="secondary"
                icon="$twoCircle"
              />
            </div>
            <div class="text-base">
              {{ t('introduction.step2') }}
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet
            height="100%"
            rounded="sm"
            color="lightprimary"
            class="p-4 flex flex-col gap-4 items-center"
          >
            <div class="text-2xl">
              <v-icon
                color="primary"
                icon="$threeCircle"
              />
            </div>
            <div class="text-base">
              {{ t('introduction.step3') }}
            </div>
          </v-sheet>
        </v-col>
      </v-row>

      <v-btn
        class="mt-8"
        color="primary"
        :text="t('Ich bin bereit!')"
        @click="updateShowIntroduction(true)"
      />
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>
