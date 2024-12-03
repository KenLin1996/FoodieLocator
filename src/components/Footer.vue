<template>
  <div>
    <v-container class="" style="padding: 64px 0px">
      <v-row style="height: 100px">
        <v-col cols="12">
          <h2 class="mb-5">Popular Localities In & Around New York</h2>
          <v-row>
            <template v-for="n in 4" :key="n">
              <v-col class="mb-3">
                <template v-for="(city, i) in citys" :key="i">
                  <div class="mb-3" :to="city.to">
                    <router-link :to="city.to">
                      {{ city.name }}
                      <span style="color: #9e9e9e">
                        {{ city.count }}
                      </span>
                    </router-link>
                  </div>
                </template>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <!-- <v-footer color="#f6f9fc" style="padding: 64px 0px">
    <v-container class="pa-0">
      <v-row style="background-color: #f6f9fc">
        <v-col cols="12">
          <h1>Popular Localities In & Around New York</h1>
          <h1>Popular Localities In & Around New York</h1>
          <h1>Popular Localities In & Around New York</h1>
          <h1>Popular Localities In & Around New York</h1>
          <h1>Popular Localities In & Around New York</h1>
        </v-col>
      </v-row>
    </v-container>
  </v-footer> -->
</template>

<script setup>
const citys = [
  {
    name: "New York",
    count: `（26 places）`,
    to: "https://vuetifyjs.com/",
  },
  {
    name: "Los Angeles",
    count: `（14 places）`,
    to: "https://support.vuetifyjs.com/",
  },
  {
    name: "Chicago",
    count: `（10 places）`,
    to: "https://x.com/vuetifyjs",
  },
  {
    name: "Boston",
    count: `（20 places）`,
    to: "https://github.com/vuetifyjs/vuetify",
  },
  {
    name: "Houston",
    count: `（6 places）`,
    to: "https://community.vuetifyjs.com/",
  },
];
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: black;
}
</style>
