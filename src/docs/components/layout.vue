<!-- Created by 337547038 on 2021/10/29. -->
<template>
  <div class="layout-docs">
    <div class="sidebar">00</div>
    <div class="main-">
      <router-view v-slot="{ Component }">
        <transition name="left-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import 'vite-plugin-vuedoc/style.css'
export default {
  name: "layout",
  data() {
    return {}
  },
  props: {},
  components: {},
  methods: {},
  computed: {},
  mounted() {
  }
}
</script>
