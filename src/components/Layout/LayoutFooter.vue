<template>
  <footer class="container mx-auto">
    <hr>
    <div class="pt-4 pb-4 text-sm">
      {{ VITE_PAGE_PROJECT_AUTHORS }} {{ VITE_PAGE_PROJECT_CITATION }} &lt;{{ VITE_PAGE_PROJECT_URL }}&gt;
    </div>
  </footer>
</template>
<script setup>

const {
  VITE_PAGE_PROJECT_AUTHORS,
  VITE_PAGE_PROJECT_CITATION,
  VITE_PAGE_PROJECT_URL
} = import.meta.env

</script>