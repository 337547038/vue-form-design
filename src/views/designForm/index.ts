import formDesign from './components/form.vue'
import tableList from './components/list.vue'

export default (app: any) => {
  app.component('AkFormDesign', formDesign)
  app.component('AkTableList', tableList)
}
