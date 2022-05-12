<template>
  <div class="container mx-auto mt-4">
    <HomeMarkdown class="prose lg:prose-base max-w-none" />
<!--     <Autocomplete
      url="/otus/autocomplete"
      query-param="term"
      label="label_html"
      :params="{ having_taxon_name_only: true }"
      @select="loadOtu"
    /> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Autocomplete from '@/components/Autocomplete/Autocomplete.vue';
import HomeMarkdown from '../content/home.md'

const router = useRouter()

const loadOtu = ({ id }) => {
  router.push({
    name: 'otus-id-overview',
    params: {
      id
    }
  })
}

</script>