import '@emotion/react'

declare module '@emotion/react' {
   export interface Theme {
      colors: ThemeColors
   }
}

type ThemeColors = {
   bodyBg: string
   cardBg: string
   gray300: string
   gray400: string
   gray700: string
   gray900: string
   orange: string
   sidePanelBg: string
   text: string
}

export const ThemeLight: ThemeColors = {
   bodyBg: "#F8F8F8",
   cardBg: "#FFFFFF",
   gray300: "#F2F2F2",
   gray400: "#EFEFEF",
   gray700: "#DADADA",
   gray900: "#C5C5C5",
   orange: "#FF4E4E",
   sidePanelBg: "#FFFFFF",
   text: "#000000"
}
