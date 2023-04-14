<!--<template>-->
<!--  <div v-loading="loading">-->
<!--    <ak-echarts :data="data" />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--  import { ref, onMounted } from 'vue'-->
<!--  import { useRoute } from 'vue-router'-->
<!--  import { getRequest } from '@/api'-->
<!--  import { stringToObj } from '@/utils/form'-->
<!--  const route = useRoute()-->
<!--  const query = route.query-->
<!--  const data = ref({-->
<!--    list: [-->
<!--      {-->
<!--        type: 'bar',-->
<!--        option: {-->
<!--          xAxis: {-->
<!--            type: 'category',-->
<!--            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']-->
<!--          },-->
<!--          yAxis: {-->
<!--            type: 'value'-->
<!--          },-->
<!--          series: [-->
<!--            {-->
<!--              data: [],-->
<!--              type: 'bar'-->
<!--            }-->
<!--          ]-->
<!--        },-->
<!--        name: 'bar1677034022311'-->
<!--      }-->
<!--    ],-->
<!--    config: {-->
<!--      beforeRequest: (data, route) => {-->
<!--        // data经过处理后返回-->
<!--        return data-->
<!--      },-->
<!--      afterResponse: (data) => {-->
<!--        return data-->
<!--      }-->
<!--    }-->
<!--  })-->
<!--  const loading = ref(false)-->
<!--  const getInit = () => {-->
<!--    const prams = {-->
<!--      id: query.id-->
<!--    }-->
<!--    loading.value = true-->
<!--    getRequest('getEchartsById', prams)-->
<!--      .then((res) => {-->
<!--        // console.log(res)-->
<!--        const result = res.data.data-->
<!--        if (result) {-->
<!--          data.value = stringToObj(result)-->
<!--        }-->
<!--        loading.value = false-->
<!--      })-->
<!--      .catch(() => {-->
<!--        loading.value = false-->
<!--      })-->
<!--  }-->
<!--  onMounted(() => {-->
<!--    //getInit()-->
<!--  })-->
<!--</script>-->
