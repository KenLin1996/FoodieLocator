<template>
  <div
    class="d-flex justify-center align-center"
    style="border: 1px solid #d9e1e6; border-radius: 4px; min-width: 468px"
  >
    <v-btn prepend-icon="mdi-map-marker" variant="plain" disabled>
      New York
    </v-btn>

    <v-btn
      icon="mdi-crosshairs-gps"
      variant="plain"
      class="rounded-0 theme--light"
    />

    <v-text-field
      label="Search for restaurant"
      placeholder="Search for restaurant"
      density="compact"
      variant="text"
      hide-details
      single-line
    />
    <v-btn class="rounded-0" icon="mdi-magnify" />
  </div>
</template>
<script setup></script>
<style scoped></style>
