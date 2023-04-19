import formDesign from './form/components/form.vue'
import tableList from './dataList/components/list.vue'
import flow from './flow/components/flow.vue'

export default (app: any) => {
  app.component('AkForm', formDesign)
  app.component('AkList', tableList)
  app.component('AkFlow', flow)
}
