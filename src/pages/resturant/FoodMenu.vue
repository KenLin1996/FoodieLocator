<template>
  <v-container>
    <!-- 麵包屑 -->
    <v-breadcrumbs :items="items" class="px-0">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
    <!-- 商品圖片 ＆ 商家資訊 -->
    <v-row>
      <v-col lg="6" cols="12" class="py-1 pr-1">
        <v-img
          height="100%"
          src="https://foodhub-nuxt.vercel.app/_nuxt/img/bigFood.fb87b8d.png"
          cover
        />
      </v-col>
      <v-col lg="6" cols="12">
        <v-row>
          <v-col cols="6" class="pt-1 pr-1 pb-1 pl-1">
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodOne.f29cb9f.png"
              width="434"
              cover
            />
          </v-col>
          <v-col cols="6" class="pt-1 pr-1 pb-1 pl-1">
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodTwo.3b74f91.png"
              width="434"
              cover
            />
          </v-col>
          <v-col cols="6" class="pt-1 pr-1 pb-1 pl-1">
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodThree.fd71db5.png"
              width="434"
              cover
            />
          </v-col>
          <v-col cols="6" class="pt-1 pr-1 pb-1 pl-1">
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/foodFour.e242457.png"
              width="434"
              cover
            />
          </v-col>
        </v-row>
      </v-col>

      <!-- 商家資訊 -->
      <v-col class="mt-4 py-0 pr-0" cols="12">
        <div
          class="d-flex justify-space-between flex-wrap align-center mb-3 py-0"
        >
          <h1 style="font-size: 30px">Starbucks</h1>
          <div class="d-flex align-center flex-nowrap">
            <v-rating
              :model-value="5"
              :length="5"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
              class="mr-1"
            />
            <span style="font-size: 14px">4.5</span>
            <span class="text-grey" style="font-size: 14px">（1004）</span>
          </div>
        </div>
        <p class="mb-5" style="font-size: 14px">
          Coffee, signature roasts, light bite, quick bite, fast foods
        </p>
        <div
          class="d-flex align-center mb-4"
          style="color: #757575; font-size: 14px"
        >
          <v-icon
            icon="mdi-map-marker"
            style="font-size: 16px; margin-right: 8px"
          />The Dorothy Ross Friedman Residence, NY, US -
          <router-link
            to="/resturant/FoodMenu"
            style="text-decoration: underline; color: #757575"
          >
            Show Map
          </router-link>
        </div>
        <div
          class="d-flex align-center mb-4"
          style="color: #757575; font-size: 14px"
        >
          <v-icon
            icon="mdi-clock-outline"
            style="font-size: 16px; margin-right: 8px"
          />
          <router-link to="/resturant/FoodMenu" style="color: #d23f57">
            Open Now
          </router-link>
          &ensp;- Sun - Mon: 9am - 10pm
        </div>
        <div
          class="d-flex align-center mb-4"
          style="color: #757575; font-size: 14px"
        >
          <v-icon icon="mdi-earth" style="font-size: 16px; margin-right: 8px" />
          <router-link to="/resturant/FoodMenu" style="color: #757575">
            www.starbucks.com
          </router-link>
        </div>
      </v-col>
    </v-row>

    <!-- 商家服務：線上點餐、預約、評論 -->
    <div>
      <v-tabs
        v-model="tab"
        align-tabs="left"
        color="#d23f57"
        slider-color="#d23f57"
        class="mb-8"
        style="font-size: 14px"
      >
        <v-tab value="option-1"> Order Online </v-tab>
        <v-tab value="option-2"> Book a Table </v-tab>
        <v-tab value="option-3"> Reviews </v-tab>
      </v-tabs>

      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="option-1">
          <OrderOnline />
        </v-tabs-window-item>
        <v-tabs-window-item value="option-2">
          <BookATable />
        </v-tabs-window-item>
        <v-tabs-window-item value="option-3">
          <Reviews />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-container>

  <!-- 在 ProductCardC 的 Categories 按鈕觸發的側邊欄 -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    :width="260"
    class="position-fixed"
    style="z-index: 3006; top: 0; height: 100%; padding: 20px"
  >
    <div class="d-flex align-center justify-end">
      <v-btn icon="mdi-close" variant="text" @click="drawer = !drawer" />
    </div>

    <v-list-item
      v-for="(item, index) in tabs"
      :key="index"
      :value="item"
      class="pa-0 w-100 d-inline-block mb-5"
      :class="{
        'selected-item': selectedIndex === index,
      }"
      style="min-height: 0px"
      @click="selectTab(index)"
    >
      {{ item.name }}
    </v-list-item>
  </v-navigation-drawer>
</template>
<script setup>
import BookATable from "@/components/tabsWindows/BookATable.vue";
import OrderOnline from "@/components/tabsWindows/OrderOnline.vue";
import Reviews from "@/components/tabsWindows/Reviews.vue";
import { ref, provide, onMounted, onBeforeUnmount } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "Foodie Locator - Menu",
  },
});

const tab = ref("tab-1");
// const orderTab = ref("option-0");

const items = [
  {
    title: "Home",
    disabled: false,
    href: "/",
  },
  {
    title: "New York",
    disabled: false,
    href: "/",
  },
  {
    title: "Resturants",
    disabled: true,
    href: "/resturant/FoodMenu",
  },
];

const tabs = [
  { name: "Recomended (4)", counts: 4 },
  { name: "DPB Special Combos (1)", counts: 1 },
  { name: "Chineese Starters (3)", counts: 3 },
  { name: "Chinese Main Course (7)", counts: 7 },
  { name: "Indian Main Course (6)", counts: 6 },
  { name: "Rice & Pulao (7)", counts: 7 },
  { name: "Desserts (1)", counts: 1 },
  { name: "Soup & wonton (5)", counts: 5 },
  { name: "Accompaniment (4)", counts: 4 },
  { name: "Biryani (1)", counts: 1 },
];

const drawer = ref(false);
provide("openSideBar", () => {
  drawer.value = true;
});

const selectedIndex = ref(null); // 記錄被選中的 tab 的 index

// 點擊選項時更新 selectedIndex
const selectTab = (index) => {
  selectedIndex.value = index;
};

// 設置根據螢幕寬度來控制 drawer 的邏輯
const updateDrawer = () => {
  // 當螢幕寬度大於等於 960px 時，設置 drawer 隱藏
  if (window.innerWidth > 960) {
    drawer.value = false; // 隱藏 Drawer
  }
};

onMounted(() => {
  // 頁面加載時檢查一次螢幕尺寸
  updateDrawer();

  // 監聽螢幕尺寸變化
  window.addEventListener("resize", updateDrawer);
});

onBeforeUnmount(() => {
  // 清除監聽器
  window.removeEventListener("resize", updateDrawer);
});
</script>
<style scoped lang="scss">
::v-deep.v-navigation-drawer__scrim {
  z-index: 990 !important;
}

.selected-item {
  border-right: 3px solid #d23f57;

  /* min-height: 0px; */
}
</style>
