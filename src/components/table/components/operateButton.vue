<template>
  <div class="operate-button">
    <template
      v-for="(btn, index) in getOperateButton()"
      :key="index"
    >
      <el-popconfirm
        v-if="btn.render === 'confirm'"
        v-bind="btn.popConfirm"
        @confirm="btnClick(btn)"
      >
        <template #reference>
          <div>
            <table-button
              :btn="btn"
              :row="row"
              :position="position"
            />
          </div>
        </template>
      </el-popconfirm>
      <table-button
        v-else
        :btn="btn"
        :row="row"
        :position="position"
        @click="btnClick(btn)"
      />
    </template>
    <el-dropdown v-if="dropdown && getOperateButton(true)?.length > dropdown">
      <div class="el-dropdown-link">
        更多
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </div>
      <template #dropdown>
        <div>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(btn, index) in getOperateButton(true)"
              :key="index"
              @click="dropdownBtnClick(btn)"
            >
              <table-button
                type="text"
                :btn="btn"
                :row="row"
                :position="position"
              />
            </el-dropdown-item>
          </el-dropdown-menu>
        </div>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
  import type { Button } from '@/types/table'
  import TableButton from './button.vue'
  import { ElMessageBox } from 'element-plus'

  const props = withDefaults(
    defineProps<{
      row: any // 表格右侧是当前行数据，表格上面按钮时为勾选中的行
      buttons: Button[]
      position?: string // 位置
      dropdown?: number // 按钮最大显示个数，超出以下拉形式展示
    }>(),
    {
      row: () => {
        return {}
      }
    }
  )
  const emits = defineEmits<{
    (e: 'click', key: string): void
  }>()

  // 按钮事件规则，当设置了自定义click事件时，当return false时可阻止默认事件
  const btnClick = (btn: Button) => {
    let clickEventResult: any = true
    if (btn.click && typeof btn.click === 'function') {
      clickEventResult = btn.click(props.row)
    }
    // 只有系统预设的add,edit,detail,del才有默认事件
    if (clickEventResult === false) {
      return false
    }
    if (
      btn.key
      && ['add', 'del', 'edit', 'detail', 'export'].includes(btn.key)
    ) {
      emits('click', btn.key)
    }
  }
  const dropdownBtnClick = (btn: Button) => {
    if (btn.render === 'confirm') {
      // 下拉菜单再放el-popconfirm时会导致弹出窗定位不准。这里改用messageBox
      const { title, confirmButtonText, cancelButtonText } = btn.popConfirm
      ElMessageBox({
        title: '温馨提示',
        message: title,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        callback: (action: Action) => {
          if (action === 'confirm') {
            btnClick(btn)
          }
        }
      })
    } else {
      btnClick(btn)
    }
  }

  const getOperateButton = (more?: boolean) => {
    if (more && props.dropdown) {
      // 用于下拉部分
      return props.buttons.slice(props.dropdown)
    } else {
      if (props?.dropdown) {
        // 截取前面
        return props.buttons.slice(0, props.dropdown)
      } else {
        return props.buttons
      }
    }
  }

  // 操作按钮处理结束
</script>
<style scoped lang="scss">
  .operate-button {
    display: flex;
    :deep(.el-button),
    div {
      margin-right: 10px;
      margin-left: 0;
    }
  }
  .btn-group {
    :deep(button) {
      padding: 4px 5px;
      height: auto;
    }
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
</style>
