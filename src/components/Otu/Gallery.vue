<template>
  <Card class="p-4">
    <GalleryMain :images="images"/>
  </Card>
</template>

<script setup>

/* const config = useRuntimeConfig()

const { data: images } = useFetch(`${config.API_HOST}/images.json`, {
  params: {
    project_token: config.PROJECT_TOKEN,
    per: 5
  }
}) */
</script>