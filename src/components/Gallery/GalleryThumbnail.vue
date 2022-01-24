<template>
  <div class="ml-1 mr-1 mt-2 bg-black flex flex-col justify-center cursor-pointer w-24 h-24">
    <img :src="image.thumb">
  </div>
</template>

<script setup>

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
})
</script>