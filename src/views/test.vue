<template>
  <div>
    <TableList :data="data" :api-key="{ edit: '/edit' }" pk="id">
      <template #slotName="scope"> slot:{{ scope.value }} </template>
    </TableList>
  </div>
</template>
<route>
{meta:{
layout:'hidden'}}
</route>
<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import TableList from '@/components/table/index.vue'
  const data = ref({
    columns: [
      { label: '勾选', type: 'selection' },
      { prop: 'id', label: 'ID', width: '60px' },
      { prop: 'name', label: '名称', width: '150px' },
      { prop: 'slotName', label: '自定义插槽', width: 150 },
      {
        prop: 'switch',
        label: 'switch',
        render: 'switch',
        config: {
          activeText: '启用',
          inactiveText: '禁用',
          activeValue: '1',
          inactiveValue: '0',
          inlinePrompt: true
        }
      },
      { prop: 'image', label: 'image', render: 'image' },
      {
        prop: 'tag',
        label: 'tag',
        render: 'tag',
        config: { replaceValue: { 0: '男' }, custom: { 0: 'danger' } }
      },
      { prop: 'link', label: 'link', render: 'link' },
      {
        prop: 'datetime',
        label: 'datetime',
        render: 'datetime'
      },
      {
        prop: 'date',
        label: 'date',
        render: 'date'
        //config: { timeFormat: '{y}-{m}-{d} {h}:{i}:{s}' }
      },
      {
        prop: 'operate',
        label: 'operate',
        render: 'buttons',
        config: {
          dropdown: 5,
          buttons: [
            { key: 'edit' },
            { key: 'del' },
            { label: '查看', type: 'primary' }
          ]
        }
      }
    ],
    config: {},
    apiKey: {
      edit: '/mock/content/edit',
      list: '/mock/content/list',
      del: '/mock/content/del',
      export: '/mock/content/export'
    },
    events: {
      //事件开始前，这里可根据不同的type对请求的参数进行修改，return false阻止事件
      // type=switchChange列表switch切换 | getData获取列表数据 | del删除 | search条件筛选
      before: ({ type, params }) => {
        console.log(type)
        console.log(params)
        return params //可将修改后的值返回去
      },
      after: (type: string, result: any, isSuccess: boolean) => {
        console.log('after', type)
        // type事件类型，同before。result请求返回结果,isSuccess成功或失败
        // 这里可对result的值修改后返回
        return result
      }
    },
    controlBtn: [
      { key: 'add' },
      { key: 'edit' },
      { key: 'del' },
      { key: 'export' },
      { name: 'import', label: '导入', type: 'primary' }
    ]
  })
</script>
