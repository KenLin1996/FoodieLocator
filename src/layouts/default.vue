<template>
  <v-app>
    <NavBar v-if="showNavBar" />
    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from "@/components/navbar/NavBar.vue";
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useRoute } from "vue-router";

const showNavBar = ref(false); // 控制 Navbar 顯示的狀態，初始為隱藏
const route = useRoute();

// 設置滾動監聽器
const handleScroll = () => {
  if (route.path === "/") {
    // 只有在首頁滾動到一定的位置時才顯示 NavBar
    showNavBar.value = window.scrollY > window.innerHeight / 2;
  } else {
    showNavBar.value = true; // 在其他頁面始終顯示 NavBar
  }
};

// 監聽路由變化，當路由變為首頁時隱藏 Navbar
watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      showNavBar.value = false; // 首頁時隱藏 Navbar
    } else {
      showNavBar.value = true; // 非首頁頁面顯示 Navbar
    }
  }
);

// 設置滾動事件監聽
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 初始化頁面滾動狀態，確保第一次進入頁面時處於正確狀態
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
