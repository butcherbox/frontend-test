import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ThemeLight } from './styles/theme'
import globalStyles from './styles/global'
import Cart from './components/Cart'
import AppWrapper from './components/AppWrapper'
import ItemsList from './components/ItemsList'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: { refetchOnWindowFocus: false }
   }
})

const App = () => {

   const theme = { colors: ThemeLight }

   return (
      <QueryClientProvider client={queryClient}>
         <ThemeProvider theme={theme}>
            <Global styles={globalStyles(theme)} />
            <RecoilRoot>
               <AppWrapper>
                  <SidePanel>
                     <Cart />
                  </SidePanel>
                  <Main>
                     <ItemsList />
                  </Main>
               </AppWrapper>
            </RecoilRoot>
         </ThemeProvider>
      </QueryClientProvider>
   )
}

export default App


const SidePanel = styled.aside`
   background-color: ${props => props.theme.colors.sidePanelBg};
   flex: 0 0 275px;
   overflow: auto;
   padding: 1rem;

   @media(min-width: 950px) {
      flex: 0 0 320px;
   }

`
const Main = styled.main`
   flex: 1;
   height: 100%;
   overflow: auto;
   padding: 3rem 2rem;
`