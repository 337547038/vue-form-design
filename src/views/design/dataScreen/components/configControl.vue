<!-- Created by 337547038 -->
<template>
  <div class="main-right" :class="{ lock: current.config?.lock }">
    <el-tabs
      class="tabs"
      model-value="screen"
      v-if="Object.keys(current as object).length"
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
              :class="[item.key]"
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
            <el-input-number
              v-else-if="item.type === 'number'"
              controls-position="right"
              :placeholder="item.placeholder"
              :model-value="item.value"
              @input="propertyChange(item, $event)"
            />
            <el-input
              v-else
              :placeholder="item.placeholder"
              :model-value="item.value"
              @input="propertyChange(item, $event)"
            />
          </el-form-item>
          <el-form-item
            v-if="['image', 'background'].includes(type as string)"
            class="upload-image"
          >
            <el-input
              placeholder="请输入图片地址"
              v-model="current.config.src"
            />
            <el-button
              type="primary"
              @click="openUpload(type === 'image' ? 'img' : 'bg', 'src')"
              >选择图片</el-button
            >
          </el-form-item>
          <el-form-item
            v-if="['line', 'bar', 'pie', 'echarts'].includes(type as string)"
          >
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
              ].includes(type as string)
            "
          >
            <el-button type="primary" @click="styleEdit"
              >编辑更多内联样式</el-button
            >
          </el-form-item>
          <el-form-item v-if="['table'].includes(type as string)">
            <el-button type="primary" @click="tablePropsEdit"
              >表格属性</el-button
            >
            <el-button type="primary" @click="tableColumnEdit"
              >Table-column</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="数据" name="data">
        <el-form
          size="small"
          v-if="
            [
              'line',
              'bar',
              'pie',
              'echarts',
              'text',
              'sText',
              'table'
            ].includes(type as string)
          "
        >
          <el-form-item label="数据类型">
            <el-radio-group v-model="current.config.optionsType">
              <el-radio :label="0" style="margin-right: 4px">静态</el-radio>
              <el-radio :label="2" style="margin-right: 4px">全局</el-radio>
              <el-radio :label="1">动态</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="current.config.optionsType !== 1">
            <el-button type="primary" @click="editData">编辑数据</el-button>
          </el-form-item>
          <template v-if="current.config.optionsType === 1">
            <el-form-item>
              <el-input
                v-model="current.config.requestUrl"
                placeholder="接口URL或api中的key"
              >
                <template #prepend>
                  <el-select
                    v-model="current.config.method"
                    style="width: 60px"
                  >
                    <el-option label="get" value="get" />
                    <el-option label="post" value="post" />
                    <el-option label="ws" value="ws" disabled />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item label="刷新时间">
              <el-input-number v-model="current.config.loopTime" disabled />
            </el-form-item>
            <el-form-item>
              <h3>接口数据处理事件</h3>
            </el-form-item>
            <el-form-item>
              <el-button @click="openEventsDrawer('beforeRequest')"
                >beforeRequest</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button @click="openEventsDrawer('afterResponse')"
                >afterResponse</el-button
              >
            </el-form-item>
          </template>
        </el-form>
      </el-tab-pane>
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
          <!--          <el-form-item label="项目名称">
            <el-input placeholder="请输入项目名称" />
          </el-form-item>-->
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
            <el-button type="primary" @click="openUpload('bg', 'screenBg')"
              >上传</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button @click="editStyle">编辑样式</el-button>
          </el-form-item>
          <el-form-item>
            <h3>全局数据</h3>
          </el-form-item>
          <el-form-item>
            <el-input
              :model-value="config.requestUrl as string"
              placeholder="接口URL或api中的key"
              @input="configChange('requestUrl', $event)"
            >
              <template #prepend>
                <el-select
                  :model-value="config.method"
                  style="width: 60px"
                  @change="configChange('method', $event)"
                >
                  <el-option label="get" value="get" />
                  <el-option label="post" value="post" />
                  <el-option label="ws" value="ws" disabled />
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="刷新时间">
            <el-input-number
              disabled
              :model-value="config.loopTime"
              @input="configChange('loopTime', $event)"
            />
          </el-form-item>
          <el-form-item>
            <h3>接口数据处理事件</h3>
          </el-form-item>
          <el-form-item>
            <el-button @click="openEventsDrawer('beforeRequest', 'global')"
              >beforeRequest</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button @click="openEventsDrawer('afterResponse', 'global')"
              >afterResponse</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <upload-image ref="uploadImageEl" @click="selectImg" />
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, computed, watch } from 'vue'
  import type { Config } from '../types'
  import type { OpenDrawer } from '../../types'
  import UploadImage from './upload.vue'
  //import { stringToObj } from '@/utils/form'

  const props = withDefaults(
    defineProps<{
      config: Config
    }>(),
    {}
  )
  const emits = defineEmits<{
    (e: 'update:config', val: Config): void
    (e: 'openDrawer', val: OpenDrawer): void
    (e: 'update'): void
  }>()
  const current = ref({})
  const uploadImageEl = ref()
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
  // ---------------------大屏配置结束---------------------
  const setCurrent = (obj: any) => {
    current.value = obj
  }
  const positionProperty = computed(() => {
    if (Object.keys(current.value).length) {
      const { config = {}, position, type }: { config: any } = current.value
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
          type: 'number',
          label: 'left',
          value: position.left,
          placeholder: '图层位置',
          key: 'left',
          path: 'position'
        },
        {
          type: 'number',
          label: 'top',
          value: position.top,
          key: 'top',
          path: 'position'
        },
        {
          type: 'number',
          label: 'right',
          value: position.right,
          placeholder: '设置后left为auto',
          key: 'right',
          path: 'position'
        },
        {
          type: 'number',
          label: 'bottom',
          value: position.bottom,
          placeholder: '设置后top为auto',
          key: 'bottom',
          path: 'position'
        },
        {
          type: 'number',
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
            left: '从左到右',
            right: '从右到左',
            top: '从上到下',
            bottom: '从下到上'
          }
        },
        {
          type: 'number',
          label: '滚动速度',
          placeholder: '滚动速度，数字越大速度越慢',
          value: config.speed,
          key: 'speed',
          vShow: ['sText']
        },
        {
          type: 'number',
          label: '滚动步长',
          placeholder: '每单位时间滚动的距离，默认1',
          value: config.step,
          key: 'step',
          vShow: ['sText']
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
          label: '背景颜色',
          value: config.style?.background,
          key: 'background',
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
            '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}':
              '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}'
          }
        },
        {
          label: '组件名称',
          value: config.component,
          placeholder: '全局注册的组件名称',
          key: 'component',
          vShow: ['component']
        },
        {
          type: 'switch',
          label: '是否轮播', // 属性仅在设计模式有效
          value: config.carousel,
          key: 'carousel',
          vShow: ['table']
        },
        {
          type: 'number',
          label: '滚动速度',
          placeholder: '开启轮播有效',
          value: config.speed,
          key: 'speed',
          vShow: ['table']
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
    // if (obj.type === 'number') {
    //   value = parseInt(value)
    // }
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
    if (['zIndex', 'display', 'lock'].includes(obj.key)) {
      // 这三个更新，需要重设左侧图层
      emits('update')
    }
  }
  /***
   * 选择上传图片
   * @param tabsName 转到对应的选项卡
   * @param key 关闭弹窗时用于区分事件标识
   */
  const openUpload = (tabsName: string, key: string) => {
    uploadImageEl.value.open(tabsName, key)
  }
  const selectImg = (path: string, key: string) => {
    switch (key) {
      case 'screenBg':
        state.bgUpload = path
        stateChange()
        break
      case 'src':
        current.value.config.src = path
        break
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
      // type: 'echarts',
      content: current.value.option,
      title: '可参考echarts相关例子编辑',
      callback: (res: any) => {
        current.value.option = res
      }
    })
  }
  // 编辑内联样式
  const styleEdit = () => {
    emits('openDrawer', {
      // type: 'style',
      codeType: 'json',
      content: current.value.config?.style || {},
      title: '可输入更多的css样式，须为json格式',
      callback: (res: any) => {
        current.value.config.style = res
      }
    })
  }
  // 表格组件属性
  const tablePropsEdit = () => {
    emits('openDrawer', {
      codeType: 'json',
      content: current.value.config?.props || {},
      title: '支持所有表格props属性，可参考el-table。json格式',
      callback: (res: any) => {
        current.value.config.props = res
      }
    })
  }
  const tableColumnEdit = () => {
    let columns = current.value.columns
    if (!columns || !columns.length) {
      columns = [{ prop: '', label: '' }]
    }
    emits('openDrawer', {
      codeType: 'json',
      content: columns,
      title: '表格列设置，可参考table-column属性',
      callback: (res: any) => {
        current.value.columns = res
      }
    })
  }
  const openEventsDrawer = (type: string, source?: string) => {
    let content
    if (source === 'global') {
      content = props.config && (props.config as any)[type]
    } else {
      content = current.value.events && current.value.events[type]
    }
    if (!content) {
      if (type === 'beforeRequest') {
        content = (data: any) => {
          // data经过处理后返回
          console.log('beforeRequest', data)
          return data
        }
      } else {
        if (source === 'global') {
          content = (res: any) => {
            console.log('afterResponse', res)
            return res
          }
        } else {
          content = (data: any, option: any, global: any) => {
            console.log('afterResponse', data, option, global)
            return option
          }
        }
      }
    }
    emits('openDrawer', {
      content: content,
      title:
        type === 'beforeRequest'
          ? '这里可处理请求前的参数，返回相应参数给接口'
          : '接口数据处理。也可为字符串，如opt=formatTest',
      callback: (res: any) => {
        if (source === 'global') {
          ;(props.config as any)[type] = res
        } else {
          if (!current.value.events) {
            current.value.events = {}
          }
          current.value.events[type] = res
        }
      }
    })
  }
  // 编辑静态/全局数据
  const editData = () => {
    let content
    let title
    const optionsType = current.value.config.optionsType
    if (optionsType === 2) {
      // 全局
      title = '从大屏配置的全局数据里获取指定数据'
      content = current.value.events?.getGlobal
      if (!content) {
        content = (data: any, global: any) => {
          console.log('getGlobalData', data, global)
          return data
        }
      }
    } else {
      // 静态
      title = '图表数据，替换相关数据返回即可'
      if (['text', 'sText'].includes(type.value)) {
        content = current.value.config?.text
        title = '编辑文本内容数据'
      } else {
        content = current.value.option
      }
      if (type.value === 'table') {
        title = '表格列表数据。根据设定的table-column列数据设置对应的数据'
      }
    }
    emits('openDrawer', {
      content: content,
      title: title,
      callback: (res: any) => {
        if (optionsType === 2) {
          if (!current.value.events) {
            current.value.events = {}
          }
          current.value.events.getGlobal = res
        } else {
          if (['text', 'sText'].includes(type.value)) {
            current.value.config.text = res
          } else {
            current.value.option = res
          }
        }
      }
    })
  }
  defineExpose({ setCurrent })
</script>
