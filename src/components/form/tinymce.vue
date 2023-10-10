<template>
  <textarea id="myTextarea" v-model="contentValue"></textarea>
</template>

<script setup lang="ts">
  import { onMounted, watch, ref, computed, onUnmounted } from 'vue'
  import { ElMessage } from 'element-plus'
  import { getRequest } from '@/api'
  // https://www.cnblogs.com/huihuihero/p/13877589.html
  // http://tinymce.ax-z.cn/
  const props = withDefaults(
    defineProps<{
      modelValue: string
      placeholder?: string
      width?: string
      height?: string
      blobUrl?: string
      imgUrl?: string
      config?: any
    }>(),
    {
      modelValue: '',
      placeholder: '请输入内容',
      width: '100%',
      height: '300px',
      blobUrl: '',
      imgUrl: '',
      config: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const contentValue = ref(props.modelValue)
  // 参数自定义初始化
  // eslint-disable-next-line max-len
  const buttonPlugins =
    'preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media code codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount autosave '

  // 导入工具栏
  // eslint-disable-next-line max-len
  const toolbar =
    'fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor table image | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | media charmap emoticons pagebreak insertdatetime print preview | code selectall searchreplace visualblocks | indent2em lineheight formatpainter axupimgs'
  const toolbarSimple =
    'undo cut copy paste pastetext |forecolor backcolor bold italic underline strikethrough|alignleft aligncenter alignright alignjustify|'
  const commInit = {
    selector: '#myTextarea',
    cleanup: true,
    language: 'zh_CN', // 语言类型
    fontsize_formats: '12px 14px 16px 18px 20px 22px 24px 28px 32px 36px', // 字体大小
    lineheight_formats: '0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5', // 行高配置，也可配置成"12px 14px 16px 20px"这种形式
    branding: false, // tiny技术支持信息是否显示
    resize: false, // 编辑器宽高是否可变，false-否,true-高可变，'both'-宽高均可，注意引号
    // statusbar: false,  //最下方的元素路径和字数统计那一栏是否显示
    elementpath: false, // 元素路径是否显示
    height: props.height, // 允许外界传进来高度和placeholder
    width: props.width,
    placeholder: props.placeholder,
    init_instance_callback: (editor: any) => {
      // editor.setContent('')
      editor.on('NodeChange Change KeyUp SetContent', () => {
        contentValue.value = editor.getContent()
        emits('update:modelValue', editor.getContent())
      })
    }
  }
  // 图片上传
  const imgUploadFn = (blobInfo: any, progress: number) =>
    new Promise((resolve, reject) => {
      // https://www.tiny.cloud/docs/tinymce/6/file-image-upload/#images_upload_handler
      console.log(progress)
      const params = new FormData()
      params.append('file', blobInfo.blob())
      let options = {}
      if (props.imgUrl) {
        options = {
          url: props.imgUrl
        }
      }
      getRequest('upload', params, options)
        .then(res => {
          // console.log(res)
          // console.log(res.data.path)
          if (res.data.code === 1) {
            resolve(res.data.path) // 上传成功，在成功函数里填入图片路径
            // console.log('[文件上传]', res.data)
          } else {
            reject('上传失败')
          }
        })
        .catch(() => {
          reject('上传出错，示例暂不提供上传接口')
        })
    })
  const fileUpload = (callback: any, value: string, meta: any) => {
    const filetype =
      '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4'
    //后端接收上传文件的地址
    const input = document.createElement('input') //创建文件选择
    input.setAttribute('type', 'file')
    input.setAttribute('accept', filetype)
    input.click()
    input.onchange = () => {
      const file = input?.files && input.files[0] //获取文件信息
      // console.log(file)
      // meta对应于file_picker_types的三种类型
      let attr = {}
      if (meta.filetype === 'file') {
        attr = { text: file?.name }
      }
      if (meta.filetype === 'image') {
        attr = { alt: file?.name }
      }
      if (meta.filetype === 'media') {
        // attr={source2: 'alt.ogg', poster: 'image.jpg'}
      }
      /*if(file.type.slice(0,5)=='image'&&file.size/1024/1024>2){
      alert("上传失败，图片大小请控制在2M以内")
    }else if(file.type.slice(0,5)=='video'&&file.size/1024/1024>500){
      alert("上传失败，视频大小请控制在 500M 以内")
    }else if(file.size/1024/1024>10){
      alert("上传失败，文件大小请控制在 10M 以内")
    }*/
      const params = new FormData()
      params.append('file', file as any)
      let options = {}
      if (props.blobUrl) {
        options = {
          url: props.blobUrl
        }
      }
      getRequest('upload', params, options)
        .then(res => {
          if (res.data.code === 1) {
            callback(res.data.path, attr) // 上传成功，在成功函数里填入图片路径
          } else {
            ElMessage.error(res.data?.message)
          }
        })
        .catch(res => {
          ElMessage.error(res.data?.message)
        })
    }
  }
  const defaultInit = {
    plugins: buttonPlugins, // 插件配置
    toolbar: toolbar, // 工具栏配置，设为false则隐藏
    menubar: true, // 菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看 http://tinymce.ax-z.cn/configure/editor-appearance.php --搜索“自定义菜单”
    //emoticons_database_url: './tinymce/emoticons/js/emojis.js',
    // eslint-disable-next-line max-len
    font_formats:
      '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;', // 字体样式 微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif, 宋体=simsun,serif,仿宋体=FangSong,黑体=SimHei,Arial=arial,
    // content_style: 'p {margin-block-start: 0; margin-block-end: 0; color: #606D81; font-size: 14px;}; table { border: 1px}', // 直接自定义可编辑区域的css样式
    content_css: false, // 以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
    paste_data_images: true, // 图片是否可粘贴
    // 允许外界传进来高度和placeholder
    // 粘贴图片 自动处理 base64
    urlconverter_callback: (url: string, node: string) => {
      if (node === 'img' && url.startsWith('blob:')) {
        // @ts-ignore
        tinymce.activeEditor && tinymce.activeEditor.uploadImages()
      }
      return url
    },
    // 图片上传
    images_upload_handler: imgUploadFn,
    file_picker_types: 'file image media', //分别对应三个类型文件的上传：link插件，image和axupimgs插件，media插件。想屏蔽某个插件的上传就去掉对应的参数
    file_picker_callback: fileUpload
  }
  const simpleInit = {
    plugins: '', // 插件配置
    toolbar: toolbarSimple, // 工具栏配置，设为false则隐藏
    menubar: false, // 菜单栏配置，设为false则隐藏，不配置则默认显示全部菜单，也可自定义配置--查看
    font_formats: '',
    paste_data_images: false // 图片是否可粘贴
  }
  const myInit = computed(() => {
    const styleType =
      props.config?.style === 'simple' ? simpleInit : defaultInit
    return Object.assign(commInit, styleType)
  })
  onMounted(() => {
    // @ts-ignore
    tinymce.init(myInit.value)
  })
  onUnmounted(() => {
    // @ts-ignore
    tinymce.remove()
  })
  // 侦听默认值 外界第一次传进来一个 v-model 就赋值给 contentValue
  watch(
    () => props.modelValue,
    (n: any) => {
      if (n && n !== contentValue.value) {
        contentValue.value = n
      }
    }
  )
</script>
<style>
  .tox-tinymce-aux {
    z-index: 2200 !important; /*el-dialog层为2014，默认时在el弹出层显示不了编辑器里的弹窗*/
  }
</style>
