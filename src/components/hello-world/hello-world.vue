<script setup lang="ts">
import { provide, ref } from 'vue';
import ActionBar from '../action-bar/action-bar.vue';
import { iframeSrcDocKey } from "~/utils/provide-keys";

const srcDoc = ref("<html></html>")
provide(iframeSrcDocKey, srcDoc)

</script>

<template>


  <div class="hw-container">
    <iframe 
      class="hw-iframe"
      :srcdoc="srcDoc"
      width="100%"
      height="100%"
    ></iframe>
  </div>

  <ActionBar></ActionBar>

</template>

<style scoped>

.hw-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hw-iframe {
  border: 0;
  background-color: var(--bg-color);
  overflow: hidden;
}

</style>