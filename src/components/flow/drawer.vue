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
                v-for="item in branchLen - 1"
                :key="item"
                :value="item"
              >
                {{ item }}
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div>条件规则</div>
            <el-input
              v-model="state.content"
              type="textarea"
              :rows="3"
            />
          </el-form-item>
          <el-form-item>
            <div>备注</div>
            <el-input
              v-model="state.remark"
            />
          </el-form-item>
          <div class="tip">
            可使用运算符+-*/()&lt;&gt;=and or符号编写条件规则，<br>
            如请假流程表单day为请假天数，当条件规则设置为 day>2
            即表示请假天假大于2天时，该条件成立
          </div>
        </template>
        <template v-else>
          <el-form-item>
            <el-radio-group
              v-model="state.userType"
              @change="userTypeChange"
            >
              <el-radio
                v-for="(item, key) in userTypeList"
                :key="key"
                :value="key"
              >
                {{ item }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <template v-if="['1'].includes(state.userType)">
            <el-form-item>
              <el-button
                type="primary"
                @click="selectClick"
              >
                选择/修改{{ userTypeList[state.userType] }}
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-tag
                v-for="(item, index) in userTagList"
                :key="item"
                style="margin-right: 5px"
                closable
                @close="tagClose(index as number)"
              >
                {{ item }}
              </el-tag>
            </el-form-item>
          </template>
          <el-form-item label="审批方式">
            <el-radio-group v-model="state.flowType">
              <el-radio
                value="1"
                disabled
              >
                多人审批，一个通过或拒绝
              </el-radio>
              <el-radio
                value="2"
                disabled
              >
                多人审批，通过只需一个，拒绝需全员
              </el-radio>
              <el-radio
                value="3"
                disabled
              >
                多人审批，采用依次审批
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <div class="tip">
            <p>提示：</p>
            <p>· 审批人为空时，自动跳过</p>
            <p>· 若审批人离职，会自动转交给审批人的上级代为处理</p>
          </div>
        </template>
        <el-form-item>
          <el-button @click="visible = false">
            取消
          </el-button>
          <el-button
            type="primary"
            @click="confirmClick"
          >
            确认
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
  import { ref, reactive, computed } from 'vue'
  import type { NodeList } from './types'
  import { userTypeList } from './dict'

  const emits = defineEmits<{
    (e: 'userSelect', obj: any, callback: any): void
  }>()
  const visible = ref(false)
  const state = reactive({
    userType: '', // 1 指定成员 2 上级主管 3 发起人自选
    flowType: '', // 审批方式
    content: '', // 显示的内容名称
    priority: 1,
    checkedUserId: '', // 当前审批人id
    remark: '' // 节点备注信息
  })
  const nodeData = ref({})
  // const branchIndex = ref(0) // 条件分支时，当前为第几个
  const branchLen = ref(1)
  const userTypeChange = () => {
    state.content = ''
    state.checkedUserId = ''
  }
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
    emits('userSelect', state, ({ userId, userName }) => {
      state.content = userName
      state.checkedUserId = userId
    })
  }
  const confirmClick = () => {
    visible.value = false
    // 将数据合并到当前节点
    let content = state.content
    if (state.userType === '2' || state.userType === '3') {
      // 主管和自选时，同时设置显示内容
      content = userTypeList[state.userType]
      // 清空原内容和id
      state.checkedUserId = ''
    }
    const newObj = {
      userType: state.userType,
      flowType: state.flowType,
      content: content,
      priority: state.priority,
      checkedUserId: state.checkedUserId,
      remark: state.remark
    }
    Object.assign(nodeData.value, newObj)
    console.log('confirm', nodeData.value)
  }
  const open = (data: NodeList, index: number, length: number) => {
    state.userType = '' // 重置
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
    state.checkedUserId = data.checkedUserId || ''
    branchLen.value = length
  }
  defineExpose({
    open
  })
</script>
