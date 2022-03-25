<template>
  <Card>
    <CardContent class="h-96 max-h-96">
      <VSpinner v-if="isLoading"/>
      <VMap
        ref="map"
        class="h-96 max-h-96"
        :zoom="zoom"
        :geojson="geojson"
        :geojson-options="GeoJSONoptions"
        @geojson:ready="isLoading = false"
      />
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from "vue";
import VMap from '@/components/VMap.vue'
import OtuService from "../services/OtuService";

const props = defineProps({
  otuId: {
    type: [String, Number],
    required: true
  }
})

const zoom = 2
const geojson = ref(null)
const isLoading = ref(true)

const GeoJSONoptions = {
  onEachFeature: (feature, layer) => {
    if (!feature.properties?.base?.label) return
    layer.bindTooltip(
      `<div>${feature.properties.base.label}</div>`,
      { 
        permanent: false,
        sticky: true
      }
    )
  }
}

watch(
  () => props.otuId,
  (newId, oldId) => {
    if(newId === oldId) return
    isLoading.value = true

    OtuService.getGeoJSON(props.otuId).then(({ data }) => {
      geojson.value = data.request_too_large
        ? null
        : data
    })
  },
  { immediate: true }
)



</script>
