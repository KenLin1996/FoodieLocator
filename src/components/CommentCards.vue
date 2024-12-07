<template>
  <div class="d-flex align-center flex-wrap mb-4">
    <v-avatar class="me-4">
      <v-img :src="item.avatar" />
    </v-avatar>
    <div>
      <h5>{{ item.name }}</h5>
      <p>{{ item.reviews }} Reviews, {{ item.followers }} Followers</p>
    </div>
  </div>
  <div class="d-flex align-center mb-2">
    <v-rating
      :model-value="5"
      :length="5"
      color="amber"
      density="compact"
      size="small"
      half-increments
      readonly
    />
    <span style="font-size: 14px; color: #212121; font-weight: bold"
      >&ensp;{{ item.rate }}.0&ensp;</span
    >
    <span class="text-grey" style="font-size: 14px"
      >{{ item.time }} Days Ago</span
    >
  </div>
  <h5 class="mb-3" style="font-size: 16px; color: #616161; font-weight: 400">
    {{ item.content }}
  </h5>
  <v-row class="mb-2">
    <v-col v-for="img in item.imgs" :key="img" lg="6" cols="6">
      <v-img :src="img" />
    </v-col>
  </v-row>
  <div>
    <p style="font-size: 14px; color: #757575">
      {{ item.likes }} Likes, {{ item.comments.length }} Comments
    </p>
    <div class="mt-4">d</div>
  </div>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
