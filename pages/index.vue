<script setup lang="ts">
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp()

onMounted(() => {
  if ($pwa?.offlineReady) alert('App ready to work offline')
})
</script>
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About page</NuxtLink>
  </div>
</template>
