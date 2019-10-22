import axios from 'axios'

const api = axios.create({
  baseURL: "https://api-teresinasolar.herokuapp.com"
})

export default api
