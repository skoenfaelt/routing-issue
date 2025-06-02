// Einfache Zuordnung von Light -> Dark Themes
// Dynamische Generierung von Light -> Dark und Dark -> Light Zuordnung
const generateThemeMap = (lightThemes: Record<string, unknown>, darkThemes: Record<string, unknown>) => {
  const map: Record<string, string> = {}

  for (const lightThemeName of Object.keys(lightThemes)) {
    const darkThemeName = `Dark${lightThemeName}`
    if (darkThemes[darkThemeName]) {
      map[lightThemeName] = darkThemeName
      map[darkThemeName] = lightThemeName
    }
  }

  return map
}

export const themeMap = generateThemeMap(LightTheme, DarkTheme)

// Export aller Themes mit Zuordnung
export type ThemeName = keyof typeof themeMap | (typeof themeMap)[keyof typeof themeMap]
export const themes: Record<ThemeName, TTheme> = {
  ...LightTheme,
  ...DarkTheme,
}
