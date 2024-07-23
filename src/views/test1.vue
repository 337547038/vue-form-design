<template>
  <div style="width: 100%">
    <el-carousel
      :interval="4000"
      type="card"
      height="400px"
      :autoplay="false"
      direction="vertical"
    >
      <el-carousel-item v-for="item in dataList" :key="item">
        <p>{{ item.name }}</p>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const dataList = ref([
    {
      deviceLocation: '2',
      pvCameraType: '0',
      deviceSerial: 'AZ5902031',
      name: '增芯DS-7808N-F1(D)(AZ5902031)',
      status: '1',
      appKey: '51bfd29d09d743eaa61e7c8378a3c332',
      appSecret: '30a44daf3e4be1ea64a9cca0a802b4c2'
    },
    {
      deviceLocation: '4',
      pvCameraType: '0',
      deviceSerial: 'AZ5902031',
      name: '增芯DS-7808N-F1(D)(AZ5902031)',
      status: '1',
      appKey: '51bfd29d09d743eaa61e7c8378a3c332',
      appSecret: '30a44daf3e4be1ea64a9cca0a802b4c2'
    },
    {
      deviceLocation: '3',
      pvCameraType: '0',
      deviceSerial: 'J70737301',
      name: '省一建-中大荔园DS-7608N-E1-V3(J70737301)',
      status: '1',
      appKey: '51bfd29d09d743eaa61e7c8378a3c332',
      appSecret: '30a44daf3e4be1ea64a9cca0a802b4c2'
    },
    {
      deviceLocation: '2',
      pvCameraType: '1',
      deviceSerial: 'J70737301',
      name: '省一建-中大荔园DS-7608N-E1-V3(J70737301)',
      status: '1',
      appKey: '51bfd29d09d743eaa61e7c8378a3c332',
      appSecret: '30a44daf3e4be1ea64a9cca0a802b4c2'
    },
    {
      deviceLocation: '1',
      pvCameraType: '1',
      deviceSerial: 'J70737301',
      name: '西门入口',
      status: '1',
      appKey: '51bfd29d09d743eaa61e7c8378a3c332',
      appSecret: '30a44daf3e4be1ea64a9cca0a802b4c2'
    },
    {
      deviceLocation: '6',
      pvCameraType: '0',
      deviceSerial: '1234200061164912640',
      name: '设备名称1',
      status: '1',
      appKey: 'AppKey',
      appSecret: 'AppSecret'
    }
  ])
</script>
<style scoped>
  .el-carousel__item p {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
<script setup lang="ts"></script>
