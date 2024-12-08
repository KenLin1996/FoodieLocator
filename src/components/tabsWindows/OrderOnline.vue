<template>
  <v-card>
    <div class="d-flex flex-row">
      <v-tabs
        v-model="orderTab"
        color="#000"
        direction="vertical"
        align-tabs="left"
        class="custom-tabs"
      >
        <v-tab
          v-for="(item, index) in tabs"
          :key="index"
          :text="item.name"
          :value="'option-' + index"
        />
      </v-tabs>

      <v-tabs-window v-model="orderTab" class="w-100" style="padding: 0px 32px">
        <v-tabs-window-item
          v-for="(item, index) in tabs"
          :key="index"
          :value="'option-' + index"
        >
          <div class="categoryBtn">
            <v-btn
              prepend-icon="mdi-menu"
              style="
                background-color: #d23f57;
                color: white;
                margin-bottom: 16px;
              "
              width="136"
              @click="triggerSideBar"
            >
              Categories
            </v-btn>
          </div>

          <h3 style="font-size: 20px; margin-bottom: 16px">
            {{ item.name }}
          </h3>

          <ProductCardC v-for="n in item.counts" :key="n" />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-card>
</template>
<script setup>
import { ref, inject } from "vue";
import ProductCardC from "../productCard/ProductCardC.vue";
const orderTab = ref("option-0");

const openSideBar = inject("openSideBar");
const triggerSideBar = () => {
  if (openSideBar) {
    openSideBar();
  }
};

const tabs = [
  { name: "Recomended (4)", counts: 4 },
  { name: "DPB Special Combos (1)", counts: 1 },
  { name: "Chineese Starters (3)", counts: 3 },
  { name: "Chinese Main Course (7)", counts: 7 },
  { name: "Indian Main Course (6)", counts: 6 },
  { name: "Rice & Pulao (7)", counts: 7 },
  { name: "Desserts (1)", counts: 1 },
  { name: "Soup & wonton (5)", counts: 5 },
  { name: "Accompaniment (4)", counts: 4 },
  { name: "Biryani (1)", counts: 1 },
];

// const recommends = {
//   title: "Recommended",
//   products: [
//     {
//       img: "",
//       name: "",
//       label: "",
//       comments: 20,
//       originalPrice: 25,
//       salePrice: 22.5,
//       discount: 10,
//       note: "4 Pcs mutton in chicken keema gravy",
//     },
//   ],
// };
</script>
<style scoped lang="scss">
.v-tab-item--selected {
  border-right: 3px solid #d23e57;
}

::v-deep .v-tab__slider {
  display: none;
}

::v-deep .v-btn__content {
  max-width: 279px;
  font-size: 14px;
  font-weight: 400;
}
.v-slide-group--vertical .v-tab {
  height: 14px;
  align-items: start;
  margin-bottom: 26px;
}
.v-tab.v-tab.v-btn {
  height: 14px;
}

.categoryBtn {
  display: none;
}
@media (max-width: 960px) {
  ::v-deep .v-slide-group__content {
    display: none;
  }
  ::v-deep .categoryBtn {
    display: block;
  }
}
</style>
