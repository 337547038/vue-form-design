/// <reference types="vite/client" />
declare module '*.vue' {
    import type { DefineComponent } from 'vue'

    // 使用更精确的类型注解
    const component: DefineComponent<
        object,  // Props 类型 - 使用空接口更安全
        object,  // Emits 类型
        any  // Slots 类型（根据实际情况替换）
    >
    export default component
}

declare module 'virtual:generated-pages' {
  const routesList: any[]
  export default routesList
}
declare module 'spark-md5'
declare module 'sortablejs'
declare module 'element-plus'
declare module 'vue-router'
declare module 'axios'
declare module 'vue'
declare module 'clipboard'
declare module 'vuedraggable-es'
declare module 'vite-plugin-pages'
declare module 'vite'
declare module 'pinia'
declare module 'vite-plugin-doc-preview'
declare module 'nprogress'
declare module 'js-beautify'
declare module '~pages'

/*declare module 'vite-plugin-pages' {
    const content: any; // 或具体类型定义
    export default content;
}*/
/*
declare module 'vuex' {
  type StoreStateType = typeof store.state
  type ModulesType = {
    common: typeof common.state
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>
}
*/
