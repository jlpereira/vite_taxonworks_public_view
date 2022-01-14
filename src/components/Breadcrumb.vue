<template>
  <ul class="inline-flex items-center space-x-1 flex-wrap">
    <li
      v-for="(item, key, index) in data.parents"
      :key="item.otu_id"
      class="inline-flex items-center"
    >
      <svg
        v-if="index"
        class="w-6 h-6 text-blue-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <a
        class="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        :href="`/otus/${item.otu_id}`"
      >{{ key }}</a>
    </li>

    <li 
      class="inline-flex items-center">
      <svg
        class="w-6 h-6 text-blue-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <span
        class="text-sm"
        v-html="data.current_otu.name"/>
    </li>
  </ul>
</template>

<script setup>
const data = {
  current_otu: {
    id: 94309,
    name: '<i>Dichroplus elongatus</i> Giglio-Tos, 1894'
  },
  parents: {
    Root: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Animalia: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Polyneoptera: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Orthopterida: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Caelifera: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Acrididea: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Acridomorpha: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Acridoidea: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Melanoplinae: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Dichroplini: {
      otu_id: 92563,
      taxon_id: 455472
    },
    Dichroplus: {
      otu_id: 92563,
      taxon_id: 455472
    }
  }
}
</script>