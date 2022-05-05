<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">
        Citations
      </h1>
    </CardHeader>
    <CardContent>
      <ul class="text-sm">
        <CitationRow
          v-for="citation in citations"
          :key="citation.id"
          :citation="citation"
        />
      </ul>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import CitationRow from './CitationRow.vue'
import OtuService from '../../services/OtuService';

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
