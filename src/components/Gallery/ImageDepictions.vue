<template>
  <div>
    <h1 class="text-md">Depictions</h1>
  </div>
</template>

<script setup>

const props = defineProps({
  depictions: {
    type: Array,
    default: () => []
  }
})
</script>
