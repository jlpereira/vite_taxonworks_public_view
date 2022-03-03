<template>
  <div>
    <p>{{ attribution.label }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  attribution: {
    type: String,
    default: null
  }
})
</script>
