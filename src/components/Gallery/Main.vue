<template>
  <div class="flex flex-col">
    <div class="flex justify-center bg-black">
      <div class="h-80 content-center">
        <img
          class="max-h-80 cursor-zoom-in"
          :src="selectedImage.original"/>
      </div>
    </div>
    <div class="flex flex-row justify-center overflow-x-auto">
      <div v-for="image in images">
        <GalleryThumbnail
          class="ml-1 mr-1 mt-2 bg-black flex flex-col justify-center cursor-pointer"
          @click="selectedImage = image"
          :image="image"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

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