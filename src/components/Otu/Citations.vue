<template>
  <Card>
    <div class="pl-6 p-4 border-b">
      <h1 class="text-md">Citations</h1>
    </div>
    <div class="pl-6 p-4">
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
    </div>
  </Card>
</template>

<script setup>

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