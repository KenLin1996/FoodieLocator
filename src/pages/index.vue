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
    <v-container class="py-15">
      <v-row>
        <v-col cols="12">
          <h2>Collections</h2>
          <h6 class="d-flex justify-space-between align-center flex-wrap">
            <span style="color: #9e9e9e; font-size: 14px; font-weight: 400">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              New York, based on trends
            </span>
            <RouterLink style="color: #d23f57; font-size: 16px">
              View all collections
            </RouterLink>
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
  </div>
</template>

<script setup>
import NavBarItem from "@/components/navbar/NavBarItem.vue";
import ProductCardA from "@/components/productCard/ProductCardA.vue";
import ProductCardB from "@/components/productCard/ProductCardB.vue";
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
    img: "https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",
    name: "Starbuckss",
    rate: 4.5,
    cost: 20,
    category: "coffee",
    city: "New York",
    time: "8 - 10 min",
    discount: {
      hasDiscount: true,
      value: 30,
    },
    to: "/",
  },
];
</script>
