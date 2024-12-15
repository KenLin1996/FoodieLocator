<template>
  <v-container>
    <!-- 麵包屑 -->
    <v-breadcrumbs :items="items" class="px-0">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
    <div class="mb-8 d-flex align-center justify-space-between flex-wrap">
      <v-tabs
        v-model="tab"
        class="mb-2"
        align-tabs="left"
        color="#d23f57"
        slider-color="#d23f57"
      >
        <v-tab value="option-1" class="text-capitalize"> Delivery </v-tab>
        <v-tab value="option-2" class="text-capitalize"> Dining Out </v-tab>
        <v-tab value="option-3" class="text-capitalize"> Nightlife </v-tab>
      </v-tabs>

      <v-btn
        style="background-color: #d23f57; color: white"
        width="70"
        @click="clear"
      >
        CLEAR
      </v-btn>
    </div>
    <v-row>
      <v-col xl="12" cols="12">
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="option-1">
            <v-row>
              <v-col
                cols="3"
                md="3"
                lg="3"
                class="mdSizeFilter"
                style="border-right: 1px solid #d9e1e6"
              >
                <div>
                  <h6 class="mb-2" style="font-size: 14px">Categories</h6>
                  <template v-for="item in category" :key="item">
                    <v-checkbox
                      v-model="selectedCategory"
                      :label="item"
                      :value="item"
                      hide-details
                    />
                  </template>
                </div>
                <div>
                  <h6 class="mb-2" style="font-size: 14px">Rate</h6>
                  <template v-for="item in rate" :key="item">
                    <v-checkbox
                      v-model="selectedRate"
                      :label="item"
                      :value="item"
                      hide-details
                    />
                  </template>
                </div>
                <div>
                  <h6 class="mb-2" style="font-size: 14px">City</h6>
                  <template v-for="item in city" :key="item">
                    <v-checkbox
                      v-model="selectedCity"
                      :label="item"
                      :value="item"
                      hide-details
                    />
                  </template>
                </div>
                <div>
                  <h6 class="mb-2" style="font-size: 14px">Sort By</h6>

                  <v-radio-group v-model="sort">
                    <v-radio label="Name" value="name" />
                    <v-radio label="Price" value="price" />
                  </v-radio-group>
                </div>
                <div>
                  <h6 class="mb-10" style="font-size: 14px">Price Range</h6>

                  <v-range-slider
                    v-model="range"
                    style="margin: 0px 20px"
                    step="1"
                    thumb-label="always"
                    color="#d23f57"
                    thumb-color="#d23f57"
                  />
                </div>
              </v-col>
              <v-col cols="12" sm="12" md="9" lg="9">
                <v-row class="w-100" style="padding: 5px 32px">
                  <v-col cols="12" class="filterBtn">
                    <v-btn
                      style="background-color: #d23f57; color: white"
                      width="100"
                      @click="filterBtn = !filterBtn"
                    >
                      FILTER
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <h5 style="font-size: 18px">
                      184 Delivery Restaurants in New York
                    </h5>
                  </v-col>

                  <template v-if="filteredMenus.length > 0">
                    <v-col
                      v-for="(item, index) in filteredMenus"
                      :key="index"
                      sm="6"
                      md="4"
                      lg="4"
                      cols="12"
                    >
                      <ProductCardA :item="item" />
                    </v-col>
                  </template>
                  <template v-else>
                    <v-col>
                      <p
                        class="text-center mt-5"
                        style="font-size: 32px; color: #757575"
                      >
                        No products match the criteria.
                      </p>
                    </v-col>
                  </template>
                </v-row>
              </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>

  <!-- 篩選側邊欄 -->
  <v-navigation-drawer v-model="filterBtn">
    <div style="padding: 16px">
      <!-- 分隔一下1 -->
      <div>
        <h6 class="mb-2" style="font-size: 14px">Categories</h6>
        <template v-for="item in category" :key="item">
          <v-checkbox
            v-model="selectedCategory"
            :label="item"
            :value="item"
            hide-details
          />
        </template>
      </div>
      <div>
        <h6 class="mb-2" style="font-size: 14px">Rate</h6>
        <template v-for="item in rate" :key="item">
          <v-checkbox
            v-model="selectedRate"
            :label="item"
            :value="item"
            hide-details
          />
        </template>
      </div>
      <div>
        <h6 class="mb-2" style="font-size: 14px">City</h6>
        <template v-for="item in city" :key="item">
          <v-checkbox
            v-model="selectedCity"
            :label="item"
            :value="item"
            hide-details
          />
        </template>
      </div>
      <div>
        <h6 class="mb-2" style="font-size: 14px">Sort By</h6>

        <v-radio-group v-model="sort">
          <v-radio label="Name" value="name" />
          <v-radio label="Price" value="price" />
        </v-radio-group>
      </div>
      <div>
        <h6 class="mb-10" style="font-size: 14px">Price Range</h6>

        <v-range-slider
          v-model="range"
          style="margin: 0px 20px"
          step="1"
          thumb-label="always"
          color="#d23f57"
          thumb-color="#d23f57"
        />
      </div>

      <!-- 分隔一下2 -->
    </div>
  </v-navigation-drawer>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import ProductCardA from "@/components/productCard/ProductCardA.vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "Foodie Locator - TwoColumn",
  },
});

const selectedCategory = ref([]);
const selectedRate = ref([]);
const selectedCity = ref([]);

const filterBtn = ref(false);

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

const tab = ref("option-1");
const menus = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qcvQkilIuzWmKjUBi08r-ktFF3n_2X-BgA&s",
    name: "New York Cheesecake",
    rate: 4.5,
    price: 29.95,
    category: "Desserts",
    city: "New York",
    time: "3 - 5",
    discount: {
      hasDiscount: true,
      value: 65,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",
    name: "California Roll",
    rate: 4.5,
    price: 10,
    category: "Sushi",
    city: "Los Angeles",
    time: "3 - 5",
    discount: {
      hasDiscount: true,
      value: 60,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://t3.ftcdn.net/jpg/09/46/66/06/360_F_946660682_g6fHbVm33zRMHe9H3f0WDoi3fiupcKRW.jpg",
    name: "New York-style Pizza",
    rate: 4.5,
    price: 33.65,
    category: "Pizza",
    city: "New York",
    time: "3 - 5",
    discount: {
      hasDiscount: false,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://www.mystateline.com/wp-content/uploads/sites/17/2023/02/AdobeStock_61641020_Preview.jpeg?w=1280",
    name: "Italian Beef Sandwich",
    rate: 4.5,
    price: 24,
    category: "Sandwiches",
    city: "Chicago",
    time: "8 - 10",
    discount: {
      hasDiscount: true,
      value: 55,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/027/537/012/non_2x/a-boston-cream-pie-with-chocolate-icing-on-a-plate-ai-generated-free-photo.jpeg",
    name: "Boston Cream Pie",
    rate: 4,
    price: 18.95,
    category: "Desserts",
    city: "Boston",
    time: "8 - 10",
    discount: {
      hasDiscount: true,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://img.freepik.com/premium-photo/kolaches-filled-with-seasonal-fruits-yummy-delicious-kolaches-food-image-photography_1295756-183696.jpg",
    name: "Kolaches",
    rate: 4,
    price: 2.99,
    category: "Baking",
    city: "Houston",
    time: "8 - 10",
    discount: {
      hasDiscount: false,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://img.freepik.com/premium-photo/chicagostyle-deep-dish-pizza-thick-crust-with-cheese-chunky-tomato-sauce_818261-25460.jpg",
    name: "Deep-Dish Pizza",
    rate: 3.5,
    price: 9.99,
    category: "Pizza",
    city: "Chicago",
    time: "15 - 20",
    discount: {
      hasDiscount: false,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://d-mars.com/wp-content/uploads/2024/05/iStock-172410532-1.jpg",
    name: "Pecan Pie",
    rate: 3,
    price: 45,
    category: "Desserts",
    city: "Houston",
    time: "15 - 20",
    discount: {
      hasDiscount: true,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://d-mars.com/wp-content/uploads/2024/05/iStock-172410532-1.jpg",
    name: "Pecan Pie",
    rate: 2,
    price: 45,
    category: "Desserts",
    city: "Houston",
    time: "15 - 20",
    discount: {
      hasDiscount: true,
      value: 30,
    },
    to: "/resturant/FoodMenu",
  },
];

const category = ref(["Desserts", "Sushi", "Pizza", "Sandwiches", "Baking"]);
const rate = ref(["4.5 +", "4 +", "3.5 +", "3 +", "Others"]);
const city = ref(["New York", "Los Angeles", "Chicago", "Boston", "Houston"]);
const sort = ref("name");
const range = ref([2, 50]);

const clear = () => {
  selectedCategory.value = [];
  selectedRate.value = [];
  selectedCity.value = [];
  range.value = [2, 50];
  sort.value = "name";
};

// 測試
// 依據選擇條件過濾菜單
const filteredMenus = computed(() => {
  return menus
    .filter((menu) => {
      const isCategoryMatched =
        selectedCategory.value.length === 0 ||
        selectedCategory.value.includes(menu.category);
      const isRateMatched =
        selectedRate.value.length === 0 ||
        (selectedRate.value.includes("4.5 +") && menu.rate >= 4.5) ||
        (selectedRate.value.includes("4 +") &&
          menu.rate >= 4 &&
          menu.rate < 4.5) ||
        (selectedRate.value.includes("3.5 +") && menu.rate >= 3.5) ||
        (selectedRate.value.includes("3 +") && menu.rate >= 3);
      const isCityMatched =
        selectedCity.value.length === 0 ||
        selectedCity.value.includes(menu.city);
      const isPriceInRange =
        menu.price >= range.value[0] && menu.price <= range.value[1];

      return (
        isCategoryMatched && isRateMatched && isCityMatched && isPriceInRange
      );
    })
    .sort((a, b) => {
      if (sort.value === "price") {
        return a.price - b.price;
      }
      return a.name.localeCompare(b.name);
    });
});

// 設置根據螢幕寬度來控制 drawer 的邏輯
const updateDrawer = () => {
  // 當螢幕寬度大於等於 960px 時，設置 drawer 隱藏
  if (window.innerWidth > 960) {
    filterBtn.value = false;
  }
};

onMounted(() => {
  updateDrawer();
  // 監聽螢幕尺寸變化
  window.addEventListener("resize", updateDrawer);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateDrawer);
});
</script>

<style scoped lang="scss">
::v-deep .v-slider-thumb__label {
  width: 35px;
  height: 35px;
  background-color: #d23f57;
  border-radius: 50% 50% 50% 0px;
  transform: translateX(-50%) rotate(-45deg) !important;
  &::before {
    display: none;
  }
}
::v-deep .v-slider-thumb__label div {
  transform: rotate(45deg) !important;
}

.filterBtn {
  display: none;
}

@media (max-width: 960px) {
  .filterBtn {
    display: block;
  }
  .mdSizeFilter {
    display: none;
  }
}
</style>
