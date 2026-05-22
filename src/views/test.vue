<template>
  <div>
    <el-form>
      <el-form-item
        v-for="(item,index) in attrList"
        :key="item.key"
        :label="item.label"
      >
        <el-switch
          v-model="item.value"
          @change="controlChange(item.key,$event)"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  import {computed, ref} from "vue";

  const display = ref(false)
  const isSlot = ref(false)
  const type = ref('select')
  const controlChange = (key, val) => {
    if (key === 'a') {
      display.value = val
    } else {
      isSlot.value = val
      type.value = val ? 'slot' : 'select'
    }
  }
  const attrList = computed(() => {
    const temp = [
      {
        label: 'label1',
        value: display.value,
        vHide: ['slot'],
        key: 'a'
      },
      {
        label: 'label2',
        value: isSlot.value,
        key: 'b'
      }
    ]
    return temp.filter((item: any) => {
      let hasFilter = true
      if (item.vHide) {
        hasFilter = !item.vHide.includes(type.value)
      }
      return hasFilter
    })
  })
</script>