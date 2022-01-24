<template>
<div>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="grid grid-cols-1 gap-4">
      <component 
        v-for="component in componentsLayout.left"
        :is="component"
        :otu-id="otuId"
        :taxon-id="taxonId"
      />
    </div>
    <div class="grid grid-cols-1 auto-rows-min gap-4">
      <component 
        v-for="component in componentsLayout.right"
        :is="component"
        :otu-id="otuId"
        :taxon-id="taxonId"
      />
    </div>
  </div>
</div>
</template>

<script setup>
import OtuGallery from '@/modules/otus/components/Gallery.vue'
import OtuTypeSpecimen from '@/modules/otus/components/TypeSpecimen.vue'
import OtuCitations from '@/modules/otus/components/Citations.vue'
import OtuMap from '@/modules/otus/components/Map.vue'
import OtuDescendants from '@/modules/otus/components/Descendants.vue'

console.log("Entra")

const componentsLayout = {
  left: [
    OtuGallery,
    OtuTypeSpecimen,
    OtuCitations
  ],
  right: [
    OtuMap,
    OtuDescendants
  ]
}

const props = defineProps({
  taxonId: {
    type: [Number, String],
    required: true
  },

  otuId: {
    type: [Number, String],
    required: true
  }
})
</script>