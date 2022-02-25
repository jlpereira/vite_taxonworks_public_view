<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">
        Citations
      </h1>
    </CardHeader>
    <CardContent>
      <ul class="list-disc pl-4 text-sm">
        <li v-for="citation in citations">
          <span v-html="citation.citation_source_body" />
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import OtuService from '../services/OtuService';

const props = defineProps({
  taxonId: {
    type: [Number, String],
    required: true
  }
})

const citations = ref([])

watch(() => props.taxonId, async () => {
  if (!props.taxonId) { return }

  citations.value = (await OtuService.getTaxonNameCitations(props.taxonId)).data
}, { immediate: true })

</script>
