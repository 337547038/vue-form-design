import { onMounted, onUnmounted } from 'vue'

export function useEventListener(target:any, event:any, callback:any) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}
