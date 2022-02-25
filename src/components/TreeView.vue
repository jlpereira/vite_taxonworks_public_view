<template>
  <ul class="tree">
    <li
      v-for="item in props.list"
      :key="item.otu_id"
    >
      <router-link 
        class="text-blue-500"
        :to="{ name: 'otus-id', params: { id: item.otu_id } }"
      >
        {{ item.label }}
      </router-link>
      <SynonymList 
        v-if="item.nomenclatural_synonyms.length"
        class="pb-4"
        :list="item.nomenclatural_synonyms"
      />
      <TreeView
        v-if="item.descendants"
        :list="item.descendants"
      />
    </li>
  </ul>
</template>

<script setup>
import TreeView from '@/components/TreeView.vue'
import SynonymList from './SynonymList.vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
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
}

</style>