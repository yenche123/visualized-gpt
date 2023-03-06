<script setup lang="ts">
import { provide, ref } from 'vue';
import ActionBar from '../action-bar/action-bar.vue';
import LoadingTip from '../loading-tip/loading-tip.vue';
import { iframeSrcDocKey, isLoadingKey } from "~/utils/provide-keys";

const srcDoc = ref("<html></html>")
provide(iframeSrcDocKey, srcDoc)

const isLoading = ref(false)
provide(isLoadingKey, isLoading)

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

  <div v-if="srcDoc.length > 300" class="hw-virtual"></div>

  <LoadingTip></LoadingTip>

  <ActionBar></ActionBar>

</template>

<style scoped>

.hw-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.hw-iframe {
  border: 0;
  background-color: var(--bg-color);
  overflow: hidden;
}

.hw-virtual {
  width: 100%;
  height: 100px;
}

</style>