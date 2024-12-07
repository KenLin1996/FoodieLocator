<template>
  <v-footer class="d-flex flex-column px-0" app>
    <v-container class="w-100">
      <v-row>
        <v-col cols="12">
          <h2 class="mb-5">Popular Localities In & Around New York</h2>
          <v-row>
            <template v-for="n in 4" :key="n">
              <v-col class="mb-3" sm="6" md="6" lg="3" xl="3" cols="12">
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
    <div class="w-100" style="background-color: #f6f9fc">
      <v-container class="w-100" style="padding-top: 64px">
        <v-row>
          <v-col cols="12" lg="3">
            <router-link to="/">
              <v-avatar
                class="mb-6"
                style="width: 48px; height: 48px; min-width: 48px"
              >
                <v-img
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"
                />
              </v-avatar>
            </router-link>
            <h5 class="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </h5>
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
          <template v-for="info in footerInfos" :key="info.name">
            <v-col cols="12" lg="3">
              <h2 style="margin-bottom: 16px">
                {{ info.name }}
              </h2>
              <div
                v-for="item in info.servers"
                :key="item.name"
                class="d-flex flex-column"
                style="margin-bottom: 12px"
              >
                <router-link v-if="item.to" :to="item.to">
                  {{ item.name }}
                </router-link>

                <div class="d-flex flex-row flex-wrap">
                  <template v-for="i in item.mediaIcons" :key="i.icon">
                    <v-btn
                      class="me-2"
                      theme="dark"
                      rounded
                      variant="elevated"
                      size="32"
                      color="#103460"
                      :to="i.to"
                    >
                      <v-icon>
                        {{ i.icon }}
                      </v-icon>
                    </v-btn>
                  </template>
                </div>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </v-footer>
</template>

<script setup>
const citys = [
  {
    name: "New York",
    count: `（26 places）`,
    to: "/resturant/FoodMenu",
  },
  {
    name: "Los Angeles",
    count: `（14 places）`,
    to: "/resturant/FoodMenu",
  },
  {
    name: "Chicago",
    count: `（10 places）`,
    to: "/resturant/FoodMenu",
  },
  {
    name: "Boston",
    count: `（20 places）`,
    to: "/resturant/FoodMenu",
  },
  {
    name: "Houston",
    count: `（6 places）`,
    to: "/resturant/FoodMenu",
  },
];

const footerInfos = [
  {
    name: "About Us",
    servers: [
      { name: "Careers", to: "/" },
      { name: "Our Stores", to: "/" },
      { name: "Our Cares", to: "/" },
      { name: "Terms & Conditions", to: "/" },
      { name: "Privacy Policy", to: "/" },
    ],
  },
  {
    name: "Customer Care",
    servers: [
      { name: "Help Center", to: "/" },
      { name: "How To Buy", to: "/" },
      { name: "Track Your Order", to: "/" },
      { name: "Corporate & Bulk Purchasing", to: "/" },
      { name: "Returns & Refunds", to: "/" },
    ],
  },
  {
    name: "Contact Us",
    servers: [
      {
        name: "Jalalabad 20/1, Shah Farid Road Sylhet, Bangladesh.",
        to: "/",
      },
      { name: "Email: uilib@gmail.com", to: "/" },
      { name: "Phone: +880 1123 456 780", to: "/" },
      { name: "Terms & Conditions", to: "/" },
      { name: "Privacy Policy", to: "/" },
      {
        mediaIcons: [
          { icon: "mdi-facebook theme--dark", to: "/" },
          { icon: "mdi-twitter", to: "/" },
          { icon: "mdi-instagram", to: "/" },
          { icon: "mdi-youtube", to: "/" },
          { icon: "mdi-google", to: "/" },
        ],
      },
    ],
  },
];
</script>

<style scoped lang="scss"></style>
