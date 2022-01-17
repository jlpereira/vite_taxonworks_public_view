<template>
  <ul class="tree">
    <li
      v-for="item in props.list"
      class="border-l">
      <span>{{ item.name }}</span>
      <TreeView :list="item.children"/>
    </li>
  </ul>
</template>

<script setup>
import TreeView from '@/components/TreeView.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
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
    padding: 0 7px;
    line-height: 20px;
    color: #369;
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