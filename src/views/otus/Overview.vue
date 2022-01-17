<template>
<div>
  <div class="grid grid-cols-2 gap-4">
    <div class="grid grid-cols-1 gap-4">
      <OtuGallery/>
      <OtuTypeSpecimen/>
      <OtuCitations/>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <OtuMap/>
      <OtuDescendants/>
    </div>
  </div>
</div>
</template>

<script setup>
import OtuGallery from '@/components/Otu/Gallery.vue'
import OtuTypeSpecimen from '@/components/Otu/TypeSpecimen.vue'
import OtuCitations from '@/components/Otu/Citations.vue'
import OtuMap from '@/components/Otu/Map.vue'
import OtuDescendants from '@/components/Otu/Descendants.vue'
</script>