<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { initHelpModal } from './index';

const {
  enable,
  show,
  duration,
  onTapMask,
} = initHelpModal()

const { t } = useI18n()


</script>
<template>

  <div class="hm-container" v-if="enable"
    :class="{ 'hm-container_show': show }"
  >

    <div class="hm-box">

      <!-- OpenAI Key -->
      <div class="hm-part">
        <div class="hm-hd">
          <span>OpenAI Key</span>
        </div>
        <div class="hm-desc">
          <span>{{ t('help.openai_key_desc') }}</span>
        </div>

        <input class="hm-input" :placeholder="t('help.openai_key_ph')" />
      </div>

      <!-- Open Source -->
      <div class="hm-part">
        <div class="hm-hd">
          <span>{{ t('help.open_source') }}</span>
        </div>
        <a class="hm-btn" 
          href="https://github.com/yenche123/visualized-gpt"
          target="_blank"
        >
          <svg-icon name="github" :coverFillStroke="false" class="hm-opensource-icon"></svg-icon>
          <div class="hm-btn-text">
            <span>{{ t('help.check_it_out') }}</span>
          </div>
        </a>
      </div>

    </div>
  </div>


</template>
<style scoped>


</style>