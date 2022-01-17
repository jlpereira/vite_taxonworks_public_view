<template>
  <Card>
    <CardContent>
      <h1>Descendants</h1>
      <TreeView :list="taxonList"/>
    </CardContent>
  </Card>
</template>

<script setup>

import TreeView from '@/components/TreeView.vue'

const taxonList = [
  {
    id: 1,
    name: 'Dichroplus',
    children: [
      {
        id: 2,
        name: 'Dichroplus elongatus',
      },
      {
        id: 3,
        name: 'Dichroplus maculipennis',
      }
    ]
  }
]

</script>