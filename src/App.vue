<template>
  <router-view v-slot="{ Component }">
    <transition name="left-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
