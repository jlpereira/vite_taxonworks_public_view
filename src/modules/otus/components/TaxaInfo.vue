<template>
  <div>
    <h2 class="text-1xl text-gray-700 capitalize">
      {{ taxon.rank }}
    </h2>
    <h1 
      class="text-2xl"
      v-html="taxon.cached_html"
    />
    <h2 class="text-1xl text-gray-700">
      [Here goes common name]
    </h2>
  </div>
</template>

<script setup>

const props = defineProps({
  taxon: {
    type: Object,
    default: () => {}
  }
})

</script>
