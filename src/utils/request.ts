import axios from 'axios'
// 全局设置
/* axios.defaults.baseURL = window.APP_CONFIG.BASE_URL
axios.defaults.headers.common['Authorization'] = getToken() */

const service = axios.create({
  // baseURL: import.meta.env.VITE_APP_URL, // api的base_url
  baseURL: '', // api的base_url
  timeout: 6000, // request timeout
  headers: {}
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
