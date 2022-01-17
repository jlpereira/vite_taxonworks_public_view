<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">Descendants</h1>
    </CardHeader>
    <CardContent>
      <span>Dichroplus elongatus</span>
      <TreeView :list="taxonList"/>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import TreeView from '@/components/TreeView.vue'

const taxonList = ref([
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
  },
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
])

</script>