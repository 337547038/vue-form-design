<template>
  <div>
    <div
      ref="container"
      v-loading="state.loading"
      class="design-container design-table"
    >
      <div class="main-body">
        <div class="header">
          <div class="field">
            <el-popover
              placement="bottom"
              :width="420"
              trigger="hover"
            >
              <template #reference>
                <el-button
                  type="primary"
                  plain
                  size="small"
                >
                  添加表格列字段
                </el-button>
              </template>
              <div class="table-field-list">
                <el-checkbox-group v-model="columnsCheckList">
                  <div
                    v-for="(item, index) in fieldOptions"
                    :key="index"
                    class="item"
                  >
                    <h3>{{ item.label }}</h3>
                    <div class="list">
                      <el-checkbox
                        v-for="li in item.options"
                        :key="li.prop"
                        :label="li.label"
                        :value="li.prop"
                        @change="fieldSelectClick(li, $event)"
                      />
                    </div>
                  </div>
                </el-checkbox-group>
              </div>
            </el-popover>
          </div>
          <head-tools @click="headToolClick" />
        </div>
        <div class="main-form main-table">
          <div
            class="search-box"
            title="条件查询搜索区域，单击可编辑"
            @click="searchFormClick"
          >
            <ak-form
              v-if="searchFormData?.list?.length"
              operate-type="search"
              :data="searchFormData"
              request-url=""
            />
            <div
              v-else
              class="tip"
            >
              条件查询搜索区域，单击可编辑
            </div>
          </div>
          <el-divider border-style="dashed" />
          <div class="control-btn">
            <div
              class="btn-group"
              title="单击可编辑"
              @click="editOpenDrawer('controlBtn')"
            >
              <div
                v-if="
                  designConfig?.controlBtn?.length === 0 || !designConfig?.controlBtn
                "
                class="tip"
              >
                操作按钮区域，点击可添加如新增、删除
              </div>
              <operate-btn
                v-else
                position="top"
                :buttons="mergeDefaultBtn(designConfig?.controlBtn)"
                :row="{}"
              />
            </div>
            <div class="control-other">
              <el-button-group>
                <el-button
                  v-if="tableData.config?.expand"
                  circle
                  icon="Search"
                  title="展开/收起筛选"
                />
                <el-button
                  v-if="tableData.config?.columnsSetting !== false"
                  circle
                  icon="SetUp"
                  title="设置列显示隐藏"
                />
              </el-button-group>
            </div>
          </div>
          <div
            v-if="!designColumns?.length"
            class="tip"
          >
            表格列设置区域，可从左上角 添加表格列字段
            选择已有列或直接从上方工具栏 生成脚本预览 编辑
          </div>
          <el-table
            v-if="state.refreshTable"
            v-bind="tableData.tableProps || {}"
            ref="tableEl"
            :data="[{}]"
          >
            <template
              v-for="item in designColumns"
              :key="item.prop || item.label"
            >
              <el-table-column
                v-bind="item"
                :class-name="getActiveCls(item.prop)"
              >
                <template #header="scope">
                  {{ scope.column.label }}
                  <i
                    class="icon-close"
                    @click="delCol(item)"
                  />
                  <el-tooltip
                    v-if="item.help"
                    placement="top"
                  >
                    <template #content>
                      <span v-html="item.help" />
                    </template>
                    <i class="icon-help" />
                  </el-tooltip>
                </template>
                <template
                  v-if="item.type !== 'index'"
                  #default
                >
                  <el-checkbox v-if="item.type === 'selection'" />
                  <div
                    v-else
                    @click.stop="rowClick(item)"
                  >
                    <el-switch v-if="item.render === 'switch'" />
                    <el-image
                      v-else-if="item.render === 'image'"
                      :style="{
                        width: item.config?.width||'50px',
                        height: item.config?.height||'50px'
                      }"
                      src="/static/images/empty.png"
                    />

                    <el-tag v-else-if="item.render === 'tag'">
                      设置
                    </el-tag>
                    <operate-btn
                      v-else-if="item.render === 'buttons'"
                      class="btn-group"
                      :buttons="mergeDefaultBtn(item.buttons)"
                      :row="{}"
                    />
                    <span v-else>设置</span>
                  </div>
                </template>
              </el-table-column>
            </template>
          </el-table>
          <div class="table-tip">
            操作提示：<br>
            *从数据列表配置中选择 所属表单<br>
            *从左上角 添加表格字段 选择预设字段<br>
            *可拖动表头字段移动调整表头字段排列顺序<br>
            *可通过顶部工具栏 生成脚本预览 查看或编辑添加自定义字段
          </div>
        </div>
      </div>
      <property-panel
        v-model:tabs-name="state.tabsName"
        :all-dict="allDict"
        @change-event="controlAttrChangeEvent"
      />
    </div>
    <ace-drawer ref="aceDrawerRef" />
    <vue-file ref="vueFileRef" />
  </div>
</template>
<route>
{meta:{permissions:'none'}}
</route>
<script setup lang="ts">
  import {reactive, ref, nextTick, onMounted, computed, onUnmounted} from 'vue'
  import HeadTools from '../components/headTools.vue'
  import VueFile from '@/components/exportVue/index.vue'
  import AceDrawer from '@/components/ace/drawer.vue'
  import Sortable from 'sortablejs'
  import {objToStringify} from '@/utils/design'
  import {getRequest} from '@/api'
  import {useRouter, useRoute} from 'vue-router'
  import {ElMessage} from 'element-plus'
  import {useLayoutStore} from '@/store/layout'
  import PropertyPanel from './components/propertyPanel.vue'
  import {getFormColumns, getInitData} from './components/request'
  import OperateBtn from '@/components/table/components/operateButton.vue'
  import {mergeDefaultBtn} from '@/components/table/components/defaultBtn'
  import type {AceDrawerT} from "@/components/ace/type.ts";
  import {getStorage, setStorage} from "@/utils";
  import {useDesignListStore} from "@/store/list";
  import {storeToRefs} from "pinia";
  import {tableOtherColumns} from "./components/const";

  const layoutStore = useLayoutStore()
  const designStore = useDesignListStore()
  layoutStore.changeBreadcrumb([{label: '设计管理'}, {label: '列表页设计'}])
  const vueFileRef = ref()
  const aceDrawerRef = ref()
  const container = ref()
  const {id, formId} = useRoute().query
  const router = useRouter()
  const columnsCheckList = ref([])
  const state = reactive({
    loading: false,
    tabsName: 'second',
    formFieldList: [], // 表单数据源所有可选字段
    refreshTable: true
  })
  const globalDict = computed(() => {
    return getStorage('akAllDict')
  })
  const formDict = ref({})//设计表单时保持的字典
  //返回所有可用的字典key
  const allDict = computed(() => {
    const mergedObj = {...globalDict.value, ...formDict.value};
    return Object.keys(mergedObj)
  })
  const tableColumns = ref([])
  const searchFormData = ref([])
  const {designColumns, designConfig, selectComponent} = storeToRefs(designStore)
  const tableData = computed(() => {
    return {
      columns: designColumns.value,
      config: designConfig.value
    }
  })

  const getActiveCls = (prop: string) => {
    return prop && selectComponent.value.prop === prop ? 'active' : ''
  }
  // 右侧边栏事件
  const controlAttrChangeEvent = (params: AceDrawerT, id?: string | number) => {
    if (params.key === 'formId') {
      columnsCheckList.value = []
      tableColumns.value = []
      searchFormData.value = []
      //清空原设计
      clearStore()
      // 改变表单数据源时，重新自动创建列列
      if (id) {
        ElMessage.warning('改变数据源，将自动创建数据列表')
        autoBuildByFormId(id)
      }
    } else {
      // 打开编辑drawer
      openAceEditDrawer(params)
    }
  }

  const fieldOptions = computed(() => {
    const formField = {
      label: '表单字段',
      options: tableColumns.value
    }
    const temp = [
      {
        label: '其他字段',
        options: tableOtherColumns
      }
    ]
    if (tableColumns.value?.length) {
      temp.unshift(formField)
    }
    return temp
  })

  // 删除表头列字段
  const delCol = (row: any) => {
    designColumns.value = designColumns.value.filter((item: any) => item.prop !== row.prop)
  }
  // 添加表头列
  const fieldSelectClick = (row: any, val: boolean) => {
    if (val) {
      // 先检查是否已存在
      const has = designColumns.value.some((item: any) => item.prop === row.prop)
      if (!has) {
        designStore.setDesignColumns(row, true)
      }
    } else {
      delCol(row)
    }
  }
  const headToolClick = (type: string) => {
    switch (type) {
      case 'del':
        // 清空
        designStore.setDesignColumns([])
        designStore.setDesignConfig({})
        designStore.setSelectComponent({})
        searchFormData.value = []
        break
      case 'eye':
        // 打开预览窗口
        const routeUrl = router.resolve({
          path: '/design/list/content/preview',
        })
        // 将数据存
        const previewData = {
          tableData: tableData.value,
          searchForm: searchFormData.value,
          dict: formDict.value
        }
        setStorage('formPreviewData', objToStringify(previewData))
        window.open(routeUrl.href, '_blank')
        break
      case 'json':
        // 生成脚本
        openAceEditDrawer({
          content: tableData.value,
          title: '可编辑修改或将已生成的脚本粘贴进来',
          callback: (content: Record<string, any> | string) => {
            if (typeof content === 'object') {
              designStore.setDesignColumns(content.columns)
              designStore.setDesignConfig(content.config)
            }
          }
        })
        break
      case 'vue':
        // 导出vue文件
        vueFileRef.value.open({data: tableData.value, type: 'list', search: searchFormData.value})
        break
      case 'save':
        // 保存
        saveData()
        break
    }
  }
  const editOpenDrawer = () => {
    openAceEditDrawer({
      content: designConfig.value.controlBtn,
      title: '操作按钮列表，可使用内置key=add/edit/del/export快速设置按钮',
      callback: (content: Record<string, any> | string) => {
        if (typeof content === 'object') {
          designConfig.value.controlBtn = content
        }
      }
    })
  }
  const openAceEditDrawer = (params: AceDrawerT) => {
    aceDrawerRef.value.open(params)
  }

  const rowClick = (column: any) => {
    designStore.setSelectComponent(column)
    // 切换到字段属性
    state.tabsName = 'first'
  }
  const searchFormClick = () => {
    if (!id) {
      ElMessage.error('请先保存设计的列表')
      return
    }
    router.push({
      path: '/design/form',
      query: {
        id: id,
        type: 'search',
        redirect: `/design/list?id=${id}`
      }
    })
  }
  const columnDrop = () => {
    const wrapperTr = container.value.querySelector(
      '.el-table__header-wrapper tr'
    )
    Sortable.create(wrapperTr, {
      animation: 180,
      delay: 0,
      onEnd: (evt: any) => {
        const oldItem = designColumns.value[evt.oldIndex]
        designColumns.value.splice(evt.oldIndex, 1)
        designColumns.value.splice(evt.newIndex, 0, oldItem)
        // 重染表格，否则点下面的设置对不上了
        state.refreshTable = false
        nextTick(() => {
          state.refreshTable = true
          nextTick(() => {
            columnDrop() // 拖完后拖不到了，再执行一下
          })
        })
      }
    })
  }
  // 数据相关
  const saveData = () => {
    const {formId, name, apiKey: {list, del} = {}} = designConfig.value
    if (!formId && (!list || !del)) {
      return ElMessage.error('请选择所属表单或配置接口url')
    }
    const params: any = {
      listData: objToStringify(tableData.value), // 列表数据
      data: objToStringify(searchFormData.value) || '{}', // 搜索表单数据，搜索设置不在这里修改
      source: formId,
      name: name || '未命名列表', // 表单名称，用于在显示所有已创建的表单列表里显示
      type: 2, // 1表单 2列表
      //dict: objToStringify(formDict.value) // 这里会存在表单修改了作为列表保存的字典时，列表不会自动更新
    }
    let apiKey = 'designSave'
    if (id) {
      // 编辑状态 当前记录id
      Object.assign(params, {id: id})
      apiKey = 'designEdit'
    } else {
      params.status = 1 // 添加时默认启用
    }
    state.loading = true
    getRequest(apiKey, params)
      .then(() => {
        ElMessage({
          message: '保存成功！',
          type: 'success'
        })
        router.push({path: '/design/list/list'})
        state.loading = false
      })
      .catch((res: any) => {
        ElMessage.error(res.message || '保存异常')
        state.loading = false
      })
  }

  const clearStore = () => {
    designStore.setSelectComponent({})
    designStore.setDesignColumns([])
    designStore.setDesignConfig({})
  }
  const getInit = () => {
    if (!id) {
      return
    }
    getInitData(id).then((data: any) => {
        // 列表数据
        const {columns, config} = data.tableData
        designColumns.value = columns
        if (!config.name) {
          config.name = data.name
        }
        designConfig.value = config
        // search form
        searchFormData.value = data.searchData
        if (config.formId) {
          // 根据选择的表单获取可供选择的表头
          getFormColumns(config.formId).then(({columns, dict}: any) => {
            tableColumns.value = columns
            //勾选默认表格字段
            const newColumns = [...columns, ...tableOtherColumns]
            const tableProps = new Set(designColumns.value.map((i: any) => i.prop)); //提取当前表格的所有表头prop
            columnsCheckList.value = newColumns.filter((i: any) => tableProps.has(i.prop)).map((i: any) => i.prop);
            formDict.value = dict
          })
        }
      }
    )
  }
  const autoBuildByFormId = (id: string | number) => {
    if (!id) {
      return
    }
    getFormColumns(Number(id)).then(({searchData, columns, name, dict}: any) => {
      const operate = [{
        label: "操作",
        prop: "operate",
        render: "buttons",
        buttons: [
          {
            key: "edit",
            props: {size: 'small'}
          },
          {
            key: "del",
            props: {size: 'small'}
          }]
      }]
      const newColumns = [...columns, ...operate]
      designStore.setDesignColumns(newColumns)
      searchFormData.value = searchData
      const config = {
        name: name,
        formId: Number(id),
        controlBtn: [{key: 'add'}, {key: 'del'}]
      }
      designStore.setDesignConfig(config)
      tableColumns.value = columns
      // 默认全部选上
      columnsCheckList.value = newColumns.map((item: any) => item.prop)
      formDict.value = dict
    })
  }
  // 数据相关结束
  onMounted(() => {
    nextTick(() => {
      columnDrop()
    })
    getInit()
    // 从表单列表点创建列表，带有当前表单id，一键创建表单时
    autoBuildByFormId(formId)
  })
  onUnmounted(() => {
    clearStore()
    searchFormData.value = []
  })
</script>
