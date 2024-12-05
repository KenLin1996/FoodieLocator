<template>
  <router-link :to="item.to">
    <v-card class="mx-auto">
      <div class="position-relative">
        <v-img :src="item.img" />
        <template v-if="item.discount?.hasDiscount">
          <v-chip
            class="mt-3"
            style="
              position: absolute;
              top: 0;
              background-color: #d23f57;
              color: #fff;
              border-radius: 0px 24px 24px 0px;
            "
          >
            Flat {{ item.discount.value }}% Off
          </v-chip>
        </template>
      </div>
      <template v-if="item.showLifestyle">
        <v-card-title class="text-center">
          <h3>{{ item.name }}</h3>
        </v-card-title>
      </template>
      <template v-else>
        <div
          id="cardTitle"
          class="pa-4 d-flex justify-space-between align-center"
        >
          <span
            class="d-inline-block"
            style="font-size: 18px; font-weight: 500"
          >
            {{ item.name }}
          </span>
          <div class="d-flex align-center">
            <v-rating
              :model-value="1"
              :length="1"
              color="amber"
              density="compact"
              size="small"
              half-increments
              readonly
            />
            <div>{{ item.rate }} <span class="text-grey">/5</span></div>
          </div>
        </div>
        <div id="cardContent" class="px-4 grey--text text--darken-1 mb-4">
          <p class="d-flex justify-space-between align-center">
            <span class="me-1" style="color: #d23f57"> ${{ item.cost }} </span>
            <span style="color: #757575">
              • {{ item.category }}, {{ item.city }}
            </span>
          </p>
          <p>
            <span style="color: #757575">• {{ item.time }}</span>
          </p>
        </div>
      </template>
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
<style scoped lang="scss"></style>
