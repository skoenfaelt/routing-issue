export const useThemeStore = defineStore(
  'themeStore',
  () => {
    const theme = useAppConfig().theme as ITheme
    /// region refs
    const themeSettings = ref<ITheme>(theme)
    /// endregion

    /// region getters
    const isDarkMode = () => {
      return themes[themeSettings.value.actTheme]?.dark || false
    }
    const availableThemes = () => {
      return Object.keys(themes)
    }
    /// endregion

    /// region methods
    function SET_THEME(theme: string) {
      if (themes[theme]) {
        themeSettings.value.actTheme = theme
      }
      else {
        console.warn(`Theme ${theme} ist nicht verfügbar.`)
      }
    }
    function TOGGLE_DARK_MODE() {
      themeSettings.value.actTheme = themeMap[themeSettings.value.actTheme] || themeSettings.value.actTheme
    }

    async function $reset() {
      themeSettings.value = theme
    }
    /// endregion

    return {
      /// region refs
      themeSettings,
      /// endregion
      /// region getters
      isDarkMode,
      availableThemes,
      /// endregion
      /// region methods
      SET_THEME,
      TOGGLE_DARK_MODE,
      $reset,
      /// endregion
    }
  },
  {
    persist: true,
  },
)
