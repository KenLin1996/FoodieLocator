<template>
  <v-row>
    <v-col lg="6" cols="12">
      <v-row>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-select
            v-model="defaultDay"
            label="Select Day Of Week"
            :items="date"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-select
            v-model="defaultNum"
            label="Number Of Guests"
            :items="nums"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-text-field
            label="First Name"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-text-field
            label="Last Name"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-text-field
            label="Email"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col class="mt-2" sm="6" md="6" lg="6" xl="6" cols="12">
          <v-text-field
            label="Phone"
            variant="outlined"
            hide-details
            color="#d23f57"
            density="compact"
          />
        </v-col>
        <v-col cols="12">
          <v-btn
            height="40"
            class="rounded-1"
            density="default"
            variant="text"
            style="color: #fff; background-color: #d23f57"
          >
            BOOK
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="6" cols="12">
      <v-img
        src="https://foodhub-nuxt.vercel.app/_nuxt/img/download-app.c757568.png"
        cover
      />
    </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";

const defaultDay = ref("Sunday");
const date = ref([
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]);

const defaultNum = ref(0);
const nums = [1, 2, 3, 4, 5, 6, 7];
</script>
