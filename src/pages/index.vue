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
          <v-col cols="12" lg="7" class="mx-auto">
            <div
              class="d-flex align-center mb-15 mx-auto flex-wrap"
              style="background: #fff; border-radius: 4px"
            >
              <v-btn prepend-icon="mdi-map-marker" variant="plain" disabled>
                New York
              </v-btn>

              <v-btn
                prepend-icon="mdi-crosshairs-gps"
                variant="text"
                class="rounded-0 theme--light"
                height="40"
              >
                My Location
              </v-btn>

              <v-text-field
                label="Search for restaurant"
                placeholder="Search for restaurant"
                density="compact"
                variant="text"
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
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2>Collections</h2>
          <h6 class="d-flex justify-space-between align-center flex-wrap">
            <span style="color: #9e9e9e; font-size: 14px">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              New York, based on trends
            </span>
            <span style="color: #d23f57; font-size: 16px">
              View all collections
            </span>
          </h6>
        </v-col>
        <v-col sm="6" md="4" lg="3" cols="12"> 2 </v-col>
        <v-col sm="6" md="4" lg="3" cols="12"> 3 </v-col>
        <v-col sm="6" md="4" lg="3" cols="12"> 4 </v-col>
        <v-col sm="6" md="4" lg="3" cols="12"> 5 </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import NavBarItem from "@/components/NavBarItem.vue";
import ProductCardA from "@/components/ProductCardA.vue";
import { ref } from "vue";

const showSearch = ref(false);

const lifestyles = [
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",
    name: "Order Food Online",
    showLifestyle: true,
    to: "/",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",
    name: "Go Out For Meal",
    showLifestyle: true,

    to: "/",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/17.3634737.jpg",
    name: "Nightlife & Clubs",
    showLifestyle: true,

    to: "/",
  },
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg",
    name: "Pro Membership",
    showLifestyle: true,

    to: "/",
  },
];

const menus = [
  {
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",
    name: "Starbuckss",
    rate: 4.5,
    cost: 20,
    category: "coffee",
    city: "New York",
    time: "8 - 10 min",
    // hasDiscount: true,
    // discount: 30,
    discount: {
      hasDiscount: true,
      value: 30, // Percentage
    },
    to: "/",
  },
];
//
</script>
