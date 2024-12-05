<template>
  <v-app-bar class="w-100 position-fixed" scroll-behavior="elevate">
    <NavBarItem />
  </v-app-bar>
</template>
<script setup>
import NavBarItem from "../navbar/NavBarItem.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const isLargeScreen = ref(window.innerWidth >= 960);

// 監聽螢幕大小變化的處理方法
const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 960; // 更新螢幕寬度狀態
};

// 註冊視窗大小變更的監聽器
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// 在組件銷毀時移除監聽器，防止內存泄漏
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style scoped>
/* 螢幕寬度小於 960px 時隱藏 */
@media (max-width: 600px) {
  .hidden-text {
    display: none;
  }
}
</style>
