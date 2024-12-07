<template>
  <v-container>
    <v-breadcrumbs :items="items" class="px-0">
      <template #divider>
        <v-icon icon="mdi-chevron-right" />
      </template>
    </v-breadcrumbs>
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
</template>
<script setup>
import BookATable from "@/components/tabsWindows/BookATable.vue";
import OrderOnline from "@/components/tabsWindows/OrderOnline.vue";
import Reviews from "@/components/tabsWindows/Reviews.vue";
import { ref } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    title: "Foodie Locator - Menu",
  },
});

const tab = ref("tab-1");

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
</script>
