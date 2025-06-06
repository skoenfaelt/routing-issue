﻿export type TTheme = {
  name: string
  dark: boolean
  variables?: object
  colors: {
    'primary'?: string
    'secondary'?: string
    'info'?: string
    'success'?: string
    'accent'?: string
    'warning'?: string
    'error'?: string
    'lightprimary'?: string
    'lightsecondary'?: string
    'lightsuccess'?: string
    'lighterror'?: string
    'lightwarning'?: string
    'darkprimary'?: string
    'darksecondary'?: string
    'darkText'?: string
    'lightText'?: string
    'borderLight'?: string
    'inputBorder'?: string
    'containerBg'?: string
    'surface'?: string
    'background'?: string
    'on-surface-variant'?: string
    'gray100'?: string
    'primary200'?: string
    'secondary200'?: string
  }
}
