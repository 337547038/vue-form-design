<template>
  <div class="login">
    <div class="main">
      <h3>后台管理系统</h3>
      <ak-form
        :after-submit="afterSubmit"
        :data="formData"
        submit-url="loginSubmit"
        :beforeSubmit="beforeSubmit"
      />
    </div>
  </div>
</template>
<route>
{ meta:{title:'登录',layout:'hidden',permissions:false} }
</route>
<script lang="ts" setup>
  import { ref, markRaw, nextTick } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import CodeCom from './components/code.vue'
  //import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  import { setStorage } from '@/utils'
  import { getRequest } from '@/api'
  import { flatToTree } from '@/utils/flatTree.ts'

  const useStore = useLayoutStore()
  const router = useRouter()
  const route = useRoute()
  const codeId = ref()
  const formData = ref({
    list: [
      {
        type: 'input',
        control: {
          prefixIcon: 'User',
          modelValue: 'admin',
          placeholder: '请输入登录账号'
        },
        config: {},
        name: 'userName',
        formItem: { label: '用户名', showLabel: true },
        customRules: [
          { type: 'required', message: '请输入登录账号', trigger: 'blur' }
        ]
      },
      {
        type: 'password',
        control: {
          prefixIcon: 'Lock',
          modelValue: '123456',
          placeholder: '请输入密码'
        },
        config: {},
        name: 'password',
        formItem: { label: '密码', showLabel: true },
        customRules: [
          { type: 'required', message: '请输入密码', trigger: 'blur' }
        ]
      },
      {
        type: 'component',
        control: {
          modelValue: '',
          placeholder: '请输入验证码',
          onFocus: (val: string) => {
            codeId.value = val
          }
        },
        config: { componentName: markRaw(CodeCom) },
        name: 'code',
        formItem: { label: '验证码', showLabel: true },
        customRules: [
          { type: 'required', message: '请输入验证码', trigger: 'blur' }
        ]
      },
      {
        type: 'button',
        control: { label: '登录', type: 'primary', key: 'submit' }
      }
    ],
    form: { size: 'default' },
    config: {}
  })
  const beforeSubmit = (params: any) => {
    params.codeId = codeId.value //添加验证码加密id
    return params
  }
  const afterSubmit = (type: string, res: any) => {
    if (type === 'success') {
      // 统一方法保存token
      useStore.setLoginInfo(res.data, true)
      // 获取权限菜单信息
      getNavList().then(() => {
        // 登录成功跳转
        const path = route.query.redirect ? route.query.redirect : '/'
        nextTick(() => {
          router.push({ path: path })
        })
      })
    }
  }
  const getNavList = () => {
    return new Promise(resolve => {
      getRequest('userMenuList', {
        query: { status: 1, navShow: 1 },
        pageInfo: { sort: 'sort asc' }
      }).then((res: any) => {
        const list = res.data.list || []
        const resources: any[] = [] // 提取所有path作为权限判断依据
        const menuList: any[] = [] // 过滤掉btn类型的菜单
        list.forEach((item: { [key: string]: any }) => {
          if (item.path) {
            resources.push(item.path)
          }
          if (item.type !== 2) {
            // 过滤按钮类型
            menuList.push(item)
          }
        })
        const navList = flatToTree(menuList)
        setStorage('formMenuList', navList, 0) // 用于提取完整的面包导航和供左侧栏使用
        setStorage('resources', resources, 0) // 用于权限判断
        resolve({})
      })
    })
  }
</script>

<style lang="scss" scoped>
  .login {
    background: url(../../assets/img/login-bg.png) no-repeat center center;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main {
    width: 400px;
    padding: 25px;
    border-radius: 6px;
    background: #fff;

    h3 {
      font-size: 18px;
      text-align: center;
      font-weight: 400;
    }
  }

  .form-btn {
  }

  :deep(.el-button) {
    width: 100%;
  }
</style>
