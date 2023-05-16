<!-- Created by 337547038 发起流程 -->
<template>
  <div class="task-apply">
    <div class="item" v-for="(item, key) in list" :key="key">
      <h3>{{ category[key] || '未分组' }}</h3>
      <div class="list">
        <div v-for="li in item" :key="li.id" @click="click(li)">
          <i
            v-if="getIcon(li.icon, 0)"
            class="icon"
            :class="getIcon(li.icon, 0)"
            :style="{ background: getIcon(li.icon, 1) }"
          ></i>
          <span>{{ li.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed } from 'vue'
  import { getRequest } from '@/api'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  // 数据处理
  const list = ref({})
  const getIcon = (icon: string, index: number) => {
    if (icon) {
      const temp = icon.split(',')
      return temp[index]
    }
    return ''
  }
  const category = computed(() => {
    const storage = window.localStorage.getItem('akFormDict')
    let storageDict: { [key: string]: any } = {}
    if (storage) {
      storageDict = JSON.parse(storage)
    }
    return storageDict.flow || {}
  })
  const getListData = () => {
    const params = {
      type: 3
    }
    getRequest('designList', params).then((res: any) => {
      const result = res.data.list
      // 按分类分组
      const group: number[] = []
      result.forEach((item: any) => {
        if (!group.includes(item.category)) {
          group.push(item.category)
        }
      })
      group.forEach((item: number) => {
        list.value[item] = result.filter((fi: any) => {
          return fi.category === item
        })
      })
    })
  }
  const click = (obj: any) => {
    router.push({ path: '/task/apply/start', query: { flowId: obj.id } })
  }
  onMounted(() => {
    getListData()
  })
</script>
