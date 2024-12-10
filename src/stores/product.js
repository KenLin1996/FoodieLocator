import { defineStore } from "pinia";
import { useCartStore } from "@/stores/cart.js";

export const useProductStore = defineStore("product", () => {
  // 定義 state
  const menus = [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qcvQkilIuzWmKjUBi08r-ktFF3n_2X-BgA&s",
      name: "New York Cheesecake",
      rate: 4.5,
      price: 29.95,
      category: "Desserts",
      city: "New York",
      time: "3 - 5",
      discount: {
        hasDiscount: true,
        value: 65,
      },
      label: "MUST TRY",
      comments: 22,
      note: "The dish is fresh and tastes great!",
      to: "/resturant/FoodMenu",
    },
    {
      id: 1,
      img: "https://foodhub-nuxt.vercel.app/_nuxt/img/16.bbc24cb.jpg",
      name: "California Roll",
      rate: 4.5,
      price: 10,
      category: "Sushi",
      city: "Los Angeles",
      time: "3 - 5",
      discount: {
        hasDiscount: true,
        value: 60,
      },
      label: "MUST TRY",
      comments: 30,
      note: "Every bite is satisfying, so delicious!",
      to: "/resturant/FoodMenu",
    },
    {
      id: 2,
      img: "https://t3.ftcdn.net/jpg/09/46/66/06/360_F_946660682_g6fHbVm33zRMHe9H3f0WDoi3fiupcKRW.jpg",
      name: "New York-style Pizza",
      rate: 4.5,
      price: 33.65,
      category: "Pizza",
      city: "New York",
      time: "3 - 5",
      discount: {
        hasDiscount: false,
        value: 30,
      },
      label: "MUST TRY",
      comments: 15,
      note: "Beyond expectations, very creative!",
      to: "/resturant/FoodMenu",
    },
    {
      id: 3,
      img: "https://www.mystateline.com/wp-content/uploads/sites/17/2023/02/AdobeStock_61641020_Preview.jpeg?w=1280",
      name: "Italian Beef Sandwich",
      rate: 4.5,
      price: 24,
      category: "Sandwiches",
      city: "Chicago",
      time: "8 - 10",
      discount: {
        hasDiscount: true,
        value: 55,
      },
      label: "MUST TRY",
      comments: 19,
      note: "Each dish is unique.",
      to: "/resturant/FoodMenu",
    },
    {
      id: 4,
      img: "https://static.vecteezy.com/system/resources/previews/027/537/012/non_2x/a-boston-cream-pie-with-chocolate-icing-on-a-plate-ai-generated-free-photo.jpeg",
      name: "Boston Cream Pie",
      rate: 4,
      price: 18.95,
      category: "Desserts",
      city: "Boston",
      time: "8 - 10",
      discount: {
        hasDiscount: true,
        value: 30,
      },
      label: "Normal",
      comments: 22,
      note: "The food is average, nothing particularly memorable.",
      to: "/resturant/FoodMenu",
    },
    {
      id: 5,
      img: "https://img.freepik.com/premium-photo/kolaches-filled-with-seasonal-fruits-yummy-delicious-kolaches-food-image-photography_1295756-183696.jpg",
      name: "Kolaches",
      rate: 4,
      price: 2.99,
      category: "Baking",
      city: "Houston",
      time: "8 - 10",
      discount: {
        hasDiscount: false,
        value: 30,
      },
      label: "Normal",
      comments: 43,
      note: "Overall it's decent, but nothing really stands out.",
      to: "/resturant/FoodMenu",
    },
    {
      id: 6,
      img: "https://img.freepik.com/premium-photo/chicagostyle-deep-dish-pizza-thick-crust-with-cheese-chunky-tomato-sauce_818261-25460.jpg",
      name: "Deep-Dish Pizza",
      rate: 3.5,
      price: 9.99,
      category: "Pizza",
      city: "Chicago",
      time: "15 - 20",
      discount: {
        hasDiscount: false,
        value: 30,
      },
      label: "Bad",
      comments: 122,
      note: "The food tastes terrible, not to my liking at all.",
      to: "/resturant/FoodMenu",
    },
    {
      id: 7,
      img: "https://d-mars.com/wp-content/uploads/2024/05/iStock-172410532-1.jpg",
      name: "Pecan Pie",
      rate: 3,
      price: 45,
      category: "Desserts",
      city: "Houston",
      time: "15 - 20",
      discount: {
        hasDiscount: true,
        value: 30,
      },
      label: "Bad",
      comments: 232,
      note: "This meal is really disappointing, not worth it at all.",
      to: "/resturant/FoodMenu",
    },
  ];

  // 定義 actions
//   const addProductToCart = (product) => {
//     const cartStore = useCartStore(); // 獲取 cart store 實例
//     cartStore.addItemToCart(product); // 添加商品到購物車
//   };

  // 返回需要在組件中使用的屬性和方法
  return {
    menus,
    // addProductToCart,
  };
});
