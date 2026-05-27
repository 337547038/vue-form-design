<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <div
      v-for="(item,index) in designColumns"
      :key="index"
    >
      <div @click="testClick(item)" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import {storeToRefs} from "pinia";
  import {computed, onMounted} from "vue";
  import {useDesignListStore} from "@/store/list.ts";


  const designStore = useDesignListStore()
  const {designColumns, designConfig, selectComponent} = storeToRefs(designStore)
  const tableData = computed(() => {
    return {
      columns: designColumns.value,
      config: designConfig.value
    }
  })

  const testClick = () => {
    const a = {
      label: "操作",
      prop: "operate",
      render: "switch",
      config:
        {
          width: "100px"
        }
    }
    selectComponent.value = a
  }
  onMounted(() => {
    const opt = {
      columns: [
        {
          prop: "text",
          label: "文本",
          help: ""
        },
        {
          prop: "checkbox",
          label: "性别",
          help: ""
        },
        {
          label: "操作",
          prop: "operate",
          render: "buttons",
          buttons: [
            {
              key: "edit",
              props:
                {
                  type: "danger",
                  size: "small"
                }
            },
            {
              key: "del"
            }]
        }],
      config:
        {
          formId: 94,
          controlBtn: [
            {
              key: "add",
              props:
                {
                  size: "small"
                }
            },
            {
              key: "del"
            }]
        }
    }
    designStore.setDesignColumns(opt)
  })
</script>
