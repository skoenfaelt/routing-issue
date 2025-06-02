import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'
import LightThemes from './layers/theme/constants/LightTheme'
import DarkThemes from './layers/theme/constants/DarkTheme'

export default defineVuetifyConfiguration({
  labComponents: true,
  directives: true,
  icons: {
    defaultSet: 'mdi-svg',
    svg: {
      mdi: {
        aliases: {
          help: 'mdiHelp',
          oneCircle: 'mdiNumeric1CircleOutline',
          twoCircle: 'mdiNumeric2CircleOutline',
          threeCircle: 'mdiNumeric3CircleOutline',
          translate: 'mdiTranslate',
          themeLightDark: 'mdiThemeLightDark',
        },
      },
    },
  },
  theme: {
    defaultTheme: LightThemes.QSoftTheme.name,
    themes: {
      ...LightThemes,
      ...DarkThemes,
    },
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md',
    },
    VTextField: {
      rounded: 't-md',
    },
    VTooltip: {
      // set v-tooltip default location to top
      location: 'top',
    },
  },
})
