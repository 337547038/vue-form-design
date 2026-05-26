<!-- Created by weiXin:337547038 -->
<template>
  <div>
    <el-form>
      <el-form-item
        v-for="item in list"
        :key="item.path"
        :label="item.label"
      >
        <el-select
          v-if="item.type==='select'"
          :model-value="item.value"
          :placeholder="item.placeholder"
          :multiple="item.multiple"
          @change="propertyChange(item.path,$event)"
        >
          <el-option
            v-for="(opt,index) in item.options"
            :key="index"
            :label="opt.label"
            :value="opt.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
  const list = [{
    label: '列显示隐藏设置',
    key: 'columnsSetting',
    //value: dc.columnsSetting ?? true,
    value: true,
    type: 'select',
    placeholder: '默认开启',
    options: [
      {
        label: '启用',
        value: true
      },
      {label: '禁用', value: false}
    ],
    clearable: true
  }]
  const propertyChange = () => {
    
  }
</script>
