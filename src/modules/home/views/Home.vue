<template>
  <div class="container mx-auto">
    <Autocomplete
      url="/otus/autocomplete"
      param="term"
      label="label_html"
      @select="loadOtu"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Autocomplete from '@/components/Autocomplete/Autocomplete.vue';

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