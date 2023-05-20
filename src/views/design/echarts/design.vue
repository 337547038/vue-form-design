<!--&lt;!&ndash; Created by 337547038 图表设计. &ndash;&gt;-->
<!--<template>-->
<!--  <div class="design-container design-chart" v-loading="state.loading">-->
<!--    <div class="components-list">-->
<!--      <div class="title">图表类型</div>-->
<!--      <draggable-->
<!--        itemKey="key"-->
<!--        tag="ul"-->
<!--        v-model="navList"-->
<!--        :group="{ name: 'form', pull: 'clone', put: false }"-->
<!--        ghost-class="ghost"-->
<!--        :sort="false"-->
<!--        :clone="clone"-->
<!--      >-->
<!--        <template #item="{ element }">-->
<!--          <li :class="[element.type]">-->
<!--            <i :class="`icon-${element.icon}`"></i>-->
<!--            <span :title="element.label">{{ element.label }}</span>-->
<!--          </li>-->
<!--        </template>-->
<!--      </draggable>-->
<!--    </div>-->
<!--    <div class="main-body">-->
<!--      <headTools @click="headToolClick" type="2" />-->
<!--      <div class="main-form design-form">-->
<!--        <echarts-->
<!--          :type="1"-->
<!--          @control-btn-click="controlBtnClick"-->
<!--          ref="echartsEl"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="sidebar-tools">-->
<!--      <el-form size="small">-->
<!--        <el-tabs modelValue="first">-->
<!--          <el-tab-pane label="图表属性" name="first">-->
<!--            <template v-if="Object.keys(current).length">-->
<!--              <el-form-item label="自定义Class">-->
<!--                <el-input placeholder="自定义Class" v-model="current.class" />-->
<!--              </el-form-item>-->
<!--              <el-form-item label="字段标识">-->
<!--                <el-input placeholder="字段标识" v-model="current.name" />-->
<!--              </el-form-item>-->
<!--              <el-form-item label="图表宽度">-->
<!--                <el-input-->
<!--                  placeholder="图表宽度，数字类型"-->
<!--                  v-model.number="current.width"-->
<!--                />-->
<!--              </el-form-item>-->
<!--              <el-form-item label="图表高度">-->
<!--                <el-input-->
<!--                  placeholder="图表高度，数字类型"-->
<!--                  v-model.number="current.height"-->
<!--                />-->
<!--              </el-form-item>-->
<!--            </template>-->
<!--          </el-tab-pane>-->
<!--          <el-tab-pane label="图表配置" name="two">-->
<!--            <el-form-item label="保存名称">-->
<!--              <el-input placeholder="保存名称" v-model="state.name" />-->
<!--            </el-form-item>-->
<!--            &lt;!&ndash;            <h3>接口数据事件</h3>&ndash;&gt;-->
<!--            &lt;!&ndash;            <el-form-item class="event-btn">&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-button&ndash;&gt;-->
<!--            &lt;!&ndash;                @click="&ndash;&gt;-->
<!--            &lt;!&ndash;                  eventClick(&ndash;&gt;-->
<!--            &lt;!&ndash;                    'beforeRequest',&ndash;&gt;-->
<!--            &lt;!&ndash;                    '获取图表初始数据前事件，可修改请求参数'&ndash;&gt;-->
<!--            &lt;!&ndash;                  )&ndash;&gt;-->
<!--            &lt;!&ndash;                "&ndash;&gt;-->
<!--            &lt;!&ndash;                >beforeRequest&ndash;&gt;-->
<!--            &lt;!&ndash;              </el-button>&ndash;&gt;-->
<!--            &lt;!&ndash;              <el-button&ndash;&gt;-->
<!--            &lt;!&ndash;                @click="&ndash;&gt;-->
<!--            &lt;!&ndash;                  eventClick(&ndash;&gt;-->
<!--            &lt;!&ndash;                    'afterResponse',&ndash;&gt;-->
<!--            &lt;!&ndash;                    '获取图表初始数据后事件，可对请求返回数据进行处理'&ndash;&gt;-->
<!--            &lt;!&ndash;                  )&ndash;&gt;-->
<!--            &lt;!&ndash;                "&ndash;&gt;-->
<!--            &lt;!&ndash;                >afterResponse&ndash;&gt;-->
<!--            &lt;!&ndash;              </el-button>&ndash;&gt;-->
<!--            &lt;!&ndash;            </el-form-item>&ndash;&gt;-->
<!--          </el-tab-pane>-->
<!--        </el-tabs>-->
<!--      </el-form>-->
<!--    </div>-->
<!--    <el-drawer-->
<!--      v-model="state.visible"-->
<!--      size="60%"-->
<!--      :direction="state.direction"-->
<!--      custom-class="ace-dialog"-->
<!--      :append-to-body="true"-->
<!--      :before-close="drawerBeforeClose"-->
<!--    >-->
<!--      <template #header>-->
<!--        <div v-html="state.dialogTitle"></div>-->
<!--      </template>-->
<!--      <div v-if="state.visible" id="editJson"></div>-->
<!--      <div class="dialog-footer">-->
<!--        <el-button type="primary" size="small" @click="dialogConfirm">-->
<!--          确定-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </el-drawer>-->
<!--    <VueFile ref="vueFileEl" />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--  import echarts from './components/echarts.vue'-->
<!--  import HeadTools from '@/views/designForm/components/headTools.vue'-->
<!--  import { getRequest } from '@/api'-->
<!--  import { reactive, ref, nextTick, onUnmounted, onMounted } from 'vue'-->
<!--  import { useRoute, useRouter } from 'vue-router'-->
<!--  import VueFile from '@/views/designForm/components/vueFile.vue'-->
<!--  import {-->
<!--    aceEdit,-->
<!--    afterResponse,-->
<!--    beforeRequest-->
<!--  } from '@/views/designForm/components/utils'-->
<!--  import { ElMessage } from 'element-plus'-->
<!--  import Draggable from 'vuedraggable-es'-->

<!--  import { objToStringify, stringToObj } from '@/utils/form'-->

<!--  const router = useRouter()-->
<!--  const route = useRoute()-->
<!--  const vueFileEl = ref()-->
<!--  const current = ref({})-->
<!--  const navList = ref([-->
<!--    {-->
<!--      icon: 'line',-->
<!--      label: '折线图',-->
<!--      type: 'line',-->
<!--      option: {-->
<!--        xAxis: {-->
<!--          type: 'category',-->
<!--          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']-->
<!--        },-->
<!--        yAxis: {-->
<!--          type: 'value'-->
<!--        },-->
<!--        series: [-->
<!--          {-->
<!--            data: [150, 230, 224, 218, 135, 147, 260],-->
<!--            type: 'line'-->
<!--          }-->
<!--        ]-->
<!--      }-->
<!--    },-->
<!--    {-->
<!--      icon: 'bar',-->
<!--      label: '柱状图',-->
<!--      type: 'bar',-->
<!--      option: {-->
<!--        xAxis: {-->
<!--          type: 'category',-->
<!--          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']-->
<!--        },-->
<!--        yAxis: {-->
<!--          type: 'value'-->
<!--        },-->
<!--        series: [-->
<!--          {-->
<!--            data: [120, 200, 150, 80, 70, 110, 130],-->
<!--            type: 'bar'-->
<!--          }-->
<!--        ]-->
<!--      }-->
<!--    },-->
<!--    {-->
<!--      icon: 'pie',-->
<!--      label: '饼图',-->
<!--      type: 'pie',-->
<!--      option: {-->
<!--        series: [-->
<!--          {-->
<!--            name: 'Access From',-->
<!--            type: 'pie',-->
<!--            radius: '50%',-->
<!--            data: [-->
<!--              { value: 1048, name: 'Search Engine' },-->
<!--              { value: 735, name: 'Direct' },-->
<!--              { value: 580, name: 'Email' },-->
<!--              { value: 484, name: 'Union Ads' },-->
<!--              { value: 300, name: 'Video Ads' }-->
<!--            ]-->
<!--          }-->
<!--        ]-->
<!--      }-->
<!--    }-->
<!--  ])-->
<!--  const echartsEl = ref()-->
<!--  const clone = (origin: any) => {-->
<!--    return JSON.parse(JSON.stringify(origin))-->
<!--  }-->
<!--  const state = reactive({-->
<!--    editor: {},-->
<!--    loading: false,-->
<!--    id: route.query.id,-->
<!--    direction: 'rtl',-->
<!--    dialogTitle: '',-->
<!--    visible: false,-->
<!--    dialogType: '',-->
<!--    name: ''-->
<!--  })-->
<!--  const controlBtnClick = (obj: any) => {-->
<!--    current.value = obj-->
<!--  }-->
<!--  const headToolClick = (type: string) => {-->
<!--    const content = echartsEl.value.getData()-->
<!--    switch (type) {-->
<!--      case 'del':-->
<!--        // 清空-->
<!--        echartsEl.value.setDataList([])-->
<!--        current.value = ''-->
<!--        break-->
<!--      case 'json':-->
<!--        // 生成脚本-->
<!--        dialogOpen(content, { type: 'export' })-->
<!--        break-->
<!--      case 'vue':-->
<!--        // 导出vue文件-->
<!--        vueFileEl.value.openEcharts(content)-->
<!--        break-->
<!--      case 'save':-->
<!--        // 保存-->
<!--        saveData(content)-->
<!--        break-->
<!--    }-->
<!--  }-->

<!--  // 打开-->
<!--  const dialogOpen = (obj: any, params: any = {}) => {-->
<!--    state.direction = params.direction || 'rtl'-->
<!--    state.visible = true-->
<!--    state.dialogTitle = params.title-->
<!--    state.dialogType = params.type-->
<!--    if (!obj) {-->
<!--      obj = echartsEl.value.getData()-->
<!--    }-->
<!--    let editData = objToStringify(obj, true)-->
<!--    switch (params.type) {-->
<!--      case 'beforeRequest':-->
<!--        if (obj.config?.beforeRequest) {-->
<!--          editData = objToStringify(obj.config.beforeRequest, true)-->
<!--        } else {-->
<!--          editData = beforeRequest-->
<!--        }-->
<!--        break-->
<!--      case 'afterResponse':-->
<!--        if (obj.config?.afterResponse) {-->
<!--          editData = objToStringify(obj.config.afterResponse, true)-->
<!--        } else {-->
<!--          editData = afterResponse-->
<!--        }-->
<!--        break-->
<!--    }-->
<!--    nextTick(() => {-->
<!--      state.editor = aceEdit(editData)-->
<!--    })-->
<!--  }-->
<!--  const dialogConfirm = () => {-->
<!--    try {-->
<!--      const val = stringToObj(state.editor.getValue())-->
<!--      switch (state.dialogType) {-->
<!--        case 'export':-->
<!--          // 生成脚本预览-->
<!--          echartsEl.value.setDataList(val)-->
<!--          break-->
<!--        case 'beforeRequest':-->
<!--        case 'afterResponse':-->
<!--          const data = echartsEl.value.getData()-->
<!--          data.config[state.dialogType] = val-->
<!--          break-->
<!--      }-->
<!--      state.visible = false-->
<!--    } catch (res: any) {-->
<!--      // console.log(res.message)-->
<!--      ElMessage.error(res.message)-->
<!--    }-->
<!--  }-->
<!--  // 保存数据，将数据保存到服务端-->
<!--  const saveData = (content: any) => {-->
<!--    if (!state.name) {-->
<!--      ElMessage.error('请输入图表保存的名称')-->
<!--      return-->
<!--    }-->
<!--    state.loading = true-->
<!--    const prams = {-->
<!--      data: objToStringify(content),-->
<!--      id: state.id, // 修改时，当前记录id-->
<!--      name: state.name // 表单名称，用于在显示所有已创建的表单列表里显示-->
<!--    }-->
<!--    getRequest('saveEcharts', prams)-->
<!--      .then((res: any) => {-->
<!--        console.log(res)-->
<!--        ElMessage({-->
<!--          message: res.data?.message || '保存成功！',-->
<!--          type: 'success'-->
<!--        })-->
<!--        router.push({ path: '/echarts/list' })-->
<!--        state.loading = false-->
<!--      })-->
<!--      .catch((res: any) => {-->
<!--        ElMessage.error(res.data?.message || '保存异常')-->
<!--        state.loading = false-->
<!--      })-->
<!--  }-->

<!--  const drawerBeforeClose = (done: any) => {-->
<!--    done()-->
<!--  }-->
<!--  // const eventClick = (type: string, tooltip: string) => {-->
<!--  //   dialogOpen('', { title: tooltip, type: type, direction: 'ltr' })-->
<!--  // }-->
<!--  // 初始获取数据-->
<!--  const getData = () => {-->
<!--    if (state.id) {-->
<!--      state.loading = true-->
<!--      getRequest('echartsList', { id: state.id })-->
<!--        .then((res) => {-->
<!--          state.loading = false-->
<!--          const result = res.data-->
<!--          state.name = result.name-->
<!--          echartsEl.value.setDataList(result.list)-->
<!--        })-->
<!--        .catch((res) => {-->
<!--          ElMessage.error(res.data?.message || '操作异常')-->
<!--          state.loading = false-->
<!--        })-->
<!--    }-->
<!--  }-->
<!--  onMounted(() => {-->
<!--    getData()-->
<!--  })-->
<!--  onUnmounted(() => {-->
<!--    if (Object.keys(state.editor).length !== 0) {-->
<!--      state.editor.destroy()-->
<!--      state.editor.container.remove()-->
<!--    }-->
<!--  })-->
<!--</script>-->
