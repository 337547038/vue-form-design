import diyIconfont from './diyIconfont/index.vue'
import userDialog from './userDialog/index.vue'
import akForm from './form/index.vue'
import akList from './table/index.vue'
import akFlow from './flow/index.vue'

export default (app: any) => {
  app.component('DiyIconfont', diyIconfont)
  app.component('UserDialog', userDialog)
  app.component('AkForm', akForm)
  app.component('AkList', akList)
  app.component('AkFlow', akFlow)
}
