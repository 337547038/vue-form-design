<!-- Created by 337547038  -->
<template>
  <el-input v-model="value" placeholder="请选择用户或输入用户名称">
    <template #append>
      <i class="icon-user"></i>
    </template>
  </el-input>
  <el-dialog title="用户选择" v-model="visible" :append-to-body="true">
    <div class="user-select-dialog"> </div>
  </el-dialog>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      modelValue?: string
      multiple?: boolean //是否多选
    }>(),
    {
      multiple: false
    }
  )

  const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()
  const visible = ref(false)
  const value = computed({
    get() {
      return props.modelValue
    },
    set(newVal: string) {
      emits('update:modelValue', newVal)
    }
  })
</script>
<style lang="scss">
  .iconfont-list {
    max-width: 500px;
    overflow-y: auto;
    ul {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      margin: 5px 10px;
      cursor: pointer;
      i {
        font-size: 24px;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
</style>
