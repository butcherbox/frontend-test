import { atom } from 'recoil'
import Item from '../types/item'

const itemsState = atom<Item[]>({
   key: 'itemsState', // unique ID (with respect to other atoms/selectors)
   default: [], // default value (aka initial value)
})

export default itemsState
