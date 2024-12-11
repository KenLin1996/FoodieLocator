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
          class="text-capitalize"
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

          <!-- <ProductCardC v-for="n in item.counts" :key="n" /> -->
          <ProductCardC
            v-for="item in item.products"
            :key="item"
            :product="item"
          />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-card>
</template>
<script setup>
import { ref, inject } from "vue";
import ProductCardC from "../productCard/ProductCardC.vue";
import { useProductStore } from "@/stores/product.js";

const productStore = useProductStore();
const { menus } = productStore;
const orderTab = ref("option-0");

const openSideBar = inject("openSideBar");
const triggerSideBar = () => {
  if (openSideBar) {
    openSideBar();
  }
};

const tabs = [
  {
    name: "Recomended",
    counts: 4,
    products: [
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png",
        name: "Tandoori Chicken (Full)",
        label: "Recomended",
        comments: 43,
        price: 90,
        discount: 10,
      },
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/15.15c95d2.jpg",
        name: "Starbucks",
        label: "Recomended",
        comments: 100,
        price: 80,
        discount: 20,
      },
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/18.2a12c1e.jpg",
        name: "Red Chillies",
        label: "Recomended",
        comments: 13,
        price: 65,
        discount: 35,
      },
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/21.eee29b5.jpg",
        name: "Woondal",
        label: "Recomended",
        comments: 31,
        price: 75,
        discount: 25,
      },
    ],
  },
  {
    name: "DPB Special Combos",
    counts: 1,
    products: [
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/5.8a5927f.png",
        name: "Swedish Meatballs",
        label: "DPB Special Combos",
        comments: 1,
        price: 80,
        discount: 20,
      },
    ],
  },
  {
    name: "Chinese Food",
    counts: 3,
    products: [
      {
        img: "https://media.zenfs.com/zh-tw/supertaste_tvbs_com_tw_971/82812d257c8e3a56d2f632849128718b",
        name: "Fried Rice",
        label: "Chinese Food",
        comments: 1,
        price: 60,
        discount: 40,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMF4mrBrB8lm9tgo01O0A5h-LhLwtThaAJ_g&s",
        name: "Xiao Long Bao",
        label: "Chinese Food",
        comments: 3,
        price: 50,
        discount: 50,
      },
    ],
  },
  {
    name: "Indian Food",
    counts: 6,
    products: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ahVV-EFhlhti7US7U-k5vU_ht8GAOETvIQ&s",
        name: "Indian Curry",
        label: "Indian Food",
        comments: 10,
        price: 10,
        discount: 90,
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSishFUbY756cKbRBkWoBG-lRmCCDSiI_aRXA&s",
        name: "Naan",
        label: "Indian Food",
        comments: 10,
        price: 5,
        discount: 95,
      },
    ],
  },
  {
    name: "Japan Food",
    counts: 7,
    products: [
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",
        name: "Sushi",
        label: "Japan Food",
        comments: 1,
        price: 80,
        discount: 20,
      },
    ],
  },
  {
    name: "Desserts",
    counts: 1,
    products: [
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/22.c99d20e.jpg",
        name: "Blueberry Cake",
        label: "Dessertss",
        comments: 13,
        price: 70,
        discount: 30,
      },
    ],
  },
  {
    name: "Soup",
    counts: 5,
    products: [
      {
        img: "https://foodhub-nuxt.vercel.app/_nuxt/img/7.ea86fb7.png",
        name: "Pumpkin Soup",
        label: "Soup",
        comments: 1,
        price: 75,
        discount: 25,
      },
    ],
  },
];
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
