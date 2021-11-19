<!-- Created by 337547038 on 2021/11/18. -->
<template>
  <div>
    <el-upload
      v-bind="upload"
      :class="{limit:upload.limit<=upload.modelValue.length}"
      :on-success="onSuccess"
      :on-remove="onRemove">
      <el-button
        type="primary"
        v-if="uploadConfig.btnText">{{ uploadConfig.btnText }}
      </el-button>
      <i class="icon-plus" v-else></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      upload: {
        listType: "picture-card",
        action: "http://localhost:3001/upload/single",
        limit: 2,
        fileList: [],
        modelValue: [
          {
            name: 'food.jpeg',
            url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ]
      },
      uploadConfig: {
        tip: '',
        btnText: ''
      }
    }
  },
  props: {},
  components: {},
  methods: {
    onSuccess(file, list) {
      console.log('success')
      console.log(file)
      console.log(list)
      this.upload.modelValue.push({
        name: file.filename,
        url: file.path
      })
    },
    onError(file, list) {
      console.log('error')
      console.log(file, list)
    },
    onRemove(file, fileList) {
      console.log(file.url)
      this.upload.modelValue.forEach((item, index) => {
        if (item.url === file.url) {
          this.upload.modelValue.splice(index, 1)
        }
      })
    }
  },
  computed: {},
  mounted() {
    this.upload.fileList = JSON.parse(JSON.stringify(this.upload.modelValue))
  }
}
</script>
