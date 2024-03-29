import { API_BASE_URL } from '../config'
import TokenService from './token-service'

const ToolsApiService = {
    checkoutTools(myBasketObj) {
      return fetch(`${API_BASE_URL}/checkouts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(myBasketObj)
      })
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
          return res.json()
      })
    },
    getAllTools() {
      return fetch(`${API_BASE_URL}/tools`, {
        method: 'GET',
        })
      .then((toolsResponse) => {
        if (!toolsResponse.ok) {
          return toolsResponse.json().then(error => Promise.reject(error))
        }
          return toolsResponse.json()
      })
    },
    getUserTools(userId) {
      return fetch(`${API_BASE_URL}/tools/for_user/${userId}`, {
        method: 'GET',
        headers: {
          'authorization': `bearer ${TokenService.getAuthToken()}`,
          },        
        })
      .then((toolsResponse) => {
        if (!toolsResponse.ok) {
          return toolsResponse.json().then(error => Promise.reject(error))
        }
          return toolsResponse.json()
      })
    }    
}

export default ToolsApiService;