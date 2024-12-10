// src/stores/useCartStore.js
import { defineStore } from "pinia";
import { ref } from "vue"; // 引入 ref 用來定義響應式狀態

export const useCartStore = defineStore("cart", () => {
  // 使用 ref 定義響應式狀態
  const items = ref([
  ]); // 購物車內的商品項目

  // 添加商品到購物車
  const addItemToCart = (product) => {
    const existingProduct = items.value.find(
      (item) => item.name === product.name
    );
    if (existingProduct) {
      // 如果已經存在，則增加數量
      existingProduct.quantity++;
    } else {
      // 否則，將新商品添加到購物車中，數量設為 1
      items.value.push({ ...product, quantity: 1 });
    }
  };

  // 刪除購物車中的商品
  const removeItemFromCart = (productId) => {
    items.value = items.value.filter((item) => item.name !== productId.name);
  };

  // 減少商品的數量
  const decreaseQuantity = (productId) => {
    const product = items.value.find((item) => item.name === productId.name);
    if (product && product.quantity > 1) {
      product.quantity--; // 減少商品數量
    } else {
      removeItemFromCart(productId); // 如果數量是 1，則移除商品
    }
  };

  // 返回需要在組件中使用的狀態和方法
  return {
    items,
    addItemToCart,
    removeItemFromCart,
    decreaseQuantity,
  };
});
