import permissions from './permissions'
export default {
  install(app) {
    app.directive('permission', permissions)
  }
}
