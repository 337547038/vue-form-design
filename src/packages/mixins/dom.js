/**
 * Created by 337547038.
 */
/* 节点操作的一些方法 */
export default {
  methods: {
    scrollTop () {
      /* 滚动条的位置 */
      return document.documentElement.scrollTop || document.body.scrollTop
    },
    getOffset (el) {
      // 返回元素偏移位置
      const componentRect = el.getBoundingClientRect()
      const top = componentRect.top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
      const left = componentRect.left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0)
      const width = el.offsetWidth
      const height = el.offsetHeight
      return {left: left, top: top, width: width, height: height}
    },
    getWindow () {
      // 返回窗口宽高
      const width = document.documentElement.clientWidth || document.body.clientWidth
      const height = document.documentElement.clientHeight || document.body.clientHeight
      return {width: width, height: height}
    },
    getScrollbarWidth () {
      // 取滚动条的宽
      const hasScroll = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)
      if (hasScroll) {
        const scrollDiv = document.createElement('div')
        scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'
        document.body.appendChild(scrollDiv)
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
        return scrollbarWidth
      }
    },
    hasClass (elements, cName) {
      return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'))
    },
    addClass (elements, cName) {
      if (!this.hasClass(elements, cName)) {
        if (elements.className) {
          elements.className += ' ' + cName
        } else {
          elements.className += cName
        }
      }
    },
    removeClass (elements, cName) {
      if (this.hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp('(\\s|^)' + cName + '(\\s|$)'), '')
      }
    }
    /* getDomWidthOrHeight (obj) {
      // 获取页面隐藏元素的宽高
      const clone = obj.cloneNode(true)
      clone.style.display = 'block'
      clone.style.position = 'absolute'
      clone.style.top = '-10000px'
      obj.parentNode.appendChild(clone)
      const width = clone.offsetWidth
      const height = clone.offsetHeight
      obj.parentNode.removeChild(clone)
      return [width, height]
    } */
  }
}
