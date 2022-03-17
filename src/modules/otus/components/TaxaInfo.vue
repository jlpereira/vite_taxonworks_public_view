<template>
  <div>
    <h2 class="text-1xl text-gray-700 capitalize">
      {{ taxon.rank }}
    </h2>
    <h1 class="text-2xl">
      <span
        v-if="taxon.id === taxon.cached_valid_taxon_name_id"
        v-html="`${taxon.cached_html} ${taxon.cached_author_year}`"
      />
      <span
        v-else
        v-html="taxon.original_combination" 
      />
      <span 
        :class="['ml-2', taxon.cached_is_valid
          ? 'text-green-600'
          : 'text-red-600'
        ]"
        v-html="status"
      />
    </h1>
    <h2 class="text-1xl text-gray-700">
      [Here goes common name]
    </h2>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  taxon: {
    type: Object,
    default: () => {}
  }
})

const status = computed(() => props.taxon.cached_is_valid
  ? '&#10003;'
  : '&#10005;'
)

</script>
