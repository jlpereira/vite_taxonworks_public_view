<template>
  <div class="fixed image__viewer bg-opacity-50 bg-black overflow-y-hidden overflow-x-hidden w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="container bg-black relative max-h-full w-full h-full md:h-auto rounded-lg shadow-sm">
      <img
        class="mx-auto cursor-zoom-out max-w-7 w-auto max-w-full rounded-t-lg max-h-[80vh]"
        :src="image.original"
        @click="emit('close')"
      >
      <div class="bg-white attributions bottom-0 h-40 p-4 rounded-b-lg">
        <ImageAttribution :attribution="attribution" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'
import ImageAttribution from './ImageAttribution.vue';

const props = defineProps({
  image: {
    type: Object,
    required: true
  },

  depictions: {
    type: Array,
    default: () => []
  },

  attribution: {
    type: String,
    default: null
  },

  next: {
    type: Boolean,
    default: false
  },

  previous: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close'])

const closeImageViewer = e => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

document.addEventListener('keyup', closeImageViewer)
onUnmounted(() => { document.removeEventListener('keyup', closeImageViewer) })
</script>

<style>
.image__viewer {
  z-index: 2000;
}
</style>