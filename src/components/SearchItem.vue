<template>
  <div
    class="d-flex justify-center align-center"
    style="border: 1px solid #d9e1e6; border-radius: 4px; min-width: 468px"
  >
    <v-btn
      prepend-icon="mdi-map-marker"
      variant="plain"
      disabled
      class="text-capitalize"
    >
      New York
    </v-btn>

    <v-btn
      icon="mdi-crosshairs-gps"
      variant="plain"
      class="rounded-0 theme--light"
    />

    <v-text-field
      style="padding: 0px !important"
      placeholder="Search for restaurant"
      density="compact"
      variant="plain"
      hide-details
      single-line
    />
    <v-btn class="rounded-0" icon="mdi-magnify" />
  </div>
</template>
<script setup></script>
<style scoped>
::v-deep .v-field__input {
  padding: 0px !important;
}
</style>
