<template>
  <div class="sidebar-tools">
    <el-tabs model-value="property">
      <el-tab-pane
        name="property"
        label="属性配置"
        class="scroll"
      >
        <el-form size="small" :disabled="activeComp.locked" v-show="Object.keys(activeComp).length">
          <el-form-item
            v-for="(item, index) in propertyList"
            :key="index"
            :label="item.label"
          >
            <h3 v-if="item.type === 'group'">
              {{ item.title }}
            </h3>
            <el-select
              v-else-if="item.type === 'select'"
              :placeholder="item.placeholder"
              v-model="activeComp[item.key]"
              v-bind="item.attr"
              @change="propertyChange(item, $event)"
            >
              <el-option
                v-for="(opt, key) in item.options"
                :key="opt"
                :label="opt"
                :value="Array.isArray(item.options)?opt:key"
              />
            </el-select>
            <el-button
              v-else-if="item.type === 'button'"
              type="primary"
              @click="openDrawer(item.key)"
            >
              {{ item.label }}
            </el-button>
            <component
              v-else
              :is="`el-${item.type||'input'}`"
              :placeholder="item.placeholder"
              v-model="activeComp[item.key]"
              @change="propertyChange(item, $event)"
              v-bind="item.attr"/>
          </el-form-item>
          <template v-if="
            [
              'line',
              'bar',
              'pie',
              'echarts',
              'text',
              'sText',
              'table'
            ].includes(activeComp.type)
          ">
            <el-form-item>
              <h3>
                数据
              </h3>
            </el-form-item>
            <el-form-item label="数据类型">
              <el-radio-group v-model="activeComp.optionsType">
                <el-radio
                  :value="0"
                  style="margin-right: 4px"
                >
                  静态/全局
                </el-radio>
                <el-radio :value="1">
                  动态
                </el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="activeComp.optionsType !== 1">
              <el-button
                type="primary"
                @click="openDrawer('editData')"
              >
                编辑数据
              </el-button>
            </el-form-item>
          </template>
          <template v-if="activeComp.optionsType === 1">
            <el-form-item>
              <el-input
                v-model="activeComp.requestUrl"
                placeholder="接口URL或api中的key"
              >
                <template #prepend>
                  <el-select
                    v-model="activeComp.method"
                    style="width: 60px"
                  >
                    <el-option
                      label="get"
                      value="get"
                    />
                    <el-option
                      label="post"
                      value="post"
                    />
                    <el-option
                      label="ws"
                      value="ws"
                      disabled
                    />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="activeComp.requestUrl&&activeComp.method">
              <el-button type="primary" @click="connectionTest">测试连接</el-button>
            </el-form-item>
            <el-form-item label="刷新时间">
              <el-input-number
                v-model="activeComp.loopTime"
                disabled
              />
            </el-form-item>
            <el-form-item>
              <h3>接口数据处理事件</h3>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="openDrawer('before')"
              >
                before事件
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="openDrawer('afterScreen')"
              >
                after事件
              </el-button>
            </el-form-item>
          </template>
        </el-form>
      </el-tab-pane>
      <el-tab-pane
        label="全局配置"
        name="comm"
        class="scroll"
      >
        <div class="scroll">
          <el-form size="small">
            <el-form-item label="大屏宽度">
              <el-input
                placeholder="请输入大屏宽度"
                v-model="config.width"
                @change="configChange('width', $event)"
              />
            </el-form-item>
            <el-form-item label="大屏高度">
              <el-input
                placeholder="请输入大屏高度"
                v-model="config.height"
                @change="configChange('height', $event)"
              />
            </el-form-item>
            <el-form-item
              class="color-picker"
              label="主色"
            >
              <el-color-picker
                show-alpha
                v-model="config.primary"
                @change="configChange('primary', $event)"
              />
            </el-form-item>
            <el-form-item label="背景">
              <el-select
                v-model="state.bgSelect"
                @change="stateChange"
              >
                <el-option
                  :value="1"
                  label="背景色"
                />
                <el-option
                  :value="2"
                  label="背景图"
                />
              </el-select>
            </el-form-item>
            <el-form-item
              v-if="state.bgSelect === 1"
              class="color-picker"
            >
              <el-color-picker
                v-model="state.bgColor"
                show-alpha
                @change="stateChange"
              />
            </el-form-item>
            <el-form-item
              v-if="state.bgSelect === 2"
              class="upload-image"
            >
              <el-select
                v-model="state.bgImage"
                placeholder="请输入或选择图片地址"
                filterable
                allow-create
                @change="stateChange">
                <el-option
                  v-for="(item,index) in screenStaticImages"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="外链样式">
              <el-input
                v-model="config.styleLink"
                placeholder="外链css样式地址"
                @change="configChange('styleLink', $event)"
              />
            </el-form-item>
            <el-form-item>
              <el-button @click="openDrawer('editCss')" type="primary">
                编辑样式
              </el-button>
            </el-form-item>
            <el-form-item>
              <h3>全局数据</h3>
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="config.requestUrl"
                placeholder="接口URL或api中的key"
                @change="configChange('requestUrl', $event)"
              >
                <template #prepend>
                  <el-select
                    v-model="config.method"
                    style="width: 60px"
                    @change="configChange('method', $event)"
                  >
                    <el-option
                      label="get"
                      value="get"
                    />
                    <el-option
                      label="post"
                      value="post"
                    />
                    <el-option
                      label="ws"
                      value="ws"
                      disabled
                    />
                  </el-select>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item v-if="config.requestUrl">
              <el-button
                type="primary"
                @click="getGlobalDataTest"
              >
                连接测试
              </el-button>
            </el-form-item>
            <el-form-item label="刷新时间">
              <el-input-number
                disabled
                v-model="config.loopTime"
                @change="configChange('loopTime', $event)"
              />
            </el-form-item>
            <el-form-item>
              <h3>接口数据处理事件</h3>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="openDrawer('beforeScreenGlobal')"
              >
                before事件
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="openDrawer('afterScreenGlobal')"
              >
                after事件
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
  import {computed, onMounted, reactive, watch, ref} from "vue";
  import {useScreenStore} from "@/store/screen"
  import {storeToRefs} from 'pinia'
  import {loadResource, removeResource} from "@/utils";
  import {ElMessage} from "element-plus";
  import type {AceDrawerT} from "@/components/ace/type"
  import {getGlobalData, getComponentData} from './getData'
  import {ScopedStyleId, loadStaticImages} from './utils'
  import {getAceTitle} from '@/components/ace/tooltip'
  import {onBeforeRouteLeave} from "vue-router";

  const store = useScreenStore()

  const emits = defineEmits<{
    (e: 'openDrawer', data: AceDrawerT): void
  }>()

  type DrawerConfig = {
    [key: string]: () => {
      type?: string
      title?: string
      content: any
      key?: string
      callback: (content: any) => void
    }
  }

  const {designConfig: config, activeComp} = storeToRefs(store)

  const state = reactive({
    bgColor: '',
    bgImage: '',
    bgSelect: ''
  })

  const unWatch = watch(() => config.value.background,
    (val = '') => {
      const background = val.trim()
      if (background.startsWith('url(')) {
        // 匹配 url() 内部的图片地址（支持单/双引号/无引号）
        const match = background.match(/url\(['"]?(.*?)['"]?\)/)
        state.bgImage = match?.[1] ?? ''
        state.bgSelect = 2
      } else {
        // 纯色模式
        state.bgColor = background
        state.bgSelect = 1
      }
    }, {immediate: true})

  const openDrawer = (eventType: string) => {
    const drawerConfigMap: DrawerConfig = {
      // 编辑 CSS
      editCss: () => ({
        content: config.value.style,
        type: 'css',
        key: eventType,
        callback: (content: string) => {
          if (content) {
            removeResource(ScopedStyleId)
            loadResource(content, ScopedStyleId)
            config.value.style = content
          }
        }
      }),

      // 前置全局脚本
      beforeScreenGlobal: () => {
        const type = 'before'
        return {
          content: config.value[type],
          key: type,
          callback: (content: any) => {
            config.value[type] = content
          }
        }
      },

      // 后置全局脚本
      afterScreenGlobal: () => ({
        title: getAceTitle['after'],
        content: config.value[eventType],
        key: eventType,
        callback: (content: any) => {
          config.value.after = content
        }
      }),

      // 图表编辑
      echartsEdit: () => ({
        title: '可参考echarts相关例子编辑',
        content: activeComp.value.option,
        callback: (content: Record<string, any>) => {
          activeComp.value.option = content
        }
      }),

      // 组件内联样式
      style: () => ({
        type: 'json',
        title: '可输入更多的css样式，须为json格式',
        content: activeComp.value.style || {},
        callback: (content: Record<string, any>) => {
          activeComp.value.style = content
        }
      }),

      // 表格 Props
      tablePropsEdit: () => ({
        type: 'json',
        title: '支持所有表格props属性，可参考el-table。json格式',
        content: activeComp.value.props || {},
        callback: (content: Record<string, any>) => {
          activeComp.value.props = content
        }
      }),

      // 静态数据 / 文本 / 表格数据
      editData: () => {
        const isText = ['text', 'sText'].includes(activeComp.value.type)
        let title = '图表数据，静态时直接修改；使用全局时，通过{{getScreenGlobal.xxx}}字符串替换，如data:"{{getScreenGlobal.xxx}}．当前组件的动态数据可使用getScreenComp方法"'
        if (isText) title = '编辑文本内容数据'
        if (activeComp.value.type === 'table') {
          title = '表格列表数据。根据设定的table-column列数据设置对应的数据'
        }
        return {
          type: isText ? 'text' : '',
          title: title,
          content: isText ? activeComp.value.text : activeComp.value.option,
          callback: (content: any) => {
            if (isText) {
              activeComp.value.text = content
            } else {
              activeComp.value.option = content
            }
          }
        }
      },

      // 组件前置脚本
      before: () => ({
        content: activeComp.value.before,
        key: 'before',
        callback: (content: any) => {
          activeComp.value.before = content
        }
      }),

      // 组件后置脚本
      afterScreen: () => ({
        title: getAceTitle['after'],
        content: activeComp.value.after,
        key: eventType,
        callback: (content: any) => {
          activeComp.value.after = content
        }
      })
    }

    // 获取对应配置
    const getParams = drawerConfigMap[eventType]
    if (!getParams) return

    emits('openDrawer', getParams())
  }
  // =====================处理全局属性
  const configChange = (key: string, val: any) => {
    if (key === 'styleLink' && val) {
      // 插入样式
      removeResource(key) // 如果存在先删除之前的
      loadResource(val, key).then(() => {
        ElMessage.success('资源加载成功！')
      })
    }
  }
  const getGlobalDataTest = () => {
    getGlobalData(config.value)
      .then(() => {
        ElMessage.success('连接成功')
      })
      .catch((res: any) => {
        ElMessage.error(res.msg || '连接失败')
      })
  }
  const connectionTest = () => {
    getComponentData(activeComp.value).then(() => {
      ElMessage.success('连接成功，可通过预览查看数据更新结束')
    }).catch((res: any) => {
      ElMessage.error(res.msg || '连接失败1')
    })
  }
  const stateChange = () => {
    let bg = ''
    switch (state.bgSelect) {
      case 1:
        bg = state.bgColor
        break
      case 2:
        bg = `url(${state.bgImage})`
        break
    }
    config.value.background = bg
    configChange('background', bg)
  }
  //=========================处理单组件属性
  const propertyList = computed(() => {
    const uStyle = activeComp.value.notUseInlineStyle
    return [
      {
        type: 'group',
        title: '位置信息'
      },
      {
        type: 'switch',
        label: '不使用内联位置信息',
        key: 'notUseInlineStyle'
      },
      {
        label: 'left',
        key: 'x',
        placeholder: '请输入x坐标位置信息',
        vIf: uStyle
      },
      {
        label: 'top',
        key: 'y',
        placeholder: '请输入y坐标位置信息',
        vIf: uStyle
      },
      {
        label: 'width',
        key: 'width',
        placeholder: '请输入宽度',
        vIf: uStyle
      },
      {
        label: 'height',
        key: 'height',
        placeholder: '请输入高度',
        vIf: uStyle
      },
      {
        label: 'right',
        key: 'right',
        placeholder: '设置后left为auto',
        vIf: uStyle
      },
      {
        label: 'bottom',
        key: 'bottom',
        placeholder: '设置后top为auto',
        vIf: uStyle
      },
      {
        type: 'input-number',
        label: 'zIndex',
        key: 'zIndex',
        placeholder: '请输入层级',
        vIf: uStyle
      },
      {
        type: 'group',
        title: '属性信息'
      },
      {
        type: 'switch',
        label: '锁定', // 属性仅在设计模式有效
        key: 'locked'
      },
      {
        type: 'switch',
        label: '隐藏',
        key: 'display'
      },
      {
        label: '样式类名',
        placeholder: '方便引用个性化样式',
        key: 'class'
      },
      {
        label: '文本内容',
        placeholder: '请输入文本内容',
        key: 'text',
        vShow: ['text']
      },
      {
        type: 'select',
        label: '滚动方向',
        placeholder: '请选择滚动方向',
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
        type: 'input-number',
        label: '滚动步长',
        placeholder: '每单位时间滚动的距离，默认1',
        key: 'step',
        vShow: ['sText']
      },
      {
        type: 'input-number',
        label: '滚动速度',
        placeholder: '滚动速度，数字越大速度越慢',
        key: 'speed',
        vShow: ['sText', 'table']
      },
      {
        label: '文本内容',
        placeholder: '请输入文本内容，支持html',
        key: 'text',
        vShow: ['sText'],
        attr: {type: 'textarea'}
      },
      {
        label: '字体大小',
        placeholder: '文本字体大小,如14px',
        key: 'fontSize',
        vShow: ['text', 'clock', 'sText']
      },
      {
        label: '边框',
        placeholder: '如1px solid #000',
        key: 'border',
        vShow: ['background']
      },
      {
        type: 'color-picker',
        label: '背景颜色',
        key: 'background',
        vShow: ['background', 'sText', 'text']
      },
      {
        type: 'color-picker',
        label: '字体颜色',
        key: 'color',
        path: 'style',
        vShow: ['text', 'clock', 'sText'],
      },
      {
        type: 'select',
        label: '时间格式',
        attr: {
          allowCreate: true,
          filterable: true,
        },
        key: 'dateTime',
        placeholder: '选择或创建时间格式',
        vShow: ['clock'],
        options: {
          '{y}-{m}-{d}': '{y}-{m}-{d}',
          '{h}:{i}:{s}': '{h}:{i}:{s}',
          '{y}-{m}-{d} {h}:{i}:{s}': '{y}-{m}-{d} {h}:{i}:{s}',
          '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}':
            '{y}年{m}月{d}日 {h}:{i}:{s} 星期{w}',
        }
      },
      {
        label: '组件名称',
        placeholder: '全局注册的组件名称',
        key: 'component',
        vShow: ['component']
      },
      {
        type: 'switch',
        label: '是否轮播', // 属性仅在设计模式有效
        key: 'carousel',
        vShow: ['table']
      },
      {
        type: 'select',
        label: activeComp.value.type === 'image' ? '图片地址' : '背景图片',
        placeholder: '请输入或选择图片地址',
        key: 'src',
        //vShow: ['image', 'background'],
        attr: {
          filterable: true,
          allowCreate: true
        },
        options: screenStaticImages.value
      },
      {
        type: 'button',
        vShow: ['line', 'bar', 'pie', 'echarts'],
        key: 'echartsEdit',
        label: '图表编辑'
      },
      {
        type: 'button',
        vShow: ['text',
          'sText',
          'image',
          'background',
          'border',
          'clock'],
        key: 'style',
        label: '编辑内联样式'
      },
      {
        type: 'button',
        vShow: ['table'],
        key: 'tablePropsEdit',
        label: '表格属性'
      }
    ].filter(item => {
      let hasFilter = true
      if (item.vShow) {
        hasFilter = item.vShow.includes(activeComp.value.type)
      }
      if (item.vIf) {
        // 不显示vif＝true的
        hasFilter = false
      }
      return hasFilter
    })
  })
  const propertyChange = () => {
    // 留个位置
  }

  const screenStaticImages = ref([])
  onMounted(() => {
    loadStaticImages().then((res) => {
      screenStaticImages.value = res
    })
  })

  onBeforeRouteLeave(() => {
    unWatch() // 销毁监听器
  })

</script>