<template>
  <v-container>
    <v-row class="d-flex justify-space-between align-center">
      <v-col cols="7">
        <v-row class="d-flex align-center w-100">
          <v-col cols="12" class="d-flex align-center justify-start">
            <v-avatar style="margin-right: 16px">
              <router-link to="/">
                <v-img
                  width="48px"
                  height="48px"
                  src="https://foodhub-nuxt.vercel.app/_nuxt/img/logo.4a3964e.png"
                />
              </router-link>
            </v-avatar>

            <SearchItem v-if="isLargeScreen && showSearch" />
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex align-center justify-end flex-nowrap" cols="5">
        <v-btn
          prepend-icon="mdi-account-circle-outline"
          variant="text"
          :class="showSearch ? 'showSearch' : 'navIconColor'"
          @click="dialog = !dialog"
        >
          <span class="hidden-text">ACCOUNT</span>
        </v-btn>
        <v-btn
          prepend-icon="mdi-cart-outline"
          variant="text"
          :class="showSearch ? 'showSearch' : 'navIconColor'"
        >
          (dc)
        </v-btn>
        <v-app-bar-nav-icon
          :class="showSearch ? 'showSearch' : 'navIconColor'"
        />
      </v-col>
    </v-row>
  </v-container>

  <!-- ACCOUNT 彈出視窗 -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card>
      <div class="px-3 px-md-10 py-8">
        <h3 class="mb-2 text-center">Welcome To Foodie Locator</h3>
        <h5 class="mb-9 text-center" style="font-size: 12px">
          Log in with email & password
        </h5>

        <v-form @submit.prevent="submit">
          <p
            class="mb-1"
            style="color: #212121; font-size: 14px; font-weight: 300"
          >
            Email or Phone Number
          </p>
          <v-text-field
            v-model="account"
            density="compact"
            placeholder="Example@gmail.com"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            required
            :rules="[() => !!account || 'This field is required']"
          />
          <p
            class="mb-1"
            style="color: #212121; font-size: 14px; font-weight: 300"
          >
            Password
          </p>
          <v-text-field
            v-model="password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            required
            :rules="[() => !!password || 'This field is required']"
            class="mb-2"
            @click:append-inner="visible = !visible"
          />
          <div>
            <v-btn
              class="w-100"
              style="background-color: #d23f57; color: #fff"
              type="submit"
            >
              Login
            </v-btn>
          </div>
        </v-form>
        <div
          class="d-flex align-center justify-center col-lg-8 col-10 pa-3 mx-5"
        >
          <v-divider />
          <span class="mx-4">on</span>
          <v-divider />
        </div>
        <div class="d-flex flex-column">
          <v-btn
            class="w-100 mb-4"
            prepend-icon="mdi-facebook "
            style="background-color: #3f50b5; color: #fff; font-weight: 400"
          >
            Continue With Facebook </v-btn
          ><v-btn
            class="w-100 mb-4"
            prepend-icon="mdi-google "
            style="background-color: #1876d1; color: #fff; font-weight: 400"
          >
            Continue With Google
          </v-btn>
          <p class="text-center my-3" style="font-size: 14px">
            Don't have account?&ensp;

            <router-link style="text-decoration: underline" to="/">
              <span> Sign Up </span>
            </router-link>
          </p>
        </div>
      </div>

      <div class="py-4" style="background-color: #f6f9fc">
        <p class="text-center">
          Forgot Your Password&ensp;

          <router-link style="text-decoration: underline" to="/">
            <span> Reset It </span>
          </router-link>
        </p>
      </div>
    </v-card>
  </v-dialog>

  <!-- 購物車側邊欄 -->
  <!-- 漢堡側邊欄 -->
</template>
<script setup>
import SearchItem from "../SearchItem.vue";
import { ref, onMounted, onBeforeUnmount, defineProps } from "vue";

// const dialog = ref(false);
const dialog = ref(false);
const account = ref();
const visible = ref(false);
const password = ref();
const props = defineProps({
  showSearch: {
    type: Boolean,
    default: true,
  },
});

const isLargeScreen = ref(window.innerWidth >= 960);

const submit = () => {
  account.value = "";
  password.value = "";
};

// 監聽螢幕大小變化的處理方法
const handleResize = () => {
  isLargeScreen.value = window.innerWidth >= 960; // 更新螢幕寬度狀態
};

// 註冊視窗大小變更的監聽器
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

// 在組件銷毀時移除監聽器，防止內存泄漏
onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<style scoped>
/* 螢幕寬度小於 960px 時隱藏 */
.navIconColor {
  color: white !important;
}
@media (max-width: 600px) {
  .hidden-text {
    display: none;
  }
}
</style>
