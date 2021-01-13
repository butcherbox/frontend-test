import axios from 'axios'

import Item from '../types/item'

type Response = {
   items: Omit<Item, 'key'>[]
   total_allowed: number
}

async function GetItemsData(): Promise<Response> {
   try {
      const response = await axios.get<Response>(`/data.json`)
      return response.data
   } catch {
      return Promise.reject()
   }
}

export default GetItemsData
