<!-- Created by 337547038 图表设计. -->
<template>
  <div
    v-loading="state.loading"
    class="design-container design-chart"
  >
    <div class="components-list">
      <div class="title">
        图表类型
      </div>
      <draggable
        v-model="navList"
        item-key="key"
        tag="ul"
        :group="{ name: 'form', pull: 'clone', put: false }"
        ghost-class="ghost"
        :sort="false"
        :clone="clone"
      >
        <template #item="{ element }">
          <li :class="[element.type]">
            <i :class="`icon-${element.icon}`" />
            <span :title="element.label">{{ element.label }}</span>
          </li>
        </template>
      </draggable>
    </div>
    <div class="main-body">
      <head-tools
        type="2"
        @click="headToolClick"
      />
      <div class="main-form design-form">
        <echarts
          ref="echartsEl"
          :type="1"
          @control-btn-click="controlBtnClick"
        />
      </div>
    </div>
    <div class="sidebar-tools">
      <el-form size="small">
        <el-tabs model-value="first">
          <el-tab-pane
            label="图表属性"
            name="first"
          >
            <template v-if="Object.keys(current).length">
              <el-form-item label="自定义Class">
                <el-input
                  v-model="current.class"
                  placeholder="自定义Class"
                />
              </el-form-item>
              <el-form-item label="字段标识">
                <el-input
                  v-model="current.name"
                  placeholder="字段标识"
                />
              </el-form-item>
              <el-form-item label="图表宽度">
                <el-input
                  v-model.number="current.width"
                  placeholder="图表宽度，数字类型"
                />
              </el-form-item>
              <el-form-item label="图表高度">
                <el-input
                  v-model.number="current.height"
                  placeholder="图表高度，数字类型"
                />
              </el-form-item>
            </template>
          </el-tab-pane>
          <el-tab-pane
            label="图表配置"
            name="two"
          >
            <el-form-item label="保存名称">
              <el-input
                v-model="state.name"
                placeholder="保存名称"
              />
            </el-form-item>
            <!--            <h3>接口数据事件</h3>-->
            <!--            <el-form-item class="event-btn">-->
            <!--              <el-button-->
            <!--                @click="-->
            <!--                  eventClick(-->
            <!--                    'beforeFetch',-->
            <!--                    '获取图表初始数据前事件，可修改请求参数'-->
            <!--                  )-->
            <!--                "-->
            <!--                >beforeFetch-->
            <!--              </el-button>-->
            <!--              <el-button-->
            <!--                @click="-->
            <!--                  eventClick(-->
            <!--                    'afterFetch',-->
            <!--                    '获取图表初始数据后事件，可对请求返回数据进行处理'-->
            <!--                  )-->
            <!--                "-->
            <!--                >afterFetch-->
            <!--              </el-button>-->
            <!--            </el-form-item>-->
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </div>
    <el-drawer
      v-model="state.visible"
      size="60%"
      :direction="state.direction"
      class="ace-dialog"
      :append-to-body="true"
      :before-close="drawerBeforeClose"
    >
      <template #header>
        <div v-html="state.dialogTitle" />
      </template>
      <div
        v-if="state.visible"
        id="editJson"
      />
      <div class="dialog-footer">
        <el-button
          type="primary"
          size="small"
          @click="dialogConfirm"
        >
          确定
        </el-button>
      </div>
    </el-drawer>
    <VueFile ref="vueFileEl" />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import echarts from './components/echarts.vue'
  import HeadTools from '../components/headTools.vue'
  import { getRequest } from '@/api'
  import { reactive, ref, nextTick, onUnmounted, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import VueFile from '../components/vueFile.vue'
  import {
    aceEdit,
    objToStringify,
    stringToObj
  } from '@/utils/design'
  import { getDrawerContent } from '../components/aceTooptip'
  import { ElMessage } from 'element-plus'
  import Draggable from 'vuedraggable-es'

  const router = useRouter()
  const route = useRoute()
  const vueFileEl = ref()
  const current = ref({})
  const navList = ref([
    {
      icon: 'line',
      label: '折线图',
      type: 'line',
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }
    },
    {
      icon: 'bar',
      label: '柱状图',
      type: 'bar',
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
    },
    {
      icon: 'pie',
      label: '饼图',
      type: 'pie',
      option: {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    }
  ])
  const echartsEl = ref()
  const clone = (origin: any) => {
    return JSON.parse(JSON.stringify(origin))
  }
  const state = reactive({
    editor: {},
    loading: false,
    id: route.query.id,
    direction: 'rtl',
    dialogTitle: '',
    visible: false,
    dialogType: '',
    name: ''
  })
  const controlBtnClick = (obj: any) => {
    current.value = obj
  }
  const headToolClick = (type: string) => {
    const content = echartsEl.value.getData()
    switch (type) {
      case 'del':
        // 清空
        echartsEl.value.setDataList([])
        current.value = ''
        break
      case 'json':
        // 生成脚本
        dialogOpen(content, { type: 'export' })
        break
      case 'vue':
        // 导出vue文件
        vueFileEl.value.openEcharts(content)
        break
      case 'save':
        // 保存
        saveData(content)
        break
    }
  }

  // 打开
  const dialogOpen = (obj: any, params: any = {}) => {
    state.direction = params.direction || 'rtl'
    state.visible = true
    state.dialogTitle = params.title
    state.dialogType = params.type
    if (!obj) {
      obj = echartsEl.value.getData()
    }
    let editData = objToStringify(obj, true)
    switch (params.type) {
      case 'beforeFetch':
        if (obj.config?.beforeFetch) {
          editData = objToStringify(obj.config.beforeFetch, true)
        } else {
          editData = getDrawerContent('beforeFetch')
        }
        break
      case 'afterFetch':
        if (obj.config?.afterFetch) {
          editData = objToStringify(obj.config.afterFetch, true)
        } else {
          editData = getDrawerContent('afterFetch')
        }
        break
    }
    nextTick(() => {
      state.editor = aceEdit(editData)
    })
  }
  const dialogConfirm = () => {
    try {
      const val = stringToObj(state.editor.getValue())
      switch (state.dialogType) {
        case 'export':
          // 生成脚本预览
          echartsEl.value.setDataList(val)
          break
        case 'beforeFetch':
        case 'afterFetch':
          const data = echartsEl.value.getData()
          data.config[state.dialogType] = val
          break
      }
      state.visible = false
    } catch (res: any) {
      // console.log(res.message)
      ElMessage.error(res.message)
    }
  }
  // 保存数据，将数据保存到服务端
  const saveData = (content: any) => {
    if (!state.name) {
      ElMessage.error('请输入图表保存的名称')
      return
    }
    state.loading = true
    const prams = {
      data: objToStringify(content),
      id: state.id, // 修改时，当前记录id
      name: state.name // 表单名称，用于在显示所有已创建的表单列表里显示
    }
    getRequest('saveEcharts', prams)
      .then((res: any) => {
        console.log(res)
        ElMessage({
          message: res.data?.message || '保存成功！',
          type: 'success'
        })
        router.push({ path: '/echarts/list' })
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.data?.message || '保存异常')
        state.loading = false
      })
  }

  const drawerBeforeClose = (done: any) => {
    done()
  }
  // const eventClick = (type: string, tooltip: string) => {
  //   dialogOpen('', { title: tooltip, type: type, direction: 'ltr' })
  // }
  // 初始获取数据
  const getData = () => {
    if (state.id) {
      state.loading = true
      getRequest('echartsList', { id: state.id })
        .then((res) => {
          state.loading = false
          const result = res.data
          state.name = result.name
          echartsEl.value.setDataList(result.list)
        })
        .catch((res) => {
          ElMessage.error(res.data?.message || '操作异常')
          state.loading = false
        })
    }
  }
  onMounted(() => {
    getData()
  })
  onUnmounted(() => {
    if (Object.keys(state.editor).length !== 0) {
      state.editor.destroy()
      state.editor.container.remove()
    }
  })
</script>
