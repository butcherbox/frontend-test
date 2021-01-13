import React from 'react'
import styled from '@emotion/styled'
import { useQuery } from 'react-query'
import { useRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'

import GetItemsData from '../api/data'
import totalAllowedState from '../atoms/total_allowed'
import itemsState from '../atoms/items'
import Item from '../types/item'

const AppWrapper: React.FC = ({ children }) => {

   const [items, setItems] = useRecoilState(itemsState)
   const [totalAllowed, setTotalAllowed] = useRecoilState(totalAllowedState)

   const dataQuery = useQuery('global-data', GetItemsData, {
      onSuccess: data => {
         const items: Item[] = data.items.map(item => ({ ...item, key: uuid(), quantityInCart: 0 }))
         setItems(items)
         setTotalAllowed(data.total_allowed)
      }
   })

   if (dataQuery.isLoading)
      return null

   if (!dataQuery.data)
      return <p>Error loading data...</p>

   return (
      <AppContainer>
         {children}
      </AppContainer>
   )
}

export default AppWrapper

const AppContainer = styled.div`
   display: flex;
   height: 100vh;
`
