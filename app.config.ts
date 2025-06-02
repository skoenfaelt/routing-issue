import LightTheme from './layers/theme/constants/LightTheme'
import type { ITheme } from './layers/theme/types/ITheme'

export default defineAppConfig({
  theme: {
    actTheme: LightTheme.QSoftTheme.name,
  } as ITheme,
})
