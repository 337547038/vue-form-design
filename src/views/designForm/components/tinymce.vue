<template>
  <div class="my-tinymce">
    <Editor v-model="contentValue" :init="myInit" />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from 'vue'
import axios from 'axios'
// 引入tinymce编辑器
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce' // tinymce默认hidden，不引入则不显示编辑器
// 导入配置文件
import './js/importTinymce'
import { init } from './js/config'

export default {
  name: 'myEditor',
  components: {
    Editor
  },
  props: {
    // 绑定文本值
    modelValue: {
      type: String,
      default: ''
    },
    // placeholder
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    // 默认样式
    style: {
      type: Object,
      default: () => {
        return { width: '100%', heigth: '400' }
      }
    },
    // 图片上传服务器地址
    imgUploadUrl: {
      type: String,
      default: ''
    }
  },
  setup (props, { emit }) {
    const state = reactive({
      myInit: customer(init), // 初始化
      contentValue: props.modelValue, // 绑定文本
      timeout: null,
    })

    onMounted(() => {
      tinymce.init({})
    })

    // 侦听文本变化并传给外界
    watch(() => state.contentValue, (n) => {
      debounce(() => {
        emit('update:modelValue', state.contentValue)
      })
    })
    // 侦听默认值 外界第一次传进来一个 v-model 就赋值给 contentValue
    watch(() => props.modelValue, (n) => {
      if (n && n !== state.contentValue) {
        state.contentValue = n
      }
    })

    function debounce (fn, wait = 400)  {
      // console.log('进到了防抖', wait)
      if (state.timeout !== null) {
        clearTimeout(state.timeout)
      }
      state.timeout = setTimeout(fn, wait)
    }

    // 参数自定义初始化
    function customer (init) {
      // 允许外界传进来高度和placeholder
      init.height = props.style.heigth
      init.placeholder = props.placeholder

      // 粘贴图片 自动处理 base64
      init.urlconverter_callback = (url, node, onSave, name) => {
        if (node === 'img' && url.startsWith('blob:')) {
          tinymce.activeEditor && tinymce.activeEditor.uploadImages()
        }
        return url
      }
      // 图片上传
      init.images_upload_handler = (blobInfo, success, failure) => {
        imgUploadFn(blobInfo, success, failure)
      }
      return init
    }

    function imgUploadFn (blobInfo, success, failure) {
      // 可以限制图片大小
      // if (blobInfo.blob().size / 1024 / 1024 > 2) {
      //   failure('上传失败，图片大小请控制在 2M 以内')
      // } else {}
      const params = new FormData()
      params.append('file', blobInfo.blob())
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      // 图片上传
      axios.post(props.imgUploadUrl, params, config).then(res => {
        if (res.data.code == 0) {
          success(res.data.data.url) // 上传成功，在成功函数里填入图片路径
          // console.log('[文件上传]', res.data)
        } else {
          failure('上传失败')
        }
      }).catch(() => {
        failure('上传出错，服务器开小差了呢')
      })
    }

    return ({
      ...toRefs(state),
      customer,
      debounce
    })
  }
}
</script>
