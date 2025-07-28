import permissions from './permissions'
export default {
  install(app: any) {
    app.directive('permission', permissions)
  }
}
