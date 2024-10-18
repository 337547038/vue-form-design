import { getStorage } from '@/utils'

export const permission = (val: string | undefined): boolean => {
  if (!val) {
    // 为空时不作判断，返回true
    return true
  }
  const valList: string[] = val.split(',')
  const resources = getStorage('resources', true) || []
  let has: boolean = false
  if (valList) {
    valList.forEach((item: string): void => {
      if (resources.includes(item)) {
        has = true
      }
    })
  }
  return has
}
export default {
  mounted(el: HTMLElement, binding: any): void {
    // const val = binding.value?.split(',')
    const has: boolean = permission(binding.value)
    if (!has && el) {
      el.parentNode?.removeChild(el)
    }
  }
  // updated(el: HTMLElement, binding: any) {}
}
