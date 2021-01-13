import React from 'react'
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil'

import ItemType from '../types/item'
import itemsState from '../atoms/items'
import totalAllowedState from '../atoms/total_allowed'
import totalItemsSelector from '../atoms/total_cart_items'

type Props = {
   item: ItemType
}
const Item: React.FC<Props> = ({ item }) => {

   const [items, setItems] = useRecoilState(itemsState)
   const maxAllowed = useRecoilValue(totalAllowedState)
   const totalItems = useRecoilValue(totalItemsSelector)

   const canDecrement = () => item.quantityInCart > 0
   const canIncrement = () => (item.allowed === -1 || item.quantityInCart < item.allowed) && totalItems + 1 <= maxAllowed

   const decrement = () => {

      if (item.quantityInCart < 1)
         return

      const newItems = [...items]
      const idx = newItems.findIndex(i => i.key === item.key)

      if (idx > -1) {
         newItems[idx] = {
            ...newItems[idx],
            quantityInCart: newItems[idx].quantityInCart - 1
         }
      }

      setItems(newItems)

   }
   const increment = () => {

      const newItems = [...items]

      const idx = newItems.findIndex(i => i.key === item.key)

      if (idx > -1) {
         newItems[idx] = {
            ...newItems[idx],
            quantityInCart: newItems[idx].quantityInCart + 1
         }

         setItems(newItems)
      }

   }

   return (
      <ItemCard>
         {item.title}
         <button onClick={decrement} disabled={!canDecrement()}>-</button>
         <button onClick={increment} disabled={!canIncrement()}>+</button>
         <div>{item.quantityInCart}</div>
      </ItemCard>
   )
}

export default Item

const ItemCard = styled.li``