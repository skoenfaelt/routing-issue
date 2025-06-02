<script setup lang="ts">
import HelpBtn from '~/components/HelpBtn.vue'
</script>

<template>
  <div class="h-full w-full page-wrapper">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-spacer />

        <LightDarkModeSwitcher color="lightprimary" />
        <HelpBtn color="lightsecondary" />
      </v-container>
    </v-app-bar>

    <v-main class="h-full">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <!--       without i18n > remove localePath         -->
                <v-list-item
                  title="home"
                  :to="'/home'"
                  link
                />
                <v-list-item
                  title="id 1"
                  :to="'/home/1'"
                  link
                />

                <v-divider class="my-2" />

                <v-list-item
                  color="grey-lighten-4"
                  title="Refresh"
                  link
                />
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <v-container>
                <slot />
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<style scoped>

</style>
