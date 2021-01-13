import styled from '@emotion/styled'
import React from 'react'
import { useRecoilValue } from 'recoil'

import itemsState from '../atoms/items'
import Item from './Item'

const ItemsList: React.FC = () => {
   
   const items = useRecoilValue(itemsState)
   
   return (
      <ItemsContainer>
         {items.map(item => (
            <Item
               key={item.key}
               item={item}
            />
         ))}
      </ItemsContainer>
   )
}

export default ItemsList


const ItemsContainer = styled.ul`
   
`