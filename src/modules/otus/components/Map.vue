<template>
  <Card>
    <CardContent class="h-96 max-h-96">
      <l-map 
        class="h-96 max-h-96"
        :zoom="zoom"
        :center="[40.102041362105034, -88.2271837772091]"
      >
        <l-geo-json 
          :geojson="geojson"
          :options="GeoJSONoptions"
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
const zoom = 13
const geojson = { 
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {
        name: "University of Illinois"
    },
    geometry: {
        type: "Point",
        coordinates: [-88.2271837772091, 40.102041362105034]
    }
  }]
}

const GeoJSONoptions = {
  onEachFeature: (feature, layer) => {
    layer.bindTooltip(
      `<div>${feature.properties.name}</div>`,
      { 
        permanent: false,
        sticky: true
      }
    )
  }
}

</script>
