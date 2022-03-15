<template>
  <div>
    <div 
      v-for="depiction in depictions"
      :key="depiction.id"
    >
      <p>{{ depiction.label }}</p>
      <p>{{ depictionLabel(depiction) }}</p>
    </div>
  </div>
</template>

<script setup>
import { depictionLabel } from './utils/depictions'

const props = defineProps({
  depictions: {
    type: Array,
    default: () => []
  }
})

</script>
