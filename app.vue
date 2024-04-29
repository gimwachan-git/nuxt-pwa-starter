<template>
  <NuxtPwaManifest />
  <NuxtPage />
</template>
<style>
.page-enter-active,
.page-leave-active {
  opacity: 1;
  transition:
    opacity 350ms,
    transform 350ms;
}
.page-enter-from {
  transform: translateX(5%);
}
.page-leave-to {
  transform: translateX(-5%);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
