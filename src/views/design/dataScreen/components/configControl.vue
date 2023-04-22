<!-- Created by 337547038 -->
<template>
  <div class="main-right">
    <el-tabs
      class="tabs"
      model-value="screen"
      v-if="Object.keys(current).length"
    >
      <el-tab-pane label="位置属性" name="screen">
        <el-form size="small">
          <el-form-item
            :label="item.label"
            v-for="(item, index) in positionProperty"
            :key="index"
          >
            <h3 v-if="item.type === 'group'">{{ item.title }}</h3>
            <el-switch
              v-else-if="item.type === 'switch'"
              :model-value="item.value"
              @change="propertyChange(item, $event)"
            />
            <el-color-picker
              v-else-if="item.type === 'color'"
              show-alpha
              @change="propertyChange(item, $event)"
              :model-value="item.value"
            />
            <el-input
              type="textarea"
              v-else-if="item.type === 'textarea'"
              :placeholder="item.placeholder"
              @change="propertyChange(item, $event)"
              :model-value="item.value"
            />
            <el-select
              v-else-if="item.type === 'select'"
              :allowCreate="item.allowCreate"
              :filterable="item.filterable"
              :placeholder="item.placeholder"
              @change="propertyChange(item, $event)"
              :model-value="item.value"
            >
              <el-option
                v-for="(opt, key) in item.options"
                :key="opt"
                :label="opt"
                :value="key"
              />
            </el-select>
            <el-input
              v-else
              :placeholder="item.placeholder"
              :model-value="item.value"
              @input="propertyChange(item, $event)"
            />
          </el-form-item>
          <el-form-item v-if="['image', 'background'].includes(type)">
            <el-upload>
              <el-button type="primary">选择图片</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item v-if="['line', 'bar', 'pie', 'echarts'].includes(type)">
            <el-button type="primary" @click="echartsEdit">图表编辑</el-button>
          </el-form-item>
          <el-form-item
            v-if="
              [
                'text',
                'sText',
                'image',
                'background',
                'border',
                'clock'
              ].includes(type)
            "
          >
            <el-button type="primary" @click="styleEdit"
              >编辑更多内联样式</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="数据" name="data" />
    </el-tabs>
    <el-tabs class="tabs" model-value="screen" v-else>
      <el-tab-pane label="大屏配置" name="screen">
        <el-form size="small">
          <el-form-item label="大屏宽度">
            <el-input
              placeholder="请输入大屏宽度"
              :model-value="config.width"
              @input="configChange('width', $event)"
            />
          </el-form-item>
          <el-form-item label="大屏高度">
            <el-input
              placeholder="请输入大屏高度"
              :model-value="config.height"
              @input="configChange('height', $event)"
            />
          </el-form-item>
          <el-form-item label="项目名称">
            <el-input placeholder="请输入项目名称" />
          </el-form-item>
          <el-form-item class="color-picker" label="主色">
            <el-color-picker
              show-alpha
              @change="configChange('primary', $event)"
              :model-value="config.primary"
            />
          </el-form-item>
          <el-form-item label="背景">
            <el-select v-model="state.bgSelect" @change="stateChange">
              <el-option :value="1" label="背景色" />
              <el-option :value="2" label="渐变色" />
              <el-option :value="3" label="背景图" />
            </el-select>
          </el-form-item>
          <el-form-item v-if="state.bgSelect !== 3" class="color-picker">
            <el-color-picker
              show-alpha
              v-model="state.bgColor"
              @change="stateChange"
            />
          </el-form-item>
          <template v-if="state.bgSelect === 2">
            <el-form-item class="color-picker">
              <el-color-picker
                show-alpha
                v-model="state.bgLinear"
                @change="stateChange"
              />
            </el-form-item>
            <el-form-item label="渐变角度">
              <el-slider
                v-model="state.bgAngle"
                :max="360"
                @change="stateChange"
              />
            </el-form-item>
          </template>
          <el-form-item v-if="state.bgSelect === 3" class="upload-image">
            <el-input
              placeholder="请输入图片地址"
              v-model="state.bgUpload"
              @change="stateChange"
            />
            <el-upload :action="uploadUrl" :on-success="uploadSuccess">
              <el-button type="primary">上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button @click="editStyle">编辑样式</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, watch } from 'vue'
  import { uploadUrl } from '@/api'
  import type { Config } from '../types'
  import type { OpenDrawer } from '../../types'

  const props = withDefaults(
    defineProps<{
      config: Config
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:config', val: Config): void
    (e: 'openDrawer', val: OpenDrawer): void
  }>()
  const current = ref({})
  const type = computed(() => {
    return current.value.type
  })
  // ---------------------大屏配置开始---------------------
  const updateConfig = (val: any) => {
    emits('update:config', Object.assign({}, props.config, val))
  }
  const state = reactive({
    bgColor: '',
    bgLinear: '',
    bgAngle: 0,
    bgUpload: '',
    bgSelect: ''
  })
  watch(
    () => props.config,
    (val: any) => {
      if (!Object.keys(current.value).length) {
        // 大屏配置
        const bg = val.background || ''
        if (bg.indexOf('url') !== -1) {
          const iReg = new RegExp('(?<=url\\()(.*?)(?=\\))', 'g')
          const img = bg.match(iReg)
          Object.assign(state, {
            bgUpload: img,
            bgSelect: 3
          })
        } else if (bg.indexOf('linear') !== -1) {
          const str = bg.substring(bg.indexOf('(') + 1, bg.lastIndexOf(')'))
          const split = str.split(
            /,(?![^(]*\))(?![^"']*["'](?:[^"']*["'][^"']*["'])*[^"']*$)/
          )
          Object.assign(state, {
            bgColor: split[1].trim(),
            bgLinear: split[2].trim(),
            bgAngle: Number(split[0].replace('deg', '')),
            bgSelect: 2
          })
        } else {
          Object.assign(state, {
            bgColor: bg,
            bgSelect: 1
          })
        }
      }
    },
    { immediate: true }
  )
  const stateChange = () => {
    let bg = ''
    switch (state.bgSelect) {
      case 1:
        bg = state.bgColor
        break
      case 2:
        bg = `linear-gradient(${state.bgAngle}deg, ${state.bgColor}, ${state.bgLinear})`
        break
      case 3:
        bg = `url(${state.bgUpload})`
        break
    }
    configChange('background', bg)
  }
  const configChange = (key: string, val: any) => {
    updateConfig({ [key]: val })
  }
  //　背景上传
  const uploadSuccess = (response: any) => {
    state.bgUpload = response.path
  }
  // ---------------------大屏配置结束---------------------
  const setCurrent = (obj: any) => {
    current.value = obj
  }
  const positionProperty = computed(() => {
    if (Object.keys(current.value).length) {
      const { config = {}, position, type } = current.value
      return [
        {
          type: 'group',
          title: '位置信息'
        },
        {
          label: 'width',
          value: position.width,
          placeholder: '请输入宽度',
          key: 'width',
          path: 'position'
        },
        {
          label: 'height',
          value: position.height,
          placeholder: '请输入高度',
          key: 'height',
          path: 'position'
        },
        {
          label: 'left',
          value: position.left,
          key: 'left',
          path: 'position'
        },
        {
          label: 'top',
          value: position.top,
          key: 'top',
          path: 'position'
        },
        {
          label: 'zIndex',
          value: position.zIndex,
          placeholder: '请输入层级',
          key: 'zIndex',
          path: 'position'
        },
        {
          type: 'group',
          title: '属性信息'
        },
        {
          type: 'switch',
          label: '锁定', // 属性仅在设计模式有效
          value: config.lock,
          key: 'lock'
        },
        {
          type: 'switch',
          label: '隐藏',
          value: position.display,
          key: 'display',
          path: 'position'
        },
        {
          type: 'input',
          label: '样式类名',
          placeholder: '方便引用个性化样式',
          value: config.class,
          key: 'class'
        },
        {
          label: '文本内容',
          placeholder: '请输入文本内容',
          value: config.text,
          key: 'text',
          vShow: ['text']
        },
        {
          type: 'select',
          label: '滚动方向',
          placeholder: '请选择滚动方向',
          value: config.direction,
          key: 'direction',
          vShow: ['sText'],
          options: {
            1: '从左到右',
            2: '从右到左',
            3: '从上到下',
            4: '从下到上'
          }
        },
        {
          type: 'textarea',
          label: '文本内容',
          placeholder: '请输入文本内容，支持html',
          value: config.text,
          key: 'text',
          vShow: ['sText']
        },
        {
          label: '字体大小',
          placeholder: '文本字体大小,如14px',
          value: config.style?.fontSize,
          key: 'fontSize',
          path: 'style',
          vShow: ['text', 'clock']
        },
        {
          label: '边框',
          placeholder: '如1px solid #000',
          value: config.style?.border,
          key: 'border',
          path: 'style',
          vShow: ['border']
        },
        {
          type: 'color',
          label: '字体颜色',
          value: config.style?.color,
          key: 'color',
          path: 'style',
          vShow: ['text', 'clock']
        },
        {
          type: 'select',
          label: '时间格式',
          value: config.dateTime,
          key: 'dateTime',
          allowCreate: true,
          filterable: true,
          placeholder: '选择或创建时间格式',
          vShow: ['clock'],
          options: {
            '{y}-{m}-{d}': '{y}-{m}-{d}',
            '{h}:{i}:{s}': '{h}:{i}:{s}',
            '{y}-{m}-{d} {h}:{i}:{s}': '{y}-{m}-{d} {h}:{i}:{s}',
            '{y}年{m}月{d}日 {h}:{i}:{s} 星期{a}':
              '{y}年{m}月{d}日 {h}:{i}:{s} 星期{a}'
          }
        }
      ].filter((item: any) => {
        let hasFilter = true
        if (item.vShow) {
          hasFilter = item.vShow.includes(type)
        }
        if (item.vHide) {
          hasFilter = !item.vHide.includes(type)
        }
        return hasFilter
      })
    }
    return []
  })
  const propertyChange = (obj: any, value: any) => {
    if (obj.path === 'position') {
      current.value.position[obj.key] = value
    } else if (obj.path === 'style') {
      // 内联样式
      if (!current.value.config?.style) {
        current.value.config.style = {}
      }
      current.value.config.style[obj.key] = value
    } else {
      current.value.config[obj.key] = value
    }
  }
  // ace编辑器相关
  const editStyle = () => {
    emits('openDrawer', {
      codeType: 'css',
      type: 'css',
      title: '当前应用页的样式，类似于.vue文件中的style scoped中的样式'
    })
  }
  // 打开图像option编辑
  const echartsEdit = () => {
    emits('openDrawer', {
      type: 'echarts',
      content: current.value.option,
      title: '可参考echarts相关例子编辑',
      callback: (res: any) => {
        current.value.option = res
      }
    })
  }
  //　编辑内联样式
  const styleEdit = () => {
    emits('openDrawer', {
      type: 'style',
      codeType: 'json',
      content: current.value.config?.style || {},
      title: '可输入更多的css样式，须为json格式',
      callback: (res: any) => {
        current.value.config.style = res
      }
    })
  }
  defineExpose({ setCurrent })
</script>
