<script setup lang="ts">
import HelloWorld from './components/hello-world/hello-world.vue';
import { useApp } from './utils/useApp';

console.log(`Welcome to visualized-gpt ${VG_ENV.version}`)

useApp()

</script>

<template>

  <HelloWorld></HelloWorld>

</template>

<style scoped>

</style>
