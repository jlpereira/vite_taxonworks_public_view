<template>
  <div>
    <div class="bg-white border-b pt-6">
      <div 
        class="container mx-auto">
        <div 
          class="
          flex 
          justify-between 
          items-start"
        >
          <Breadcrumb/>
          <Autocomplete
            url="/otus/autocomplete"
            param="term"
            label="label_html"
            @select="loadOtu"
          />
        </div>

        <div class="mt-8 mb-10">
          <TaxaInfo
            :taxon="taxon"
          />
          <OtuExport/>
        </div>

        <TabMenu class="m-[-1px]">
          <TabItem
            v-for="({ name, label }) in tabs"
            :to="{ name }"
          >
            {{ label }}
          </TabItem>
        </TabMenu>
      </div>
    </div>
    <div>
      <div class="container mx-auto pt-4">
        <router-view :key="route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>

import TabMenu from '@/components/Tab/TabMenu.vue'
import TabItem from '@/components/Tab/TabItem.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Autocomplete from '@/components/Autocomplete.vue'
import TaxaInfo from '@/components/Otu/TaxaInfo.vue'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { humanize } from '@/utils/strings'
import { makeRequest } from '@/utils/makeRequest'

const route = useRoute()
const router = useRouter()
const routeParams = ref(route.params)

const childrenRoutes = router.getRoutes().find(route => route.name === 'otus-id')
const tabs = childrenRoutes.children
.filter(({ path }) => path.length)
.map(({ path, name }) => ({
  label: path && humanize(path),
  path,
  name
}))

router.afterEach(route => { routeParams.value = route.params })

const otu = ref({})
const taxon = ref({})

watch(routeParams, (newParams, oldParams) => {

  if (newParams.id == oldParams?.id) { return }

  makeRequest.get(`/otus/${route.params.id}`).then(({ data }) => {
    otu.value = data

    makeRequest.get(`/taxon_names/${data.taxon_name_id}`).then(({ data }) => {
      taxon.value = data
    })
  })
}, { immediate: true })


const loadOtu = ({ id }) => {
  router.push({
    name: 'otus-id-overview',
    params: {
      id
    }
  })
}

</script>
