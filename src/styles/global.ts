import { css, SerializedStyles, Theme } from '@emotion/react'

const globalStyles = (theme: Theme): SerializedStyles => css`
   body {
      background-color: ${theme.colors.bodyBg};
   }

   h1 {
      font-size: 2.25rem;
      font-weight: 500;
   }

   .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
   }

`

export default globalStyles
