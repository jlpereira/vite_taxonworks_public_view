<template>
  <li class="inline-flex items-center text-sm">
    <router-link
      class="p-2 pb-2 block py-2 pr-4 pl-3 text-gray-700 rounded-tl rounded-tr"
      :class="elementClass"
      :to="to">
      <slot/>
    </router-link>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false
  },

  to: {
    type: [String, Object],
    required: true
  }
})

const elementClass = computed(() => props.active
  ? ['bg-gray-50', 'font-bold', 'border', 'border-b-0']
  : []
)
</script>
