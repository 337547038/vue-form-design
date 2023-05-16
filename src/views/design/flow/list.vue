<template>
  <div>
    <ak-list
      ref="tableListEl"
      requestUrl="designList"
      deleteUrl="designDelete"
      :searchData="searchData"
      :tableData="tableData"
      :beforeRequest="beforeRequest"
      ><template #sourceName="{ row }">
        <router-link :to="`/design/form?id=${row.source}`"
          >{{ row.sourceName }}/{{ row.source }}</router-link
        >
      </template></ak-list
    >
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  // const route = useRoute()
  const router = useRouter()
  const tableListEl = ref()
  const searchData = ref({
    list: [
      {
        type: 'input',
        control: {
          modelValue: '',
          placeholder: '请输入流程名称'
        },
        config: {},
        name: 'name',
        item: {
          label: '流程名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          appendToBody: true
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: ''
        },
        name: 'flow',
        item: {
          label: '流程分类'
        }
      },
      {
        type: 'button',
        control: {
          label: '查询',
          type: 'primary',
          key: 'submit'
        },
        config: {}
      },
      {
        type: 'button',
        control: {
          label: '重置',
          key: 'reset'
        },
        config: {}
      }
    ],
    form: {
      size: 'default'
    },
    config: {}
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '流程名称', prop: 'name' },
      { label: '流程表单', prop: 'sourceName' },
      {
        label: '分类',
        prop: 'category',
        config: {
          dictKey: 'flow'
        }
      },
      {
        label: '状态',
        prop: 'status',
        config: {
          dictKey: 'status',
          tagList: {
            0: 'info',
            1: 'success'
          }
        }
      },
      { label: '操作', prop: '__control' }
    ],
    config: {},
    controlBtn: [
      {
        label: '新增流程',
        type: 'primary',
        size: 'small',
        icon: 'plus',
        click: () => {
          router.push({ path: '/design/flow' })
        }
      },
      {
        label: '批量删除',
        key: 'del',
        type: 'danger',
        size: 'small',
        icon: 'delete'
      }
    ],
    operateBtn: [
      {
        label: '编辑',
        click: (row: any) => {
          router.push({ path: '/design/flow', query: { id: row.id } })
        }
      },
      { label: '删除', key: 'del' }
    ]
  })
  const beforeRequest = (params: any) => {
    params.type = 3 // 列表类型为3
    return params
  }
</script>
