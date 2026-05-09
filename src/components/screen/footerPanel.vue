<template>
  <div class="design-footer">
    <i
      class="icon-menu icon"
      @click="toggle('left')"
    />
    <div class="control-tip">
      {{ screenStore.controlTip||'可按住Ctrl键选中多个' }}
    </div>
    <div class="center">
      <div class="item">
        <label class="label">标尺</label>
        <el-switch
          v-model="isShowRuler"
          size="small"
        />
      </div>
      <div class="item slider">
        <label class="label">缩放比例</label>
        <el-slider
          v-model="scale"
          :marks="marks"
          :max="200"
          :min="screenStore.autoScale - 30"
          show-stops
          size="small"
        />
      </div>
      <div class="item">
        <el-button
          link
          type="primary"
          @click="defaultScaleClick('auto')"
        >
          自适应
        </el-button>
        <el-button
          link
          type="primary"
          @click="defaultScaleClick('100')"
        >
          100%
        </el-button>
      </div>
    </div>
    <i
      class="icon-menu icon"
      @click="toggle('right')"
    />
  </div>
</template>
<script setup lang="ts">
  import {computed, ref} from "vue";
  import {useScreenStore} from "@/store/screen";

  const screenStore = useScreenStore();

  const isShowRuler = computed({
    get() {
      return screenStore.isShowRuler;
    },
    set(val: boolean) {
      screenStore.setIsShowRuler(val);
    }
  });
  const scale = computed({
    get() {
      return screenStore.scale;
    },
    set(val: number) {
      screenStore.setScale(val);
    }
  });
  const marks = ref({
    100: {
      style: {}
    }
  })
  const toggle = (key: string) => {
    key === 'left' ? screenStore.setShowComponentPanel() : screenStore.setShowPropertyPanel()
  }
  const defaultScaleClick = (scale: string) => {
    screenStore.setScale(scale === 'auto' ? screenStore.autoScale : 100);
  }
</script>