import axios from 'axios'
// 全局设置
/* axios.defaults.baseURL = window.APP_CONFIG.BASE_URL
axios.defaults.headers.common['Authorization'] = getToken() */

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_URL, // api的base_url
  //baseURL: 'http://localhost:3001/api', // api的base_url
  timeout: 3000, // request timeout
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
    if (response.data.code === 1) {
      return response.data
    } else {
      // 这里面需增加统一拦截
      return Promise.reject(response.data)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
