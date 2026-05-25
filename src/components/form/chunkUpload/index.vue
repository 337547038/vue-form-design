<!-- Created by 337547038 weixin:337547038 -->
<template>
  <div class="select-upload">
    <el-input
      v-if="configShowType === 'input'"
      :value="modelValue"
      readonly
      :clearable="true"
      :disabled="disabled"
      v-bind="data.control"
      :title="modelValue"
      @clear="clearClick(-1)"
    >
      <template #append>
        <el-button
          :disabled="disabled"
          @click="open"
        >
          {{ btnText }}
        </el-button>
      </template>
    </el-input>
    <div
      v-if="configShowType === 'img'"
      class="select-upload-img"
    >
      <div class="select-upload-list">
        <div
          v-for="(item, index) in modelValueList"
          :key="item.fileUrl"
          class="upload-item"
        >
          <img
            :src="item.fileUrl"
            alt=""
          >
          <i
            v-show="!disabled"
            class="icon-close"
            @click.stop="clearClick(index as number)"
          />
        </div>
      </div>
      <i
        class="icon-plus"
        :class="{ disabled: disabled }"
        @click="open"
      />
    </div>
    <div
      v-else-if="configShowType === 'btn'"
      class="select-upload-btn"
    >
      <el-button
        :disabled="disabled"
        v-bind="data.control"
        icon="UploadFilled"
        type="primary"
        @click="open"
      >
        {{ btnText }}
      </el-button>
      <div class="select-upload-file">
        <ul>
          <li
            v-for="(item, index) in modelValueList"
            :key="item"
          >
            {{ item.fileUrl }}
            <i
              v-show="!disabled"
              class="icon-close"
              @click.stop="clearClick(index as number)"
            />
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
  import {ref, computed} from 'vue'
  import SelectDialog from './dialog.vue'
  import type {FileList} from './types'
  import type {Component} from "@/types/form";

  const props = withDefaults(
    defineProps<{
      data?: Component
      disabled?: boolean
    }>(),
    {}
  )

  const modelValue = defineModel<any>()
  const btnText = computed(() => {
    return props.data.btnText || '选择文件'
  })
  const configShowType = computed(() => {
    return props.data.showType || 'input'
  })
  const config=computed(()=>{
    const {limit,accept,auto}=props.data
    return {
      limit:limit,
      accept:accept,
      auto:auto,
    }
  })
  const modelValueList = computed(() => {
    if (modelValue.value) {
      const temp: { fileUrl: string }[] = []
      const valueList = modelValue.value.split(',')
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
  const clearClick = (index: number) => {
    if (index === -1) {
      modelValue.value = ''
    } else {
      const newValue = modelValueList.value
      newValue.splice(index, 1)
      modelValue.value = newValue.join(',')
    }
  }
  const selectDialogEl = ref()
  const open = () => {
    selectDialogEl.value.open()
  }
  const confirmClick = (val: FileList) => {
    const string = val.map((item: { fileUrl: any }) => item.fileUrl)
    console.log('confirmClick', string)
    modelValue.value = string.join(',')
  }
</script>
