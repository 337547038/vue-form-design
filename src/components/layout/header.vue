<template>
  <el-icon
    class="collapse-icon"
    @click="toolClick('collapse')"
  >
    <Fold v-if="!collapse" />
    <Expand v-else />
  </el-icon>
  <el-breadcrumb
    separator="/"
    class="breadcrumb"
  >
    <el-breadcrumb-item :to="{ path: '/' } as string">
      首页
    </el-breadcrumb-item>
    <template
      v-for="(item, index) in breadcrumb"
      :key="index"
    >
      <el-breadcrumb-item
        v-if="item.path"
        :to="{ path: item.path } as string"
      >
        {{ item.label || item.name }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else>
        {{
          item.label || item.name
        }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
  <div class="comm-header-tool">
    <el-icon
      title="刷新页面"
      @click="toolClick('refresh')"
    >
      <RefreshRight />
    </el-icon>
    <el-icon title="全屏">
      <FullScreen @click="toolClick('fullScreen')" />
    </el-icon>
  </div>
  <div class="header-right">
    <el-dropdown>
      <div
        class="header-avatar"
        style="cursor: pointer"
      >
        <el-avatar
          class="avatar"
          size="small"
          shape="circle"
          :src="user.avatar"
        />
        <span class="name">{{ user.name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <el-icon><User /></el-icon>
            <span class="title">个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <el-icon><Setting /></el-icon>
            <span class="title">设置</span>
          </el-dropdown-item>
          <el-dropdown-item @click="logout">
            <el-icon><CircleClose /></el-icon>
            <span class="title">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useLayoutStore } from '@/store/layout'
  import { useRouter } from 'vue-router'

  const store = useLayoutStore()
  const router = useRouter()
  const breadcrumb = computed(() => {
    return store?.breadcrumb
  })
  const collapse = computed(() => {
    return store?.collapseMenu
  })
  const emits = defineEmits<{
    (e: 'click', type: string): void
  }>()
  const user = ref({
    name: 'admin',
    avatar: ''
  })
  const toolClick = (type: string) => {
    if (type === 'collapse') {
      store.setCollapseMenu(!collapse.value)
    }
    emits('click', type)
  }
  const logout = () => {
    store.logout(router)
  }
</script>
<style lang="scss">
  .header-avatar {
    display: flex;
    align-items: center;
    .avatar,
    .name {
      align-self: center;
    }
    .avatar {
      margin-right: 8px;
    }
    .name {
      font-weight: 500;
    }
  }
  .avatar-menu {
    width: 150px;
    .title {
      margin-left: 10px;
    }
    li {
      height: 35px;
      line-height: 35px;
    }
  }
</style>
