<template>
  <footer class="container mx-auto">
    <hr>
    <div class="pt-4 pb-4 text-sm">
      {{ VITE_PAGE_PROJECT_AUTHORS }}
      {{ VITE_PAGE_PROJECT_CITATION }}
      <span v-if="VITE_PAGE_PROJECT_URL">
        &lt;
        <a
          class="text-blue-500"
          :href="VITE_PAGE_PROJECT_URL"
        >
          {{ VITE_PAGE_PROJECT_URL }} 
        </a>
        &gt;
      </span>
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