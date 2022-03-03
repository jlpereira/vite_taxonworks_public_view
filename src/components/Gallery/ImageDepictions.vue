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
import { computed } from 'vue'

const props = defineProps({
  depictions: {
    type: Array,
    default: () => []
  }
})

const depictionLabel = (depiction) => [depiction.caption, depiction.figure_label].join(', ')
</script>
