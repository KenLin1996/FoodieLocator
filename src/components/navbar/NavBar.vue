<template>
  <v-app-bar class="w-100 position-fixed" scroll-behavior="elevate">
    <!-- <NavBarItem /> -->
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
            @click="handleDialogOpen"
          >
            <span class="hidden-text">ACCOUNT</span>
          </v-btn>
          <v-btn
            prepend-icon="mdi-cart-outline"
            variant="text"
            :class="showSearch ? 'showSearch' : 'navIconColor'"
            @click="cartBar = !cartBar"
          >
            {{ cartStore.items.length }}
          </v-btn>
          <v-app-bar-nav-icon
            :class="showSearch ? 'showSearch' : 'navIconColor'"
            @click="ham = !ham"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- ACCOUNT 彈出視窗 -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <div class="px-3 px-md-10 py-8">
        <h3 class="mb-2 text-center">Welcome To Foodie Locator</h3>
        <h5 class="mb-9 text-center" style="font-size: 12px">
          Log in with email & password
        </h5>

        <v-form @submit.prevent="submit">
          <p
            class="mb-1"
            style="color: #212121; font-size: 14px; font-weight: 300"
          >
            Email or Phone Number
          </p>
          <v-text-field
            v-model="account"
            density="compact"
            placeholder="Example@gmail.com"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            required
            :rules="[() => !!account || 'This field is required']"
          />
          <p
            class="mb-1"
            style="color: #212121; font-size: 14px; font-weight: 300"
          >
            Password
          </p>
          <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            required
            :rules="[() => !!password || 'This field is required']"
            class="mb-2"
            @click:append-inner="visible = !visible"
          />
          <div>
            <v-btn
              class="w-100"
              style="background-color: #d23f57; color: #fff"
              type="submit"
            >
              Login
            </v-btn>
          </div>
        </v-form>
        <div
          class="d-flex align-center justify-center col-lg-8 col-10 pa-3 mx-5"
        >
          <v-divider />
          <span class="mx-4">on</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column">
          <v-btn
            class="w-100 mb-4"
            prepend-icon="mdi-facebook "
            style="background-color: #3f50b5; color: #fff; font-weight: 400"
          >
            Continue With Facebook </v-btn
          ><v-btn
            class="w-100 mb-4"
            prepend-icon="mdi-google "
            style="background-color: #1876d1; color: #fff; font-weight: 400"
          >
            Continue With Google
          </v-btn>
          <p class="text-center my-3" style="font-size: 14px">
            Don't have account?&ensp;

            <router-link style="text-decoration: underline" to="/">
              <span> Sign Up </span>
            </router-link>
          </p>
        </div>
      </div>

      <div class="py-4" style="background-color: #f6f9fc">
        <p class="text-center">
          Forgot Your Password&ensp;

          <router-link style="text-decoration: underline" to="/">
            <span> Reset It </span>
          </router-link>
        </p>
      </div>
    </v-card>
  </v-dialog>

  <!-- 購物車側邊欄 -->
  <v-navigation-drawer
    v-model="cartBar"
    location="right"
    temporary
    :width="296"
    class="position-fixed"
    style="z-index: 3100; top: 0; height: 100%"
  >
    <div class="d-flex align-center justify-space-between mt-3 mb-2 pl-3">
      <div class="d-flex align-center">
        <v-icon icon="mdi-shopping-outline" class="mr-3" />
        <h4 style="font-size: 20px; color: #757575">Cart</h4>
      </div>
      <v-btn
        icon="mdi-close"
        variant="text"
        color="#d23f57"
        @click="cartBar = !cartBar"
      />
    </div>
    <v-divider />
    <div
      class="d-flex flex-column justify-space-between"
      style="height: calc(100% - 68px)"
    >
      <!-- 購物車列表 -->
      <div>
        <template v-for="item in cartStore.items" :key="item">
          <div
            class="pa-3 mb-4 d-flex align-center justify-space-between w-100"
          >
            <div class="d-flex align-center mr-1">
              <div class="mr-3 text-center">
                <v-btn
                  icon="mdi-plus"
                  density="compact"
                  color="#d23f57"
                  variant="outlined"
                  @click="addCount(item)"
                />
                <!-- <p class="my-1">1</p> -->
                <p class="my-1">
                  {{ item.quantity }}
                </p>
                <v-btn
                  icon="mdi-minus"
                  density="compact"
                  color="#d23f57"
                  variant="outlined"
                  @click="decreaseCount(item)"
                />
              </div>
              <v-avatar class="mr-4 rounded" size="64">
                <v-img :src="item.img" />
              </v-avatar>
              <div class="d-flex flex-column">
                <h5 class="text-truncate" style="font-size: 16px; width: 110px">
                  {{ item.name }}
                </h5>
                <p style="font-size: 12px">$530 x 1</p>
                <h5 style="color: #d23f57; font-size: 16px">
                  ${{ item.price }}
                </h5>
              </div>
            </div>
            <div>
              <v-btn
                icon="mdi-close"
                variant="text"
                color="#000"
                @click="removeItem(item)"
              />
            </div>
          </div>
        </template>
      </div>
      <!-- 按鈕 -->
      <div class="d-flex flex-column pa-2">
        <v-btn class="w-100 mb-3 text-capitalize" color="#d23f57">
          Checkout Now ($ 220)
        </v-btn>
        <v-btn class="w-100" variant="outlined" color="#d23f57">
          View Cart
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>

  <!-- 漢堡側邊欄 -->
  <v-navigation-drawer
    v-model="ham"
    location="left"
    temporary
    :width="296"
    class="position-fixed"
    style="z-index: 3100; top: 0; height: 100%"
  >
    <div class="d-flex align-center justify-space-between mt-3 mb-2 pl-3">
      <h4 style="font-size: 20px; color: #757575">List</h4>

      <v-btn
        icon="mdi-close"
        variant="text"
        color="#757575"
        @click="ham = !ham"
      />
    </div>
    <v-list v-model:opened="open2">
      <!-- 儀表板 -->
      <v-list-group value="Dashboards">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Dashboards"
            prepend-icon="mdi-view-dashboard-variant-outline"
            color="#d23f57"
          />
        </template>

        <v-list-item
          v-for="(item, i) in dashboards"
          :key="i"
          :title="item"
          :value="item"
        />
      </v-list-group>

      <!-- 餐廳 -->
      <v-list-group value="Restaurant">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            title="Restaurant"
            prepend-icon="mdi-view-dashboard-variant-outline"
            color="#d23f57"
          />
        </template>

        <v-list-item
          v-for="item in restaurants"
          :key="item.title"
          :title="item.title"
          :to="item.to"
        />
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import SearchItem from "../SearchItem.vue";
import { useCartStore } from "@/stores/cart";
import { ref, defineProps, watch } from "vue";

const cartStore = useCartStore();
const dialog = ref(false);
const account = ref();
const visible = ref(false);
const password = ref();
const cartBar = ref(false);
const ham = ref(false);

const dashboards = ref([
  "Review",
  "Photos",
  "Order List",
  "Order History",
  "Followers",
  "Bookmarks",
]);
const restaurants = ref([
  { title: "Food Menu", to: "/resturant/FoodMenu" },
  { title: "Resturant Two Column", to: "/resturant/ResturantTwoColumn" },
  { title: "Search Resturant", to: "/" },
]);

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: true,
  },
  open: {
    type: Array,
    required: true,
  },
});

const open2 = ref(["Dashboards"]);
watch(
  () => props.open,
  (newVal) => {
    open2.value = newVal;
  }
);

const isLargeScreen = ref(window.innerWidth >= 960);

const submit = () => {
  account.value = "";
  password.value = "";
};

const addCount = (item) => {
  cartStore.addItemToCart(item);
};

const decreaseCount = (item) => {
  cartStore.decreaseQuantity(item);
};

const removeItem = (item) => {
  cartStore.removeItemFromCart(item);
};

//
const handleDialogOpen = () => {
  dialog.value = !dialog.value;

  if (dialog.value) {
    // 打開 dialog，禁用滾動
    document.body.style.overflow = "hidden";
  } else {
    // 關閉 dialog，恢復滾動
    document.body.style.overflow = "";
  }
};
</script>
<style scoped>
/* 螢幕寬度小於 960px 時隱藏 */
@media (max-width: 600px) {
  .hidden-text {
    display: none;
  }
}

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
