<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">Citations</h1>
    </CardHeader>
    <CardContent>
      <ul class="list-disc pl-4 text-sm">
        <li v-for="citation in citations">
          <span v-html="citation.citation_source_body"/>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { makeRequest } from '@/utils/makeRequest';

const route = useRoute()
const citations = ref([])

makeRequest.get(`/otus/${route.params.id}`).then(({ data }) => {
  makeRequest.get('/citations.json', { 
    params: {
      citation_object_id: data.taxon_name_id,
      citation_object_type: 'TaxonName',
      extend: ['source']
    }
  }).then(({ data }) => {
    citations.value = data
  })
})

</script>
