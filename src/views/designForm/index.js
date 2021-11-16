import formDesign from './components/form.vue'
import tableList from './components/list.vue'

export default (app) => {
  /*component.forEach(item => {
    app.component(item.name, item)
  })*/
  app.component('akFormDesign', formDesign)
  app.component('akTableList', tableList)
}
/*const install = function (vue){
  vue.component('akFormDesign', formDesign)
}
export default install*/
