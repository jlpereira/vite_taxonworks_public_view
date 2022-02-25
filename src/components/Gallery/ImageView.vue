<template>
  <div>
  </div>
</template>

<script setup>

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
  }
})
</script>