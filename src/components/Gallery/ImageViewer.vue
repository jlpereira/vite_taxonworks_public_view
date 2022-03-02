<template>
  <div class="fixed image__viewer bg-opacity-50 bg-black overflow-y-hidden overflow-x-hidden w-full h-full top-0 left-0 flex items-center justify-center">
    <div class="container bg-black relative max-h-full w-full h-full md:h-auto rounded-lg shadow-sm">
      <div class="relative p-4 rounded-t-lg">
        <img
          class="mx-auto cursor-zoom-out max-w-7 w-auto max-w-full max-h-[80vh]"
          :src="image.original"
          @click="emit('close')"
        >

        <ControlNextImage
          v-if="next"
          class="right-0 absolute my-auto top-1/2 -translate-y-1/2"
          @click="emit('next')"
        />
        <ControlPreviousImage 
          v-if="previous"
          class="left-0 absolute my-auto top-1/2 -translate-y-1/2"
          @click="emit('previous')"
        />
      </div>

      <div class="bg-white attributions bottom-0 h-40 p-4 rounded-b-lg">
        <ImageAttribution :attribution="attribution" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'
import ImageAttribution from './ImageAttribution.vue';
import ControlNextImage from './ControlImageNext.vue'
import ControlPreviousImage from './ControlImagePrevious.vue'

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

const emit = defineEmits([
  'close',
  'previous',
  'next'
])

const handleKeyboard = ({ key }) => {
  switch (key) {
    case 'ArrowLeft':
      if (props.previous) {
        emit('previous')
      }
      break;
    case 'ArrowRight':
      if (props.next) {
        emit('next')
      }
      break;
    case 'Escape':
      emit('close')
      break;
  }
}


document.addEventListener('keyup', handleKeyboard)

onUnmounted(() => document.removeEventListener('keyup', handleKeyboard))
</script>

<style>
.image__viewer {
  z-index: 2000;
}
</style>