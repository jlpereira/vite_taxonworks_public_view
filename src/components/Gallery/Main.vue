<template>
  <div class="flex flex-col">
    <div class="flex justify-center bg-black">
      <div class="h-80 max-h-80 flex items-center justify-center">
        <img
          class="max-h-80 h-max w-100 cursor-zoom-in m-auto"
          :src="selectedImage.original"
          @click="isImageViewerOpen = true"
        >
      </div>
    </div>
    <div class="flex flex-row overflow-x-auto">
      <div 
        v-for="image in images"
        :key="image.id"
      >
        <GalleryThumbnail
          :image="image"
          @click="selectedImage = image; isImageViewerOpen = true"
        />
      </div>
    </div>
  </div>
  <ImageViewer 
    v-if="isImageViewerOpen"
    :image="selectedImage"
    @close="isImageViewerOpen = false"
  />
</template>

<script setup>
import { ref, watch } from 'vue'
import GalleryThumbnail from './GalleryThumbnail.vue'
import ImageViewer from './ImageViewer.vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

const selectedImage = ref({})
const isImageViewerOpen = ref(false)

watch(
  () => props.images, 
  newVal => {
    if (newVal && newVal.length) {
      selectedImage.value = newVal[0]
    } else {
      selectedImage.value = {}
    }
  }, 
  { immediate: true }
)
</script>