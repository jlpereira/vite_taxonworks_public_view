<template>
  <Card>
    <CardContent>
      <GalleryMain :images="images"/>
    </CardContent>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router';
import { makeRequest } from '../../utils/makeRequest';
import GalleryMain from '@/components/Gallery/Main.vue'
import CardContent from '../Card/CardContent.vue';

const route = useRoute()
const images = ref([])

makeRequest.get('/images.json', {
  params: {
    per: 5,
    otu_id: route.params.id
  }
}).then(({ data }) => {
  images.value = data
})

</script>