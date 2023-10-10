import axios from 'axios'
import { getStorage } from '@/utils'
import SparkMD5 from 'spark-md5'
import { ElMessage } from 'element-plus'
import { useLayoutStore } from '@/store/layout'

//5. 通过运行的命令获取各不同环境的请求api等，无需在根目录添加如.env.development等文件
const mode = import.meta.env.MODE
const baseUrl: any = {
  development: '', // 默认命令dev
  production: '', // build
  preRelease: '' // 自定义其他环境如 "build:pre": "vite build --mode preRelease"
}
/*const source = axios.CancelToken.source()
const cancelToken = source.token*/

const service = axios.create({
  baseURL: baseUrl[mode],
  timeout: 3000, // request timeout
  headers: {}
})

//3.防重复提交拦截
const axiosList = {}

/***************************4.无感刷新换token相关****************/
let refreshTokenAjax: boolean = false
// 存储请求的数组
const subscribesArr = []

// 请求push到数组中
function subscribesArrRefresh(cb) {
  subscribesArr.push(cb)
}

// 用新token发起请求
function reloadSubscribesArr(newToken) {
  subscribesArr.map(cb => cb(newToken))
}

// 使用refreshToken请求获取新的token
function getNewToken(refreshToken) {
  const layoutStore = useLayoutStore()
  const params: any = { refreshToken: refreshToken }
  axios
    .post('/mock/system/user/token.json', params)
    .then((result: any) => {
      const data = result.data.data
      // 统一方法保存保存token，和登录时一致
      layoutStore.setLoginInfo(data)
      reloadSubscribesArr(data.token)
      refreshTokenAjax = false
    })
    .catch(() => {
      //console.log('换取token失败,直接退出')
      layoutStore.logout()
      refreshTokenAjax = false
    })
}

/***************************4.无感刷新换token相关结束****************/
service.interceptors.request.use(
  config => {
    //6.请求时可添加cancelSource回调source.cancel()取消请求
    config.cancelSource && config.cancelSource(source)
    //1. get请求时，将参数放到url后面
    if (
      config.method.toUpperCase() === 'GET' &&
      Object.keys(config.params || {}).length === 0
    ) {
      config.params = config.data
    }
    //2. 让每个请求携带自定义token 请根据实际情况自行修改。
    const token: string = getStorage('token', true, 'expired')
    if (token && token !== 'expired') {
      config.headers['Authorization'] = token
    }
    //3. 全局防抖拦截，请根据实际情况自行修改
    // formData提交时
    const dataParams: any = config.data
    if (config.data instanceof FormData) {
      //获取 FormData 对象的键值对数组
      const formDataEntries = config.data.entries()
      //遍历键值对数组，获取参数值
      for (const entry of formDataEntries) {
        const [key, value] = entry
        dataParams[key] = value
      }
    }
    const spark = new SparkMD5()
    spark.append(config.url + JSON.stringify(dataParams || {}))
    const urlKey = spark.end()
    const lastTime: number = axiosList[urlKey]
    axiosList[urlKey] = new Date().getTime() // 保存或更新请求记录
    // 添加记录，然后自动清除
    setTimeout(() => {
      delete axiosList[urlKey]
    }, 5000)
    if (lastTime) {
      const diffTime: number = new Date().getTime() - lastTime
      if (diffTime < 1000) {
        //间隔时间，小于此时间视为重复提交
        return Promise.reject({
          code: 1, // 根据实际情况自定code
          url: config.url,
          message: '数据正在处理，请勿重复提交'
        })
      }
    }
    // 全局防抖拦截结束
    //4. 无感刷新token开始
    const refreshToken = getStorage('refreshToken', true)
    if (token === 'expired' && refreshToken) {
      if (!refreshTokenAjax) {
        getNewToken(refreshToken)
      }
      refreshTokenAjax = true
      return new Promise(resolve => {
        subscribesArrRefresh(newToken => {
          config.headers['Authorization'] = newToken
          resolve(config)
        })
      })
    }
    // 无感刷新token结束
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  res => {
    const code: number = res.data.code
    const msg: string = res.data.msg
    // 二进制数据则直接返回，返回时保存的文件名可从res.headers['content-disposition']获取
    if (['blob', 'arraybuffer'].includes(res.request.responseType)) {
      return res
    }
    switch (code) {
      case 1:
        return res.data
      case 401:
        // 这里可以直接跳到登录页
        return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
      case 500:
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(new Error(msg))
      default:
        // 这里可统一处理其他异常拦截，或提示
        return Promise.reject(res.data)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
