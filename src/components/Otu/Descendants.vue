<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">Descendants</h1>
    </CardHeader>
    <CardContent>
      <span>Current name</span>
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
    name: 'Child',
    children: [
      {
        id: 2,
        name: 'Another child',
      },
      {
        id: 3,
        name: 'Another child',
      }
    ]
  },
  {
    id: 1,
    name: 'Child',
    children: [
      {
        id: 2,
        name: 'Another child',
      },
      {
        id: 3,
        name: 'Another child',
      }
    ]
  }
])

</script>