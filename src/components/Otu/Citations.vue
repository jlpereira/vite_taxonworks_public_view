<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">Citations</h1>
    </CardHeader>
    <CardContent>
      <ul class="list-disc pl-4 text-sm">
        <li v-for="citation in data">
          <router-link
            class="text-blue-600"
            :to="{
              name: 'otus-id',
              params: { id: 123 }
            }">
            {{ citation.label }}
          </router-link>
        </li>
      </ul>
    </CardContent>
  </Card>
</template>

<script setup>
import CardContent from '../Card/CardContent.vue';

const data = [
  {
    id: 1,
    label: 'Dichroplus Stal, 1873: 73: (valid) Type species by subsequent designation Acridium arrogans Stal, 1861 in resolveTransitionHooks, 1905',
    author: 'Rehn',
    year: 1905
  },
  {
    id: 2,
    label: 'Giglio-Tos, 1894: 20, 21.',
    author: 'Giglio-Tos',
    year: 1894
  },
  {
    id: 3,
    label: 'Bruner, 1900:71',
    author: 'Bruner',
    year: 105
  },
  {
    id: 4,
    label: 'Liebermann, 1939: 206',
    author: 'Liebermann',
    year: 1939
  }
]
</script>