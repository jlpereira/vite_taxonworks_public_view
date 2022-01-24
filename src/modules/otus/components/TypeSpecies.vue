<template>
  <Card class="p-4">
    <CardHeader>
      <h1 class="text-xl">
        Type specimen
      </h1>
    </CardHeader>
    <p>
      <NuxtLink
        class="text-blue-600"
        :to="{
          name: 'otus-id',
          params: { id: data.objective.id }
        }"
      >
        {{ data.objective.name }}
      </NuxtLink>

      {{ data.type }}

      <NuxtLink
        class="text-blue-600"
        :to="{
          name: 'otus-id',
          params: { id: data.objective.id }
        }"
      >
        {{ data.objective.name }}
      </NuxtLink>
    </p>
  </Card>
</template>

<script setup>

const data = {
  objective: {
    id: 1234,
    name: "Dichroplus arrogans (Stal, 1861)",
  },
  subject: {
    id: 1234,
    name: "Dichroplus (Stal, 1873)",
  },
  type: 'Type species by subsequent designation'
}
</script>