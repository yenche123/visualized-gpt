<script setup lang="ts">
import { initHelpModal } from './index';

const {
  enable,
  show,
  duration,
  onTapMask,
} = initHelpModal()


</script>
<template>

  <div class="hm-container" v-if="enable"
    :class="{ 'hm-container_show': show }"
  >

    <div class="hm-box">


    </div>
  </div>


</template>
<style scoped>


</style>