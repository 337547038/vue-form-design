<template>
  <el-dialog
    v-model="visible"
    title="作为列表字典保存"
    width="600px"
    append-to-body
  >
    <div
      v-loading="loading"
      class="content"
    >
      <div v-if="optionsList?.length">
        <p>当前字典名称：form-{{ selectComponent.name }}</p>
        <pre>{{ optionsList }}</pre>
      </div>
      <p v-else>
        {{ tips }}
      </p>
    </div>
    <template #footer>
      <el-button
        type="primary"
        @click="confirmClick"
      >
        确定
      </el-button>
      <el-button
        v-if="canUpdate"
        type="primary"
        @click="updateClick"
      >
        获取/更新
      </el-button>
      <el-button
        v-if="canDel"
        type="warning"
        @click="delClick"
      >
        删除
      </el-button>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
  import {computed, ref} from 'vue'
  import {getRemoteMethod} from "@/components/form/utils";
  import {storeToRefs} from "pinia";
  import {useDesignFormStore} from "@/store/form";

  const designStore = useDesignFormStore()

  const loading = ref(false)
  const tips = ref('')
  const optionsList = ref([])
  const canUpdate = ref(false)
  const visible = ref(false)
  const {selectComponent, formOptionDict} = storeToRefs(designStore)

  const canDel = computed(() => {
    return formOptionDict.value[selectComponent.value.name]
  })
  const open = () => {
    visible.value = true
    const {optionsType, options} = selectComponent.value
    canUpdate.value = optionsType === 1 //从接口获取的数据才能更新
    if (optionsType === 0) {
      //静态数据
      if (options.length) {
        optionsList.value = options
      } else {
        tips.value = '当前使用静态固定选项，请先添加'
      }
    } else if (optionsType === 1) {
      //数据源时，先获取
      updateClick()
    }
  }
  const confirmClick = () => {
    designStore.setFormOptionDict(`form-${selectComponent.value.name}`, optionsList.value)
    visible.value = false
  }
  const updateClick = () => {
    loading.value = true
    getRemoteMethod(designStore.selectComponent, (opt) => {
      const {label = 'label', value = 'value'} = selectComponent.value
      loading.value = false
      if (opt?.length) {
        optionsList.value = opt.reduce((acc: any, item: any) => {
          acc.push({
            label: item[label],
            value: item[value]
          });
          return acc;
        }, []);
      } else {
        tips.value = '数据异常:' + opt
      }
    })
  }
  const delClick = () => {
    if (canDel.value) {
      delete formOptionDict.value[selectComponent.value.name]
      optionsList.value = []
      tips.value = '已删除'
    }
    visible.value = false
  }
  defineExpose({open})
</script>
<style scoped lang="scss">

</style>