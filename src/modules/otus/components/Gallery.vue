<template>
  <Card>
    <CardContent>
      <GalleryMain :images="images" />
    </CardContent>
  </Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import GalleryMain from '@/components/Gallery/Main.vue'
import OtuService from '../services/OtuService';

const props = defineProps({
  otuId: {
    type: [String, Number],
    required: true
  }
})

const images = ref([])

watch(() => props.otuId, async () => {
  if (!props.otuId) { return }

  images.value = (await OtuService.getOtuImages(props.otuId)).data
})

</script>
