<template>
  <ul class="list-disc pl-4">
    <li v-for="item in list">
      {{ item.name }}
      <TreeView :list="item.children"/>
    </li>
  </ul>
</template>

<script setup>
import TreeView from '@/components/TreeView.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>
