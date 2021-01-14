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


const ItemsContainer = styled.div`
   display: grid;
   grid-gap: 1rem;
   grid-template-columns: repeat(1, 1fr);
   justify-content: center;

   @media(min-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media(min-width: 950px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media(min-width: 1150px) {
      grid-gap: 2rem;
      grid-template-columns: repeat(4, 1fr);
   }
`