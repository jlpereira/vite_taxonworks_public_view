<template>
  <div class="container mx-auto mt-4 pl-4 pr-4">
    <HomeMarkdown class="prose lg:prose-base max-w-none" />
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