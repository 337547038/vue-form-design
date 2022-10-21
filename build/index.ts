import AkForm from '../src/views/designForm/components/form.vue'
import AkList from '../src/views/designForm/components/list.vue'
import AkDesign from '../src/views/designForm/index.vue'
import '../src/assets/scss/form.scss'
export default {
  install(app: any) {
    app.component('AkForm', AkForm)
    app.component('AkList', AkList)
    app.component('AkDesign', AkDesign)
  }
}
