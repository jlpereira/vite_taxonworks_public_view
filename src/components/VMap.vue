<template>
  <div
    ref="leafletMap"
    :style="{ width: props.width, height: props.height }"
  />
</template>

<script setup>
import L from 'leaflet'
import { 
  computed,
  onMounted,
  onUnmounted,
  ref,
  watch,
  nextTick
} from 'vue'

const props = defineProps({
  zoomAnimate: {
    type: Boolean,
    default: false
  },

  width: {
    type: String,
    default: undefined
  },

  height: {
    type: String,
    default: undefined
  },

  zoom: {
    type: Number,
    default: 18
  },

  center: {
    type: Array,
    default: () => [0, 0]
  },

  geojson: {
    type: Object,
    default: undefined
  },

  fitBounds: {
    type: Boolean,
    default: true
  },

  zoomBounds: {
    type: Number,
    default: undefined
  },

  geojsonOptions: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['geojson:ready'])

let mapObject
let observeMap
let geoJSONGroup = new L.FeatureGroup()
const leafletMap = ref(null)
const tiles = {
  osm: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  })
}

const fitBoundsOptions = computed(() =>
  ({
    maxZoom: props.zoomBounds,
    zoom: {
      animate: props.zoomAnimate
    }
  })
)

watch(
  () => props.geojson, 
  newVal => {
    geoJSONGroup.clearLayers()
    setGeoJSON(newVal)
  }, 
  { deep: true }
)

onMounted(() => {
  mapObject = L.map(leafletMap.value, {
    center: props.center,
    zoom: props.zoom
  })

  geoJSONGroup = new L.FeatureGroup()
  geoJSONGroup.addTo(mapObject)

  tiles.osm.addTo(mapObject)
  initEvents()
})

const resizeMap = () => {
  if(!geoJSONGroup) return
  const bounds = geoJSONGroup.getBounds()

  mapObject.invalidateSize()
  nextTick(() => {
    if (Object.keys(bounds).length && props.fitBounds) {
      mapObject.fitBounds(bounds, fitBoundsOptions.value)
    }
  })
}

const initEvents = () => {
  observeMap = new ResizeObserver(entries => {
    const { width } = entries[0].contentRect
    resizeMap(width)
  })
  observeMap.observe(leafletMap.value)
}

onUnmounted(() => {
  geoJSONGroup.clearLayers()
  observeMap?.disconnect()
})

const setGeoJSON = geojson => {
  if (geojson) {
    L.geoJSON(geojson, {
      ...props.geojsonOptions
    }).addTo(geoJSONGroup)

    mapObject.fitBounds(geoJSONGroup.getBounds(), fitBoundsOptions.value)
  }

  emit('geojson:ready', geoJSONGroup)
}

</script>