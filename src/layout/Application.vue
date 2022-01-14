<template>
  <div>
    <LayoutHeader/>
    <slot/>
    <LayoutFooter/>
  </div>
</template>
<script setup>
import LayoutHeader from '@/components/Layout/LayoutHeader.vue'
import LayoutFooter from '@/components/Layout/LayoutFooter.vue'
</script>