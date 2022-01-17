<template>
  <div>
    <h2 class="text-1xl text-gray-700 capitalize">{{ taxon.rank }}</h2>
    <h1 class="text-2xl">{{ taxon.name_string }}</h1>
    <h2 class="text-1xl text-gray-700">[Here goes common name]</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { makeRequest } from '@/utils/makeRequest'

const route = useRoute()
const otu = ref({})
const taxon = ref({})

makeRequest.get(`/otus/${route.params.id}`).then(({ data }) => {
  otu.value = data

  makeRequest.get(`/taxon_names/${data.taxon_name_id}`).then(({ data }) => {
    taxon.value = data
  })
})
</script>