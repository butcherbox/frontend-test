import styled from '@emotion/styled'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import cartItems from '../atoms/cart'

import itemsState from '../atoms/items'
import totalAllowedState from '../atoms/total_allowed'
import { buttonReset } from '../styles/button_reset'
import Item from '../types/item'
import ProgressIndicator from './ProgressIndicator'

import XMark from '../icons/x-mark.svg'

const Cart: React.FC = () => {

   const totalAllowed = useRecoilValue(totalAllowedState)
   const [allItems, setItems] = useRecoilState(itemsState)
   const itemsInCart = useRecoilValue(cartItems)

   const totalItemsInCart = itemsInCart.reduce((accum, item) => {
      accum += item.quantityInCart
      return accum
   }, 0)

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
         <ProgressIndicator current={totalItemsInCart} max={totalAllowed} />
         <Contents>
            {[...itemsInCart].sort((a, b) => a.title < b.title ? -1 : 1).map(item => (
               <CartItem key={item.key} item={item} removeItem={() => remove(item)} />
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
const Contents = styled.div`
   margin: 2rem 0;
`


type CartItemProps = {
   item: Item
   removeItem: () => void
}
const CartItem: React.FC<CartItemProps> = ({ item, removeItem }) => {
   return (
      <CartRow>
         <ItemQuantity>{item.quantityInCart}</ItemQuantity>
         <ItemName>{item.title}</ItemName>
         <ItemAction>
            <RemoveButton onClick={removeItem}>
               <span className="sr-only">Remove from cart</span>
               <img src={XMark} alt="" />
            </RemoveButton>
         </ItemAction>
      </CartRow>
   )
}

const CartRow = styled.div`
   align-items: center;
   display: flex;
   font-size: 1.5rem;
   font-weight: 500;

   & + & {
      margin-top: 1rem;
   }

`
const ItemQuantity = styled.div`
   flex: 0 0 35px;
`
const ItemName = styled.div`
   flex: 1;
`
const ItemAction = styled.div`
   flex: 0 0 35px;
`
const RemoveButton = styled.button`
   ${buttonReset};
   align-items: center;
   background-color: ${props => props.theme.colors.gray900};
   border-radius: 50%;
   display: flex;
   height: 32px;
   justify-content: center;
   width: 32px;

   img {
      width: 12px;
   }
`