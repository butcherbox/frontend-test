import React from 'react'
import styled from '@emotion/styled'
import { useRecoilState, useRecoilValue } from 'recoil'

import ItemType from '../types/item'
import itemsState from '../atoms/items'
import totalAllowedState from '../atoms/total_allowed'
import totalItemsSelector from '../atoms/total_cart_items'
import Button from './Button'

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
      if (item.quantityInCart < 1 || !canDecrement())
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
      if (!canIncrement())
         return
      
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

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const existingValue = item.quantityInCart
      const newValue = e.target.value

      if (+newValue > existingValue) {
         increment()
      } else {
         decrement()
      }

   }

   return (
      <ItemCard>
         <Hero>
            <Image style={{ backgroundImage: `url(${item.url})` }} />
         </Hero>
         <Contents>
            <Title>
               {item.title}
            </Title>
            <Actions>
               {item.quantityInCart > 0 ? (
                  <QuantityActions>
                     <Button onClick={decrement} disabled={!canDecrement()}>
                        &mdash;
                     </Button>
                     <QuantityInput
                        max={item.allowed === -1 ? maxAllowed : item.allowed}
                        min={0}
                        onChange={handleInputChange}
                        type="number"
                        value={item.quantityInCart}
                     />
                     <Button onClick={increment} disabled={!canIncrement()}>+</Button>
                  </QuantityActions>
               ) : item.allowed === 0 ? (
                  <AddToBoxButton disabled={true}>Out Of Stock</AddToBoxButton>
               ) : (
                  <AddToBoxButton onClick={increment} disabled={!canIncrement()}>Add To Box</AddToBoxButton>
               )}
            </Actions>
         </Contents>
      </ItemCard>
   )
}

export default Item

const ItemCard = styled.article`
   background-color: ${props => props.theme.colors.cardBg};
   box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, .10);
`
const Hero = styled.div`
   align-items: stretch;
   display: flex;
   height: 140px;
   margin: 6px;
`
const Image = styled.div`
   background-position: center center;
   background-size: cover;
   background-repeat: no-repeat;
   flex: 0 0 100%;
`
const Contents = styled.div`
   border-top: 1px solid ${props => props.theme.colors.gray300};
   padding: 1rem;
`
const Title = styled.h1`
   font-size: 1rem;
   font-weight: 400;
`

const Actions = styled.div`
   margin: 1rem 0 0;
`
const AddToBoxButton = styled(Button)`
   width: 100%;
`
const QuantityActions = styled.div`
   display: grid;
   grid-template-columns: repeat(3, minmax(0, 1fr));
   grid-column-gap: 12px;
`

const QuantityInput = styled.input`
   border: 1px solid ${props => props.theme.colors.gray700};
   border-radius: 4px;
   font-family: inherit;
   font-size: 1rem;
   text-align: center;
   width: auto;
`