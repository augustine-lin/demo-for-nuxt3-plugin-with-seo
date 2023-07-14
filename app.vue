<template>
  <div>
    Hi, I'm a Vue app!
  </div>
</template>
<script setup>

const { $bookAPI } = useNuxtApp()

const normalyGetData = async () => {
  const res = await $bookAPI.getBooks()
  console.log('normalyGetData')
  console.log(res)
}

const initSEOData = async () => {
  const { data, pending, error, refresh } = await useAsyncData(
    'mountains',
    () => $bookAPI.getBooks()
  )
  console.log(data.value['hydra:member'][0])
  const title = data.value['hydra:member'][0].title
  const description = data.value['hydra:member'][0].description

  useSeoMeta({
    title: () => title ? title : 'No title',
    description: () => description ? description : 'No description',
  })
}

initSEOData()



</script>
