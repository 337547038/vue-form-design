<template>
  <div class="login">
    <div class="main">
      <h3>后台管理系统</h3>
      <ak-form
        ref="formEl"
        submit-url="loginSubmit"
        :after="afterSubmit"
        :data="formData"
        :before="beforeSubmit"
      />
    </div>
  </div>
</template>
<route>
{ meta:{title:'登录',layout:'hidden',permissions:false} }
</route>
<script lang="ts" setup>
  import { ref, markRaw, nextTick, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import CodeCom from './components/code.vue'
  // import { ElMessage } from 'element-plus'
  import { useLayoutStore } from '@/store/layout'
  import { setStorage } from '@/utils'
  import { getRequest } from '@/api'
  import { flatToTree } from '@/utils/flatTree.ts'

  const formEl = ref()
  const useStore = useLayoutStore()
  const router = useRouter()
  const route = useRoute()
  const codeId = ref()
  const refreshKey = ref()
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
        formItem: { label: '用户名', hideLabel: true },
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
        formItem: { label: '密码', hideLabel: true },
        customRules: [
          { type: 'required', message: '请输入密码', trigger: 'blur' }
        ]
      },
      {
        type: 'component',
        control: {
          modelValue: '',
          placeholder: '请输入验证码',
          onFocus: (val: string, refreshFn: any) => {
            codeId.value = val
            refreshKey.value = refreshFn
          }
        },
        config: { componentName: markRaw(CodeCom) },
        name: 'code',
        formItem: { label: '验证码', hideLabel: true },
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
    params.codeId = codeId.value // 添加验证码加密id
    return params
  }
  const afterSubmit = (data: any, success: boolean) => {
    if (success) {
      // 统一方法保存token
      useStore.setLoginInfo(data, true)
      // 获取权限菜单信息
      getNavList().then(() => {
        // 登录成功跳转
        const path = route.query.redirect ? route.query.redirect : '/'
        nextTick(() => {
          router.push({ path: path })
        })
      })
    } else {
      // 刷新验证码，执行获取焦点时提供的方法用于刷新验证码
      refreshKey.value && refreshKey.value()
    }
  }
  const getNavList = () => {
    return new Promise((resolve) => {
      getRequest('userMenuList', {
        query: { status: 1, navShow: 1 },
        extend: { sort: 'sort asc' }
      }).then((res: any) => {
        const list = res.data?.list || []
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

  // 调试 todo
  onMounted(() => {
    /* const data = {
      nickName: '管理员',
      roleId: '1',
      departmentId: 2,
      ip: '0:0:0:0:0:0:0:1',
      loginTimer: 85,
      remark: '',
      postId: 0,
      userName: 'admin',
      lastLoginTime: '2024-07-14 12:01:48',
      phone: '13800138000',
      id: 1,
      status: 1,
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzIxMDQzNTM3fQ.zEux8csj_2VeDqVeOCUHwufERucjSuln31IMGQ8-o88',
      refreshToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwiZXhwIjoxNzIxMDcyMzM3fQ.TbTSkFHTx08cbfTKGLtpBVPaHsgjF4wXkJNRdcwgm8o',
      expire_time: 28800000
    }
    afterSubmit('success', data) */
  })
</script>

<style lang="scss" scoped>
  .login {
    background: url(../../assets/img/login-bg.png) no-repeat center center /
      100% 100%;
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
