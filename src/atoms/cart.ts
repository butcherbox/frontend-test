import { selector } from "recoil"
import itemsState from "./items"

const cartItemsSelector = selector({
   key: 'cartItemsState',
   get: ({ get }) => {
      const items = get(itemsState)

      return items.filter(item => item.quantityInCart > 0)
   }
})

export default cartItemsSelector
