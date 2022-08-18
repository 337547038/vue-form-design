import formDesign from './components/form.vue'
import tableList from './components/list.vue'

export default (app: any) => {
  app.component('AkForm', formDesign)
  app.component('AkList', tableList)
}
