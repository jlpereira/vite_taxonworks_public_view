<template>
  <l-map style="height:50vh">
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
  </l-map>
</template>

<script setup>
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
const geojsonOptions = {};
</script>