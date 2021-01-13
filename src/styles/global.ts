import { css, SerializedStyles, Theme } from '@emotion/react'

const globalStyles = (theme: Theme): SerializedStyles => css`
   body {
      background-color: ${theme.colors.bodyBg};
   }

   h1 {
      font-size: 2.25rem;
      font-weight: 500;
   }

`

export default globalStyles
