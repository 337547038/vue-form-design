<template>
  <div class="scroll layer-list">
    <ul>
      <li
        v-for="element in designFilterData"
        :key="element.id"
        :class="{
          active: activeIds.includes(element.id),
          locked: element.locked,
          display:element.display,
        }"
        @click="selectClick(element)"
      >
        <i
          class="icon-type"
          :class="getIcon(element.type)"
        />
        <el-input
          v-if="activeIds.includes(element.id)"
          v-model="element.label"
        />
        <span
          v-else
          class="name"
        >{{ element.label }}</span>
        <i
          class="icon icon1"
          :class="[
            element.display ? 'icon-eye-close' : 'icon-eye'
          ]"
          @click.stop="layerClick(element, 'display')"
        />
        <i
          class="icon icon2"
          :class="[
            element.locked ? 'icon-lock' : 'icon-lock-open'
          ]"
          @click.stop="layerClick(element, 'locked')"
        />
        <el-popconfirm
          title="确认删除"
          @confirm.stop="layerClick(element, 'del')"
        >
          <template #reference>
            <i class="icon icon-del icon3" />
          </template>
        </el-popconfirm>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import {computed} from "vue";
  import {iconList} from './utils'
  import {storeToRefs} from "pinia";
  import {useScreenStore} from "@/store/screen"
  import type {Component} from "@/types/screen";

  const store = useScreenStore();
  const activeIds = computed(() => {
    return store.selectedComp.map((item: any) => item.id)
  })
  const {designFilterData} = storeToRefs(store)
  const layerClick = (obj: Component, key: string) => {
    switch (key) {
      case 'locked':
        obj.locked = !obj.locked;
        break
      case 'display':
        obj.display = !obj.display;
        break
      case 'del':
        store.setDeleteDesignData(obj.id)
        store.setSelectedComp([])
        store.deleteRect()
        break
    }
  }
  const selectClick = (obj: Component) => {
    store.setSelectedComp(obj)
  }
  const getIcon = (type: string) => {
    return `icon-${iconList[type]}`
  }
</script>