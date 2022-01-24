<template>
  <div class="hidden relative mr-3 md:mr-0 md:block">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg
        class="w-5 h-5 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <input
      v-model="typed"
      type="text"
      class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
      :placeholder="placeholder"
    >

    <ul
      v-if="list.length"
      class="list absolute z-[500] max-h-52 overflow-y-auto border"
    >
      <li
        v-for="item in list"
        class="p-2 border-b bg-white text-sm cursor-pointer hover:bg-gray-200"
        @click="emit('select', item)"
      >
        <span v-html="item[label]" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { makeAPIRequest } from '@/utils/request'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Search...'
  },

  url: {
    type: String,
    required: true
  },

  param: {
    type: String,
    default: 'term'
  },

  label: {
    type: String,
    default: 'label'
  }
})

const emit = defineEmits(['select'])
const typed = ref('')
const list = ref([])

const delay = 1000
let timeout

watch(typed, newVal => {
  clearTimeout(timeout)

  if (newVal.length) {
    timeout = setTimeout(() => {
      makeAPIRequest.get(props.url, {
        params: {
          [props.param]: typed.value
        }
      }).then(({ data }) => {
        list.value = data
      })
    }, delay)
  } else {
    list.value = []
  }
})


</script>