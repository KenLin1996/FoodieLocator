<template>
  <v-container>
    <v-row class="d-flex justify-space-between align-center">
      <v-col cols="7">
        <v-row class="d-flex align-center w-100">
          <v-col cols="12" class="d-flex align-center justify-start">
            <v-avatar style="margin-right: 16px">
              <router-link to="/">
                <v-img
                  width="48px"
                  height="48px"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"
                />
              </router-link>
            </v-avatar>

            <SearchItem v-if="isLargeScreen && showSearch" />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex align-center justify-end flex-nowrap" cols="5">
        <v-btn
          prepend-icon="mdi-account-circle-outline"
          variant="text"
          :class="showSearch ? 'showSearch' : 'navIconColor'"
        >
          <span class="hidden-text">ACCOUNT</span>
        </v-btn>
        <v-btn
          prepend-icon="mdi-cart-outline"
          variant="text"
          :class="showSearch ? 'showSearch' : 'navIconColor'"
        >
          (dc)
        </v-btn>
        <v-app-bar-nav-icon
          :class="showSearch ? 'showSearch' : 'navIconColor'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import SearchItem from "../SearchItem.vue";
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: true,
  },
});

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
.navIconColor {
  color: white !important;
}
@media (max-width: 600px) {
  .hidden-text {
    display: none;
  }
}
</style>
