<template>
  <div>
    <div class="bg-white border-b pt-6">
      <div 
        class="container mx-auto"
      >
        <div 
          class="
            flex 
            justify-between 
            items-start"
        >
          <Breadcrumb 
            :list="otu.parents"
            :current="taxon"
          />
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
        </div>

        <TabMenu class="m-[-1px]">
          <TabItem
            v-for="({ name, label }) in tabs"
            :key="name"
            :to="{ name }"
          >
            {{ label }}
          </TabItem>
        </TabMenu>
      </div>
    </div>
    <div>
      <div class="container mx-auto pt-4">
        <router-view
          :key="route.fullPath"
          :taxon-id="taxon.id"
          :otu-id="otu.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TabMenu from '@/components/Tab/TabMenu.vue'
import TabItem from '@/components/Tab/TabItem.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Autocomplete from '@/components/Autocomplete.vue'
import TaxaInfo from '@/modules/otus/components/TaxaInfo.vue'
import useChildrenRoutes from '../composables/useChildrenRoutes'
import OtuService from '../services/OtuService'

const route = useRoute()
const router = useRouter()
const routeParams = ref(route.params)
const tabs = useChildrenRoutes()

router.afterEach(route => { routeParams.value = route.params })

const otu = ref({})
const taxon = ref({})

watch(routeParams, async (newParams, oldParams) => {

  if (newParams.id == oldParams?.id) { return }

  otu.value = (await OtuService.getOtu(route.params.id)).data
  taxon.value = (await OtuService.getTaxon(otu.value.taxon_name_id)).data

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
