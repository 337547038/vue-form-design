import { getRequest } from '@/api'

/**
 * 根据接口url下载
 * @param url
 * @param data
 * @param config
 */
export const download = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    const option = Object.assign({}, config, {
      responseType: 'blob'
    })
    getRequest(url, data, option)
      .then((res: any) => {
        const { data, headers } = res
        const filename: string =
          decodeURI(
            headers['content-disposition'].split(';')[1].split('=')[1]
          ) ||
          `${url.substr(1).replace(/\//g, '_')}_${new Date().getTime()}.xls`
        const downloadUrl: string = window.URL.createObjectURL(
          new Blob([data], { type: data.type })
        )
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = downloadUrl
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        resolve()
      })
      .catch(error => {
        reject(error)
      })
  })
}
