<template>
  <div
    class="homeHeader"
    style="
      background-image: url('	https://foodhub-nuxt.vercel.app/_nuxt/img/header-bg.d39c465.png');
      background-size: cover;
    "
  >
    <NavBarItem :show-search="showSearch" />
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
          <v-col
            class="mx-auto"
            cols="12" 
            lg="7"
          >
            <div
              class="d-flex align-center mb-15 mx-auto flex-wrap"
              style="background: #fff; border-radius: 4px"
            >
              <v-btn
                prepend-icon="mdi-map-marker" 
                variant="plain" 
                disabled
              >
                New York
              </v-btn>

              <v-btn
                prepend-icon="mdi-crosshairs-gps"
                variant="text"
                class="rounded-0 theme--light"
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
    <div 
      class="bg w-100" 
      style="background-color: #f6f9fc"
    >
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
            <router-link 
              to="/" 
              style="color: #d23f57; font-size: 16px"
            >
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
            <v-avatar 
              class="mb-4" 
              size="150"
            >
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
    <div 
      class="w-100 py-16" 
      style="background-color: #f6f9fc"
    >
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
          <v-col
            sm="8" 
            md="9" 
            lg="9" 
            cols="12" 
            style="max-width: 563px"
          >
            <h1 style="font-size: 40px">
              Get the Mobile App
            </h1>
            <p style="font-size: 18px; color: #757575">
              We will send you a link, open it on your phone to download the app
            </p>
            <v-radio-group
              class="my-4"
              inline 
              hide-details 
            >
              <v-radio
                label="Email" 
                value="Email" 
                color="red" 
                class="mr-4" 
              />
              <v-radio 
                label="Phone" 
                value="Phone" 
                color="red" 
              />
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
                style="width: 210px; padding: 0px 12px;"
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
            <h6 
              class="mb-4" 
              style="font-size: 14px; color: #9e9e9e"
            >
              Download App from
            </h6>
            <div>
              <v-avatar 
                class="rounded me-4" 
                style="width: 120px; height: 45px"
              >
                <v-img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/google-play.430ca54.png"
                />
              </v-avatar>
              <v-avatar 
                class="rounded" 
                style="width: 120px; height: 45px"
              >
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
</template>

<script setup>
import { definePage }from"vue-router/auto"
import NavBarItem from "@/components/navbar/NavBarItem.vue";
import ProductCardA from "@/components/productCard/ProductCardA.vue";
import ProductCardB from "@/components/productCard/ProductCardB.vue";
import { ref } from "vue";

definePage({
  meta: {
    title: "Foodie Locator - Home",
  },
});

const showSearch = ref(false);

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
    to: "",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/10.4b83261.png",
    name: "Chinesse",
    to: "",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/11.53f677b.png",
    name: "Japanesse",
    to: "",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/12.95a2711.png",
    name: "Indian",
    to: "",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/13.b85d0c1.png",
    name: "Thai Food",
    to: "",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/14.05cff0f.png",
    name: "Mexican",
    to: "",
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
    to: "/",
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
    to: "/",
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
    to: "/",
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
    to: "/",
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
    to: "/",
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
    to: "/",
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
    to: "/",
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
    to: "/",
  },
];
</script>
<style scoped lang="scss">
::v-deep .v-field__input{
  padding: 0px !important;
}
</style>
