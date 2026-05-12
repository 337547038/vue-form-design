import {getRequest} from '@/api'
import {stringToObj} from '@/utils/design'
import {ElMessage} from 'element-plus'
import {beforeAfter} from '@/utils/beforeAfter'
import {loadResource, removeResource} from "@/utils";
import {ScopedStyleId} from "./utils";
import {useScreenStore} from "@/store/screen"
import type {ScreenData} from "@/types/screen.ts";

const store = useScreenStore();

export const getInitData = (id: string | number) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject()
    }
    // 获取初始表单数据
    getRequest('designById', {id: id})
        .then(async (res: { data: any }) => {
          const result = res.data
          const resultData = stringToObj(result.data)
          if (resultData.config?.style) {
            removeResource(ScopedStyleId)
            loadResource(resultData.style, ScopedStyleId)
          }
          if (resultData.config?.styleLink) {
            removeResource('styleLink')
            loadResource(resultData.config?.styleLink, 'styleLink')
          }

          //window.getScreenGlobal = {}
          store.setScreenGlobal({})
          await getGlobalData(resultData.config)
          resolve(resultData)
        })
        .catch((res: any) => {
          console.log('catch', res)
          ElMessage.error(res.message || '加载异常')
          reject()
        })
  })
}
export const getGlobalData = (config: any) => {
  return new Promise((resolve, reject) => {
    const {requestUrl, before, after, method}: any = config
    if (requestUrl) {
      beforeAfter({
        apiKey: requestUrl,
        before: before,
        after: after,
        params: {},
        options: {method: method},
        type: 'none'
      })
          .then((res: any) => {
            // 将全局数据保存在window里，以方便调用
            // window.getScreenGlobal = res.data
            store.setScreenGlobal(res.data)
            resolve(res.data)
          })
          .catch((res: any) => {
            reject(res)
          })
    } else {
      resolve({})
    }
  })
}
/**
 * 返回组件远程数据
 * @param data
 */
export const getComponentData = (data: ScreenData) => {
  return new Promise((resolve, reject) => {
    const {
      optionsType,
      requestUrl,
      method = 'post',
      before,
      after
    } = data
    console.log('000', data)
    if (optionsType === 1 && requestUrl) {
      beforeAfter({
        apiKey: requestUrl,
        params: {},
        before,
        // after,这里不能传after事件，这个要特殊处理。回调的参数不一样
        options: {method: method},
        type: 'none'
      })
          .then((res: any) => {
            const resultData = res.data
            if (typeof after === 'function') {
              resolve({res: resultData, option: after(resultData, getDataByType(data))})
            } else if (typeof after === 'string') {
              // after返回字符串时，需自定义开发
              /* resolve(formatScreen(
                after,
                resultData,
                getDataByType.value
              )) */
              resolve({res: resultData, option: getDataByType(data)}) // 暂直接返回
            } else {
              resolve({res: resultData, option: getDataByType(data)}) // 没有使用after方法处理
            }
          })
          .catch((res: any) => {
            reject(res)
          })
    } else {
      resolve({res: {}, option: {}})
    }
  })
}
export const getDataByType = (data: ScreenData) => {
  switch (data.type) {
    case 'text':
    case 'sText':
      return data.text
    default:
      return data.option
  }
}
