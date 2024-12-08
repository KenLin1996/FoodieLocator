<!-- 橫式商品卡 -->
<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex justify-space-between align-center flex-wrap">
        <div class="d-flex flex-wrap mb-4">
          <v-avatar class="me-3 rounded-0" size="150">
            <v-img
              src="https://foodhub-nuxt.vercel.app/_nuxt/img/4.780fc7d.png"
              cover
            />
          </v-avatar>
          <div>
            <h5
              class="mb-2"
              style="
                font-size: 16px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.87);
              "
            >
              Tandoori Chicken (Full)
            </h5>
            <v-chip
              style="background-color: #f5f5f5"
              link
              size="small"
              class="mb-2"
            >
              <span style="color: #0f3460">MUST TRY</span>
            </v-chip>
            <div class="d-flex align-center mb-3">
              <v-rating
                :model-value="5"
                :length="5"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              />
              <h6 class="ms-3" style="font-size: 16px; color: #757575">(22)</h6>
            </div>
            <div class="d-flex mb-1" style="font-size: 14px">
              <p
                class="me-2 text-decoration-line-through"
                style="color: #757575"
              >
                $25
              </p>
              <p class="me-2">$22.5</p>
              <p style="color: #d23f57">10%off</p>
            </div>
            <p style="font-size: 14px; color: #757575">
              (4 Pcs mutton in chicken keema gravy)
            </p>
          </div>
        </div>
        <div>
          <v-btn append-icon="mdi-plus" variant="outlined" color="#d23f57">
            ADD
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script setup></script>
<style scoped></style>
