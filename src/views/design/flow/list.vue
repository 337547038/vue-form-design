<template>
  <div>
    <ak-list
      ref="tableListEl"
      :api-key="{list:'designList',del:'designDelete'}"
      :search-data="searchData"
      :data="tableData"
      :query="{ type: 3 }"
    >
      <template #source="{ row, dict }">
        <router-link
          :to="`/design/form?id=${row.source}&redirect=/design/list/list`"
        >
          {{ dict.formName && dict.formName[row.source] }}
        </router-link>
      </template>
    </ak-list>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
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
        formItem: {
          label: '流程名称'
        }
      },
      {
        type: 'select',
        control: {
          modelValue: '',
          style: { width: '100px' }
        },
        options: [],
        config: {
          optionsType: 2,
          optionsFun: 'sys-flow'
        },
        name: 'flow',
        formItem: {
          label: '流程分类'
        }
      }
    ],
    form: {
      size: 'default'
    },
    config: { submitCancel: true }
  })
  const tableData = ref({
    columns: [
      { label: '多选', type: 'selection' },
      { label: '流程名称', prop: 'name' },
      { label: '流程表单', prop: 'source' },
      {
        label: '分类',
        prop: 'category',
        render: 'tag',
        replaceValue: 'sys-flow'
      },
      {
        label: '状态',
        prop: 'status',
        render: 'tag',
        replaceValue: 'sys-status',
        custom: {
          0: 'info',
          1: 'success'
        }
      },
      { label: '操作', prop: '__control', render: 'buttons', buttons: [
          {
            key: 'edit',
            label: '编辑',
            click: (row: any) => {
              router.push({ path: '/design/flow', query: { id: row.id } })
            }
          },
          { label: '删除', key: 'del' }
        ] },
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
    ]
  })
</script>
