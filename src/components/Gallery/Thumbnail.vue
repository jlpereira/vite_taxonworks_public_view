<template>
  <div class="w-24 h-24">
    <img :src="image.thumb"/>
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