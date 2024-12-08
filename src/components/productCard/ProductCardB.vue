<!-- Collections 卡片 -->
<template>
  <router-link :to="item.to">
    <v-card>
      <v-img :src="item.img" class="align-end" height="300" cover>
        <div>
          <v-card-title class="text-white">
            <h5 style="font-size: 16px">
              {{ item.name }}
            </h5>
            <div class="d-flex align-center">
              <p style="font-size: 12px">{{ item.count }} Places</p>
              <v-icon icon="mdi-chevron-right" size="x-small" />
            </div>
          </v-card-title>
        </div>
      </v-img>
    </v-card>
  </router-link>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
