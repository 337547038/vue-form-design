<!-- Created by 337547038  -->
<template>
  <el-drawer
    v-model="visible"
    direction="rtl"
    title="编辑节点"
    size="540px"
    modal-class="flow-modal-class"
    :append-to-body="true"
  >
    <div class="flow-drawer">
      <el-form>
        <template v-if="nodeData.nodeType === 5">
          <el-form-item label="优先级">
            <el-select v-model="state.priority">
              <el-option
                :value="item"
                v-for="item in branchLen - 1"
                :key="item"
                >{{ item }}</el-option
              >
            </el-select>
          </el-form-item>
          <el-form-item>
            <div>条件规则</div>
            <el-input type="textarea" rows="5" v-model="state.content" />
          </el-form-item>
          <div class="tip">
            可使用运算符+-*/()&lt;&gt;=&&||符号编写条件规则，$代表当前流程表单所有值，如$.name即为流程表单输入字段名称为name的值。<br />
            如请假流程表单day为请假天数，当条件规则设置为 $.day>2
            即表示请假天假大于2天时，该条件成立
          </div>
        </template>
        <template v-else>
          <el-form-item>
            <el-radio-group v-model="state.userType">
              <el-radio
                v-for="(item, key) in userTypeList"
                :label="key"
                :key="key"
                >{{ item }}</el-radio
              >
            </el-radio-group>
          </el-form-item>
          <template v-if="['1', '5'].includes(state.userType)">
            <el-form-item>
              <el-button type="primary" @click="selectClick"
                >选择/修改{{ userTypeList[state.userType] }}</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-tag
                style="margin-right: 5px"
                v-for="(item, index) in userTagList"
                :key="item"
                closable
                @close="tagClose(index as number)"
              >
                {{ item }}
              </el-tag>
            </el-form-item>
          </template>
          <el-form-item label="审批方式">
            <el-radio-group v-model="state.flowType">
              <el-radio label="1">多人审批，采用依次审批</el-radio>
              <el-radio label="2">多人审批，通过只需一个，拒绝需全员</el-radio>
              <el-radio label="3">多人审批，一个通过或拒绝</el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="tip">
            <p>提示：</p>
            <p>· 审批人为空时，自动跳过</p>
            <p>· 若审批人离职，会自动转交给审批人的上级代为处理</p>
          </div>
        </template>
        <el-form-item>
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" @click="confirmClick">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>
  <user-dialog v-model="state.content" ref="userDialogEl" />
</template>

<script lang="ts" setup>
  import { ref, reactive, computed } from 'vue'
  import type { NodeList } from '../types'
  import { userTypeList } from './dict'
  // const emits = defineEmits<{
  //   (e: 'confirm', val: any): void
  // }>()
  const userDialogEl = ref()
  const visible = ref(false)
  const state = reactive({
    userType: '',
    flowType: '', // 审批方式
    content: '',
    priority: 1
  })
  const nodeData = ref({})
  //const branchIndex = ref(0) // 条件分支时，当前为第几个
  const branchLen = ref(1)
  // 打开成员或系统角色选择弹窗
  const userTagList = computed(() => {
    if (state.content && ['1', '5'].includes(state.userType)) {
      return state.content.split(',')
    }
    return []
  })
  const tagClose = (index: number) => {
    const list = state.content.split(',')
    list.splice(index, 1)
    state.content = list.join(',')
  }
  const selectClick = () => {
    userDialogEl.value.open()
  }
  const confirmClick = () => {
    visible.value = false
    // 将数据合并到当前节点
    const newObj = {
      userType: state.userType,
      flowType: state.flowType,
      content: state.content,
      priority: state.priority
    }
    Object.assign(nodeData.value, newObj)
  }
  const open = (data: NodeList, index: number, length: number) => {
    visible.value = true
    nodeData.value = data
    if (data.nodeType === 5) {
      // 条件
      state.priority = data.priority || 0
    } else {
      // 其他
      state.userType = data.userType || '1'
      state.flowType = data.flowType || '1'
    }
    state.content = data.content || ''
    branchLen.value = length
  }
  defineExpose({
    open
  })
</script>
