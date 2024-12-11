<template>
  <div
    class="homeHeader"
    style="
      background-image: url('	https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png');
      background-size: cover;
    "
  >
    <!-- <NavBarItem :show-search="showSearch" /> -->
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
              <!-- <SearchItem v-if="isLargeScreen && showSearch" /> -->
            </v-col>
          </v-row>
        </v-col>
        <v-col class="d-flex align-center justify-end flex-nowrap" cols="5">
          <v-btn
            prepend-icon="mdi-account-circle-outline"
            variant="text"
            style="color: #fff"
            @click="dialog = !dialog"
          >
            <span class="hidden-text">ACCOUNT</span>
          </v-btn>
          <v-btn
            prepend-icon="mdi-cart-outline"
            variant="text"
            style="color: #fff"
            @click="cartBar = !cartBar"
          >
            {{ cartStore.items.length }}
          </v-btn>
          <v-app-bar-nav-icon style="color: #fff" @click="ham = !ham" />
        </v-col>
      </v-row>
    </v-container>

    <!-- 分隔一下 -->
    <v-container>
      <div class="mt-15">
        <v-row>
          <v-col cols="12">
            <h1
              class="text-center font-weight-regular mb-4"
              style="color: white; font-size: 48px"
            >
              Discover the best food & drinks in
              <span class="font-weight-bold">New York</span>
            </h1>
            <h4
              class="text-center font-weight-light mb-5"
              style="color: white; font-size: 20px"
            >
              The meals you love, delivered with care
            </h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mx-auto" cols="12" lg="7">
            <div
              class="d-flex align-center mb-15 mx-auto flex-wrap"
              style="background: #fff; border-radius: 4px"
            >
              <v-btn
                prepend-icon="mdi-map-marker"
                variant="plain"
                disabled
                class="text-capitalize"
              >
                New York
              </v-btn>

              <v-btn
                prepend-icon="mdi-crosshairs-gps"
                variant="text"
                class="rounded-0 theme--light text-capitalize"
                height="40"
              >
                Location
              </v-btn>

              <v-text-field
                placeholder="Search for restaurant"
                density="compact"
                variant="plain"
                hide-details
                single-line
                style="width: 210px"
              />
              <v-btn
                height="40"
                class="rounded-0 rounded-te rounded-be"
                density="default"
                variant="text"
                style="color: #fff; background-color: #d23f57"
                to="/resturant/ResturantTwoColumn"
              >
                Search
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
  <div class="content w-100">
    <div class="bg w-100" style="background-color: #f6f9fc">
      <v-container class="py-15">
        <v-row>
          <v-col
            v-for="(item, index) in lifestyles"
            :key="index"
            sm="6"
            md="4"
            lg="3"
            cols="12"
          >
            <ProductCardA :item="item" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container class="py-15">
      <v-row>
        <v-col cols="12">
          <h2>Collections</h2>
          <h6 class="d-flex justify-space-between align-center flex-wrap">
            <span style="color: #9e9e9e; font-size: 14px; font-weight: 400">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              New York, based on trends
            </span>
            <router-link to="/" style="color: #d23f57; font-size: 16px">
              View all collections
            </router-link>
          </h6>
        </v-col>

        <v-col
          v-for="(item, index) in collections"
          :key="index"
          sm="6"
          md="4"
          lg="3"
          cols="12"
        >
          <ProductCardB :item="item" />
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-15">
      <v-row>
        <v-col cols="12">
          <h2>Browse By Cuisine</h2>
        </v-col>

        <v-col
          v-for="(item, index) in cuisines"
          :key="index"
          class="text-center"
          sm="6"
          md="4"
          lg="2"
          cols="12"
        >
          <router-link :to="item.to">
            <v-avatar class="mb-4" size="150">
              <v-img :src="item.img" />
            </v-avatar>
            <h4 style="font-size: 17px; color: #616161">
              {{ item.name }}
            </h4>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="py-15">
      <v-row>
        <v-col cols="12">
          <h2>Popular Near You</h2>
        </v-col>
        <v-col
          v-for="(item, index) in menus"
          :key="index"
          sm="6"
          md="4"
          lg="3"
          cols="12"
        >
          <ProductCardA :item="item" />
        </v-col>
      </v-row>
    </v-container>
    <div class="w-100 py-16" style="background-color: #f6f9fc">
      <v-container class="mx-auto">
        <v-row class="d-flex justify-center align-center">
          <v-col
            sm="4"
            md="3"
            lg="3"
            cols="12"
            class="text-sm-right text-md-right text-lg-right text-center"
          >
            <v-img
              class="d-inline-block"
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/App.4927ff9.png"
              cover
              width="185"
            />
          </v-col>
          <v-col sm="8" md="9" lg="9" cols="12" style="max-width: 563px">
            <h1 style="font-size: 40px">Get the Mobile App</h1>
            <p style="font-size: 18px; color: #757575">
              We will send you a link, open it on your phone to download the app
            </p>
            <v-radio-group class="my-4" inline hide-details>
              <v-radio label="Email" value="Email" color="red" class="mr-4" />
              <v-radio label="Phone" value="Phone" color="red" />
            </v-radio-group>
            <div
              class="d-flex align-center mb-8 mx-auto flex-nowrap"
              style="
                background: #fff;
                border-radius: 4px;
                border: 1px solid #d9e1e6;
              "
            >
              <v-text-field
                placeholder="Email"
                density="compact"
                variant="plain"
                hide-details
                single-line
                style="width: 210px; padding: 0px 12px"
              />
              <v-btn
                height="40"
                class="rounded-0 rounded-te rounded-be"
                density="default"
                variant="text"
                style="color: #fff; background-color: #d23f57"
              >
                Search
              </v-btn>
            </div>
            <h6 class="mb-4" style="font-size: 14px; color: #9e9e9e">
              Download App from
            </h6>
            <div>
              <v-avatar class="rounded me-4" style="width: 120px; height: 45px">
                <v-img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                />
              </v-avatar>
              <v-avatar class="rounded" style="width: 120px; height: 45px">
                <v-img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/app-store.63e3986.png"
                />
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

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
            autocomplete="password"
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
        <template v-if="cartStore.items.length > 0">
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
                  <h5
                    class="text-truncate"
                    style="font-size: 16px; width: 110px"
                  >
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
        </template>
        <template v-else>
          <p class="pa-3 text-center mt-4" style="font: 16px; color: #757575">
            The shopping cart is currently empty.
          </p>
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
    <v-list v-model:opened="open">
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
import { definePage } from "vue-router/auto";
import ProductCardA from "@/components/productCard/ProductCardA.vue";
import ProductCardB from "@/components/productCard/ProductCardB.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

definePage({
  meta: {
    title: "Foodie Locator - Home",
  },
});
const dialog = ref(false);
const account = ref();
const password = ref();
const visible = ref(false);
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

const submit = () => {
  account.value = "";
  password.value = "";
};

// const showSearch = ref(false);
const isLargeScreen = ref(window.innerWidth >= 960);
const lifestyles = [
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",
    name: "Order Food Online",
    showLifestyle: true,
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",
    name: "Go Out For Meal",
    showLifestyle: true,
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg",
    name: "Nightlife & Clubs",
    showLifestyle: true,

    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg",
    name: "Pro Membership",
    showLifestyle: true,

    to: "/resturant/FoodMenu",
  },
];

const collections = [
  {
    img: "https://media.istockphoto.com/id/1454217037/zh/%E7%85%A7%E7%89%87/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade-center.jpg?s=612x612&w=0&k=20&c=9ZeEQ6sBuQGdpIbE-_EbaiFSSjvV2mBGK0DQOjY1DG0=",
    name: "Best Of New York",
    count: 26,
    to: "",
  },
  {
    img: "https://media.istockphoto.com/id/1369814693/photo/los-angeles.jpg?s=612x612&w=0&k=20&c=DFV2MZegN9dGw--BF-24os350UwlrCgs25x93AH99Do=",
    name: "Best Of Los Angeles",
    count: 14,
    to: "",
  },
  {
    img: "https://www.shutterstock.com/image-photo/chicago-illinois-usa-on-lake-600nw-2421911865.jpg",
    name: "Best Of Chicago",
    count: 10,
    to: "",
  },
  {
    img: "https://heritageclubthc.com/wp-content/uploads/2023/08/iStock-1363707600.jpg",
    name: "Best Of Boston",
    count: 20,
    to: "",
  },
];

const cuisines = [
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/9.1c1a4aa.png",
    name: "Italian",
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png",
    name: "Chinesse",
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png",
    name: "Japanesse",
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png",
    name: "Indian",
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/13.b85d0c1.png",
    name: "Thai Food",
    to: "/resturant/FoodMenu",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png",
    name: "Mexican",
    to: "/resturant/FoodMenu",
  },
];

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
];

const open = ref(["Dashboards"]);
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

const addCount = (item) => {
  cartStore.addItemToCart(item);
};

const decreaseCount = (item) => {
  cartStore.decreaseQuantity(item);
};

const removeItem = (item) => {
  cartStore.removeItemFromCart(item);
};
</script>
<style scoped lang="scss">
::v-deep .v-field__input {
  padding: 0px !important;
}

@media (max-width: 600px) {
  .hidden-text {
    display: none;
  }
}
</style>
