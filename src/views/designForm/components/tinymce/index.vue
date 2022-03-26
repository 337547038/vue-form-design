<template>
  <Editor v-model="contentValue" :init="myInit"/>
</template>

<script setup>
import {onMounted, reactive, toRefs, watch, ref, computed} from 'vue'
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce/tinymce'
import './importTinymce'

const props = defineProps({
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
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  },
  // 图片上传服务器地址
  imgUploadUrl: {
    type: String,
    default: ''
  },
  config: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const emit = defineEmits(['update:modelValue'])
const contentValue = ref(props.modelValue)
let timeout = null
// 参数自定义初始化
// eslint-disable-next-line max-len
const buttonPlugins = 'preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave '

// 导入工具栏
// eslint-disable-next-line max-len
const toolbar = 'fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor \ table image | alignleft aligncenter alignright alignjustify outdent indent | \ styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | media charmap emoticons hr pagebreak insertdatetime print preview | code selectall searchreplace visualblocks | indent2em lineheight formatpainter axupimgs'
const toolbarSimple='undo cut copy paste pastetext |forecolor backcolor bold italic underline strikethrough|alignleft aligncenter alignright alignjustify|'
const defaultInit = {
  cleanup: true,
  language_url: './static/tinymce/langs/zh_CN.js', // 引入语言包文件
  language: 'zh_CN', // 语言类型
  skin_url: './static/tinymce/skins/ui/oxide', // 皮肤：浅色
  plugins: buttonPlugins, // 插件配置
  toolbar: toolbar, // 工具栏配置，设为false则隐藏
  menubar: true, // 菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
  //emoticons_database_url: './tinymce/emoticons/js/emojis.js',
  fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px', // 字体大小
  // eslint-disable-next-line max-len
  font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;', // 字体样式 微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif, 宋体=simsun,serif,仿宋体=FangSong,黑体=SimHei,Arial=arial,
  lineheight_formats: '0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5', // 行高配置，也可配置成"12px 14px 16px 20px"这种形式
  branding: false, // tiny技术支持信息是否显示
  resize: false, // 编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
  // statusbar: false,  //最下方的元素路径和字数统计那一栏是否显示
  elementpath: false, // 元素路径是否显示

  // content_style: 'p {margin-block-start: 0; margin-block-end: 0; color: #606D81; font-size: 14px;}; table { border: 1px}', // 直接自定义可编辑区域的css样式
  //content_css: './tinymce/index.css', // 以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入

  paste_data_images: true, // 图片是否可粘贴
  // 允许外界传进来高度和placeholder
  height: props.height,
  width: props.width,
  placeholder: props.placeholder,

  // 粘贴图片 自动处理 base64
  "urlconverter_callback": (url, node, onSave, name) => {
    if (node === 'img' && url.startsWith('blob:')) {
      tinymce.activeEditor && tinymce.activeEditor.uploadImages()
    }
    return url
  },
  // 图片上传
  "images_upload_handler": (blobInfo, success, failure) => {
    imgUploadFn(blobInfo, success, failure)
  }
}
const simpleInit = {
  cleanup: true,
  language_url: './static/tinymce/langs/zh_CN.js', // 引入语言包文件
  language: 'zh_CN', // 语言类型
  skin_url: './static/tinymce/skins/ui/oxide', // 皮肤：浅色
  plugins: '', // 插件配置
  toolbar: toolbarSimple, // 工具栏配置，设为false则隐藏
  menubar: false, // 菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
  //emoticons_database_url: './tinymce/emoticons/js/emojis.js',
  fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px', // 字体大小
  // eslint-disable-next-line max-len
  font_formats: '', // 字体样式 微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif, 宋体=simsun,serif,仿宋体=FangSong,黑体=SimHei,Arial=arial,
  lineheight_formats: '0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5', // 行高配置，也可配置成"12px 14px 16px 20px"这种形式
  branding: false, // tiny技术支持信息是否显示
  resize: false, // 编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
  // statusbar: false,  //最下方的元素路径和字数统计那一栏是否显示
  elementpath: false, // 元素路径是否显示

  // content_style: 'p {margin-block-start: 0; margin-block-end: 0; color: #606D81; font-size: 14px;}; table { border: 1px}', // 直接自定义可编辑区域的css样式
  //content_css: './tinymce/index.css', // 以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入

  paste_data_images: false, // 图片是否可粘贴
  // 允许外界传进来高度和placeholder
  height: props.height,
  width: props.width,
  placeholder: props.placeholder
}
const myInit = computed(() => {
  return props.config.style === 'simple' ? simpleInit : defaultInit
})
onMounted(() => {
  tinymce.init({})
})

// 侦听文本变化并传给外界
watch(() => contentValue.value, (n) => {
  debounce(() => {
    emit('update:modelValue', contentValue.value)
  })
})
// 侦听默认值 外界第一次传进来一个 v-model 就赋值给 contentValue
watch(() => props.modelValue, (n) => {
  if (n && n !== contentValue.value) {
    contentValue.value = n
  }
})

function debounce(fn, wait = 400) {
  // console.log('进到了防抖', wait)
  if (timeout !== null) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(fn, wait)
}


const imgUploadFn = (blobInfo, success, failure) => {
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
  /*axios.post(props.imgUploadUrl, params, config).then(res => {
    if (res.data.code == 0) {
      success(res.data.data.url) // 上传成功，在成功函数里填入图片路径
      // console.log('[文件上传]', res.data)
    } else {
      failure('上传失败')
    }
  }).catch(() => {
    failure('上传出错，服务器开小差了呢')
  })*/
}
</script>
