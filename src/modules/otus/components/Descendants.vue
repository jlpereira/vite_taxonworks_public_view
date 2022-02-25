<template>
  <Card>
    <CardHeader>
      <h1 class="text-md">
        Descendants
      </h1>
    </CardHeader>
    <CardContent>
      {{ otuDescendants.label }}
      <SynonymList
        v-if="otuDescendants.nomenclatural_synonyms?.length"
        class="otu-synonyms"
        :list="otuDescendants.nomenclatural_synonyms"
      />
      <TreeView :list="otuDescendants.descendants" />
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue';
import TreeView from '@/components/TreeView.vue'
import SynonymList from '@/components/SynonymList.vue';
import OtuService from '../services/OtuService';

const props = defineProps({
  otuId: {
    type: [String, Number],
    required: true
  }
})

const otuDescendants = ref({})

watch(() => props.otuId, async () => {
  if (!props.otuId) { return }

  OtuService.getDescendants(props.otuId).then(({ data }) => {
    otuDescendants.value = data
  })
}, { immediate: true })

</script>

<style scoped>
  .otu-synonyms {
    list-style: none;
    border-left:1px solid rgb(100,100,100);
    padding-left:8px;
    padding-bottom: 8px;
  }
</style>