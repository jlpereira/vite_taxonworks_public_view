<template>
  <li
    v-if="Object.keys(taxonomy).length"
    :key="taxonomy.otu_id"
  >
    <button-expand
      v-if="!taxonomy.leaf_node"
      v-model="isTreeVisible"
    />
    <router-link 
      class="text-blue-500"
      :to="{ name: 'otus-id', params: { id: taxonomy.otu_id } }"
      v-html="taxonomy.name"
    />
    <SynonymList 
      v-if="taxonomy.nomenclatural_synonyms.length"
      class="pb-4"
      :list="taxonomy.nomenclatural_synonyms"
    />
    <ul
      v-if="descendants.length"
      class="tree"
    >
      <template 
        v-for="item in descendants"
        :key="item.otu_id"
      >
        <TreeView
          v-if="isTreeVisible"
          :taxonomy="item"
        />
      </template>
    </ul>
  </li>
</template>

<script setup>
import TreeView from '@/components/TreeView.vue'
import SynonymList from './SynonymList.vue'
import ButtonExpand from '@/components/Button/ButtonExpand.vue'
import OtuService from '@/modules/otus/services/OtuService';
import { ref, watch } from 'vue'

const props = defineProps({
  taxonomy: {
    type: Object,
    required: true
  },

  level: {
    type: Number,
    default: 1
  }
})

const isTreeVisible = ref(!!props.taxonomy.descendants.length)
const descendants = ref([...props.taxonomy.descendants])

watch(
  isTreeVisible,
  (newVal) => {
    if (newVal) {
      loadDescendants()
    }
  }
)

const loadDescendants = () => {
  if (descendants.value.length) { return }
  OtuService.getDescendants(props.taxonomy.otu_id, { max_descendants_depth: 1 }).then(({ data }) => {
    descendants.value = data.descendants
  })
}

</script>

<style lang="scss" scoped>

.tree {
  list-style: none;
  margin: 0;
  padding: 0;

  ul {
    margin-left: 14px;
  }

  li {
    position: relative;
    margin: 0;
    padding: 0px 7px;
    border-left:1px solid rgb(100,100,100);
  }

  li:last-child {
    border-left:none;
  }

  li:before {
    position:relative;
    top:-0.3em;
    height:1em;
    width:12px;
    color:white;
    border-bottom:1px solid rgb(100,100,100);
    content:"";
    display:inline-block;
    left:-7px;
  }

  li:last-child:before {
    border-left:1px solid rgb(100,100,100);   
  }

  .button-expand {
    position: absolute;
    top: 4px;
    left: -8px;
  }

}

</style>