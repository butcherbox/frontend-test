import { atom } from 'recoil'

const totalAllowedState = atom({
   key: 'totalAllowedState', // unique ID (with respect to other atoms/selectors)
   default: 0, // default value (aka initial value)
})

export default totalAllowedState
