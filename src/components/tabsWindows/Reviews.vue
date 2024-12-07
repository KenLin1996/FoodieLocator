<template>
  <v-row>
    <v-col lg="6" cols="12">
      <CommentCards v-for="(item, index) in users" :key="index" :item="item" />
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
import CommentCards from "../CommentCards.vue";

const users = ref([
  {
    avatar: "https://foodhub-nuxt.vercel.app/_nuxt/img/8.38098d6.png",
    name: "Abriella Bond",
    reviews: 2,
    followers: 9,
    rate: 4.0,
    time: 3,
    content: "I've never had such delicious food.",
    imgs: [
      "https://foodhub-nuxt.vercel.app/_nuxt/img/foodFive.63a95c3.png",
      "https://foodhub-nuxt.vercel.app/_nuxt/img/foodSix.d1a6e1c.png",
    ],
    likes: 4,
    comments: [
      {
        avatar: "https://foodhub-nuxt.vercel.app/_nuxt/img/6.9bc51a4.png",
        name: "Abraham",
        comment: "I think the taste is very ordinary",
      },
      {
        avatar: "https://foodhub-nuxt.vercel.app/_nuxt/img/7.7edf59d.png",
        name: "Aaron",
        comment: "I didn't expect to eat such delicious food!",
      },
    ],
  },
]);
</script>
