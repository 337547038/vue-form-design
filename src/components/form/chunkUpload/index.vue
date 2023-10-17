<!-- Created by 337547038 weixin:337547038 -->
<template>
  <div class="select-upload">
    <el-input
      v-if="configShowType === 'input'"
      :value="modelValue"
      readonly
      :clearable="true"
      :disabled="disabled"
      v-bind="control"
      :title="modelValue"
      @clear="clearClick(-1)"
    >
      <template #append>
        <el-button @click="open" :disabled="disabled">{{ btnText }} </el-button>
      </template>
    </el-input>
    <div v-if="configShowType === 'img'" class="select-upload-img">
      <div class="select-upload-list">
        <div
          class="upload-item"
          v-for="(item, index) in modelValueList"
          :key="item.fileUrl"
        >
          <img :src="item.fileUrl" alt="" />
          <i
            v-show="!disabled"
            class="icon-close"
            @click.stop="clearClick(index)"
          ></i>
        </div>
      </div>
      <i class="icon-plus" @click="open" :class="{ disabled: disabled }"></i>
    </div>
    <div class="select-upload-btn" v-else-if="configShowType === 'btn'">
      <el-button
        :disabled="disabled"
        v-bind="control"
        icon="UploadFilled"
        type="primary"
        @click="open"
        >{{ btnText }}
      </el-button>
      <div class="select-upload-file">
        <ul>
          <li v-for="(item, index) in modelValueList" :key="item">
            {{ item.fileUrl }}
            <i
              v-show="!disabled"
              class="icon-close"
              @click.stop="clearClick(index)"
            ></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <select-dialog
    ref="selectDialogEl"
    :config="config"
    :default-value="modelValueList"
    @confirm="confirmClick"
  />
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import SelectDialog from './dialog.vue'
  import type { FileList } from './types'

  const props = withDefaults(
    defineProps<{
      control?: { [key: string]: any }
      disabled?: boolean
      config?: { [key: string]: any }
      modelValue?: string | undefined
    }>(),
    {
      config: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'update:modelValue', val: string): void
  }>()

  const btnText = computed(() => {
    return props.config?.btnText || '选择文件'
  })
  const configShowType = computed(() => {
    return props.config?.showType || 'input'
  })
  const modelValueList = computed(() => {
    if (props.modelValue) {
      const temp = []
      const valueList = props.modelValue.split(',')
      valueList.forEach((item: string) => {
        temp.push({
          fileUrl: item
        })
      })
      return temp
    } else {
      return []
    }
  })
  const clearClick = (index?: number) => {
    if (index === -1) {
      emits('update:modelValue', '')
    } else {
      const newValue = modelValueList.value
      newValue.splice(index, 1)
      emits('update:modelValue', newValue.join(','))
    }
  }
  const selectDialogEl = ref()
  const open = () => {
    selectDialogEl.value.open()
  }
  const confirmClick = (val: FileList) => {
    const string = val.map(item => item.fileUrl)
    console.log('confirmClick', string)
    emits('update:modelValue', string.join(','))
  }
</script>
