<template>
  <Card>
    <CardContent class="h-96 max-h-96">
      <l-map 
        class="h-96 max-h-96"
        :zoom="15"
        :center="[39.75621, -104.99404]"
      >
        <l-geo-json 
          :geojson="geojson"
          :options="geojsonOptions"
        />
        <l-tile-layer
          :url="tileUrl"
          :attribution="attribution"
        />
      </l-map>
    </CardContent>
  </Card>
</template>

<script setup>
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet"
const tileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
const attribution = '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
const zoom = 15
const geojsonOptions = {}
const geojson = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}
</script>