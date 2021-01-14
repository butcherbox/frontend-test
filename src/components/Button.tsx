import styled from '@emotion/styled'

import { buttonReset } from '../styles/button_reset'

const Button = styled.button`
   ${buttonReset};
   background-color: ${props => props.theme.colors.orange};
   border-radius: 4px;
   color: #fff;
   font-weight: 500;
   line-height: 1;
   padding: 1rem 0.5rem;

   &[disabled] {
      cursor: default;
      opacity: 0.6;
   }
`

export default Button
