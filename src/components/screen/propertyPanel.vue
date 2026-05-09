<template>
  <div class="sidebar-tools">
    <el-tabs model-value="property">
      <el-tab-pane
        name="property"
        label="属性配置"
      >
        属性配置
      </el-tab-pane>
      <el-tab-pane
        label="全局配置"
        name="comm"
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
              <el-input
                v-model="state.bgImage"
                placeholder="请输入图片地址"
                @change="stateChange"
              />
            </el-form-item>
            <el-form-item label="外链样式">
              <el-input
                v-model="config.styleLink"
                placeholder="外链css样式地址"
                @change="configChange('styleLink', $event)"
              />
            </el-form-item>
            <el-form-item>
              <el-button @click="openDrawer('editCss')">
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
                @click="openDrawer('before', true)"
              >
                before事件
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="openDrawer('after', true)"
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
  import {reactive} from "vue";
  import {useScreenStore} from "@/store/screen"
  import {storeToRefs} from 'pinia'
  import {loadResource, removeResource} from "@/utils";
  import {ElMessage} from "element-plus";
  import type {AceDrawerT} from "@/components/ace/type"

  const store = useScreenStore()

  const emits = defineEmits<{
    (e: 'openDrawer', data: AceDrawerT): void
  }>()

  /*const config = computed({
    get: () => store.designConfig,
    set: (val: Record<string, any>) => {
       store.setDesignConfig(val)
    }
  })*/
  const {designConfig: config} = storeToRefs(store)

  const state = reactive({
    bgColor: '',
    bgUpload: '',
    bgSelect: ''
  })
  const openDrawer = (eventType: string, isGlobal?: boolean) => {
    // 统一打开外层引入的编辑器弹窗
    let params
    switch (eventType) {
      case 'editCss':
        params = {
          title: '当前应用页的样式，类似于.vue文件中的style scoped中的样式',
          content: config.value.style,
          type: 'css',
          callback: (content: string) => {
            if (content) {
              removeResource('screen-style')
              loadResource(content, 'screen-style')
            }
          }
        }
        break
    }
    emits('openDrawer', params)
  }
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

  }
  const stateChange = () => {
    let bg = ''
    switch (state.bgSelect) {
      case 1:
        bg = state.bgColor
        break
      case 2:
        bg = `url(${state.bgUpload})`
        break
    }
    config.value.background = bg
    configChange('background', bg)
  }
</script>