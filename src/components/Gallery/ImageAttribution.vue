<template>
  <div>
    <h1 class="text-md">Attribution</h1>
    <p>{{ attribution }}</p>
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
