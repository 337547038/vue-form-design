<!-- Created by weiXin:337547038 -->
<template>
  <el-drawer
    v-model="state.visible"
    destroy-on-close
    :with-header="false"
    size="1200px"
  >
    <div class="flow-detail-drawer">
      <div class="header">
        <div class="face">
          <img
            v-if="userInfo.picture"
            style="width: 40px; height: 40px;border-radius: 50%;display: block"
            :src="userInfo.picture"
            alt=""
          >
          <i
            v-else
            class="icon-user"
          />
        </div>
        <div>
          <div class="name">
            {{ userInfo.userName }}
          </div>
          <el-tag>{{ postName }}审批中</el-tag>
        </div>
        <div class="button">
          <el-button
            type="success"
            @click="submitClick('ok')"
          >
            一键同意
          </el-button>
          <el-button
            type="danger"
            @click="submitClick('no')"
          >
            一键拒绝
          </el-button>
          <el-button
            type="primary"
            @click="submitClick('to')"
          >
            流转
          </el-button>
        </div>
      </div>
      <flow-tabs ref="flowTabsEl">
        <ak-form
          ref="formOptionsEl"
          :data="flowOptionsForm"
          submit-url="flowShenPi"
          :before="flowSubmitBefore"
          :after="flowSubmitAfter"
          @change="formChange"
        />
        <el-divider>申请信息</el-divider>
      </flow-tabs>
    </div>
  </el-drawer>
  <user-dialog
    ref="userDialogEl"
    v-model="userId"
    v-model:user-name="userName"
    @change="userSelectChange"
  />
</template>

<script setup lang="ts">
  import { ref, nextTick, reactive, computed, onMounted } from 'vue'
  import { getRequest } from '@/api'
  import { getStorage } from '@/utils'
  import { ElMessage } from 'element-plus'
  import FlowTabs from './tabs.vue'

  const flowTabsEl = ref()

  const userInfo = computed(() => {
    return getStorage('userInfo', true)
  })
  const state = reactive({
    visible: false,
    callback: '',
    obj: {}, // 当前流程相关数据
    loading: true
  })
  const open = (obj: any, callback: any) => {
    state.visible = true
    state.obj = obj
    state.callback = callback
    nextTick(() => {
      // getInitData(obj)
      flowTabsEl.value.initFlowForm(obj)
    })
  }
  const postName = ref()
  // 显示职位名称
  const getPostName = () => {
    getRequest('postDetail', { id: userInfo.value.postId })
        .then((res: any) => {
          postName.value = res.data.name
        })
  }

  const formOptionsEl = ref()

  const userId = ref()
  const userName = ref()
  // 一键同意拒绝
  const submitClick = (type: string) => {
    if (type === 'ok') {
      formOptionsEl.value.submit({ status: 1, content: '同意' })
    } else if (type === 'no') {
      formOptionsEl.value.submit({ status: 0, content: '拒绝' })
    } else if (type === 'to') {
      // 打开会员选择窗口
      userId.value = ''
      userName.value = ''
      nextTick(() => {
        userDialogEl.value.open()
      })
    }
  }

  // 流转
  const userDialogEl = ref()
  const userSelectChange = (obj: any) => {
    if (obj?.length) {
      console.log('obj', obj)
      const params = {
        id: state.obj?.id,
        userId: userId.value,
        userName: userName.value,
        nodeName: state.obj.currentNode
      }
      getRequest('flowToUser', params)
          .then((res: any) => {
            state.visible = false
            ElMessage.success(res.message)
            state.callback && state.callback()
          })
          .catch(() => {
          })
    } else {
      ElMessage.error('请选择用户')
    }
  }
  const flowOptionsForm = ref({
    list: [
      {
        type: 'divider',
        control: {},
        config: {},
        formItem: {
          label: '审批意见'
        }
      },
      {
        type: 'radio',
        control: {
          modelValue: '1',
          placeholder: '请选择常用审批意见'
        },
        options: [
          {
            label: '同意',
            value: 1
          },
          {
            label: '拒绝',
            value: 0
          }
        ],
        config: {
          optionsType: 0,
          span: 8
        },
        name: 'status',
        formItem: {
          label: '快选审批意见'
        }
      },
      {
        type: 'textarea',
        control: {
          modelValue: '同意'
        },
        config: {},
        name: 'content',
        formItem: {
          label: '审批意见',
          rules: [
            {
              required: true,
              message: '请输入审批意见',
              trigger: 'change'
            }
          ]
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: { submitCancel: [{ label: '提交审批', type: 'primary', key: 'submit' }] }
  })
  const flowSubmitBefore = (params: any) => {
    params.id = state.obj?.id
    return params
  }
  const flowSubmitAfter = (res: any, success: boolean) => {
    if (success) {
      state.visible = false
      state.callback && state.callback()
    }
  }
  const formChange = ({ name, value }) => {
    if (name === 'type') {
      formOptionsEl.value.setValue({ content: value === 1 ? '同意' : '拒绝' })
    }
  }

  onMounted(() => {
    getPostName()
  })
  defineExpose({ open })
</script>
<style lang="scss">
.flow-detail-drawer {
  .header {
    padding: 16px 24px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 20px;
    display: flex;

    .face {
      background: #f0f0f0;
      width: 40px;
      height: 40px;
      display: flex;
      border-radius: 50%;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      margin-right: 10px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .name {
      margin-bottom: 5px;
    }

    .button {
      flex: 2;
      text-align: center;
    }
  }

}
</style>
