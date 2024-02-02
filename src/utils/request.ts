import axios from 'axios'
import { getStorage } from '@/utils'
//import SparkMD5 from 'spark-md5'
import { ElMessage } from 'element-plus'
import { useLayoutStore } from '@/store/layout'

//5. 通过运行的命令获取各不同环境的请求api等，此处不使用在根目录添加如.env.development等文件方式
const mode = import.meta.env.MODE
const baseUrl: any = {
  development: '', // 默认命令dev
  production: '', // build
  preRelease: '' // 自定义其他环境如 "build:pre": "vite build --mode preRelease"
}

const service = axios.create({
  baseURL: baseUrl[mode],
  timeout: 3000, // request timeout
  headers: {}
})

//3.防重复提交拦截
const axiosList: any = {}

/***************************4.无感刷新换token相关****************/
let refreshTokenAjax: boolean = false
// 存储请求的数组
const subscribesArr: ((newToken: any) => void)[] = []

// 请求push到数组中
function subscribesArrRefresh(cb: (newToken: any) => void) {
  subscribesArr.push(cb)
}

// 用新token发起请求
function reloadSubscribesArr(newToken: any) {
  subscribesArr.map(cb => cb(newToken))
}

// 使用refreshToken请求获取新的token
function getNewToken(refreshToken: any) {
  const layoutStore = useLayoutStore()
  const params: any = { refreshToken: refreshToken }
  axios
    .post(baseUrl[mode] + '/api/system/user/refreshToken', params)
    .then((result: any) => {
      console.log(result)
      if (result.data.code === 1) {
        const data = result.data.data
        // 统一方法保存保存token，和登录时一致
        layoutStore.setLoginInfo(data)
        reloadSubscribesArr(data.token)
        refreshTokenAjax = false
      } else {
        layoutStore.logout()
        refreshTokenAjax = false
      }
    })
    .catch(() => {
      //console.log('换取token失败,直接退出')
      layoutStore.logout()
      refreshTokenAjax = false
    })
}

/***************************4.无感刷新换token相关结束****************/
service.interceptors.request.use(
  (config: any) => {
    //1. get请求时，将参数放到url后面
    if (
      config.method.toUpperCase() === 'GET' &&
      Object.keys(config.params || {}).length === 0
    ) {
      config.params = config.data
    }
    //2. 让每个请求携带自定义token 请根据实际情况自行修改。
    const token: any = getStorage('token', true)
    if (token) {
      config.headers['Authorization'] = token
    }
    //3. 全局防抖拦截，请根据实际情况自行修改
    // formData提交时
    /*const dataParams: any = config.data
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
    }*/
    // 全局防抖拦截结束
    //4. 无感刷新token开始
    const refreshToken = getStorage('refreshToken', true)
    if (!token && refreshToken) {
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
  (error: any) => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (res: any) => {
    const code: number = res.data.code
    const msg: string = res.data.message
    // 二进制数据则直接返回，返回时保存的文件名可从res.headers['content-disposition']获取
    if (['blob', 'arraybuffer'].includes(res.request.responseType)) {
      return res
    }
    switch (code) {
      case 1:
        return res.data
      case 401:
        // 这里可以直接跳到登录页
        //return Promise.reject('无效的会话，或者会话已过期，请重新登录。')
        ElMessage({ message: msg, type: 'error' })
        // todo 这里使用了router后在开发热更新时会导致页面刷新
        //router.push({ path: '/login' })
        window.location.href = '/login'
        break
      default:
        // 这里可统一处理其他异常拦截，或提示
        ElMessage({ message: msg, type: 'error' })
        return Promise.reject(res.data)
    }
  },
  (error: any) => {
    //接口非200异常时
    //console.log('error', error)
    const msg = error.response?.data.message || error.message
    ElMessage({ message: msg, type: 'error' })
    return Promise.reject(error)
  }
)
export default service
