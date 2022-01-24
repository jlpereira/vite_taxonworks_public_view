<template>
  <div class="flex flex-col">
    <div class="flex justify-center bg-black">
      <div class="h-80 max-h-80 flex items-center justify-center">
        <img
          class="max-h-80 h-max w-100 cursor-zoom-in m-auto"
          :src="selectedImage.original"
        >
      </div>
    </div>
    <div class="flex flex-row justify-center overflow-x-auto">
      <div v-for="image in images">
        <GalleryThumbnail
          :image="image"
          @click="selectedImage = image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import GalleryThumbnail from './GalleryThumbnail.vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const selectedImage = ref({})

watch(() => props.images, newVal => {
  if (newVal && newVal.length) {
    selectedImage.value = newVal[0]
  }
}, {
  immediate: true
})
</script>