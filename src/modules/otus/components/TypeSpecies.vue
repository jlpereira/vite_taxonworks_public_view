<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">
        Type species
      </h1>
    </CardHeader>
    <CardContent>
      <p>
        <span v-html="typeSpecies.subject_object_tag" />
      </p>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import OtuService from '../services/OtuService'

const props = defineProps({
  taxonId: {
    type: [String, Number],
    required: true
  }
})

const typeSpecies = ref({})

watch(
  () => props.taxonId, async () => {
  if (!props.taxonId) { return }

  OtuService.getTaxonTypeSpecies(props.taxonId).then(({ data }) => {
    typeSpecies.value = data.type_taxon_name_relationship
  })
}, { immediate: true })
</script>