<template>
  <div>
    <div class="sn Lfll Lmr20">订单编号：
      <el-button
        class="copy-btn"
        @click="copyData">
        copy
      </el-button>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs, ref} from 'vue'
import Clipboard from 'clipboard'

export default {
  setup() {
    const copyData = () => {
      const clipboard = new Clipboard(".copy-btn", {
        text: () => {
          return 'text1414'
        }
      })
      clipboard.on('success', function () {
        console.log('ok')
      })
      clipboard.on('error', function () {
        console.log("复制失败")
      })
      console.log(clipboard)
    }
    return {
      copyData
    }
  }

}
</script>
