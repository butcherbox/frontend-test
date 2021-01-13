import { selector } from "recoil"
import itemsState from "./items"

const totalItemsSelector = selector({
   key: 'totalItemsSelector',
   get: ({ get }) => {
      const items = get(itemsState)

      return items.reduce((accum, item) => {
         accum = accum + item.quantityInCart
         return accum
      }, 0)
   }
})

export default totalItemsSelector
