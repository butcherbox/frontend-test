import styled from '@emotion/styled'
import React from 'react'
import { selector, useRecoilState, useRecoilValue } from 'recoil'
import cartItems from '../atoms/cart'

import itemsState from '../atoms/items'
import totalAllowedState from '../atoms/total_allowed'
import Item from '../types/item'

const Cart: React.FC = () => {

   const totalAllowed = useRecoilValue(totalAllowedState)
   const [allItems, setItems] = useRecoilState(itemsState)
   const itemsInCart = useRecoilValue(cartItems)

   const remove = (item: Item) => {
      const newItems = [...allItems]

      const idx = newItems.findIndex(itm => itm.key === item.key)

      if (idx > -1) {
         newItems[idx] = {
            ...newItems[idx],
            quantityInCart: 0
         }
         setItems(newItems)
      }

   }

   return (
      <div>
         <Header>
            <h1>Your Next Box</h1>
         </Header>
         max: {totalAllowed}
         <Contents>
            {itemsInCart.map(item => (
               <div key={item.title}>
                  {item.title} - {item.quantityInCart} - <button onClick={() => remove(item)}>-</button>
               </div>
            ))}
         </Contents>
      </div>
   )
}

export default Cart

const Header = styled.header`
   text-align: center;
   padding: 2rem 0;
`
const Contents = styled.div``