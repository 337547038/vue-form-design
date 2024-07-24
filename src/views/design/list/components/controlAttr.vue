<template>
  <div class="sidebar-tools">
    <el-form size="small" class="form">
      <el-tabs v-model="state.tabsName">
        <el-tab-pane label="字段属性" name="first">
          <div v-show="Object.keys(state.attrObj).length">
            <div class="h3">
              <h3>{{ state.attrObj?.label }}</h3>
              个性化设置
            </div>
            <template v-if="state.attrObj.prop === '__control'">
              <el-form-item>
                <el-button @click="editOpenDrawer('operateBtn')"
                  >操作按钮设置
                </el-button>
              </el-form-item>
            </template>
            <template v-else>
              <el-form-item label="时间格式化">
                <el-select
                  v-model="state.config.formatter"
                  @change="objectMerge"
                >
                  <el-option
                    label="{y}-{m}-{d} {h}:{i}:{s}"
                    value="{y}-{m}-{d} {h}:{i}:{s}"
                  />
                  <el-option label="{y}-{m}-{d}" value="{y}-{m}-{d}" />
                  <el-option label="{h}:{i}:{s}" value="{h}:{i}:{s}" />
                </el-select>
              </el-form-item>
              <el-form-item label="值匹配字典">
                <el-input
                  placeholder="字典对应的key"
                  v-model="state.config.dictKey"
                  @change="objectMerge"
                />
              </el-form-item>
              <el-form-item label="展示图片形式">
                <el-input
                  placeholder="请输入图片宽度"
                  v-model="state.config.imgWidth"
                  @change="objectMerge"
                />
              </el-form-item>
              <el-form-item
                v-for="(tag, index) in state.tagList"
                :key="index"
                class="table-tag"
              >
                <el-input
                  placeholder="值对应的类型"
                  v-model="tag.value"
                  @change="configChange"
                >
                  <template #append>
                    <el-select
                      style="width: 80px"
                      v-model="tag.type"
                      @change="configChange"
                    >
                      <el-option label="success" value="success" />
                      <el-option label="info" value="info" />
                      <el-option label="warning" value="warning" />
                      <el-option label="danger" value="danger" />
                    </el-select>
                  </template>
                </el-input>
                <i class="icon-del" @click="delTagOption(index as number)"></i>
              </el-form-item>
              <el-form-item>
                <el-button @click="tagAdd">新增Tag标签显示</el-button>
              </el-form-item>
              <el-form-item>
                <el-button @click="editAttr"
                  >编辑{{ state.attrObj?.label }}属性
                </el-button>
              </el-form-item>
            </template>
          </div>
        </el-tab-pane>
        <el-tab-pane label="数据列表配置" name="second">
          <el-form-item
            v-for="(item, index) in tableListAttr.filter(item => !item.hide)"
            :label="item.label"
            :key="index"
          >
            <el-select
              v-if="item.type === 'select'"
              v-model="item.value"
              :placeholder="item.placeholder"
              :clearable="true"
              @change="tableListAttrChange(item)"
            >
              <el-option
                :label="opt.label || opt.name"
                v-for="opt in item.options"
                :key="opt.label || opt.name"
                :value="formatNumber(opt.value ?? opt.id)"
              />
            </el-select>
            <el-switch
              v-else-if="item.type === 'switch'"
              v-model="item.value"
              @input="tableListAttrChange(item, $event)"
            />
            <el-input
              v-else
              v-model="item.value"
              :placeholder="item.placeholder"
              @input="tableListAttrChange(item)"
            />
          </el-form-item>
          <el-form-item
            v-show="state.tableData.treeData?.show"
            class="event-btn"
          >
            <el-button @click="editOpenDrawer('tree')"
              >编辑侧栏树属性
            </el-button>
            <el-button @click="editOpenDrawer('treeBefore')"
              >before事件
            </el-button>
            <el-button @click="editOpenDrawer('treeAfter')"
              >after事件
            </el-button>
          </el-form-item>
          <el-form-item class="event-btn">
            <el-button @click="editOpenDrawer('tableConfig')"
              >编辑表格属性
            </el-button>
            <el-button @click="editOpenDrawer('editDict')"
              >设置数据字典
            </el-button>
          </el-form-item>
          <div class="h3"><h3>接口数据事件</h3></div>
          <el-form-item label="列表数据请求URL">
            <el-input
              placeholder="一般不需要填写，使用默认值"
              v-model="state.tableData.apiKey!.list"
            />
          </el-form-item>
          <el-form-item label="删除列表数据URL">
            <el-input
              placeholder="一般不需要填写，使用默认值"
              v-model="state.tableData.apiKey.del"
            />
          </el-form-item>
          <el-form-item label="编辑保存状态URL">
            <el-input
              placeholder="一般不需要填写，使用默认值"
              v-model="state.tableData.apiKey.edit"
            />
          </el-form-item>
          <el-form-item label="导出列表URL">
            <el-input
              placeholder="一般不需要填写，使用默认值"
              v-model="state.tableData.apiKey.export"
            />
          </el-form-item>
          <el-form-item label="主键">
            <el-input placeholder="列表主键" v-model="state.tableData.pk" />
          </el-form-item>
          <el-form-item class="event-btn">
            <el-button @click="editOpenDrawer('before')">before事件 </el-button>
            <el-button @click="editOpenDrawer('after')">after事件 </el-button>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import { formatNumber } from '@/utils/design'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
    }>(),
    {}
  )
  const config = defineModel('config')

  const state = reactive({
    tabsName: 'first',
    formId: '',
    formList: [],
    name: ''
  })
  const tableListAttr = computed(() => {
    return [
      {
        label: '所属表单',
        placeholder: '请选择所属表单',
        value: parseInt(state.formId) || '',
        key: 'formId',
        type: 'select',
        options: state.formList,
        clearable: true
      },
      {
        label: '数据列表名称',
        placeholder: '保存的数据列表名称',
        value: state.name,
        key: 'name'
      },
      {
        label: '数据添加编辑打开方式',
        placeholder: '默认新页面打开',
        value: config.value.openType,
        type: 'select',
        options: [
          { label: '弹窗', value: 'dialog' },
          { label: '新页面', value: 'page' }
        ],
        key: 'openType',
        clearable: true
        //hide: !state.formId
      },
      {
        label: '窗口宽度',
        placeholder: '弹窗宽度',
        value: config.value.dialogWidth,
        type: 'input',
        key: 'dialogWidth',
        hide: config.value.openType !== 'dialog'
      },
      {
        label: '横向滚动固定在底部',
        value: config.value.fixedBottomScroll,
        key: 'fixedBottomScroll',
        type: 'select',
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '列显示隐藏设置',
        value: config.value.columnsSetting,
        key: 'columnsSetting',
        type: 'select',
        placeholder: '默认开启',
        options: [
          {
            label: '启用',
            value: true
          },
          { label: '禁用', value: false }
        ],
        clearable: true
      },
      {
        label: '可折叠查询表单',
        value: config.value.expand,
        key: 'expand',
        type: 'switch'
      },
      {
        label: '查询跳转页面',
        value: config.value.searchJump,
        key: 'searchJump',
        type: 'switch'
      },
      {
        label: '操作列按钮下拉',
        value: config.value.operateDropdown,
        key: 'operateDropdown',
        type: 'input',
        placeholder: '大于设定个数的以下拉形式显示'
      },
      {
        label: '分页设置',
        value: config.value.pageSize,
        key: 'pageSize',
        type: 'input',
        placeholder: '每页分多少条'
      },
      {
        label: '查询排序',
        value: config.value.orderSort,
        key: 'orderSort',
        type: 'input',
        placeholder: '查询排序，id desc'
      }
      /*{
        label: '开启侧栏树',
        value: state.tableData.treeData?.show,
        key: 'tree',
        type: 'switch'
      }*/
    ]
  })

  const tableListAttrChange = (obj: any, val?: any) => {
    /*if (obj.key === 'tree') {
      if (!state.tableData.treeData) {
        state.tableData.treeData = {}
      }
      state.tableData.treeData.show = val
      return
    }
    if (obj.path === 'config') {
      state.tableData.config[obj.key] = obj.value
    } else {
      state[obj.key] = obj.value
    }
    if (obj.key === 'formId') {
      // 列表数据源选择时，需查当前表单所有字段
      if (!val && state.tableData.config?.openType === 'dialog') {
        // 没有选数据源时，将数据添加编辑打开方式改为默认，直接删除属性
        delete state.tableData.config.openType
      }
      getFormField(obj.value)
    }*/
  }
  const editOpenDrawer = () => {}
</script>
<style scoped lang="scss"></style>
