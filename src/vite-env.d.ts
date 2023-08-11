/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'virtual:generated-pages' {
  const routesList: any[]
  export default routesList
}
declare module 'md5'
declare module 'sortablejs'
declare module 'element-plus'
declare module 'vue-router'
declare module 'vue'
declare module 'clipboard'
declare module 'vuedraggable-es'
declare module 'vite-plugin-pages'
declare module 'vite'
declare module 'pinia'
declare module 'vite-plugin-doc-preview'
/*
declare module 'vuex' {
  type StoreStateType = typeof store.state
  type ModulesType = {
    common: typeof common.state
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>
}
*/
