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
          <Autocomplete/>
        </div>

        <div class="mt-8 mb-10">
          <TaxaInfo/>
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
        <router-view></router-view>
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
import { useRoute, useRouter } from 'vue-router'
import { humanize } from '@/utils/strings'

const route = useRoute()
const router = useRouter()

const childrenRoutes = router.getRoutes().find(route => route.name === 'otus-id')
const tabs = childrenRoutes.children
.filter(({ path }) => path.length)
.map(({ path, name }) => ({
  label: path && humanize(path),
  path,
  name
}))


/* 
const tabs = [
  {
    label: 'Overview',
    link: 'otus-id-overview'
  },
  {
    label: 'Distribution',
    link: 'otus-id-distribution'
  }
/*   {
    label: 'Timeline',
    link: 'otus-id-timeline'
  },
  {
    label: 'Descendants',
    link: 'otus-id-descendants'
  },
  {
    label: 'Images',
    link: 'otus-id-images'
  },
  {
    label: 'Type specimens',
    link: 'otus-id-type_specimens'
  },
  {
    label: 'Specimen records',
    link: 'otus-id-specimen_records'
  },
  {
    label: 'Content',
    link: 'otus-id-content'
  },
  {
    label: 'Annotations',
    link: 'otus-id-annotations'
  },
] */

</script>
