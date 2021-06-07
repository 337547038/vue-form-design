<!-- Created by 337547038 on 2018/8/31 0031. -->
<template>
  <transition :name="animation">
    <div v-show="visible"
         :class="{'active':visible,[prefixCls+'-dialog']:true,[className]:className,[prefixCls+'-dialog-isAlert']:isAlert,'dialog-full-screen':isFull}"
         :style="{zIndex:zIndex2,
         animationDuration: '.3s',
         left:style.left,
         top:style.top
         }">
      <span :class="[prefixCls+'-dialog-icon']">
        <a href="javascript:;"
           class="min icon-minus"
           v-if="showScreen"
           @click="_screenMin">
        </a>
        <a href="javascript:;"
           class="max"
           :class="{'icon-full':!isFull,'icon-max':isFull}"
           v-if="showScreen||fullScreen"
           @click="isFull=!isFull">
        </a>
        <a href="javascript:;"
           :class="`${prefixCls}-dialog-close icon-close`"
           v-if="showClose"
           @click="_close">
        </a>
      </span>
      <div :class="`${prefixCls}-dialog-auto-close`" v-if="autoClose>0">
        <span v-text="autoTime"></span>秒后自动关闭
      </div>
      <div :class="`${prefixCls}-dialog-header`" :style="{cursor: move?'move':''}" ref="head"
           v-if="title||$slots.title" @mousedown="_mouseDown">
        <template v-if="title">{{title}}</template>
        <slot name="title" v-else></slot>
      </div>
      <div v-if="content||$slots.default"
           :style="scrollStyle"
           :class="{
           [prefixCls+'-dialog-alert']:isAlert,
           [prefixCls+'-dialog-content']:true,
           'has-icon':icon}">
        <div v-if="content" :class="[prefixCls+'-dialog-text']">
          <i :class="[{['icon-'+iconName]:icon}]" v-if="icon"></i><span v-html="content"></span>
        </div>
        <slot v-else></slot>
      </div>
      <slot name="footer"></slot>
      <div :class="`${prefixCls}-dialog-footer`" v-if="confirm||cancel">
        <d-button type="primary" v-if="confirm" @click="_confirm">{{confirm}}</d-button>
        <d-button type="cancel" v-if="cancel" @click="_cancel">{{cancel}}</d-button>
      </div>
    </div>
  </transition>
</template>

<script>
import dButton from '../button'
import dom from '../mixins/dom.js'
import {prefixCls} from '../prefix'
import md5 from 'js-md5'

export default {
  name: `${prefixCls}Dialog`,
  data() {
    return {
      prefixCls: prefixCls,
      autoTime: 0, // 自动关闭时间
      scrollStyle: '', // 内容区域
      scrollbarWidth: 0, // 滚动条的宽
      dialogWidth: 0, // 弹窗宽高
      dialogHeight: 0,
      windowHeight: 0, // 窗口宽高
      windowWidth: 0, // 窗口宽高
      dialogHeader: 0, // 弹窗内的头部高
      dialogFooter: 0, // 弹窗内的底部高
      zIndex2: this.zIndex,
      visible: false, // 控制窗口显示隐藏
      clearTime: '',
      style: {
        left: '', // 窗口位置
        top: '' // 窗口位置
      },
      isFull: this.fullScreen, // 窗口状态 false正常 true最大化
      minScreen: ''
    }
  },
  mixins: [dom],
  props: {
    zIndex: {
      type: Number,
      default: 2019
    },
    value: {// 是否显示 Dialog
      type: Boolean,
      default: false
    },
    title: String, // 标题，也可通过具名 slot 传入，title优先
    content: null,
    appendToBody: {
      // Dialog 自身是否插入至 body 元素上
      type: Boolean,
      default: true
    },
    width: Number,
    height: Number,
    modal: {
      // 是否需要遮罩层
      type: Boolean,
      default: true
    },
    closeModal: {
      // 是否可以通过点击 modal 关闭 Dialog
      type: Boolean,
      default: true
    },
    lockScroll: {
      // 是否在 Dialog 出现时将 body 滚动锁定
      type: Boolean,
      default: false
    },
    className: String,
    showClose: {
      // 是否显示关闭按钮
      type: Boolean,
      default: true
    },
    confirm: String, // 确认按钮
    cancel: String, // 取消按钮
    move: {
      // 允许拖动窗口
      type: Boolean,
      default: true
    },
    autoClose: {
      // 自动关闭时间
      type: Number,
      default: 0
    },
    beforeClose: Function, // 关闭前的回调
    callback: Function, // 确定按钮关闭前的回调
    animation: {
      type: String,
      default: 'zoom'
    },
    after: Function,
    center: {
      // 默认水平垂直居中。false时不设置位置
      type: Boolean,
      default: true
    },
    isAlert: {
      // 用于区别引用形式，组件或者是插件，不需要通过外部传参。true时关闭弹窗时同时从body移除
      type: Boolean,
      default: false
    },
    icon: {
      // 主要用于this.$dialog中常见的几种提示
      type: Number,
      default: 0
    },
    fullScreen: {
      type: Boolean,
      default: false
    }, // 全屏显示
    showScreen: { // 显示最大最小化按钮
      type: Boolean,
      default: false
    }
  },
  components: {dButton},
  watch: {
    value(v) {
      if (v) {
        this.$nextTick(function () {
          this._openDialog()
        })
      } else if (this.visible) {
        // visible才调用，false表示$emit之前已经调用过_hide()了，不需要重复调用
        this._hide()
      }
      this.visible = v
    }
  },
  methods: {
    _mouseDown(ev) {
      let head = this.$refs.head
      if (this.move && head) {
        let flag = false
        let offSet = this.getOffset(this.$el)
        let x = ev.pageX - offSet.left
        let y = ev.pageY - offSet.top
        const scrollTop = this.scrollTop()
        flag = true
        document.onmousemove = (ev) => {
          if (flag) {
            let left = ev.pageX - x
            let top = ev.pageY - y - scrollTop
            if (left <= 0) {
              left = 0// 最左边
            } else if (left > this.windowWidth - this.dialogWidth) {
              // 最右边，窗口宽－弹层宽
              left = this.windowWidth - this.dialogWidth
            }
            if (top <= 0) {
              top = 0
            } else if (top > this.windowHeight - this.dialogHeight) {
              top = this.windowHeight - this.dialogHeight
            }
            this.$el.style.left = left + 'px'
            this.$el.style.top = top + 'px'
            this.$el.style.transitionDuration = '0s' // 拖动时要设为0，否则拖动很慢的感觉
          }
          return false
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          flag = false
        }
      }
    },
    _close() {
      // 关闭按钮点击事件
      this._beforeClose('close')
    },
    _cancel() {
      this._beforeClose('cancel')
    },
    _confirm() {
      this._beforeClose('confirm')
    },
    _beforeClose(type) {
      if (this.autoClose) {
        clearInterval(this.clearTime)
      }
      if (type === 'confirm' && typeof this.callback === 'function') {
        this.callback(this._hide)
        return false
      }
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(type, this._hide)
      } else {
        this._hide()
      }
    },
    _hide() {
      // 关闭弹窗
      // 移除遮罩层
      if (this.modal) {
        // 先移除当前层对应的，根据当前窗口绑定的遮罩层删除
        // const modal = document.querySelector(`.${prefixCls}-dialog-modal.active`)
        const modal = document.querySelector(`.${prefixCls}-dialog-zindex-${this.zIndex2}`)
        let wait = 0
        let animationDuration = '0s'
        // 如果有上级弹层，则恢复上级遮罩可见
        const prevModal = document.getElementById('dialog' + this.zIndex2)
        if (prevModal) {
          // prevModal.className = `${prefixCls}-dialog-modal active`
          prevModal.className = prevModal.className + ' active'
          prevModal.style.display = 'block'
          prevModal.animationDuration = '0s'
        } else {
          wait = 300
          animationDuration = '.3s'
        }
        if (modal) {
          modal.style.animationDuration = animationDuration
          modal.style.opacity = 0
          // 如果只有一个弹窗口，先完成css动画再移除
          if (wait > 0) {
            // wait等于0时也是异步的，得分开写
            setTimeout(() => {
              modal.parentNode.removeChild(modal)
            }, wait)
          } else {
            modal.parentNode.removeChild(modal)
          }
        }
      }
      if (this.isAlert) {
        // alert类弹窗时，从body移除
        setTimeout(() => {
          if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
          }
        }, 300)
      }
      if (this.lockScroll) {
        const num = document.querySelectorAll(`.${prefixCls}-dialog.active`)
        // 解除body滚动
        if (num.length === 1) {
          document.body.style = ''
        }
      }
      this.visible = false
      this.$emit('input', false)
    },
    _setPosition() {
      // 获取窗口宽高，设置居中对齐
      const obj = this.$el
      const clone = obj.cloneNode(true)
      clone.style.display = 'block'
      clone.style.position = 'absolute'
      clone.style.top = '-10000px'
      obj.parentNode.appendChild(clone)
      this.dialogWidth = this.width || clone.offsetWidth
      this.dialogHeight = this.height || clone.offsetHeight
      const header = clone.querySelector(`.${prefixCls}-dialog-header`)
      const footer = clone.querySelector(`.${prefixCls}-dialog-footer`)
      this.dialogHeader = header ? header.offsetHeight : 0
      this.dialogFooter = footer ? footer.offsetHeight : 0
      // 设宽
      if (this.width) {
        obj.style.width = this.width + 'px'
      }
      if (this.center) {
        // 设left，top 垂直居中对齐时
        let top = (this.windowHeight - this.dialogHeight) / 2
        if (top < 0) {
          top = 0
        }
        this.style.left = (this.windowWidth - this.dialogWidth) / 2 + 'px'
        this.style.top = top + 'px'
      }
      if (this.height || this.windowHeight < this.dialogHeight) {
        // 指定了高度或者弹窗高度大于窗口高时，设高
        let scrollHeight = ''
        if (this.height) {
          scrollHeight = this.height // 按设定的
        } else {
          scrollHeight = this.windowHeight // 按最大
        }
        // 滚动区域的高等于窗口高－标题栏高-底部
        this.scrollStyle = {
          height: Math.ceil(scrollHeight - this.dialogHeader - this.dialogFooter) + 'px',
          overflowY: 'auto'
        }
      }
      obj.parentNode.removeChild(clone)
    },
    _openDialog() {
      // 禁止body滚动
      if (this.lockScroll) {
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = this.scrollbarWidth + 'px' // 滚动条的宽，防抖动
      }
      // 显示遮罩层
      if (this.modal) {
        // 检查页面有没存在显示状态的遮罩层
        let zIndex = this.zIndex2 - 1
        let animationDuration = '.3s'
        const modal = document.querySelector(`.${prefixCls}-dialog-modal.active`)
        if (modal) {
          // 取当前显示zIndex值，
          const activeZindex = modal.style.zIndex
          zIndex = parseInt(activeZindex) + 2
          this.zIndex2 = parseInt(activeZindex) + 3
          // 将当前遮罩层去掉active样式并设为透明，
          // 这里因为是先隐藏一个遮罩再，再创建一个，因为有动画会出现闪烁，将动画时间设为0
          modal.style.animationDuration = '0s'
          animationDuration = '0s'
          // modal.className = `${prefixCls}-dialog-modal`
          modal.className = modal.className.replace(' active', '')
          modal.style.display = 'none'
          // 同时隐藏的遮罩层设置id，等会根据这id恢复
          modal.id = 'dialog' + this.zIndex2
        }
        // 创建并添加事件
        const modalDiv = document.createElement('div')
        // 添加一个样式对应当前弹窗层，关闭遮罩时根据此样式查找
        modalDiv.className = `${prefixCls}-dialog-modal active ${prefixCls}-dialog-zindex-${this.zIndex2}`
        modalDiv.style.display = 'block'
        modalDiv.style.zIndex = zIndex
        modalDiv.style.animationDuration = animationDuration
        document.body.appendChild(modalDiv)
        if (this.closeModal) {
          modalDiv.addEventListener('click', this._modalClick)
        }
      }
      // 自动关闭
      this._autoClose()
      this.after && this.after()
    },
    _modalClick(e) {
      // 遮罩层点击事件
      this._beforeClose('close')
    },
    _autoClose() {
      // 自动关闭
      if (this.autoClose > 0) {
        this.autoTime = this.autoClose
        this.clearTime = setInterval(() => {
          if (this.autoTime > 1) {
            this.autoTime--
          } else {
            this.callback && this.callback()
            this._close()
          }
        }, 1000)
      }
    },
    open() {
      this.visible = true
      this._openDialog()
    },
    close() {
      this._hide()
    },
    setPosition(resize) {
      // 仅对显示的窗口处理
      // 当窗口高度变化时。窗口事件导致窗口高度发生变化时，重新设置top位置
      this.$nextTick(() => {
        if (this.value) {
          const dialogHeight = this.$el.offsetHeight
          let top = (this.windowHeight - dialogHeight) / 2
          if (top < 0) {
            top = 0
          }
          if (resize) {
            this.style.left = (this.windowWidth - this.dialogWidth) / 2 + 'px'
          }
          this.style.top = top + 'px'
          // 如果窗口高大于浏览器高
          if (dialogHeight > this.windowHeight) {
            // 设置滚动
            this.scrollStyle = {
              height: Math.ceil(this.windowHeight - this.dialogHeader - this.dialogFooter) + 'px',
              overflowY: 'auto'
            }
          }
        }
      })
    },
    // 窗口变化
    _resize() {
      // 重新获取窗口宽高
      this._getWindow()
      // console.log('_resize')
      this.setPosition(true)
    },
    // 取当前窗口的宽高
    _getWindow() {
      const getWindow = this.getWindow()
      this.windowWidth = getWindow.width
      this.windowHeight = getWindow.height
    },
    // 最小化
    _screenMin() {
      // 将窗口关掉，向body插入最小化标签
      this._hide()
      const content = document.createElement('div')
      // content.style.left = this.style.left
      // content.style.top = this.style.top
      content.innerHTML = this.title
      const id = md5(this.title)
      content.id = id
      // 已经存在不重复添加，最小化后再打开窗口时
      if (document.getElementById(id)) {
        return
      }
      let minDiv = document.querySelector(`.${prefixCls}-dialog-min-list`)
      if (!minDiv) {
        // 如果不存在，侧创建
        minDiv = document.createElement('div')
        minDiv.className = `${prefixCls}-dialog-min-list`
        document.body.appendChild(minDiv)
      }
      this.minScreen = minDiv
      content.addEventListener('click', this._minContent.bind(this, minDiv), false)
      minDiv.appendChild(content)
    },
    // 最小化点击，恢复窗口，即重新打开
    _minContent(parent, el) {
      parent.removeChild(el.target)
      this.open()
    }
  },
  computed: {
    iconName() {
      let icon = this.icon
      switch (this.icon) {
        case 1:
          icon = 'success'
          break
        case 2:
          icon = 'failure'
          break
        case 3:
          icon = 'tips'
          break
      }
      return icon
    }
  },
  created() {
    this.scrollbarWidth = this.getScrollbarWidth()
  },
  mounted() {
    this.$nextTick(() => {
      if (this.appendToBody && this.$el) {
        document.body.appendChild(this.$el)
      }
      this._getWindow() // 取当前窗口宽高
      this._setPosition()
      window.addEventListener('resize', this._resize, false)
      if (this.value) {
        // 初始默认就是true时
        this.visible = true
        this._openDialog()
      }
    })
  },
  beforeDestroy() {
    // console.log('beforeDestroy')
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
      document.body.style = ''
      this.scrollbarWidth = 0
    }
    // 如果遮罩层
    const modal = document.querySelector(`.${prefixCls}-dialog-modal`)
    if (modal) {
      modal.parentNode.removeChild(modal)
    }
    window.removeEventListener('resize', this._resize, false)
    // 最小化
    if (this.minScreen) {
      document.body.removeChild(this.minScreen)
    }
  }
}
</script>
