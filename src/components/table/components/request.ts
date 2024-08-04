//数据处理
import { beforeAfter, getRequestEvent } from '@/utils/beforeAfter'
import { ElMessage } from 'element-plus'

const getData = ({ props, state, page, searchFormValue, route }) => {
  return new Promise((resolve, reject) => {
    // 优先使用config配置的
    const getUrl = props.data.apiKey?.list || props.apiKey?.list
    if (!getUrl) {
      console.warn(new Error('请先设置请求apiKey.list'))
      return
    }
    if (page) {
      state.currentPage = page
    }
    state.loading = true
    // 筛选查询一般不存在校验，这里直接取值
    const formValue = searchFormValue || {}
    const params = {
      extend: {
        sort: props.data.config?.orderSort,
        pageSize: state.pageSize,
        pageNum: state.currentPage
      },
      query: Object.assign({}, formValue, props.query)
    }
    beforeAfter({
      apiKey: getUrl,
      params: params,
      before: getRequestEvent(props, 'before'),
      after: getRequestEvent(props, 'after'),
      route: route,
      type: 'getData'
    })
      .then((res: any) => {
        const data = res.data
        resolve(data)
        state.dict = data.dict || {}
        state.total = data.total || 0
      })
      .catch(() => {
        reject()
        state.total = 0
        state.dict = {}
        state.loading = false
      })
  })
}

const del = ({ idList, pk, props, state, route }) => {
  return new Promise((resolve, reject) => {
    state.loading = true
    const delUrl = props.data.apiKey?.del || props.apiKey?.del
    if (!pk) {
      console.warn('请配置主键pk')
      return
    }
    const delParams = {
      [pk]: idList.toString() // 多个时转字符串
    }
    if (!delUrl) {
      console.warn('请先配置apiKey.del')
      return
    }
    beforeAfter({
      apiKey: delUrl,
      params: delParams,
      before: getRequestEvent(props, 'before'),
      after: getRequestEvent(props, 'after'),
      route: route,
      type: 'del'
    })
      .then((res: any) => {
        state.loading = false
        ElMessage.success(res.message || '删除成功')
        resolve()
      })
      .catch((res: { message: string; code: string | number }) => {
        state.loading = false
        ElMessage.error(res.message || '删除失败')
        reject()
      })
  })
}

const exportEvent = ({ params, props, state, route }) => {
  state.loading = true
  const exportUrl = props.data.apiKey?.export || props.apiKey?.export
  if (!exportUrl) {
    console.warn('请先配置apiKey.exportUrl')
    return
  }
  beforeAfter({
    apiKey: exportUrl,
    params: params,
    before: getRequestEvent(props, 'before'),
    after: getRequestEvent(props, 'after'),
    route: route, //为方便需要从路由获取参数提供便利
    type: 'export',
    options: { responseType: 'blob' }
  })
    .then((res: any) => {
      state.loading = false
      const { data, headers } = res.data
      const filename: string = decodeURI(
        headers['content-disposition']?.split(';')[1]?.split('=')[1]
      )
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
      ElMessage.success(res.message || '导出成功')
    })
    .catch((res: { message: string; code: string | number }) => {
      state.loading = false
      ElMessage.error(res.message || '导出失败')
    })
}

const switchEvent = ({
  props,
  switchLoading,
  val,
  rowProp,
  oldVal,
  params
}) => {
  //提交修改
  const apiKey = props.data.apiKey?.edit || props.apiKey?.edit
  if (!apiKey) {
    console.warn('请先配置apiKey.edit')
    params[rowProp] = oldVal //回退状态
    return
  }
  switchLoading.value = true
  const data: any = Object.assign({}, params, { [rowProp]: val })
  beforeAfter({
    apiKey: apiKey,
    params: data,
    before: getRequestEvent(props, 'before'),
    after: getRequestEvent(props, 'after'),
    type: 'switchChange'
  })
    .then((res: any) => {
      switchLoading.value = false
      //修改成功，开关值已改变不用刷新数据
      ElMessage.success(res.message || '操作成功')
    })
    .catch(() => {
      //修改失败，回退状态
      params[rowProp] = oldVal //回退状态
      switchLoading.value = false
      //ElMessage.success(res.message || '操作失败')
    })
}

export { exportEvent, del, getData, switchEvent }
