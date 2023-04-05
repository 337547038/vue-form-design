import formDesign from './form/components/form.vue'
import tableList from './dataList/components/list.vue'

export default (app: any) => {
  app.component('AkForm', formDesign)
  app.component('AkList', tableList)
}
